import {Component} from '../core/component'
import {createFilmsListTemplate} from '../templates/films-list.template'

export class FilmsListComponent extends Component {
  #element
  #className
  #title
  #isHiddenTitle

  constructor(className, title, isHiddenTitle) {
    super()

    this.#element = null
    this.#className = className
    this.#title = title
    this.#isHiddenTitle = isHiddenTitle
  }

  getTemplate() {
    return createFilmsListTemplate(this.#className, this.#title, this.#isHiddenTitle)
  }
}