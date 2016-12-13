window.addEventListener('keydown', function(e){
    const audio = document.querySelector('audio[data-button="' + e.keyCode + '"]');
    const button = document.querySelector('button[data-button="' + e.keyCode + '"]');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    button.classList.add('playing');
});


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));