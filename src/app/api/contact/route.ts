import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Teléfono inválido'),
  consultType: z.string().min(1, 'Selecciona un área'),
  message: z.string().min(10, 'Mensaje debe tener al menos 10 caracteres'),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const { name, email, phone, consultType, message } = validatedData;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Legal Studio <onboarding@resend.dev>', // Replace with your verified domain
      to: [process.env.CONTACT_EMAIL || 'contacto@estudio.com'], // Your law firm email
      replyTo: email, // Client's email for easy reply
      subject: `Nueva Consulta: ${consultType} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #0A1628 0%, #1E2936 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                color: #D4AF37;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-left: 4px solid #D4AF37;
                border-radius: 5px;
              }
              .field-label {
                font-weight: bold;
                color: #0A1628;
                margin-bottom: 5px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 1px;
              }
              .field-value {
                color: #333;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 5px;
                border: 1px solid #e0e0e0;
                margin-top: 10px;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #e0e0e0;
                color: #666;
                font-size: 14px;
              }
              .badge {
                display: inline-block;
                background: #D4AF37;
                color: white;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>⚖️ Nueva Consulta Legal</h1>
              <div class="badge">${consultType.toUpperCase()}</div>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="field-label">👤 Nombre del Cliente</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📧 Email</div>
                <div class="field-value">
                  <a href="mailto:${email}" style="color: #D4AF37; text-decoration: none;">${email}</a>
                </div>
              </div>
              
              <div class="field">
                <div class="field-label">📞 Teléfono</div>
                <div class="field-value">
                  <a href="tel:${phone}" style="color: #D4AF37; text-decoration: none;">${phone}</a>
                </div>
              </div>
              
              <div class="field">
                <div class="field-label">⚖️ Área de Consulta</div>
                <div class="field-value">${consultType}</div>
              </div>
              
              <div class="field">
                <div class="field-label">💬 Mensaje</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="footer">
                <p><strong>Recibido el:</strong> ${new Date().toLocaleString('es-PE', { 
                  timeZone: 'America/Lima',
                  dateStyle: 'full',
                  timeStyle: 'short'
                })}</p>
                <p style="color: #999; font-size: 12px;">
                  Este correo fue enviado desde el formulario de contacto de tu sitio web.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Error al enviar el correo', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Correo enviado exitosamente',
        id: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
