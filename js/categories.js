let url = 'https://dummyjson.com/recipes/tags';

let categoriasContenedor = document.querySelector('.categories');

function cargarCategorias() {
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let contenido = '';

            for (let i = 0; i < data.length; i++) {
                let categoria = data[i];
                
                contenido += '<li><a href="./category.html?tag=' + categoria + '">' + categoria + '</a></li>';
            }

            categoriasContenedor.innerHTML = contenido;
        })
        .catch(function (error) {
            console.error('Error al cargar las categorías:', error);
        });
}

cargarCategorias();






    











