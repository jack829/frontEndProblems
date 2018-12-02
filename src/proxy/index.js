export function runProxy() {
  const basicObj = {
    name: 'jack'
  }

  const person = new Proxy(basicObj, {
    get(target, name, last) {
      return name in target ? target[name] : 'This key does not exist'
    },
    set(object, prop, value) {
      document.getElementById('proxyEl').textContent = value
      object[prop] = value
      return true
    }
  })

  setUpDom(person)
}

function setUpDom(person) {
  const proxyObjectElement = document.createElement('p')
  proxyObjectElement.id = 'proxyEl'
  proxyObjectElement.textContent = person.name
  document.body.appendChild(proxyObjectElement)

  const input = document.createElement('input')
  input.type = 'text'
  input.addEventListener('keyup', updatePerson.bind(this, person))
  document.body.appendChild(input)
}

function updatePerson(person, { currentTarget, key }) {
  if (key !== 'Enter') return
  person.name = currentTarget.value
  currentTarget.value = ''
}
