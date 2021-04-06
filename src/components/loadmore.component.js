import {createElement} from '../utils/renders'
import {createLoadMoreTemplate} from '../templates/loadmore.template'

export class LoadMoreComponent {
  constructor() {
    this.element = null
  }

  getTemplate() {
    return createLoadMoreTemplate()
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate())
    }

    return this.element
  }
}