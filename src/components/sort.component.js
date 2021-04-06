import {Component} from '../core/component'
import {createSortTemplate} from '../templates/sort.template'

export class SortComponent extends Component {
  getTemplate() {
    return createSortTemplate()
  }
}