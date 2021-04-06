import {createElement} from '../utils/renders'

export class Component {
  constructor() {
    this.element = null

    if (new.target === Component) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`)
    }
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`)
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate())
    }

    return this.element
  }
}