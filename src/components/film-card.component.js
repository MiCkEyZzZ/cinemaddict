import {createElement} from '../utils/renders'
import {createFilmCardTemplate} from '../templates/film-card.template'

export class FilmCardComponent {
  constructor(films) {
    this.element = null
    this.films = films
  }

  getTemplate() {
    return createFilmCardTemplate()
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate())
    }

    return this.element
  }
}