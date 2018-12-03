export function setClickHandlers() {
  const outer = document.createElement('div')
  outer.style.backgroundColor = 'red'
  outer.style.width = '200px'
  outer.style.height = '200px'
  outer.addEventListener('click', onClickOuter)

  const inner = document.createElement('div')
  inner.style.backgroundColor = 'blue'
  inner.style.width = '125px'
  inner.style.height = '125px'
  // The third argument is whether or not you get listen to the "capture" (true)
  // or bubble (false) phase. Capture phase is first and goes down the tree to the element,
  // at which time the event turns around and "bubbles" back out to the root
  inner.addEventListener('click', onClickInner, true)
  outer.appendChild(inner)

  const innermost = document.createElement('div')
  innermost.style.backgroundColor = 'green'
  innermost.style.width = '50px'
  innermost.style.height = '50px'
  innermost.addEventListener('click', onClickInnermost, true)
  inner.appendChild(innermost)

  document.body.appendChild(outer)
}

function onClickOuter(e) {
  console.log('outer')
}

function onClickInner(e) {
  console.log('inner')
}

function onClickInnermost(e) {
  console.log('innermost')
}
