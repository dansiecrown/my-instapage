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