import {Component} from '../core/component'
import {createLoadMoreTemplate} from '../templates/loadmore.template'

export class LoadMoreComponent extends Component {
  getTemplate() {
    return createLoadMoreTemplate()
  }

  setHandleClick(cb) {
    this.getElement().addEventListener(`click`, cb)
  }
}