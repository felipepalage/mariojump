/*Consts Settings*/
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


/*Jump Settings*/
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}


/*Loop Settings*/
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'

        gameOver.currentTime = 0.1;
        gameOver.volume = 0.2;
        gameOver.play();

        clearInterval(loop);
    }
}, 10);


/*Keydown*/
document.addEventListener('keydown', jump);