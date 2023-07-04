const img_principal = document.querySelector('.img_principal')
const thumbnails = document.querySelectorAll('.thumbnail')


thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        this.classList.add('active')
        img_principal.src = this.src
    })
})

function toggleFeatures() {
    var content = document.getElementById("featuresContent");
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
}
  
function togglePackageContent() {
    var content = document.getElementById("packageContent");
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
}

const imagen = document.getElementById('miImagen');

imagen.addEventListener('mouseover', () => {
  imagen.src = 'imagen2.jpg'; // Cambia la imagen cuando pasas el ratón por encima
});

imagen.addEventListener('mouseout', () => {
  imagen.src = 'imagen1.jpg'; // Vuelve a la imagen original cuando el ratón sale de la imagen
});
