# 🧪 Guía de Pruebas - Mejoras UX/UI

## 🌐 **Acceso al Proyecto**

**URL Local:** http://localhost:3000

---

## ✅ **Checklist de Pruebas**

### 1️⃣ **Navegación Responsive** 📱

**Desktop:**
- [ ] El navbar muestra todos los enlaces horizontalmente
- [ ] Al hacer scroll, el navbar cambia de estilo (background blur)
- [ ] Los enlaces se iluminan al pasar el mouse
- [ ] El indicador de sección activa se mueve al hacer scroll

**Mobile (reducir ventana < 768px):**
- [ ] Aparece el icono de menú hamburguesa (☰)
- [ ] Al hacer clic, se abre el menú con animación suave
- [ ] Los enlaces están apilados verticalmente
- [ ] Al hacer clic en un enlace, el menú se cierra automáticamente
- [ ] El botón CTA se muestra correctamente

---

### 2️⃣ **Sistema de Notificaciones Toast** 🔔

**Pruebas:**
1. **Formulario de Contacto:**
   - [ ] Ir a la sección "Contacto"
   - [ ] Llenar el formulario con datos válidos
   - [ ] Hacer clic en "Enviar Consulta"
   - [ ] Debe aparecer un Toast de éxito (verde) en la esquina superior derecha
   - [ ] El Toast desaparece automáticamente después de 5 segundos
   - [ ] Puedes cerrarlo manualmente con la X

2. **Validación de Formulario:**
   - [ ] Intentar enviar el formulario vacío
   - [ ] Deben aparecer mensajes de error en rojo debajo de cada campo
   - [ ] Los campos con error tienen borde rojo

3. **Portal de Cliente:**
   - [ ] Ir a "Portal de Cliente"
   - [ ] Hacer clic en "Acceder al Portal"
   - [ ] Debe aparecer un Toast informativo (azul) indicando que está en desarrollo

---

### 3️⃣ **Formularios Mejorados** 📝

**Validación en Tiempo Real:**
- [ ] Escribir en el campo "Nombre" (mínimo 2 caracteres)
- [ ] Escribir un email inválido → debe mostrar error
- [ ] Corregir el email → el error desaparece
- [ ] El campo de teléfono acepta solo números
- [ ] El campo de mensaje tiene contador de caracteres

**Feedback Visual:**
- [ ] Los campos tienen borde dorado al hacer focus
- [ ] Los campos válidos muestran checkmark (✓) verde
- [ ] Los campos inválidos muestran cruz (✗) roja
- [ ] El botón de envío se deshabilita mientras está enviando
- [ ] Muestra spinner durante el envío
- [ ] Cambia a "¡Enviado!" con checkmark cuando termina

---

### 4️⃣ **CTAs Flotantes** 🎯

**FloatingCTA:**
- [ ] Al hacer scroll hacia abajo, aparece un CTA flotante en la parte inferior
- [ ] Muestra "Solo 3 espacios disponibles esta semana" (urgencia)
- [ ] Tiene animación de pulse sutil
- [ ] Al hacer clic, desplaza a la sección de contacto
- [ ] Puedes cerrarlo con la X
- [ ] No vuelve a aparecer en esta sesión (localStorage)

**TrustBanner:**
- [ ] En la sección de testimonios, hay un banner de confianza
- [ ] Muestra estadísticas en tiempo real
- [ ] Tiene efecto de brillo/shimmer
- [ ] Es responsive en móvil

---

### 5️⃣ **Portal de Cliente Mejorado** 👤

**Funcionalidades:**
- [ ] Tiene pestañas para "Iniciar Sesión" y "Registrarse"
- [ ] El cambio entre pestañas tiene animación suave
- [ ] El formulario de login tiene:
  - Campo de email/caso
  - Campo de contraseña con botón para mostrar/ocultar
  - Checkbox "Recordarme"
  - Link "¿Olvidaste tu contraseña?"
- [ ] El formulario de registro tiene campos adicionales
- [ ] Los iconos cambian según la acción

---

### 6️⃣ **Micro-interacciones** ✨

**Animaciones Sutiles:**
- [ ] Los botones tienen efecto hover con escala
- [ ] Las tarjetas de servicios se elevan al pasar el mouse
- [ ] Los íconos rotan o se animan al hover
- [ ] Las imágenes del equipo tienen zoom suave
- [ ] Los testimonios tienen efecto de slide

**Transiciones:**
- [ ] Todas las secciones aparecen con fade-in al hacer scroll
- [ ] Los elementos se animan de abajo hacia arriba
- [ ] El scroll es suave entre secciones

