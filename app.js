console.log('JavaScript Connected')

const btn = document.querySelector('#btn');
const background = document.querySelector('body');
const title = document.querySelector('#title');

function randomColor() {
    // background.style.backgroundColor = 'red'
    let r = Math.floor((Math.random() * 255) + 1);
    let g = Math.floor((Math.random() * 255) + 1);
    let b = Math.floor((Math.random() * 255) + 1);

    // console.log(r)
    // console.log(g)
    // console.log(b)

    const newColor = `rgb(${r}, ${g}, ${b})`

    background.style.backgroundColor = newColor;

    title.innerHTML = `RGB Color (${r}, ${g}, ${b})`

}

btn.addEventListener('click', randomColor);