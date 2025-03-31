function isOn(check) {
  let buttonElement = document.querySelector('.game-button')

  if (!buttonElement.classList.contains('is-toggled') && check === 'game') {
  buttonElement.classList.add('is-toggled')
  } else if (buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.remove('is-toggled')
  }

  buttonElement = document.querySelector('.music-button')
  
  if (!buttonElement.classList.contains('is-toggled') && check === 'music') {
  buttonElement.classList.add('is-toggled')
  } else if (buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.remove('is-toggled')
  } 

  buttonElement = document.querySelector('.tech-button')
  
  if (!buttonElement.classList.contains('is-toggled') && check === 'tech') {
  buttonElement.classList.add('is-toggled')
  } else if (buttonElement.classList.contains('is-toggled')) {
   buttonElement.classList.remove('is-toggled')
  } 


}