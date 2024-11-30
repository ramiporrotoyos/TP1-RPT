let url = 'https://dummyjson.com/recipes';
let skip = 0

let cargarMas = document.querySelector('.cargar-mas');
let recetasContainer = document.querySelector('.recetas');

let recetasCargadas = 0;

function cargarRecetas() {
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let recetas = data.recipes; 

            let contenidoRecetas = '';

            let limite = recetasCargadas + 10;
            for (let i = recetasCargadas; i < limite ; i++) {
                let receta = recetas[i];
                contenidoRecetas += `
                    <div class="receta">
                        <img src="${receta.image}" alt="${receta.name}" />
                        <h3>${receta.name}</h3>
                        <p>Dificultad: ${receta.difficulty}</p>
                        <a href="receta.html?id=${receta.id}">Ver detalle</a>
                    </div>
                `;
            }
            skip += 10
            recetasContainer.innerHTML += contenidoRecetas;


            recetasCargadas = limite;


            if (recetasCargadas >= recetas.length) { 
                cargarMas.style.display = 'none';
            }
        })
        .catch(function (e) {
            console.error('Error al cargar las recetas:', e);
        });
}


cargarRecetas();


cargarMas.addEventListener('click', cargarRecetas);
