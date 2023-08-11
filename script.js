const panels = document.querySelectorAll('.panel');
//Use el querySelectorAll porque este selecciona todos los elementos que contengan esta clase

//Como la const panels trae varios elementos con la clase 'panel' reccoremos cada una con un for
panels.forEach(panel => {
    //para cada elemento 'panel' cada vez que realicemos el evento de hacer click vamos a remover la clase active
    panel.addEventListener('click', () => {
        //Al momento de hacer click en un nuevo elemento panel vamos a ejecutar la funcion de eliminar la clase 'active'
        removeActiveClasses();
        //Luego de eliminar la clase 'active' seguido pasaremos a agregarla esta clase al nuevo elemento panel que le hagamos el evento click
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
