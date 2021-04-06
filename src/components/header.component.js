import {createElement} from '../utils/renders'
import {createHeaderTemplate} from '../templates/header.template'

export class HeaderComponent {
  constructor() {
    this.element = null
  }

  getTemplate() {
    return createHeaderTemplate()
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate())
    }

    return this.element
  }
}