import {createElement} from '../utils/renders'
import {createFilmsTemplate} from '../templates/films.template'

export class FilmsComponent {
  constructor() {
    this.element = null
  }

  getTemplate() {
    return createFilmsTemplate()
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate())
    }

    return this.element
  }
}