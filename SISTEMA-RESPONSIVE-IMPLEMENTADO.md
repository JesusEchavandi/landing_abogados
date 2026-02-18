# Sistema Responsive Mobile-First - Legal Studio

## 📱 Implementación Completada

Se ha implementado un sistema de diseño responsive completo con enfoque **mobile-first** utilizando los siguientes valores de breakpoints:

### Breakpoints Definidos

```css
--breakpoint-xs: 320px;   /* Móviles pequeños */
--breakpoint-sm: 480px;   /* Móviles estándar: 480px - 640px */
--breakpoint-md: 768px;   /* Tabletas: 768px - 1024px */
--breakpoint-lg: 1024px;  /* Ordenadores portátiles: 1024px */
--breakpoint-xl: 1280px;  /* Escritorio: 1280px o más */
--breakpoint-2xl: 1536px; /* Escritorio grande */
```

## 🎨 Sistema de Diseño

### 1. Variables CSS Custom Properties (`globals.css`)

#### Spacing Scale (rem - unidades relativas)
```css
--spacing-xs: 0.25rem;    /* 4px */
--spacing-sm: 0.5rem;     /* 8px */
--spacing-md: 1rem;       /* 16px */
--spacing-lg: 1.5rem;     /* 24px */
--spacing-xl: 2rem;       /* 32px */
--spacing-2xl: 3rem;      /* 48px */
--spacing-3xl: 4rem;      /* 64px */
--spacing-4xl: 6rem;      /* 96px */
```

#### Container Max-Widths
```css
--container-xs: 100%;
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

### 2. Font Sizing Responsivo (Mobile-First)

```css
/* Base: 14px para móviles pequeños (320px) */
html { font-size: 14px; }

/* 480px+ (móviles estándar) */
@media (min-width: 480px) { 
  html { font-size: 15px; } 
}

/* 768px+ (tabletas) */
@media (min-width: 768px) { 
  html { font-size: 16px; } 
}

/* 1536px+ (escritorio grande) */
@media (min-width: 1536px) { 
  html { font-size: 18px; } 
}
```

## 🛠️ Utility Classes Creadas

### Container Responsive
```css
.container-responsive
/* Padding adaptativo:
   - Móvil: 1rem
   - SM: 1.5rem
   - MD+: 2rem
   - Max-width adaptativo según breakpoint
*/
```

### Text Sizes Responsive
```css
.text-responsive-xs      /* 12px base */
.text-responsive-sm      /* 14px base */
.text-responsive-base    /* 16px base */
.text-responsive-lg      /* 18px base */
.text-responsive-xl      /* 20px base */
.text-responsive-2xl     /* 24px → 30px en MD */
.text-responsive-3xl     /* 30px → 36px en MD */
.text-responsive-4xl     /* 36px → 48px en MD → 60px en LG */
```

### Spacing Section Mobile
```css
.spacing-section-mobile
/* Padding vertical:
   - Móvil: 3rem (48px)
   - MD: 4rem (64px)
   - LG: 6rem (96px)
*/
```

### Grid Responsive
```css
.grid-responsive-1       /* 1 columna siempre */
.grid-responsive-2       /* 1 → 2 columnas en MD */
.grid-responsive-3       /* 1 → 2 en MD → 3 en LG */
.grid-responsive-4       /* 1 → 2 en MD → 3 en LG → 4 en XL */
```

### Flex Helpers
```css
.flex-mobile-col
/* Flex direction:
   - Móvil: column
   - MD+: row
*/
```

### Hide/Show Utilities
```css
.hide-on-mobile    /* Oculto en móvil, visible en MD+ */
.show-on-mobile    /* Visible en móvil, oculto en MD+ */
```

### Touch-Friendly Targets
```css
.tap-target
/* Mínimo 44px × 44px para accesibilidad táctil */
```

### Aspect Ratios
```css
.aspect-video      /* 16:9 */
.aspect-square     /* 1:1 */
```

### Safe Area (para notch en móviles)
```css
.safe-area-inset
/* Respeta las áreas seguras de dispositivos con notch */
```

## 📦 Componentes Actualizados

### ✅ Layout Components
- **Navbar** - Menú responsive con hamburger menu
- **Footer** - Grid adaptativo multi-columna

### ✅ Hero Section
- **HeroSection** - Altura dinámica con `100dvh`
- **GlassCard** - Tipografía y padding responsive
- **FloatingElements** - Elementos decorativos adaptativos

### ✅ Sections
- **PracticeAreas** - Grid asimétrico responsive
- **ContactForm** - Formulario en 2 columnas adaptativo
- **LegalTeam** - Grid de equipo responsive
- **Testimonials** - Slider con controles táctiles
- **BlogSection** - Cards adaptativas
- **SuccessCases** - Grid responsive de casos

### ✅ UI Components
- **WhatsAppButton** - Posicionamiento y tamaño responsive
- **FloatingCTA** - Adaptativo con safe-area
- **Toast/Notifications** - Tamaño y posición responsive

## 🎯 Características Implementadas

### 1. Mobile-First Approach
- Estilos base para móviles pequeños (320px)
- Media queries usando `min-width` para escalado progresivo
- Optimización de rendimiento en dispositivos móviles

### 2. Unidades Relativas
- **rem** - Para tamaños de fuente y spacing (relativo a root)
- **em** - Para padding/margin relativo al elemento
- **%** - Para anchos fluidos
- **vw/vh** - Para elementos que escalan con viewport
- **clamp()** - Para valores fluidos con límites

### 3. Performance Móvil
```css
/* Mejoras aplicadas */
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
overflow-x: hidden;
min-height: 100dvh; /* Dynamic viewport height */
```

### 4. Imágenes Responsive
```css
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  height: auto;
}
```

### 5. Prevención de Zoom iOS
```css
-webkit-text-size-adjust: 100%;
text-size-adjust: 100%;
```

### 6. Box-Sizing Universal
```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

