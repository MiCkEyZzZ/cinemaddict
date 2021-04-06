export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
}

export const createElement = template => {
  const newElement = document.createElement(`div`)
  newElement.innerHTML = template

  return newElement.firstElementChild
}

export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element.getElement())
      break
    case RenderPosition.BEFOREEND:
      container.append(element.getElement())
      break
  }
}