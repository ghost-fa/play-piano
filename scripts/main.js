function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return; // stop the function running all togther
  // audio.currentTime = 0;// rewind to start
  audio.play();
  key.classList.toggle("playing");
};
