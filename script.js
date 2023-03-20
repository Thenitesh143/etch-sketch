const grid = document.querySelector('.grid')
// const black = document.querySelector('black')
// const rainbow = document.querySelector('rainbow')


let btn = 'black'

function rainbow() {

    const randomColor = randomColorgenerator()
    btn = randomColor
    console.log(btn)
}

function randomColorgenerator() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}
function black() {
    btn = 'black'
    console.log(btn)
}

let colorButton = btn

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div')
    div.classList.add('cell')
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = btn
    })
    grid.appendChild(div)
}

