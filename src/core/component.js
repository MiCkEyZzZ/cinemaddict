import {createElement} from '../utils/renders'

export class Component {
  #element
  callback = {}

  constructor() {
    this.#element = null

    if (new.target === Component) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`)
    }
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`)
  }

  getElement() {
    if (!this.#element) {
      this.#element = createElement(this.getTemplate())
    }

    return this.#element
  }

  removeElement() {
    this.#element = null
  }
}