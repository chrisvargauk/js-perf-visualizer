import {Component} from 'game-gui';
import './CompRoot.scss';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import CompGraph from './CompGraph';
import CompTab from "./CompTab";


class CompRoot extends Component {
  constructor (option, config) {
    super(option, config);

    this.option.compRoot = this;
  }

  render () {
    return `
      ${this.include(CompBtnMaxMin)}
      ${this.include(CompGraph)}
      ${this.include(CompTab)}
    `;
  }
}

class CompBtnMaxMin extends Component {
  constructor (option, config) {
    super(option, config);

    this.setState({
      isMaximized: this.option.jsPerfVisualizer.isMaximized
    });
  }

  render (dataFromParent) {
    const btnMax = '<span class="fas fa-window-maximize"/>';
    const btnMin = '<span class="fas fa-window-restore"/>';

    return `
      <div ui-click="handlerClick">
        ${this.getState().isMaximized ? btnMin : btnMax}
      </div>
    `;
  }

  handlerClick () {
    this.option.jsPerfVisualizer.isMaximized = !this.option.jsPerfVisualizer.isMaximized;

    this.setState({
      isMaximized: this.option.jsPerfVisualizer.isMaximized
    });

    if (this.option.jsPerfVisualizer.isMaximized) {
      this.option.compRoot.dom.parentElement.classList.add('view-maximized');
    } else {
      this.option.compRoot.dom.parentElement.classList.remove('view-maximized');
    }
  }
}

export default CompRoot;