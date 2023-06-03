let listdogs = [
    {
        img: './imagenes/perro1.jpg',
        name: 'Cobu',
        telefono: '55533300',
        pais: 'Perú',
        descripcion: 'Phasellus cursus turpis feugiat luctus egestas. Sed vehicula magna id leo interdum luctus.',
        id: '01',
    },
    {
        img: './imagenes/perro2.jpg',
        name: 'Hachi',
        telefono: '55533300',
        pais: 'Perú',
        descripcion: 'Phasellus cursus turpis feugiat luctus egestas. Sed vehicula magna id leo interdum luctus.',
        id: '02',
    },
    {
        img: './imagenes/perro3.jpg',
        name: 'Manchas',
        telefono: '55533300',
        pais: 'Perú',
        descripcion: 'Phasellus cursus turpis feugiat luctus egestas. Sed vehicula magna id leo interdum luctus.',
        id: '03',
    },
    {
        img: './imagenes/perro4.jpg',
        name: 'Doby',
        telefono: '55533300',
        pais: 'Perú',
        descripcion: 'Phasellus cursus turpis feugiat luctus egestas. Sed vehicula magna id leo interdum luctus.',
        id: '04',
    },
    {
        img: './imagenes/perro5.jpg',
        name: 'Chester',
        telefono: '55533300',
        pais: 'Perú',
        descripcion: 'Phasellus cursus turpis feugiat luctus egestas. Sed vehicula magna id leo interdum luctus.',
        id: '05',
    },
    {
        img: './imagenes/perro6.jpg',
        name: 'Harry',
        telefono: '55533300',
        pais: 'Perú',
        descripcion: 'Phasellus cursus turpis feugiat luctus egestas. Sed vehicula magna id leo interdum luctus.',
        id: '06',
    },
    {
        img: './imagenes/perro7.jpg',
        name: 'Marley',
        telefono: '55533300',
        pais: 'Perú',
        descripcion: 'Phasellus cursus turpis feugiat luctus egestas. Sed vehicula magna id leo interdum luctus.',
        id: '07',
    },
    {
        img: './imagenes/perro8.jpg',
        name: 'Benji',
        telefono: '55533300',
        pais: 'Perú',
        descripcion: 'Phasellus cursus turpis feugiat luctus egestas. Sed vehicula magna id leo interdum luctus.',
        id: '08',
    },
];


const Contenedor = document.getElementById('dogs-container');

listdogs.forEach(perro => {

    const tarjeta = document.createElement('div');
    tarjeta.classList.add('TarjetaPerro');

    tarjeta.innerHTML =

        `
    <button class="editar" data-id="${perro.id}">EDITAR</button>  
    <button class="eliminar" data-id="${perro.id}"></button>
    </br>
    <img src="${perro.img}" alt="">  
    <h3>${perro.name}</h3>
    <h4> Teléfono: ${perro.telefono}</h4>
    <p>${perro.descripcion}</p>
    
    `;
    Contenedor.appendChild(tarjeta);

});

// -------- ELIMINAR ------------

const botonEliminar = document.querySelectorAll('.eliminar');

botonEliminar.forEach(boton => {
    boton.addEventListener('click', function () {
        const perroId = this.dataset.id;
        const tarjetaPerro = this.parentElement;
        eliminarTarjetaPerro(perroId, tarjetaPerro);
    });
});

function eliminarTarjetaPerro(id, tarjeta) {
    listdogs = listdogs.filter(perro => perro.id !== id);
    tarjeta.remove();
}

// -------- EDITAR --------------

const botonesEditar = document.querySelectorAll('.editar');

botonesEditar.forEach(boton => {
    boton.addEventListener('click', function () {
        const perroId = this.dataset.id;
        const tarjetaPerro = this.parentElement;
        editarPerro(perroId, tarjetaPerro);
    });
});


function editarPerro(id, tarjeta) {
    const perro = listdogs.find(perro => perro.id === id);
    if (perro) {
        const name = prompt('Ingrese el nuevo nombre de la mascota:', perro.name);
        const telefono = prompt('Ingrese el nuevo teléfono de contacto:', perro.telefono);
        const pais = prompt('Ingrese el nuevo país:', perro.pais);
        const descripcion = prompt('Ingrese una nueva descripción de la mascota:', perro.descripcion);

        // ACTUALIZAMOS LISTA

        perro.name = name;
        perro.telefono = telefono;
        perro.pais = pais;
        perro.descripcion = descripcion;

        // ACTUALIZAMOS EL INNER

        const nameElement = tarjeta.querySelector('h3');
        nameElement.textContent = name;

        const telefonoElement = tarjeta.querySelector('h4');
        telefonoElement.textContent = `Teléfono: ${telefono}`;

        const descripcionElement = tarjeta.querySelector('p');
        descripcionElement.textContent = descripcion;
    }
}

// --------- AGREGAR MASCOTA -------
const btnAgregarMascota = document.getElementById('btnAgregarMascota');
btnAgregarMascota.addEventListener('click', agregarMascota);

function agregarMascota() {
    const img = prompt('');
    const name = prompt('Ingrese el nombre de la mascota:');
    const telefono = prompt('Ingrese el teléfono de contacto:');
    const pais = prompt('Ingrese el país:');
    const descripcion = prompt('Ingrese una descripción de la mascota:');

    const nuevaMascota = {
        img: img,
        name: name,
        telefono: telefono,
        pais: pais,
        descripcion: descripcion,
        id: listdogs.length + 1,
    };

    listdogs.push(nuevaMascota);

    // Código adicional para crear y mostrar la nueva tarjeta de perro
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('TarjetaPerro');

    tarjeta.innerHTML =

        `
      
      <button class="eliminar" data-id="${nuevaMascota.id}">
      </button>
      
      </br>
      <img src="${nuevaMascota.img}" alt="">  
      <h3>${nuevaMascota.name}</h3>
      <h4> Teléfono: ${nuevaMascota.telefono}</h4>
      <p>${nuevaMascota.descripcion}</p>
    `;

    Contenedor.appendChild(tarjeta);

    // Añade el evento click al botón de eliminar de la nueva tarjeta
    const botonEliminar = tarjeta.querySelector('.eliminar');
    botonEliminar.addEventListener('click', function () {
        const perroId = this.dataset.id;
        const tarjetaPerro = this.parentElement;
        eliminarTarjetaPerro(perroId, tarjetaPerro);
    });
}


