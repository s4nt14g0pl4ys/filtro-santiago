const btncompras = document.getElementById('btncompras');

btncompras.addEventListener('click', function(){
    const compras = document.getElementById('compras');
    compras.setAttribute('class','row visually');
    const divclientes = document.getElementById('divclientes');
    divclientes.setAttribute('class', 'col-10 visually-hidden');
    const contenidojuegos = document.getElementById('contenidojuegos');
    contenidojuegos.setAttribute('class', 'row visually-hidden')
})