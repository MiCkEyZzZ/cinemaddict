import {createElement} from '../utils/renders'
import {createFooterTemplate} from '../templates/footer.template'

export class FooterComponent {
  constructor() {
    this.element = null
  }

  getTemplate() {
    return createFooterTemplate()
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate())
    }

    return this.element
  }
}