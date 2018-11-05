
function removeTransition(e) {
  if (e.propertyName === "transform") {
    this.classList.remove("playing")
  }
}

function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
  key.classList.add("playing")
  audio.play()
  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))

}

window.addEventListener('keydown', playSound)
