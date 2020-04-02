import './styles.css'

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const theme = document.getElementById('theme');


let state = 0;

function count() {
    counter.textContent = state.toString();
}

addBtn.addEventListener('click', () => {
    state++;
    count();
});

subBtn.addEventListener('click', () => {
    state--;
    count();
});

asyncBtn.addEventListener('click', () => {
setTimeout(() => {
    state++;
    count();
}, 2000)
});

theme.addEventListener('click', () => {
document.body.classList.toggle('dark');
});


count();

