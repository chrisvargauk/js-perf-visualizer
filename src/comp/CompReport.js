import {Component} from "game-gui";
import './CompReport.scss';
import CompLog from "./CompLog";

const dumbCompMark = mark => (`
  <div class="mark">
    <span class="dot"></span>
    ${!isUndef(mark.timeFromInitStart) && !isUndef(mark.timeFromInitStop) ? CompLog.formatTime(mark.timeFromInitStart)+'-'+CompLog.formatTime(mark.timeFromInitStop) : ''} 
    ${!isUndef(mark.duration)     ? 'Duration: '+CompLog.formatTime(Math.round(mark.duration))  : ''}
    - "${mark.text}"
  </div>
`);

const dumbCompTimelineItem = mark => (`
  <div class="timeline-item">
    <div style="margin-left: ${mark.timeFromInitStart}px">"${mark.text}"</div>
    <div class="bar">
      <div class="duration" style="margin-left: ${mark.timeFromInitStart}px; width: ${(2 <= mark.duration ? mark.duration : 2)}px"></div>
    </div>
  </div>
`);

const dumbCompLowFpsOverlayItem = mark => (`
  <div class="item" style="left: ${(mark.timeFromInit-mark.duration)}px; width: ${(2 <= mark.duration ? mark.duration : 2)}px"></div>
`);

class CompReport extends Component{
  constructor (option, config) {
    super(option, config);
    this.setResetDefault();
  }

  setResetDefault() {
    this.setState( this.stateDefault() );
  }

  stateDefault() {
    return JSON.parse(JSON.stringify({
      dataReport: {
        listMark:   [],
        listLowFps: [],
      }
    }));
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
      
      <fieldset>  
        <legend>TIMELINE</legend>
        <div class="wrapper">
          ${dataReport.listMark.sort((a, b) => {
            return a.ctr - b.ctr;
          }).map(item => {
            return item.isPartOfReport ? dumbCompTimelineItem(item) : '';
          }).join('')}
          
          <div class="low-fps-overlay">
            ${dataReport.listLowFps.map(item => {
              return dumbCompLowFpsOverlayItem(item);
            }).join('')}
          </div>
          
        </div>
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