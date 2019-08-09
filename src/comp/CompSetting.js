import {Component} from "game-gui";
import "./CompSetting.scss";

class CompSetting extends Component{
  constructor (option, config) {
    super(option, config);

    this.setState({
      isActiveLogUi: this.option.jsPerfVisualizer.isActiveLogUi,
    });
  }

  render () {
    return `
      <div class="btn ${this.getState().isActiveLogUi ? 'active' : ''}" 
           ui-click="handlerClickConsoleOnOff">Logs</div>
    `
  }

  handlerClickConsoleOnOff( evt ) {
    console.log('handlerClickConsoleOnOff');

    this.setState({
      isActiveLogUi: !this.getState().isActiveLogUi,
    });

    this.option.jsPerfVisualizer.logUiOnOff( this.getState().isActiveLogUi );
  }
}

export default CompSetting;