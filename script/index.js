function loadInitialData(){
    // Load initial data
    let method = "GET"
    let url = "./content/menu.json"
    let xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.send();

    let initialData
    xhr.onload = function() {
        if (xhr.status != 200) { // If not 200, not OK, alert an error mensage.
            alert ("Erro ao carregar informações");
        } else { // If 200, ok, load initial data.
            initialData = JSON.parse(this.responseText);
            insertData(initialData)
        }        
    }; 
}

function insertData(data){
    data.forEach(dish => {
        let image = document.createElement("img")
        image.setAttribute("src", dish.imagem.slice(1))
        image.setAttribute("alt", dish.alt)

        sliderContent.appendChild(image)
    })
    document.querySelectorAll("#slider img")[0].setAttribute("class", "atual")
    images = document.querySelectorAll("#slider img")
}

function slider(){
    images[imgNow].classList.remove("atual")
    imgNow = imgNow + 1 >= images.length ? 0 : imgNow + 1
    images[imgNow].classList.add("atual")
}

var time = 3000
var imgNow = 0
var images = null

var sliderContent = document.getElementById("slider")

loadInitialData()
setInterval(slider,time)