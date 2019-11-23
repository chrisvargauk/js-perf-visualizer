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
      ${this.include(CompBtnMaximizeView)}
      ${this.include(CompBtnMinimizeView)}
      ${this.include(CompGraph)}
      ${this.include(CompTab)}
    `;
  }
}

class CompBtnMaximizeView extends Component {
  constructor (option, config) {
    super(option, config);

    this.setState({
      isMaximized: this.option.jsPerfVisualizer.isMaximized
    });
  }

  render () {
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

class CompBtnMinimizeView extends Component {
  constructor (option, config) {
    super(option, config);

    this.listKeyDown = [];

    if(this.option.jsPerfVisualizer.isMinimized) {
      this.minimize();
    }

    this.trackKeyEvent();

    window.addEventListener("hashchange", () => {
      if( window.location.hash.indexOf('showJsPerfVisualizer') !== -1 ) {
        this.restore();
      }
    });
  }

  trackKeyEvent() {
    document.addEventListener('keydown', (evt) => {
      this.listKeyDown.push( evt.key );
      if (this.isTriggered()) this.restore();
    }, false);

    document.addEventListener('keyup', (evt) => {
      this.listKeyDown = this.listKeyDown.filter(keyDown => keyDown !== evt.key);
    }, false);
  }

  isTriggered() {
    return this.listKeyDown.indexOf('Control') !== -1 &&
           this.listKeyDown.indexOf('i') !== -1
  }

  render () {
    return `
      <div ui-click="minimize">
        <span class="fas fa-window-minimize"/>
      </div>
    `;
  }

  minimize() {
    this.option.compRoot.dom.parentElement.classList.add('view-minimized');
    this.option.jsPerfVisualizer.isMinimized = true;
    this.option.jsPerfVisualizer.saveData();
  }

  restore() {
    this.option.compRoot.dom.parentElement.classList.remove('view-minimized');
    this.option.jsPerfVisualizer.isMinimized = false;
    this.option.jsPerfVisualizer.saveData();
  }
}

export default CompRoot;