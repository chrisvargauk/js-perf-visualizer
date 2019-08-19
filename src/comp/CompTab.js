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
      ],
      idTabActiveDefault: 'report'
    };

    this.dataDefault = {
      idTabActiveDefault: this.config.idTabActiveDefault,
    };

    const dataLoaded = this.loadData();
    this.config = {
      ...this.config,
      ...dataLoaded,
    };

    this.noOfTab = Object.keys(this.config.listTab).length;

    this.setState({
      idTabActive: this.config.idTabActiveDefault
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
    });

    this.saveData();
  }

  saveData() {
    localStorage.compTab = JSON.stringify({
      idTabActiveDefault: this.getState().idTabActive
    });
  }

  loadData() {
    // Return Default Data if nothing saved;
    if (!localStorage.compTab) {
      // Return a copy of default data
      return JSON.parse(JSON.stringify(this.dataDefault));
    }

    return JSON.parse(localStorage.compTab);
  }
}

export default CompTab;