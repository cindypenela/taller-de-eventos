const contenedor = document.getElementById('contenedor');
const boton = document.querySelector('button');


contenedor.style.padding = '5px';
contenedor.style.backgroundColor = 'green';


contenedor.addEventListener('click', function(event) {
    alert('Hola! Soy el div');
    event.stopPropagation();
});

boton.addEventListener('click', function(event) {
    alert('¡Hola!');
    event.stopPropagation();
});