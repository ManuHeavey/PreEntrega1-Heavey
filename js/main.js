const priceLS = 1000
const priceUG = 5000
const priceGS = 8000

function newUser(){
    let userName = prompt("Name")
    let userStr = prompt("Strenght")
    let userDex = prompt("Dexterity")

    const userInfo = {
        name: userName,
        str: userStr,
        dex: userDex
    }

    showInfo(userInfo.name, userInfo.str, userInfo.dex)
}
newUser()

function showInfo(name, str, dex){
    let textW = ""
    const lgStats = {
        str:10,
        dex:10
    }
    const ugStats = {
        str:11,
        dex:16
    }
    const gsStats = {
        str:31,
        dex:12
    }
    
    if (str >= gsStats.str && dex >= ugStats.dex) { //Chequea el uso de todas las armas
        textW = "You can use every weapon."
    } else if (str >= ugStats.str && str <= gsStats.str && dex >= ugStats.dex) { //Chequea uso de UG y LG
        textW = "You can wield the Uchigatana and the Logsword, but not the Greatsword."
    } else if (str >= gsStats.str && dex >= gsStats.dex && dex < ugStats.dex) { //Chequea el uso de LG y GS
        textW = "You can wield the Longsword and the Greatsword, but not the Uchigatana."
    } else if (str >= lgStats.str && str <= ugStats.str && dex >= lgStats.str && dex <= gsStats.dex) { //Chequea el uso de LG
        textW = "You can only wiled the Longsword."
    } else textW = "You cant wield any weapons... Start leveling up some stats!" //No puede usar nada
    
    console.log(textW)

    alert(`Welcome ${name}, your strenght stat is ${str} and your dexterity stat is ${dex}. Check the console log to know which weapons you can use! Enjoy your stay.`)
}

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