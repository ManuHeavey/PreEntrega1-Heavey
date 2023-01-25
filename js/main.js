const priceLS = 1000
const priceUG = 5000
const priceGS = 8000

const statsLS = ['10 Strenght', '10 Dexterity']
const statsUG = ['11 Strenght', '15 Dexterity']
const statsGS = ['31 Strenght', '12 Dexterity']

document.getElementById("statsLS").innerHTML = statsLS
document.getElementById("statsUG").innerHTML = statsUG
document.getElementById("statsGS").innerHTML = statsGS

let totalLS = 0
document.getElementById("totalLS").innerHTML = totalLS
let totalUG = 0
document.getElementById("totalUG").innerHTML = totalUG
let totalGS = 0
document.getElementById("totalGS").innerHTML = totalGS

let totalPrice = 0
document.getElementById("totalPrice").innerHTML = totalPrice

let text = ""
document.getElementById("text").innerHTML = text

document.querySelector("#addLS").addEventListener("click", addOneLS)
document.querySelector("#minusLS").addEventListener("click", minusOneLS)

document.querySelector("#addUG").addEventListener("click", addOneUG)
document.querySelector("#minusUG").addEventListener("click", minusOneUG)

document.querySelector("#addGS").addEventListener("click", addOneGS)
document.querySelector("#minusGS").addEventListener("click", minusOneGS)

document.querySelector("#btnShowTotal").addEventListener("click", showTotal)

function showTotal() {
    let T = document.getElementById("totalPrice")
    T.style.display = "block"
    text = "Your total is: "
    document.querySelector("#text").innerHTML = text
    totalPrice = (totalLS * priceLS) + (totalUG * priceUG) + (totalGS * priceGS)
    document.querySelector("#totalPrice").innerHTML = totalPrice
}

function minusOneLS() {
    if (totalLS <= 0) {
        totalLS = 0
    }
    else {
        totalLS = totalLS - 1
        document.querySelector("#totalLS").innerHTML = totalLS
    }
}

function addOneLS() {
    totalLS = totalLS + 1
    document.querySelector("#totalLS").innerHTML = totalLS
}

function minusOneUG() {
    if (totalUG <= 0) {
        totalUG = 0
    }
    else {
        totalUG = totalUG - 1
        document.querySelector("#totalUG").innerHTML = totalUG
    }
}

function addOneUG() {
    totalUG = totalUG + 1
    document.querySelector("#totalUG").innerHTML = totalUG
}

function minusOneGS() {
    if (totalGS <= 0) {
        totalGS = 0
    }
    else {
        totalGS = totalGS - 1
        document.querySelector("#totalGS").innerHTML = totalGS
    }
}

function addOneGS() {
    totalGS = totalGS + 1
    document.querySelector("#totalGS").innerHTML = totalGS
}