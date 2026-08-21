# Setup Rápido - PWA Vigilancia Nutricional

## 🚀 Pasos iniciales (5 minutos)

### 1. Preparar los archivos

```
Tu carpeta debe contener:
✓ index.html
✓ manifest.json
✓ service-worker.js
✓ icon-192.png          ← CREAR ESTO
✓ icon-512.png          ← CREAR ESTO
✓ README.md
✓ .gitignore
```

### 2. Crear los iconos

**Opción A: Online (más fácil)**

1. Ve a https://www.favicon-generator.org/
2. Sube una imagen de tu preferencia (al menos 512×512)
3. Descarga icon-192.png e icon-512.png
4. Copia los archivos a tu carpeta

**Opción B: Comando rápido (requiere ImageMagick)**

```bash
# Si tienes una imagen grande (ej: logo.png)
convert logo.png -resize 192x192 icon-192.png
convert logo.png -resize 512x512 icon-512.png
```

**Opción C: Generador con color verde**

```bash
# Crear iconos verdes simples con ImageMagick
convert -size 192x192 "xc:#0a5d4d" icon-192.png
convert -size 512x512 "xc:#0a5d4d" icon-512.png
```

### 3. Subir a GitHub

```bash
# En la carpeta de tu proyecto
git init
git add .
git commit -m "PWA: Vigilancia Nutricional"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/vigilancia-nutricional.git
git push -u origin main
```

### 4. Habilitar Pages

En GitHub:
1. Repositorio → Settings
2. Pages (izquierda)
3. Source: Deploy from branch → main → /root
4. Guardar

✅ **Listo en 2 minutos**

Tu app estará en: 
```
https://TU_USUARIO.github.io/vigilancia-nutricional
```

---

## 🎨 Personalizar la app

### Cambiar nombre
En `manifest.json`:
```json
"name": "Tu Nombre",
"short_name": "Nombre Corto"
```

### Cambiar color tema
En `manifest.json`:
```json
"theme_color": "#TU_COLOR_HEX"
```

En `index.html` - busca `:root` y cambia:
```css
--primary: #TU_COLOR;
```

### Cambiar descripción
En `manifest.json` y en `index.html` (meta description)

---

## ✅ Verificar que funciona

1. Abre: https://TU_USUARIO.github.io/vigilancia-nutricional
2. En Chrome/Android: Debería aparece el banner verde en la parte inferior
3. Haz clic en **Instalar**
4. Se agregará a tu pantalla de inicio
5. Cierra la app y reabre: El banner NO debería aparecer

---

## 🔍 Validar PWA

### En Chrome DevTools:
1. F12 (abrir Developer Tools)
2. Lighthouse (pestaña)
3. Analizar página cargada (offline, mobile)
4. Verás puntuación PWA

### En web:
- https://web.dev/measure/
- Pega tu URL
- Verás reporte completo

---

## 📱 Probar en dispositivos

### Android (Chrome)
- Abre la URL en Chrome
- Espera a que aparezca el banner
- Toca **Instalar**

### iOS (Safari)
- Abre en Safari
- Compartir → Agregar a pantalla de inicio
- Personaliza nombre y color

### Desktop (Chrome)
- Abre la URL
- Icono de instalación (arriba a la derecha de la barra)
- Confirma

---

## 🆘 Problemas comunes

| Problema | Solución |
|----------|----------|
| No aparece banner | Revisa que manifest.json esté linkeado; usa HTTPS; intenta en Chrome |
| Iconos no se ven | Verifica que icon-192.png e icon-512.png existan en la raíz |
| Service Worker falla | En localhost hay limitaciones; prueba en GitHub Pages |
| Cambios no se reflejan | Limpia cache del navegador (Ctrl+Shift+Del o DevTools) |

---

## 📚 Recursos

- [PWA Docs (Google)](https://web.dev/progressive-web-apps/)
- [MDN PWA](https://developer.mozilla.org/es/docs/Web/Progressive_web_apps)
- [GitHub Pages Docs](https://pages.github.com/)

---

**¿Necesitas ayuda?** Revisa la consola del navegador (F12) para mensajes de error.
