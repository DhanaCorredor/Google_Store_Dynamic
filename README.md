# 🛒 Google Store - Proyecto de Tienda Dinámica

[![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DhanaCorredor/Google_Store_Dynamic)

---

## 📖 Descripción del Proyecto

Una **tienda online interactiva** que replica la experiencia de usuario de Google Store. El proyecto se enfoca en **JavaScript vanilla** para implementar funcionalidades dinámicas sin frameworks, priorizando la manipulación del DOM, validaciones robustas y persistencia de datos.

### ✨ Características Principales

- 🛒 **Carrito Global Persistente** - El carrito se mantiene entre páginas usando `localStorage`
- 🎨 **Galería de Imágenes Dinámica** - Cambio de imágenes al seleccionar colores o thumbnails
- ✅ **Validaciones Robustas** - Verificación de color, cantidad e integridad de datos
- 📱 **Diseño Responsivo** - Mobile-first, adaptable a tablet y desktop
- 🏪 **Multi-Página** - Soporte para múltiples categorías de productos (Earbuds, Watches)
- 💾 **Persistencia de Datos** - JSON en localStorage para mantener carrito entre sesiones
- ♿ **Accesibilidad** - Estructura HTML semántica, ARIA labels, navegación con teclado

---

## 🚀 Tecnologías Utilizadas

| Tecnología | Uso |
|-----------|-----|
| **JavaScript (Vanilla)** | Lógica interactiva, DOM manipulation, localStorage |
| **HTML5** | Estructura semántica, mejor accesibilidad |
| **CSS3** | Diseño responsivo, custom properties, flexbox/grid |
| **LocalStorage API** | Persistencia de carrito |

---

## 📂 Estructura de Archivos

```
Google_Store_Dynamic/
│
├── 📄 index.html                          # Página de Pixel Buds Pro (inicio)
├── 📄 README.md                           # Este archivo
│
├── 📁 pages/
│   ├── 📄 watches.html                    # Página de Fitbit Inspire 3
│   └── 📄 earbuds.html                    # [Futuro] Página de auriculares
│
├── 📁 scripts/
│   └── 📄 dynamic.js                      # Lógica principal
│       ├── Gestión de carrito
│       ├── Galería de imágenes
│       ├── Validaciones
│       └── LocalStorage
│
├── 📁 styles/
│   ├── 📄 style.css                       # Estilos globales
│   ├── 📄 normalize.css                   # Reset CSS
│   └── 📄 watches_style.css               # Estilos específicos watches
│
└── 📁 img/
    ├── 📁 earbuds/                        # Imágenes de auriculares
    ├── 📁 smartwatch/                     # Imágenes de reloj
    └── 📁 icons/                          # Iconografía
```

---

## ⚙️ Instalación

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/DhanaCorredor/Google_Store_Dynamic.git
cd Google_Store_Dynamic
```

### 2️⃣ Abrir el proyecto
```bash
# Opción A: Abrir en VS Code
code .

# Opción B: Abrir directamente en navegador
open index.html
```

### 3️⃣ Usar Live Server (recomendado)
```bash
# En VS Code: Click derecho en index.html → "Open with Live Server"
# O desde terminal:
python -m http.server 8000
# Luego abre: http://localhost:8000
```

---

## 🎯 Funcionalidades Principales

### 🛒 Carrito Persistente
```javascript
// ✅ Se guarda automáticamente en localStorage
// ✅ Se carga al recargar la página
// ✅ Funciona entre páginas diferentes

Carrito (JSON):
{
  "nombre": "Google Pixel Buds Pro",
  "color": "Azul Claro",
  "cantidad": 2,
  "precio": 229
}
```

### 🎨 Galería Dinámica
- Click en **thumbnail** → cambia imagen principal
- Selecciona **color** → imagen cambia automáticamente
- Usa `data-image` del HTML (sin hardcoding en JS)

### ✅ Validaciones
```javascript
// Verifica:
✓ Color seleccionado
✓ Cantidad válida (> 0)
✓ Elementos DOM existen
✓ Integridad de datos en carrito
```

### 💾 LocalStorage
```javascript
// Guardado automático
localStorage.setItem('carrito', JSON.stringify(carrito));

// Carga automática al iniciar
const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
```

---

## 📖 Cómo Usar

### En index.html (Pixel Buds Pro)
1. ✅ Haz scroll para ver los 6 colores disponibles
2. 🖱️ Selecciona un color → imagen cambia
3. 📸 Haz click en thumbnails para cambiar imagen
4. 🛒 Selecciona cantidad → Click "Add to cart"
5. 👀 Carrito se abre automáticamente

### En pages/watches.html (Fitbit Inspire 3)
1. ✅ Selecciona uno de 3 colores con preview
2. 🛒 Agrega al carrito
3. 📦 El carrito muestra ambos productos
4. ➕ Agrega más productos de diferentes categorías

### Gestionar Carrito
- **Ver carrito**: Click en icono carrito (arriba derecha)
- **Eliminar producto**: Click en botón "Eliminar"
- **Ver total**: Suma automática de todos los items

---

## 🎓 Conceptos Implementados

| Concepto | Implementación |
|----------|----------------|
| **Event Listeners** | `addEventListener('change', 'submit', 'click')` |
| **DOM Manipulation** | Crear/eliminar elementos, modificar atributos |
| **Array Methods** | `forEach()`, `find()`, `splice()`, `map()` |
| **JSON** | Serializar/deserializar datos |
| **LocalStorage** | Persistencia entre sesiones |
| **Condicionales** | Validaciones antes de acciones |
| **Arrow Functions** | Sintaxis moderna de funciones |
| **Template Literals** | Interpolación de strings |

---

## 🔍 Validaciones Implementadas

✅ **Color**: Verifica que hay un color seleccionado  
✅ **Cantidad**: Valida que es un número > 0  
✅ **Elementos DOM**: Chequea que existen antes de usar  
✅ **Datos de Producto**: Valida nombre, precio, color  
✅ **Integridad**: Evita items incompletos en carrito  

---

## 📊 Estructura del Carrito en LocalStorage

```json
{
  "carrito": [
    {
      "nombre": "Google Pixel Buds Pro",
      "color": "Azul Claro",
      "cantidad": 2,
      "precio": 229
    },
    {
      "nombre": "Fitbit Inspire 3",
      "color": "Midnight Zen",
      "cantidad": 1,
      "precio": 99.95
    }
  ]
}
```

---

## 🔗 Enlaces Importantes

- 🌐 **Ver Código**: [GitHub Repository](https://github.com/DhanaCorredor/Google_Store_Dynamic)
- 📋 **Project Board**: [GitHub Projects](https://github.com/users/DhanaCorredor/projects/3)
- 👤 **Autor**: [Dhana Corredor](https://github.com/DhanaCorredor)
- 🎓 **Bootcamp**: [Factoría F5](https://factoriaf5.org/)

---

## 🚀 Mejoras Futuras

- [ ] Backend con API REST
- [ ] Autenticación de usuarios
- [ ] Sistema de pagos (Stripe/PayPal)
- [ ] Más categorías de productos
- [ ] Búsqueda y filtros avanzados
- [ ] Reviews y calificaciones
- [ ] Wishlist
- [ ] Historial de órdenes
- [ ] Panel de administración

---

## 👨‍💻 Autor

**Dhana Corredor**
- GitHub: [@DhanaCorredor](https://github.com/DhanaCorredor)
- Bootcamp: Factoría F5 (2025-2026)

---

## 📝 Licencia

Este proyecto está disponible bajo licencia **MIT**. Siéntete libre de usar, modificar y distribuir.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:
1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/nueva-feature`)
3. Commit cambios (`git commit -m 'Add: nueva feature'`)
4. Push a la rama (`git push origin feature/nueva-feature`)
5. Abre un Pull Request

---

## ❓ Preguntas o Problemas?

Si encuentras algún problema o tienes sugerencias:
1. Abre un [Issue](https://github.com/DhanaCorredor/Google_Store_Dynamic/issues)
2. Describe el problema detalladamente
3. Incluye pasos para reproducir (si aplica)

---

**⭐ Si te gusta este proyecto, no olvides darle una estrella! ⭐**