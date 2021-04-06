import {createElement} from '../utils/renders'
import {createFilmsListTemplate} from '../templates/films-list.template'

export class FilmsListComponent {
  constructor(className, title, isHiddenTitle) {
    this.element = null
    this.className = className
    this.title = title
    this.isHiddenTitle = isHiddenTitle
  }

  getTemplate() {
    return createFilmsListTemplate(this.className, this.title, this.isHiddenTitle)
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate())
    }

    return this.element
  }
}