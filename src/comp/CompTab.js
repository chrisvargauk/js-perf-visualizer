import {Component} from 'game-gui';
import"./CompTab.scss";
import CompLog from "./CompLog";
import CompSetting from "./CompSetting";

class CompTab extends Component {
  constructor (option, config) {
    super(option, config);

    this.config = {
      listTab: [
        {
          id: 'log',
          label: 'LOGS'
        },
        {
          id: 'setting',
          label: 'SETTINGS'
        }
      ]
    };

    this.setState({
      idTabActive: 'log'
    });
  }

  render () {
    return `
      ${this.config.listTab.map(tab => (`
        <div class="btn btn-tab ${this.getState().idTabActive === tab.id ? 'active' : ''}" 
             ui-click="handlerClickTab" data-id="${tab.id}">${tab.label}</div>
      `)).join('')}
     
      <div class="tab tab-log ${this.getState().idTabActive === 'log' ? 'active' : ''}">
        ${this.include(CompLog)}
      </div>
      <div class="tab tab-setting ${this.getState().idTabActive === 'setting' ? 'active' : ''}">
        ${this.include(CompSetting)}
      </div>
    `;
  }

  handlerClickTab ( evt ) {
    this.setState({
      idTabActive: evt.target.dataset.id
    })
  }
}

export default CompTab;