import {Component} from "game-gui";
import './CompLog.scss';

const dumbCompFpsWarnLevel = (item, classBg) => {
  return `
    <div class="log ${classBg}">
      Time: ${CompLog.formatTime( item.timeFromInit )}
      Duration: ${CompLog.formatTime(Math.round(item.duration))}
      FPS: ${Math.round(item.fpsCurrent)}
      LID: ${item.idEvtLoop}
      - Lagging 
    </div>
  `;
};

const dumbCompIndentation = indentLevel => {
  if(indentLevel === 0) return '';

  let html = '<span style="display: inline-block;">';
  for (let i=0; i<indentLevel; i++) {
    html+='<span  class="indentation">|</span>';
  }
  html += '</span>';

  return html;
};

const dumbCompMark = (mark, classBg) => (`
  <div class="mark ${classBg}">
    ${dumbCompIndentation(mark.indentLevel)}<span class="dot"></span> 
    ${!isUndef(mark.timeFromInit) ? 'Time: '    +CompLog.formatTime(mark.timeFromInit)             : ''} 
    ${!isUndef(mark.duration)     ? 'Duration: '+CompLog.formatTime(Math.round(mark.duration))  : ''}
    LID: ${mark.idEvtLoopStart}/${mark.idEvtLoopStop}
    - "${mark.text}"
  </div>
`);

class CompLog extends Component {
  constructor(option, config) {
    super(option, config);

    this.setState({
      listLog: [],
    });
  }

  render () {
    let idEvtLoopPrev = -1;
    let ctrIdEvtLoopDifference = 0;
    let fpsLast;

    return `
      ${!this.option.jsPerfVisualizer.isActiveLogUi ? `<span class="warn">
        WARNING: UI For Logging is Inactive, go to settings ot activate it.</span>` : ''}
      
      ${this.getState().listLog.map(item => {
        const idEvtLoop = item.idEvtLoop || item.idEvtLoopStop;
        
        if (idEvtLoopPrev !== idEvtLoop ) {
          ctrIdEvtLoopDifference++; 
        }
        
        idEvtLoopPrev = idEvtLoop;

        fpsLast = typeof item.fpsCurrent !== 'undefined' ? item.fpsCurrent : fpsLast; 
        const classBg = this.calcBgClass(fpsLast, ctrIdEvtLoopDifference % 2);
        switch (item.type) {
          case 'fpsWarnLevel': return dumbCompFpsWarnLevel(item, classBg);
          case 'mark':         return dumbCompMark(item, classBg);
        }
      }).join('')}
    `;
  }

  static formatTime (time) {
    return time < 1000 ? time+'ms' : Math.round(time/1000*100)/100+'s';
  }

  calcBgClass(fps, isIdEvtLoopDifferent) {
    let classBg = 'bg';

    if (fps < 1) {
      classBg += '-error';
    } else if(fps < this.option.jsPerfVisualizer.config.fpsWarningLevel) {
      classBg += '-warn';
    } else {
      classBg += '-log';
    }

    if (isIdEvtLoopDifferent) {
      classBg += '-a';
    } else {
      classBg += '-b';
    }

    return classBg;
  }
}

// Utility
function isUndef( item ) {
  return typeof item === 'undefined';
}
export default CompLog;