console.log('¡Prueba que estoy conectado :D!')

const imagenPrincipal = document.querySelector('.image-principal img')
const fotosPequeñas = document.querySelectorAll('.galeria-images img')

const formulario = document.querySelector('form')
const selectorCantidad = document.querySelector('#cantidad')

fotosPequeñas.forEach(function (foto) {
  foto.onclick = function () {
    imagenPrincipal.src = foto.src
  }
})

formulario.onsubmit = function (evento) {
  evento.preventDefault()

  const cantidadElegida = selectorCantidad.value

  const colorMarcado = document.querySelector('input[name="color"]:checked')

  if (colorMarcado) {
    const nombreColor = colorMarcado.value
    alert(
      '¡Añadido al carrito! Cantidad: ' +
        cantidadElegida +
        ' - Color: ' +
        nombreColor
    )
  } else {
    alert('Por favor, selecciona un color antes de añadir al carrito.')
  }
}

const botonMenu = document.querySelector('.menu-mobile')
botonMenu.onclick = function () {
  alert('Aquí se abriría el menú lateral en el móvil.')
}
