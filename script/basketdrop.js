const button = document.querySelector('.basketbtn')
const buttondrop = document.querySelector('.basket-content')

button.addEventListener('click', function(e) {
  button.classList.toggle('active')
  buttondrop.classList.toggle('active')
})

document.addEventListener('click', function(event) {
  var clickInsideContent = button.contains(event.target)
  var clickButton = buttondrop.contains(event.target)
  if(!clickInsideContent && !clickButton) {
    button.classList.remove('active')
    buttondrop.classList.remove('active')
  }
})

