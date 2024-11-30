
let urlParams = new URLSearchParams(window.location.search);
let ProductoId = urlParams.get('id');

if (ProductoId) {
    let url = `https://dummyjson.com/recipes/${ProductoId}`;

    fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);

            let fotoReceta = document.querySelector('.foto');
            let titulo = document.querySelector('.title');
            let informacionReceta = document.querySelector('.instrucciones');
            let tiempoCoccion = document.querySelector('.tiempoCoccion');
            let categoria = document.querySelector('.categoria');

            fotoReceta.src = data.image;
            titulo.innerHTML = data.name;
            informacionReceta.innerHTML = data.instructions;
            tiempoCoccion.innerHTML = 'Tiempo Cocción: ' + data.cookTimeMinutes + ' minutos';

            
            let tags = data.tags; 
            let tagsReceta = '';
            for (let i = 0; i < tags.length; i++) {
                    tagsReceta += `<a href="./category.html?tag=${tags[i]}">${tags[i]}</a>`;
                    tagsReceta += `  `
            }
            categoria.innerHTML = 'Categoría: ' + tagsReceta;
            
        })
        .catch(function(e) {
            console.log(e);
        });
}