## 📊 Ejemplos de Uso

### Componente con Spacing Responsive
```tsx
<section className="spacing-section-mobile">
  <div className="container-responsive max-w-7xl">
    <h2 className="text-responsive-4xl mb-4 sm:mb-6">
      Título
    </h2>
  </div>
</section>
```

### Grid Responsive
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
  {items.map(item => <Card key={item.id} />)}
</div>
```

### Tipografía Adaptativa con clamp()
```tsx
<h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
  Título Fluido
</h1>
```

### Padding Responsive
```tsx
<div className="p-4 sm:p-6 md:p-8 lg:p-12">
  Contenido
</div>
```

### Touch Targets
```tsx
<button className="tap-target px-6 py-3">
  Botón Touch-Friendly
</button>
```

## 🔧 Tailwind CSS Integration

El sistema usa Tailwind CSS v4 con breakpoints personalizados:

```css
/* Tailwind Breakpoints (por defecto) */
sm: 640px   → usamos 480px custom
md: 768px   ✓
lg: 1024px  ✓
xl: 1280px  ✓
2xl: 1536px ✓
```

## 📱 Testing Checklist

### Dispositivos de Prueba
- [ ] iPhone SE (320px - 375px)
- [ ] iPhone 12/13 (390px)
- [ ] iPhone 14 Pro Max (430px)
- [ ] Android pequeño (360px)
- [ ] Tablet portrait (768px)
- [ ] Tablet landscape (1024px)
- [ ] Laptop (1366px)
- [ ] Desktop (1920px)

### Aspectos a Verificar
- [ ] Texto legible sin zoom en todos los tamaños
- [ ] Botones táctiles mínimo 44×44px
- [ ] Sin scroll horizontal
- [ ] Imágenes escaladas correctamente
- [ ] Formularios usables en móvil
- [ ] Navegación accesible
- [ ] Performance en 3G/4G

## 🚀 Próximos Pasos Recomendados

1. **Testing Real**
   - Probar en dispositivos físicos
   - Usar Chrome DevTools device emulation
   - Verificar en Safari iOS

2. **Performance**
   - Lazy loading de imágenes
   - Code splitting por ruta
   - Optimizar bundle size

3. **Accesibilidad**
   - Verificar contraste de colores
   - Navegación por teclado
   - Screen reader testing

4. **PWA Features**
   - Service Worker
   - Offline support
   - Install prompt

## 📚 Recursos y Referencias

- [CSS clamp() calculator](https://clamp.font-size.app/)
- [Responsive breakpoints](https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/)
- [Touch target sizes](https://web.dev/accessible-tap-targets/)
- [Mobile-first design](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first)

---

**Implementado por:** Rovo Dev  
**Fecha:** 2026-02-18  
**Versión:** 1.0.0
