import {Component} from '../core/component'
import {createFooterTemplate} from '../templates/footer.template'

export class FooterComponent extends Component {
  getTemplate() {
    return createFooterTemplate()
  }
}