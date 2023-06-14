//ver juegos
const verjuegos = document.getElementById('verjuegos');
const eliminar = document.getElementById('eliminar');

verjuegos.addEventListener('click', function(){

    const verdivjuegos = document.getElementById('verdivjuegos');
    verdivjuegos.setAttribute('class', 'row visually');

});


//ver seccion juegos

const btnvideojuegos = document.getElementById('btnvideojuegos');

btnvideojuegos.addEventListener('click', function(){
    const contenidojuegos = document.getElementById('contenidojuegos');
    contenidojuegos.setAttribute('class', 'row visually')

    const divclientes = document.getElementById('divclientes');
    divclientes.setAttribute('class', 'col-10 visually-hidden');

    const compras = document.getElementById('compras');
    compras.setAttribute('class','row visually-hidden');
});

//añadir juegos

const btnagregarjuego = document.getElementById('btnagregarjuego');

const juegos = new Map();

// juegos.set('GTA VI',{
//     nombre: 'GTA VI',
//     categoria:'Accion',
//     fecha:'octubre 15, 2023',
//     imagen:''
// });

btnagregarjuego.addEventListener('click',function(){
    const Nombre_juego = document.getElementById('Nombre_juego').value;
    const Categoria_juego = document.getElementById('Categoria_juego').value;
    const Fecha_juego = document.getElementById('Fecha_juego').value;
    const Imagen_juego = document.getElementById('Imagen_juego').value;

    juegos.set(Nombre_juego,{
        nombre: Nombre_juego,
        categoria: Categoria_juego,
        fecha: Fecha_juego,
        imagen: Imagen_juego
    });

    console.log(juegos);

    MostrarNuevoJuego(juegos.get(Nombre_juego));

    document.getElementById('Nombre_juego').value='';
    document.getElementById('Categoria_juego').value='';
    document.getElementById('Fecha_juego').value='';
    document.getElementById('Imagen_juego').value='';

});

function MostrarNuevoJuego(datos){
    const card_row = document.getElementById('card_row');

    const div_card = document.createElement('div');div_card.setAttribute('class', 'card m-3');
    div_card.setAttribute('style', 'width: 18rem;')

    let img_card = document.createElement('img');img_card.setAttribute('class', 'card-img-top');
    img_card.setAttribute('src', datos.imagen);

    const card_body = document.createElement('div');card_body.setAttribute('class', 'card-body');
    

    let juego_nombre = document.createElement('h5');
    juego_nombre.textContent = datos.nombre;
    let juego_categoria = document.createElement('p');
    juego_categoria.textContent = datos.categoria;
    let juego_fecha = document.createElement('p');
    juego_fecha.textContent = datos.fecha;
    let btn_eliminar = document.createElement('button');btn_eliminar.setAttribute('type', 'button');
    btn_eliminar.setAttribute('class', 'btn btn-danger');
    btn_eliminar.setAttribute('id','eliminar');
    btn_eliminar.textContent = 'Eliminar';

    card_body.appendChild(juego_nombre);
    card_body.appendChild(juego_categoria);
    card_body.appendChild(juego_fecha);
    card_body.appendChild(btn_eliminar);

    div_card.appendChild(img_card);
    div_card.appendChild(card_body);


    card_row.appendChild(div_card);


};

function mostrar(){
    for(const [clave,valor] of juegos){
        MostrarNuevoJuego(valor);
    };
};

eliminar.addEventListener('click', function() {
    const idEliminar = document.getElementById('idEliminar').value;
    let eliminado  = document.getElementById(idEliminar);
    eliminado.parentNode.removeChild(eliminado);
    document.getElementById('idEliminar').value="";
})

mostrar();