import {createElement} from '../utils/renders'
import {createFilmDetailTemplate} from '../templates/film-detail.template'

export class FilmDetailComponent {
  constructor() {
    this.element = null
  }

  getTemplate() {
    return createFilmDetailTemplate()
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate())
    }

    return this.element
  }
}