function insertData(){
    let foodTypes = ["Salada", "Prato Principal", "Sobremesa"]
    foodTypes.forEach(foodType => {
        let titleH1 = document.createElement("h1")
        titleH1.innerHTML = foodType
        ourMenu.appendChild(titleH1)

        let cardContainer = document.createElement("div")
        cardContainer.setAttribute("class", "card-container")

        let dataFilter = data.filter(dish => dish.tipo == foodType)

        dataFilter.forEach(dish => {
            let articleCard = document.createElement("article")
            articleCard.setAttribute("class", "card")

            let figureDiv = document.createElement("div")
            figureDiv.setAttribute("class", "figure")

            let image = document.createElement("img")
            image.setAttribute("src", dish.imagem)
            image.setAttribute("alt", dish.alt)
            figureDiv.appendChild(image)

            let contentDiv = document.createElement("div")
            contentDiv.setAttribute("class", "content")

            let titleH2 = document.createElement("h2")
            titleH2.innerHTML = dish.nome
            let description = document.createElement("p")
            description.innerHTML = dish.descricao
            contentDiv.appendChild(titleH2)
            contentDiv.appendChild(description)

            articleCard.appendChild(figureDiv)
            articleCard.appendChild(contentDiv)

            cardContainer.appendChild(articleCard)
        }) 
        ourMenu.appendChild(cardContainer)
    })
}

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.responseType = 'json'
    xhr.onload = function() {
        var status = xhr.status
        if (status === 200) { 
            callback(null, xhr.response)
        } else {
            callback(status, xhr.response)
        }
    }
    xhr.send()
}

getJSON('../content/menu.json', (err, initialData) => {
    if (err !== null) {
        console.log('Ocorreu um erro' + err);
    } else {
        data = initialData
        insertData()
    }
})

var data = null
var ourMenu = document.getElementById("ourMenu")