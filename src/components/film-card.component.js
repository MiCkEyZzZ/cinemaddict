import {Component} from '../core/component'
import {createFilmCardTemplate} from '../templates/film-card.template'

export class FilmCardComponent extends Component {
  #film

  constructor(film) {
    super()

    this.#film = film
  }

  getTemplate() {
    return createFilmCardTemplate(this.#film)
  }

  setHandleOpenButtonClick(callback) {
    this.getElement().querySelectorAll(`.film-card__poster, .film-card__comments, .film-card__title`)
        .forEach(element => element.addEventListener(`click`, callback))
  }
}