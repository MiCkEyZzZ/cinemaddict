export const createElement = template => {
  const newElement = document.createElement(`div`)
  newElement.innerHTML = template

  return newElement.firstElementChild
}

export const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template)
}