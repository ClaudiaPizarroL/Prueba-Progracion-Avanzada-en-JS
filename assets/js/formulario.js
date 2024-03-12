// Importación de las clases de diferentes animales
import Animal from "./Animal.js";

// Array para almacenar los animales registrados
let animalesRegistrados = [];

// Función asincrónica para cargar los datos de los animales desde un archivo JSON
async function cargarDatosAnimales() {
    try {
        const url = 'assets/js/animales.json';
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error('No se pudo obtener los datos de los animales');
        }

        const data = await respuesta.json();
        return data.animales;
    } catch (error) {
        console.error('Error al cargar los datos de los animales:', error);
        return null;
    }
}

// Función para registrar un animal
async function registrarAnimal() {
    try {
        const data = await cargarDatosAnimales();

        const nombre = document.getElementById('animal').value;
        const edad = document.getElementById('edad').value;
        const comentarios = document.getElementById('comentarios').value;

        if (!data) {
            console.error('Los datos de los animales no están disponibles.');
            return;
        }

        const animalElegido = data.find(animal => animal.name === nombre);

        if (!animalElegido) {
            console.log('Animal no reconocido');
            return;
        }

        const nuevoAnimal = new Animal(nombre, edad, animalElegido.imagen, comentarios, animalElegido.sonido);
        animalesRegistrados.push(nuevoAnimal);

        return animalesRegistrados;
    } catch (error) {
        console.error('Error al registrar el animal:', error);
    }
}

// Función para reproducir el sonido del animal seleccionado

window.playSound = (animal) => {
    const animalRegistrado = animalesRegistrados.find((a) => a._nombre == animal);

    // Llamar al método para reproducir sonido de cada animal
    switch (animal) {
        case 'Leon':
            animalRegistrado.Rugir();
            break;
        case 'Lobo':
            animalRegistrado.Aullar();
            break;
        case 'Oso':
            animalRegistrado.Gruñir();
            break;
        case 'Serpiente':
            animalRegistrado.Sisear();
            break;
        case 'Aguila':
            animalRegistrado.Chillar();
            break;
        default:
            console.log('Animal no reconocido');
            break;
    }
};



// Función para mostrar los animales registrados en tarjetas
function mostrarAnimales() {
    const container = document.getElementById('Animales');
    let html = '';

    animalesRegistrados.forEach(animal => {
        html += `
            <div class="card m-3" style="width: 19rem;">
                <img src="assets/imgs/${animal.img}" class="card-img-top" data-animal="${animal.nombre}" data-toggle="modal" data-target="#exampleModal">
                <div>
                    <button onclick="reproducirSonido('${animal.nombre}')" class="btn btn-secondary w-100"> <img height="30" src="assets/imgs/audio.svg" /> </button>
                </div>
            </div>`;
    });

    container.innerHTML = html;

    const images = document.querySelectorAll('#Animales img.card-img-top');
    images.forEach(img => {
        img.addEventListener('click', (event) => {
            const animal = event.target.dataset.animal;
            mostrarModal(animal);
        });
    });
}


// Event listener para selección de animales
document.getElementById('animal').addEventListener('change', async () => {
    const selectedAnimal = document.getElementById('animal').value;
    const animalElegido = (await cargarDatosAnimales()).find(animal => animal.name === selectedAnimal);

    if (animalElegido) {
        document.getElementById('preview').style.backgroundImage = `url(assets/imgs/${animalElegido.imagen})`;
    } else {
        console.log('Animal no reconocido');
    }
});

// Event listener para registrar nuevos animales seleccionados
document.getElementById("btnRegistrar").addEventListener("click", async () => {
    const nombreAnimal = document.getElementById('animal').value;
    const edadAnimal = document.getElementById('edad').value;
    const comentariosAnimal = document.getElementById('comentarios').value;

    if (nombreAnimal === 'Seleccione un animal' || edadAnimal === 'Seleccione un rango de años' || comentariosAnimal === '') {
        alert("Debe completar todos los campos para registrar un animal");
    } else {
        const animalesRegistrados = await registrarAnimal();
        if (animalesRegistrados) {
            mostrarAnimales(animalesRegistrados);
        }
    }
});
