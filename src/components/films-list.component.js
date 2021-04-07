import {Component} from '../core/component'
import {createFilmsListTemplate} from '../templates/films-list.template'

export class FilmsListComponent extends Component {
  #className
  #title
  #isHiddenTitle

  constructor(className, title, isHiddenTitle) {
    super()

    this.#className = className
    this.#title = title
    this.#isHiddenTitle = isHiddenTitle
  }

  getTemplate() {
    return createFilmsListTemplate(this.#className, this.#title, this.#isHiddenTitle)
  }
}