---

### 7️⃣ **Skeleton Loaders** 💀

**Prueba (simular carga lenta):**
1. Abrir DevTools (F12)
2. Ir a Network → Throttling → Slow 3G
3. Recargar la página
4. Deberías ver:
   - [ ] Placeholders animados en lugar de contenido
   - [ ] Efecto de shimmer/pulse
   - [ ] Transición suave cuando carga el contenido real

---

### 8️⃣ **WhatsApp Button Mejorado** 💬

**Funcionalidades:**
- [ ] Está fijo en la esquina inferior derecha
- [ ] Tiene animación de bounce al cargar
- [ ] Muestra tooltip "¿Necesitas ayuda?" al pasar el mouse
- [ ] Al hacer clic, abre WhatsApp con mensaje pre-llenado
- [ ] Tiene badge de "online" o "disponible"

---

### 9️⃣ **Accesibilidad** ♿

**Navegación por Teclado:**
- [ ] Presionar TAB navega por todos los elementos interactivos
- [ ] Los elementos en focus tienen outline visible
- [ ] Puedes abrir el menú móvil con ENTER/SPACE
- [ ] Los formularios se pueden completar solo con teclado
- [ ] ESC cierra modales y menús

**Lectores de Pantalla:**
- [ ] Todos los botones tienen aria-label descriptivo
- [ ] Las imágenes tienen alt text
- [ ] Los links tienen descripción clara
- [ ] Los estados (loading, error, success) se anuncian

---

### 🔟 **Performance** ⚡

**Lazy Loading:**
- [ ] Las imágenes se cargan solo cuando están visibles
- [ ] Los componentes pesados se cargan bajo demanda
- [ ] La página inicial carga rápido

**Optimizaciones:**
- [ ] Smooth scroll funciona correctamente
- [ ] No hay lag al hacer scroll
- [ ] Las animaciones son fluidas (60fps)
- [ ] No hay parpadeos o saltos de contenido

---

## 🎨 **Pruebas de Diseño**

### Responsive Design:
- [ ] **Desktop (> 1024px):** Layout completo de 3 columnas
- [ ] **Tablet (768-1023px):** Layout de 2 columnas
- [ ] **Mobile (< 768px):** Layout de 1 columna apilada
- [ ] No hay scroll horizontal en ningún dispositivo
- [ ] Los textos son legibles en todos los tamaños

### Consistencia Visual:
- [ ] La paleta de colores es coherente (navy + gold)
- [ ] Los espaciados son uniformes
- [ ] La tipografía es consistente
- [ ] Los bordes redondeados son uniformes

---

## 🐛 **Problemas Conocidos a Verificar**

1. **LocalStorage:**
   - [ ] Abrir DevTools → Application → Local Storage
   - [ ] Verificar que se guardan preferencias
   - [ ] Limpiar storage y verificar que funciona sin errores

2. **Console Errors:**
   - [ ] Abrir DevTools → Console
   - [ ] No debe haber errores en rojo
   - [ ] Warnings esperados: Turbopack root (no afecta funcionalidad)

3. **Network:**
   - [ ] Las imágenes cargan correctamente
   - [ ] No hay 404s o recursos faltantes

---

## 📊 **Métricas de Éxito**

**UX Score:**
- ✅ **Tiempo de primera interacción:** < 2 segundos
- ✅ **Feedback visual inmediato:** < 100ms
- ✅ **Navegación intuitiva:** Sin confusión
- ✅ **Conversión optimizada:** CTAs claros y visibles

**Checklist Final:**
- [ ] Todas las funcionalidades principales funcionan
- [ ] No hay errores críticos en consola
- [ ] La experiencia móvil es fluida
- [ ] Los formularios validan correctamente
- [ ] Las notificaciones aparecen cuando corresponde
- [ ] El diseño es consistente y profesional

---

## 🚀 **Próximos Pasos Después de Probar**

Una vez completadas las pruebas:

1. **Reportar cualquier bug encontrado**
2. **Sugerir ajustes de diseño si es necesario**
3. **Decidir si proceder a producción**
4. **Configurar analytics para medir conversiones**

---

## 💡 **Tips para Pruebas Efectivas**

- Prueba en diferentes navegadores (Chrome, Firefox, Safari)
- Usa las DevTools para simular diferentes dispositivos
- Prueba con conexión lenta para ver estados de carga
- Intenta romper el formulario con datos inválidos
- Navega como lo haría un usuario real

---

**¿Todo funciona correctamente? ¡Felicidades! 🎉**
**¿Encontraste algún problema? Repórtalo para corregirlo de inmediato.**
