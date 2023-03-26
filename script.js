const grid = document.querySelector('.grid')
const rainbowBtn = document.querySelector('#rainbow-btn')
const blackBtn = document.querySelector('#black-btn')
const myColor = document.getElementById("myColor");
const eraserBtn = document.getElementById("eraser-btn");
const clearBtn = document.getElementById("clear-btn");

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div')
    div.classList.add('cell')
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = myColor.value
    })
    grid.appendChild(div)
}

// clearBtn.addEventListener('click', () => {
//     grid.addEventListener('click', (e) => {
//         e.target.style.backgroundColor = 'white'
//     })
// })

eraserBtn.addEventListener('click', () => {
    grid.addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'white'
    })
})

rainbowBtn.addEventListener('click', () => {
    grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = randomColor()
    })
})

blackBtn.addEventListener('click', () => {
    grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black'
    })
})

function randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return `rgb(${r},${g},${b})`
}