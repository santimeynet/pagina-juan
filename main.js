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
