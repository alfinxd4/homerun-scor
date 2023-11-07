const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector("#p2-button");
const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const resetBtn = document.querySelector('#reset');
const winPointOption = document.querySelector('#playto');


let p1Score = 0;
let p2Score = 0;
let winPoint = 3;
let isGameOver = false;

const reset = () => {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.style.color = '#f94f6d';
    p2Display.style.color = '#f94f6d';
}

p1Button.addEventListener('click',()=>{
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score == winPoint) {
            isGameOver = true;
        }
    }

    p1Display.textContent = p1Score;
    if (p1Score == winPoint) {
        p1Display.style.color = "green";
    
    }
});

p2Button.addEventListener('click',()=>{
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score == winPoint) {
            isGameOver = true;
        }
    }
    p2Display.textContent = p2Score;
    if (p2Score == winPoint) {
        p2Display.style.color = "green";
    
    }
});

resetBtn.addEventListener('click',()=>{
    reset();
})

winPointOption.addEventListener('change',()=>{
    winPoint = winPointOption.value;
    reset();
})