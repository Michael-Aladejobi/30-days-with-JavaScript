let count = 0;
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");

function increment() {
    countEl.textContent = count ++;
}
