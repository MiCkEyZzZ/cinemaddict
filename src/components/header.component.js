import {Component} from '../core/component'
import {createHeaderTemplate} from '../templates/header.template'

export class HeaderComponent extends Component {
  getTemplate() {
    return createHeaderTemplate()
  }
}