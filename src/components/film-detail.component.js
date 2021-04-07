import {Component} from '../core/component'
import {createFilmDetailTemplate} from '../templates/film-detail.template'

export class FilmDetailComponent extends Component {
  #film

  constructor(film) {
    super()

    this.#film = film
  }
  getTemplate() {
    return createFilmDetailTemplate(this.#film)
  }
}