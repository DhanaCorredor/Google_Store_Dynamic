// === 1. VALIDAR Y CACHEAR ELEMENTOS DEL DOM ===
const imagenPrincipal = document.querySelector('.image img');
const fotosPequeñas = document.querySelectorAll('.thumbnails img');
const formulario = document.querySelector('#formulario-compra');
const selectorCantidad = document.querySelector('#quantity');
const inputsColor = document.querySelectorAll('input[name="color"]');
const ventanaCarrito = document.querySelector('#carrito-ventana');
const btnAbrirCarrito = document.querySelector('#abrir-carrito');
const btnCerrarCarrito = document.querySelector('#cerrar-carrito');
const listaCarritoUI = document.querySelector('#lista-carrito');

let carrito = [];

// === 2. GALERÍA: CAMBIAR IMAGEN AL SELECCIONAR COLOR ===
// ✅ Usa data-image del HTML
if (inputsColor.length > 0) {
  inputsColor.forEach(input => {
    input.addEventListener('change', () => {
      const imagen = input.getAttribute('data-image');
      
      if (imagenPrincipal && imagen) {
        imagenPrincipal.src = imagen;
        console.log("🎨 Color cambiado a:", input.value);
      }
    });
  });
}

// === 3. GALERÍA: MINIATURAS ===
// ✅ Valida que existan elementos
if (imagenPrincipal && fotosPequeñas.length > 0) {
  fotosPequeñas.forEach((foto) => {
    foto.addEventListener('click', () => {
      const src = foto.getAttribute('src');
      
      if (src) {
        imagenPrincipal.src = src;
        console.log("📸 Imagen cambiada por miniatura");
      }
    });
  });
}

// === 4. CARRITO: ABRIR/CERRAR ===
// ✅ Valida elementos antes de usar
if (btnAbrirCarrito && ventanaCarrito) {
  btnAbrirCarrito.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaCarrito.classList.toggle('visible');
  });
}

if (btnCerrarCarrito && ventanaCarrito) {
  btnCerrarCarrito.addEventListener('click', () => {
    ventanaCarrito.classList.remove('visible');
  });
}

// === 5. AGREGAR PRODUCTOS AL CARRITO ===
// ✅ Valida todos los elementos necesarios
if (formulario && selectorCantidad && listaCarritoUI) {
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validar color seleccionado
    const inputColorMarcado = document.querySelector('input[name="color"]:checked');
    if (!inputColorMarcado || !inputColorMarcado.value) {
      console.warn('⚠️ Por favor, selecciona un color');
      return;
    }

    // Validar cantidad
    const cantidad = parseInt(selectorCantidad.value);
    if (isNaN(cantidad) || cantidad <= 0) {
      console.warn('⚠️ Cantidad inválida');
      return;
    }

    // Crear objeto producto
    const productoActual = obtenerProductoActual();
    const producto = {
      nombre: productoActual.nombre,  // Lee h1 → "Google Pixel Buds Pro" o "Fitbit Inspire 3"
      color: inputColorMarcado.value,  // Color seleccionado
      cantidad: cantidad,  // Cantidad seleccionada
      precio: productoActual.precio   // Lee .price_purchase → 229 o 99.95
    };

    // Agregar al carrito y actualizar UI
    carrito.push(producto);
    actualizarHTMLCarrito();

    // Mostrar ventana del carrito
    if (ventanaCarrito) {
      ventanaCarrito.classList.add('visible');
    }

    // Feedback en consola
    console.log("✅ Producto añadido:", producto);

    // Limpiar formulario
    formulario.reset();
  });
}

// === 6. ACTUALIZAR CARRITO EN EL HTML ===
// ✅ Valida datos antes de usarlos
function actualizarHTMLCarrito() {
  // Validar que elemento existe
  if (!listaCarritoUI) {
    console.error('❌ Elemento #lista-carrito no encontrado');
    return;
  }

  // Limpiar contenido previo
  listaCarritoUI.innerHTML = "";

  // Mostrar carrito vacío o items
  if (carrito.length === 0) {
    listaCarritoUI.innerHTML = "<li>El carrito está vacío</li>";
  } else {
    carrito.forEach((item) => {
      // Validar que item tiene datos válidos
      if (!item.nombre || !item.color || !item.cantidad || !item.precio) {
        console.warn('⚠️ Item incompleto:', item);
        return;
      }

      // Crear elemento lista
      const li = document.createElement('li');
      li.className = 'carrito-item';
      
      // Calcular total
      const total = item.precio * item.cantidad;
      
      // Insertar contenido HTML
      li.innerHTML = `
        <strong>${item.nombre}</strong><br>
        <small>Color: ${item.color}</small><br>
        <span>${item.cantidad} x ${item.precio}€ = <strong>${total}€</strong></span>
      `;
      
      // Agregar a lista
      listaCarritoUI.appendChild(li);
    });
  }
}

function obtenerProductoActual() {
  // Lee el h1 directamente → automático para cualquier página
  const tituloProducto = document.querySelector('h1').textContent.trim();
  
  let nombreProducto = tituloProducto;  // "Google Pixel Buds Pro" o "Fitbit Inspire 3"
  let precioProducto = 229;
  
  // Lee el precio también
  const precioElement = document.querySelector('.price_purchase');
  if (precioElement) {
    const textoPrecio = precioElement.textContent.replace('€', '').trim();
    precioProducto = parseFloat(textoPrecio.replace(',', '.'));
  }
  
  return { nombre: nombreProducto, precio: precioProducto };
}