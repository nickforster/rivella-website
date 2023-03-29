const modal = document.getElementById("modal")

const title = document.getElementById('title')
const ingredients = document.getElementById('ingredients')
const nutritionImg = document.getElementById('nutrition-img')
const bottleImg = document.getElementById('bottle')
const subtitle = document.getElementById('subtitle')
const specialImg = document.getElementById('special-img')

const content = [
    {
        name: "Rot",
        ingredients: ["Wasser", "Milchserum", "Karamelisierter Zucker", "Kohlensäure", "Natürliche Aromen", "Zucker"],
        nutritionImg: "./img/red/nutrition.jpg",
        bottleImg: "./img/rivella-red.png",
        subtitle: "Das Original",
        specialImg: "./img/red/special.jpg",
        color: "#E2231A"
    },
    {
        name: "Refresh",
        ingredients: ["Wasser", "Milchserum", "Karamelisierter Zucker", "Kohlensäure", "Natürliche Aromen", "Zucker"],
        nutritionImg: "./img/refresh/nutrition.jpg",
        bottleImg: "./img/rivella-refresh.png",
        subtitle: "Natürlich wenig Zucker",
        specialImg: "./img/refresh/special.jpg",
        color: "#3EBCCF"
    },
    {
        name: "Blau",
        ingredients: ["Wasser", "Milchserum", "Karamel", "Kohlensäure", "Natürliche Aromen", "Mit Süssungsmitteln"],
        nutritionImg: "./img/blue/nutrition.jpg",
        bottleImg: "./img/rivella-blue.png",
        subtitle: "Zero",
        specialImg: "./img/blue/special.jpg",
        color: "#0047BA"
    },
    {
        name: "Grüntee",
        ingredients: ["Wasser", "Milchserum", "Karamelisierter Zucker", "Kohlensäure", "Natürliche Aromen", "Grüntee-Extrakte", "Zucker"],
        nutritionImg: "./img/green-tea/nutrition.jpg",
        bottleImg: "./img/rivella-green-tea.png",
        subtitle: "Original mit Grüntee-Extrakten",
        specialImg: "./img/green-tea/special.jpg",
        color: "#009944"
    },
    {
        name: "Schweizer Minzen",
        ingredients: ["Wasser", "Milchserum", "Karamelisierter Zucker", "Kohlensäure", "Aufguss aus Schweizer Minzen", "Zucker"],
        nutritionImg: "./img/swiss-mince/nutrition.jpg",
        bottleImg: "./img/rivella-swiss-mince.png",
        subtitle: "Neu in Naturaplan Bio-Qualität",
        specialImg: "./img/swiss-mince/special.jpg",
        color: "#007136"
    }
]

const rivellas = document.getElementsByClassName('image-text')

for (let i = 0; i < rivellas.length; i++) {
    rivellas[i].addEventListener('click', () => {
        modal.style.display = 'block'

        modal.style.backgroundColor = content[i].color
        title.innerHTML = content[i].name
        nutritionImg.src = content[i].nutritionImg
        bottleImg.src = content[i].bottleImg
        specialImg.src = content[i].specialImg
        subtitle.innerHTML = content[i].subtitle

        ingredients.innerHTML = ""
        for (let j = 0; j < content[i].ingredients.length; j++) {
            let element = document.createElement("li");
            element.innerText = content[i].ingredients[j]
            ingredients.appendChild(element)
        }
    })
}

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") modal.style.display = "none"
})

document.addEventListener("DOMContentLoaded", () => modal.style.display = "none");
