import {Component} from '../core/component'
import {createFilmsTemplate} from '../templates/films.template'

export class FilmsComponent extends Component {
  getTemplate() {
    return createFilmsTemplate()
  }
}