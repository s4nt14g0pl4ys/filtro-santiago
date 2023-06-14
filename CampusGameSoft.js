//Muestra clientes div

const btnclientes = document.getElementById('btnclientes');

btnclientes.addEventListener('click', function(){

    const divclientes = document.getElementById('divclientes');
    divclientes.setAttribute('class', 'col-10 visually');
    const contenidojuegos = document.getElementById('contenidojuegos');
    contenidojuegos.setAttribute('class', 'row visually-hidden')
    const compras = document.getElementById('compras');
    compras.setAttribute('class','row visually-hidden');

});

//listar clientes

const btnlistarclientes = document.getElementById('btnlistarclientes');

btnlistarclientes.addEventListener('click', function(){

    const tablaclientes = document.getElementById('tablaclientes');
    tablaclientes.setAttribute('class', 'table table-hover visually mt-3');

});

//cerrar div clientes

const btnocultarclientes = document.getElementById('btnocultarclientes');

btnocultarclientes.addEventListener('click', function(){

    const divclientes = document.getElementById('divclientes');
    divclientes.setAttribute('class', 'col-10 visually-hidden');

    const tablaclientes = document.getElementById('tablaclientes');
    tablaclientes.setAttribute('class', 'table table-hover visually-hidden');

});

//agregar clientes

const btnagregarcliente = document.getElementById('botonagregarcliente');

const clientes = new Map();
// clientes.set('1097096218',{
//     identificacion: '1097096218',
//     nombre: 'santiago',
//     apellido: 'sepulveda',
//     telefono:'3027132236',
//     correo:'santsepulveda29@gmail.com',
//     fecha:'29/04/2006',
//     nacionalidad:'colombia'
// });


btnagregarcliente.addEventListener('click', function(){
    const Identificacion_Cliente = document.getElementById('Identificacion_Cliente').value;
    const Nombre_CLiente = document.getElementById('Nombre_Cliente').value;
    const Apellido_Cliente = document.getElementById('Apellido_Cliente').value;
    const Telefono_Cliente = document.getElementById('Telefono_Cliente').value;
    const Correo_Cliente = document.getElementById('Correo_Cliente').value;
    const Fecha_Cliente = document.getElementById('Fecha_Cliente').value;
    const Nacionalidad_Cliente = document.getElementById('Nacionalidad_Cliente').value;

    clientes.set(Identificacion_Cliente,{
        identificacion: Identificacion_Cliente,
        nombre: Nombre_CLiente,
        apellido: Apellido_Cliente,
        telefono:Telefono_Cliente,
        correo:Correo_Cliente,
        fecha:Fecha_Cliente,
        nacionalidad:Nacionalidad_Cliente
    });

    console.log(clientes);

    MostrarHtml(clientes.get(Identificacion_Cliente));

    document.getElementById('Identificacion_Cliente').value='';
    document.getElementById('Nombre_Cliente').value='';
    document.getElementById('Apellido_Cliente').value='';
    document.getElementById('Telefono_Cliente').value='';
    document.getElementById('Correo_Cliente').value='';
    document.getElementById('Fecha_Cliente').value='';
    document.getElementById('Nacionalidad_Cliente').value='';


});

function MostrarHtml(datos){
    const tablabodyclientes = document.getElementById('tablabodyclientes');

    let tr = document.createElement('tr');
    let th_Identificacion = document.createElement('th');th_Identificacion.setAttribute('scope','row');
    th_Identificacion.textContent = datos.identificacion;
    let td_Nombre = document.createElement('td');
    td_Nombre.textContent = datos.nombre;
    let td_Apellido = document.createElement('td');
    td_Apellido.textContent = datos.apellido;
    let td_Telefono = document.createElement('td');
    td_Telefono.textContent = datos.telefono;
    let td_Correo = document.createElement('td');
    td_Correo.textContent = datos.correo;
    let td_Fecha = document.createElement('td');
    td_Fecha.textContent = datos.fecha;
    let td_Nacionalidad = document.createElement('td');
    td_Nacionalidad.textContent = datos.nacionalidad;

    tr.appendChild(th_Identificacion);
    tr.appendChild(td_Nombre);
    tr.appendChild(td_Apellido);
    tr.appendChild(td_Telefono);
    tr.appendChild(td_Correo);
    tr.appendChild(td_Fecha);
    tr.appendChild(td_Nacionalidad);

    tablabodyclientes.appendChild(tr);

};

function mostrar(){
    for(const [clave,valor] of clientes){
        MostrarHtml(valor)
    };
};

mostrar();




