const row = document.getElementsByClassName("rows")

const prev = document.getElementById("prev")
const next = document.getElementById("next")
let counter = 0
next.addEventListener('click', toNext)
prev.addEventListener('click', toPrev)

function toNext() {
    console.log(counter)
    if (counter == 0) {
        toggle()

    } else if (counter == 4) {
        row[counter].style.display = 'none'
        row[0].style.display = 'block'
        counter = 0
    } else {
        toggle()
    }
}

function toggle() {
    row[counter].style.display = 'none'
    row[counter + 1].style.display = 'block'
    counter += 1
}

function toPrev() {
    if (counter == 0) {
        row[counter].style.display = 'none'
        row[4].style.display = 'block'
        counter = 4
    } else {
        row[counter].style.display = 'none'
        row[counter - 1].style.display = 'block'
        counter -= 1
    }
}


const prod = document.getElementById("products")
const produl = document.getElementById("products-ul")
const produp = document.getElementById("prod2")
const proddown = document.getElementById("prod1")
prod.addEventListener('click', stretch)

let prodshow = false

function stretch() {

    if (prodshow == true) {
        produl.style.display = 'none'
        proddown.style.display = 'block'
        produp.style.display = 'none'


        prodshow = false
    } else if (prodshow == false) {
        produl.style.display = 'block'
        proddown.style.display = 'none'
        produp.style.display = 'block'
        prodshow = true
    }
}


const sol = document.getElementById("solutions")
const solul = document.getElementById("solutions-ul")
const solup = document.getElementById("sol2")
const soldown = document.getElementById("sol1")
sol.addEventListener('click', solstretch)

let solshow = false

function solstretch() {
    if (solshow == true) {
        solul.style.display = 'none'
        soldown.style.display = 'block'
        solup.style.display = 'none'
        solshow = false
    } else if (solshow == false) {
        solul.style.display = 'block'
        soldown.style.display = 'none'
        solup.style.display = 'block'
        solshow = true
    }
}


const res = document.getElementById("resource")
const resul = document.getElementById("resource-ul")
const resup = document.getElementById("res2")
const resdown = document.getElementById("res1")
res.addEventListener('click', resstretch)

let resshow = false

function resstretch() {
    if (resshow == true) {
        resul.style.display = 'none'
        resdown.style.display = 'block'
        resup.style.display = 'none'
        resshow = false
    } else if (resshow == false) {
        resul.style.display = 'block'
        resdown.style.display = 'none'
        resup.style.display = 'block'
        resshow = true
    }
}

const sup = document.getElementById("support")
const supul = document.getElementById("support-ul")
const supup = document.getElementById("sup2")
const supdown = document.getElementById("sup1")
sup.addEventListener('click', supstretch)

let supshow = false

function supstretch() {
    if (supshow == true) {
        supul.style.display = 'none'
        supdown.style.display = 'block'
        supup.style.display = 'none'
        supshow = false
    } else if (supshow == false) {
        supul.style.display = 'block'
        supdown.style.display = 'none'
        supup.style.display = 'block'
        supshow = true
    }
}


const com = document.getElementById("company")
const comul = document.getElementById("company-ul")
const comup = document.getElementById("com2")
const comdown = document.getElementById("com1")
com.addEventListener('click', comstretch)

let comshow = false

function comstretch() {
    if (comshow == true) {
        comul.style.display = 'none'
        comdown.style.display = 'block'
        comup.style.display = 'none'
        comshow = false
    } else if (comshow == false) {
        comul.style.display = 'block'
        comdown.style.display = 'none'
        comup.style.display = 'block'
        comshow = true
    }
}