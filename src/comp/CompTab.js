import {Component} from 'game-gui';
import"./CompTab.scss";
import CompLog from "./CompLog";
import CompReport from "./CompReport";
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
          id: 'report',
          label: 'REPORT'
        },
        {
          id: 'setting',
          label: 'SETTINGS'
        }
      ]
    };

    this.noOfTab = Object.keys(this.config.listTab).length;

    this.setState({
      idTabActive: 'log'
    });
  }

  render () {
    return `
      ${this.config.listTab.map(tab => (`
        <div class="btn btn-tab ${this.getState().idTabActive === tab.id ? 'active' : ''}"
             style="width: ${100/this.noOfTab}%" 
             ui-click="handlerClickTab" data-id="${tab.id}">${tab.label}</div>
      `)).join('')}
     
      <div class="tab tab-log ${this.getState().idTabActive === 'log' ? 'active' : ''}">
        ${this.include(CompLog)}
      </div>
      <div class="tab tab-log ${this.getState().idTabActive === 'report' ? 'active' : ''}">
        ${this.include(CompReport)}
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