function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return; // stop the function running all togther
  // audio.currentTime = 0;// rewind to start
  audio.play();
  key.classList.toggle("playing");
};


function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
