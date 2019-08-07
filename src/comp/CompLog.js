import {Component} from "game-gui";
import './CompLog.scss';

class CompLog extends Component {
  constructor(option, config) {
    super(option, config);

    this.setState({
      listFpsBelowWarnLevel: [],
    });
  }

  render () {
    return `
      ${this.getState().listFpsBelowWarnLevel.map(item => {
        return `
          <div class="${(
            item.fpsCurrent <= 0 ? 'color-font-error' : 'color-font-warn'
            )}"
          >Lagging | FPS: ${item.fpsCurrent} | Time: ${this.formatTime( item.timeFromInit )}</div>
        `;  
      }).join('')} 
    `;
  }

  formatTime (time) {
    return time < 1000 ? time+'ms' : Math.round(time/1000*100)/100+'s';
  }
}

export default CompLog;