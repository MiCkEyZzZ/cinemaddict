import {createElement} from '../utils/renders'
import {createSortTemplate} from '../templates/sort.template'

export class SortComponent {
  constructor() {
    this.element = null
  }

  getTemplate() {
    return createSortTemplate()
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate())
    }

    return this.element
  }
}