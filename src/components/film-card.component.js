import {Component} from '../core/component'
import {createFilmCardTemplate} from '../templates/film-card.template'

export class FilmCardComponent extends Component {
  constructor(films) {
    super()

    this.element = null
    this.films = films
  }

  getTemplate() {
    return createFilmCardTemplate(this.films)
  }
}