import {createElement} from '../utils/renders'
import {createNavigationTemplate} from '../templates/navigation.template'

export class NavigationComponent {
  constructor() {
    this.element = null
  }

  getTemplate() {
    return createNavigationTemplate()
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate())
    }

    return this.element
  }
}