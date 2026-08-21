# Vigilancia Nutricional - PWA

Aplicación Progressive Web App para monitoreo de estado nutricional con curvas de crecimiento OMS.

## Archivos incluidos

```
📦 vigilancia-nutricional-pwa
├── 📄 index.html              ← Aplicación principal
├── 📄 manifest.json           ← Configuración PWA
├── 📄 service-worker.js       ← Funcionalidad offline
├── 🖼️  icon-192.png           ← Icono pequeño (crear)
├── 🖼️  icon-512.png           ← Icono grande (crear)
└── 📖 README.md               ← Este archivo
```

## ⚙️ Configuración en GitHub Pages

### 1. Crear repositorio

```bash
git init
git add .
git commit -m "Initial commit: PWA Vigilancia Nutricional"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/vigilancia-nutricional.git
git push -u origin main
```

### 2. Habilitar GitHub Pages

En tu repositorio:
1. Ve a **Settings** → **Pages**
2. Selecciona **Source**: `Deploy from branch`
3. Selecciona rama: `main` y carpeta `/root`
4. Guarda

Tu app estará en: `https://TU_USUARIO.github.io/vigilancia-nutricional`

## 🖼️ Crear los iconos

Necesitas dos archivos PNG:
- **icon-192.png** (192×192 px)
- **icon-512.png** (512×512 px)

### Opción 1: Usando GIMP o Photoshop

1. Crear una imagen de 512×512 px
2. Diseñar tu icono (fondo verde #0a5d4d recomendado)
3. Exportar como PNG
4. Crear versión 192×192 px del mismo icono
5. Guardar ambos en la raíz del repositorio

### Opción 2: Usar ImageMagick (línea de comandos)

```bash
# Desde una imagen original grande (ej: icon-original.png)
convert icon-original.png -resize 192x192 icon-192.png
convert icon-original.png -resize 512x512 icon-512.png
```

### Opción 3: Generador online

- https://www.favicon-generator.org/
- https://realfavicongenerator.net/

Nota: Los iconos deben tener un fondo sólido para verse bien en la pantalla de inicio.

## 📱 Cómo instalar (usuarios)

### En Android (Chrome)
1. Abre la app en el navegador
2. Verás un banner en la parte inferior: "Instala la aplicación"
3. Toca **Instalar**
4. Se agregará un icono a tu pantalla de inicio
5. El banner no volverá a aparecer

### En iOS (Safari - iOS 16.4+)
1. Abre la app en Safari
2. Toca el botón **Compartir** (↑)
3. Busca "Agregar a la pantalla de inicio"
4. Toca y confirma

### En desktop (Chrome)
1. Abre la app
2. Haz clic en el icono de instalación (arriba a la derecha de la barra de direcciones)
3. Confirma

## ✨ Características del banner

- ✅ Solo aparece si NO está instalada
- ✅ Se oculta automáticamente después de instalar
- ✅ Animación suave de entrada
- ✅ Icono animado
- ✅ Botones claros (Instalar / Descartar)
- ✅ Responsivo en móviles y desktop

## 🔧 Personalización

### Cambiar colores

En `manifest.json`:
```json
"theme_color": "#0a5d4d",      ← Color principal
"background_color": "#ffffff"  ← Fondo de la app
```

En `index.html` (variables CSS):
```css
--primary: #0a5d4d;            ← Verde principal
--primary-dark: #084c41;       ← Verde oscuro
```

### Cambiar nombre o descripción

En `manifest.json`:
```json
"name": "Vigilancia Nutricional",
"short_name": "Vigilancia Nutricional",
"description": "Tu descripción aquí"
```

En `index.html` (etiqueta meta):
```html
<meta name="description" content="Tu descripción aquí">
```

## 📊 Funcionalidades PWA

- ✅ **Instalable**: Aparece en pantalla de inicio como app nativa
- ✅ **Offline**: Funciona sin conexión (datos en localStorage)
- ✅ **Rápida**: Service worker cachea recursos
- ✅ **Segura**: HTTPS (GitHub Pages incluye SSL)
- ✅ **Responsive**: Funciona en cualquier tamaño de pantalla

## 🐛 Troubleshooting

### El banner no aparece
- Verifica que `manifest.json` esté correctamente vinculado en `index.html`
- Asegúrate de estar en HTTPS (GitHub Pages cumple esto)
- Prueba en Chrome/Edge en Android o desktop

### La instalación falla
- Los iconos deben existir (icon-192.png e icon-512.png)
- Revisa la consola del navegador (F12) para errores

### El service worker no funciona
- Abre DevTools (F12) → Application → Service Workers
- Verifica que esté registrado y activo
- En localhost pueden haber limitaciones

## 📝 Notas

- Los datos se guardan en `localStorage` (máx ~5MB por dominio)
- El service worker cachea recursos automáticamente
- Cambios en el código se reflejan después de recargar + limpiar cache
- En GitHub Pages, los cambios se actualizan en ~1-2 minutos

## 📄 Licencia

Libre para usar y modificar

---

¿Preguntas? Revisa la [documentación PWA de MDN](https://developer.mozilla.org/es/docs/Web/Progressive_web_apps)
