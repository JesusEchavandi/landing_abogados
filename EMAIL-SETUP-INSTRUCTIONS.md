# 📧 Configuración del Sistema de Correo Electrónico

## ✅ Sistema Implementado

El formulario de contacto ahora está completamente funcional y enviará correos electrónicos reales usando **Resend**.

---

## 🚀 Pasos para Activar el Envío de Correos

### 1️⃣ Crear Cuenta en Resend

1. Ve a [https://resend.com](https://resend.com)
2. Crea una cuenta gratuita (incluye 100 emails/día gratis, 3,000/mes)
3. Verifica tu email

### 2️⃣ Obtener tu API Key

1. Inicia sesión en Resend
2. Ve a **API Keys** en el menú lateral
3. Haz clic en **"Create API Key"**
4. Dale un nombre (ej: "Legal Studio Production")
5. Selecciona permisos: **"Sending access"**
6. Copia la API Key (solo se muestra una vez)

### 3️⃣ Configurar Variables de Entorno

Abre el archivo `.env.local` y actualiza:

```env
# Pega tu API Key de Resend aquí
RESEND_API_KEY=re_123456789_tu_api_key_aqui

# Email donde recibirás las consultas
CONTACT_EMAIL=tu-email@estudio.com
```

### 4️⃣ (Opcional pero Recomendado) Verificar tu Dominio

Para enviar desde tu propio dominio (ej: `contacto@tuestudio.com`) en lugar de `onboarding@resend.dev`:

1. En Resend, ve a **Domains**
2. Haz clic en **"Add Domain"**
3. Ingresa tu dominio (ej: `tuestudio.com`)
4. Sigue las instrucciones para agregar registros DNS
5. Una vez verificado, actualiza la línea en `src/app/api/contact/route.ts`:

```typescript
from: 'Legal Studio <contacto@tuestudio.com>', // Usa tu dominio verificado
```

---

## 🧪 Probar el Sistema

### Desarrollo Local

1. Reinicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Abre http://localhost:3000
3. Navega a la sección de contacto (al final de la página)
4. Llena el formulario y envía
5. Deberías recibir el email en el correo configurado en `CONTACT_EMAIL`

### Verificar en Logs de Resend

1. Ve a **Logs** en tu panel de Resend
2. Verás todos los emails enviados con su estado
3. Puedes ver el contenido HTML del email

---

## 📋 ¿Qué Información Recibe el Email?

El correo que recibes incluye:

- ✅ Nombre completo del cliente
- ✅ Email (con link para responder directamente)
- ✅ Teléfono (con link para llamar)
- ✅ Área de consulta (Corporativo, Litigios, etc.)
- ✅ Mensaje completo
- ✅ Fecha y hora de la consulta
- ✅ Formato HTML elegante con colores del estudio

---

## 🎨 Características del Email

- **Diseño profesional** con colores del estudio (#0A1628, #D4AF37)
- **Responsive** - se ve bien en móvil y desktop
- **Reply-To automático** - responde directamente al cliente
- **Links clickeables** - email y teléfono son clickeables
- **Badge del área** - muestra visualmente el tipo de consulta

---

## 🔒 Seguridad

- ✅ Variables de entorno protegidas (no se suben a Git)
- ✅ Validación con Zod en backend
- ✅ Rate limiting (opcional - ver abajo)
- ✅ Sanitización de datos

### (Opcional) Agregar Rate Limiting

Para evitar spam, puedes agregar:

```bash
npm install @upstash/ratelimit @upstash/redis
```

Y modificar `route.ts` para limitar a X emails por IP por hora.

---

## 💰 Precios de Resend

### Plan Gratuito
- 3,000 emails/mes
- 100 emails/día
- Perfecto para empezar

### Plan Pro ($20/mes)
- 50,000 emails/mes
- Sin límite diario
- Soporte prioritario

---

## 🐛 Solución de Problemas

### "Error al enviar el correo"

**Causa:** API Key inválida o no configurada

**Solución:**
1. Verifica que `.env.local` existe
2. Verifica que `RESEND_API_KEY` esté correctamente copiada
3. Reinicia el servidor de desarrollo

### "El correo no llega"

**Verifica:**
1. Revisa la bandeja de SPAM
2. Verifica `CONTACT_EMAIL` en `.env.local`
3. Revisa los logs en panel de Resend

### "Email viene de onboarding@resend.dev"

**Solución:** Necesitas verificar tu dominio en Resend (ver paso 4 arriba)

---

## 📞 Soporte

Si necesitas ayuda adicional:
- 📖 Documentación Resend: https://resend.com/docs
- 💬 Discord de Resend: https://resend.com/discord
- 🎫 Soporte: support@resend.com

---

## ✅ Checklist Final

Antes de poner en producción:

- [ ] API Key de Resend configurada
- [ ] Email de contacto configurado
- [ ] Formulario probado en desarrollo
- [ ] Email recibido correctamente
- [ ] Variables de entorno en producción (Vercel/Netlify)
- [ ] (Opcional) Dominio verificado en Resend
- [ ] (Opcional) Rate limiting configurado

---

**¡Listo! Tu formulario ahora está completamente funcional.** 🎉
