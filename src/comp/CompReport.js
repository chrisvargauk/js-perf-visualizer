import {Component} from "game-gui";
import './CompReport.scss';
import CompLog from "./CompLog";

const dumbCompMark = mark => (`
  <div class="mark">
    <span class="dot"></span>
    ${!isUndef(mark.timeFromInit) ? 'Time: '    +CompLog.formatTime(mark.timeFromInit)             : ''} 
    ${!isUndef(mark.duration)     ? 'Duration: '+CompLog.formatTime(Math.round(mark.duration))  : ''}
    - "${mark.text}"
  </div>
`);

class CompReport extends Component{
  constructor (option, config) {
    super(option, config);

    this.setState({
      dataReport: {
        listMark: []
      }
    });
  }

  render () {
    const dataReport = this.getState().dataReport;

    // Skipp if Report is not generated yet
    if (!dataReport.averageFps) {
      return `<span class="warn">
        Stop Tracking to generate report</span>`;
    }

    return `
      <fieldset>
        <legend>STATISTICS</legend>
        <div class="column">
          <fieldset>
            <legend>Low FPS</legend>
            Lowest: ${dataReport.lowFps.lowest}<br>
            No. Drops: ${dataReport.lowFps.noDrop}<br>
            Average: ${dataReport.lowFps.average}<br>
          </fieldset>
        </div>
        <div class="column">
          <fieldset>
            <legend>General Info</legend>
            Average FPS: ${dataReport.averageFps}<br>
            Longest Lagg.: ${dataReport.laggingLongest}ms<br>
            &nbsp;
          </fieldset>
        </div>
      </fieldset>
      
      <fieldset>  
       <legend>MARKS</legend>
        ${dataReport.listMark.map(item => {
          return item.isPartOfReport ? dumbCompMark(item) : '';  
        }).join('')}
      </fieldset>
    `;
  }

  static formatTime (time) {
    return time < 1000 ? time+'ms' : Math.round(time/1000*100)/100+'s';
  }
}

// Utility
function isUndef( item ) {
  return typeof item === 'undefined';
}

export default CompReport;