const buttonDropDown = document.querySelector('.dropdown')
const DropDownContent = document.querySelector('.dropdown-content')

buttonDropDown.addEventListener('click', function(event) {
  buttonDropDown.classList.toggle('active')
  DropDownContent.classList.toggle('active')
})

document.addEventListener('click', function(event) {
  var clickInsideContent = DropDownContent.contains(event.target)
  var clickButton = buttonDropDown.contains(event.target)
  if(!clickInsideContent && !clickButton) {
    DropDownContent.classList.remove('active')
    buttonDropDown.classList.remove('active')
  }
})

