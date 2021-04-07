import {Component} from '../core/component'
import {createFilmCardTemplate} from '../templates/film-card.template'

export class FilmCardComponent extends Component {
  #element
  #film

  constructor(film) {
    super()

    this.#element = null
    this.#film = film
  }

  getTemplate() {
    return createFilmCardTemplate(this.#film)
  }
}