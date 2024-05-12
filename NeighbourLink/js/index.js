const textEl = document.getElementById('text')
// const speedEl = document.getElementById('speed')
const speedEl = 1
const text = 'NeighbourLink'
let idx = 1
let speed = 200

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value )