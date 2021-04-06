import {Component} from '../core/component'
import {createNavigationTemplate} from '../templates/navigation.template'

export class NavigationComponent extends Component {
  getTemplate() {
    return createNavigationTemplate()
  }
}