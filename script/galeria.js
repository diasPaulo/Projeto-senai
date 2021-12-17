function openLightbox(index){
    let indexFor = images.length - 1 > index ? index + 1 : 0
    let indexBack = index == 0 ? images.length - 1 : index - 1

    closeLightbox()

    images.forEach(item => item.style.display = "none")
    images[index].style.display = "initial"

    images[index].classList.add("lightbox")
    imageBoxes.classList.add("boxLightbox")
    
    closeImg.style.display = "block"
    backward.style.display = "block"
    forward.style.display = "block"
    
    closeImg.addEventListener("click", closeLightbox)
    backward.addEventListener("click", () => openLightbox(indexBack))
    forward.addEventListener("click", () => openLightbox(indexFor))
}

function closeLightbox(){
    images.forEach(item => item.classList.remove("lightbox"))
    images.forEach(item => item.style.display = "initial")
    imageBoxes.classList.remove("boxLightbox")
    closeImg.style.display = "none"
    backward.style.display = "none"
    forward.style.display = "none"
}

var closeImg = document.querySelectorAll(".closeImg")[0]
var backward = document.querySelectorAll(".backward")[0]
var forward = document.querySelectorAll(".forward")[0]

var images = document.querySelectorAll("section img")
var imageBoxes = document.querySelectorAll("section .imgBox")[0]
window.innerWidth >= 992? images.forEach((img, index) => img.addEventListener("click", () => openLightbox(index))) : images.forEach((img, index) => img.removeEventListener("click", () => openLightbox(index)))

window.onresize = () => location.reload()