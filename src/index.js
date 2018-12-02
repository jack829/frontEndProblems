import './style.css'
import logo from './images/logo.png'

function addText() {
  const element = document.createElement('p')
  element.innerHTML = 'Hello'
  element.classList.add('hello')
  return element
}

function addFavicon() {
  const image = document.createElement('img')
  image.height = 100
  image.width = 100
  image.src = logo
  return image
}

document.body.appendChild(addText())
document.body.appendChild(addFavicon())
