// This is a React Email template that can be used with Resend
// You can use this for better email templates in the future

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  consultType: string;
  message: string;
}

export const ContactEmailTemplate = ({
  name,
  email,
  phone,
  consultType,
  message,
}: EmailTemplateProps) => {
  return (
    <div>
      <h1>Nueva Consulta Legal de {name}</h1>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Teléfono:</strong> {phone}</p>
      <p><strong>Área:</strong> {consultType}</p>
      <p><strong>Mensaje:</strong></p>
      <p>{message}</p>
    </div>
  );
};
