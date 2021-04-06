import {Component} from '../core/component'
import {createFilmDetailTemplate} from '../templates/film-detail.template'

export class FilmDetailComponent extends Component {
  getTemplate() {
    return createFilmDetailTemplate()
  }
}