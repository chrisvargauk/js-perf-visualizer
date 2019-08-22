// License: MIT | https://github.com/chrisvargauk/js-perf-visualizer/blob/master/LICENSE

import './polyfill/functionName';
import GameGUI from 'game-gui';
import CompRoot from './comp/CompRoot';
import Mark from './Mark';

class JsPerfVisualizer {
  constructor ( configOverwrite ) {
    this.config = {
        fpsTarget:            60,
        fpsWarningLevel:      30,
        isAutoStart:          true,
        isMinimizedByDefault: false,
        ...configOverwrite
    };
    this.config.frameTimeTarget = 1000 / this.config.fpsTarget;

    this.idEvtLoop        = 0;
    this.isPaused         = false;
    this.timestampInit    = Date.now();
    this.timestampLast    = this.timestampInit;
    this.listFps          = [];
    this.listFpsAll       = [];
    this.listFpsObj       = [];
    this.listFpsLow       = [];
    this.listLog          = [];
    this.fpsLowest        = this.config.fpsTarget;
    this.laggingLongest   = 0;
    this.noLowFpsDrop     = 0;
    this.isRun            = false;

    this.dataDefault = {
      isActiveLogUi:  false,
      isMinimized:    this.config.isMinimizedByDefault,
    };
    const dataLoaded = this.loadData();
    this.isActiveLogUi  = dataLoaded.isActiveLogUi;
    this.isMinimized    = dataLoaded.isMinimized;

    this.mark = new Mark(this);

    if (document.body) {
      this.initGraph();
    } else {
      document.addEventListener('DOMContentLoaded', this.initGraph.bind( this ));
    }

    // Kick of tracking
    if (this.config.isAutoStart) {
      this.heartbeat();
    }
  }

  saveData() {
    localStorage.jsPerfVisualizer = JSON.stringify({
      isActiveLogUi:  this.isActiveLogUi,
      isMinimized:    this.isMinimized,
    });
  }

  loadData() {
    // Return Default Data if nothing saved;
    if (!localStorage.jsPerfVisualizer) {
      // Return a copy of default data
      return JSON.parse(JSON.stringify(this.dataDefault));
    }

    return JSON.parse(localStorage.jsPerfVisualizer);
  }

  initGraph () {
    console.log('Graph is getting initialized..');
    document.body.insertAdjacentHTML('afterBegin', '<div id="js-perf-visualizer-root"></div>');
    this.gui = new GameGUI(CompRoot, '#js-perf-visualizer-root', {
      jsPerfVisualizer: this,
    });
  }

  heartbeat() {
    if (!this.isPaused) {
      const timestampNow = Date.now();
      const frameTimeCurrent = timestampNow - this.timestampLast;
      const frameTimeDiff = frameTimeCurrent - this.config.frameTimeTarget;
      let fpsCurrent = 1000 / frameTimeCurrent;

      // Filter off "unexpected" spikes - Looking at you IE
      fpsCurrent = this.config.fpsTarget < fpsCurrent ? this.config.fpsTarget : fpsCurrent;

      this.listFps.push( fpsCurrent );
      this.listFpsAll.push( fpsCurrent );

      if (1000 / this.config.fpsTarget * 9 < this.listFps.length) {
        this.listFps.shift();
      }

      const fpsObj = {
        type:       'fpsRecord',
        fps:        fpsCurrent,
        timestamp:  timestampNow,
        idEvtLoop:  this.idEvtLoop,
        frameTimeDiff,
      };
      this.listFpsObj.push(fpsObj);

      // this.processFps( fpsObj );
      if (this.isProcessing) {
        this.processBuffer( this.listFpsObj );
      }

      this.timestampLast = timestampNow;

      this.idEvtLoop++;
    }

    setTimeout(this.heartbeat.bind( this ), this.config.frameTimeTarget);
  }

  processBuffer( listFpsObj ) {
    let fpsObj;
    while( listFpsObj.length ) {
      fpsObj = listFpsObj.shift();
      switch(fpsObj.type) {
        case 'fpsRecord': this.processFps( fpsObj ); break;
        case 'log':       this.processLog( fpsObj.item );
      }
    }

    // Update UI
    this.uiUpdateGraphAndFps(fpsObj.fps);
  }

  processFps( fpsObj ) {
    this.listFps.push( fpsObj.fps );
    if (1000 / this.config.fpsTarget * 9 < this.listFps.length) {
      this.listFps.shift();
    }

    // Check for FPS in Low Range
    if (fpsObj.fps < this.config.fpsWarningLevel ) {
      this.listFpsLow.push( fpsObj.fps );

      // Log FPS in Low Range
      this.processLog({
        type: 'fpsWarnLevel',
        idEvtLoop: fpsObj.idEvtLoop,
        timeFromInit: fpsObj.timestamp - this.timestampInit,
        fpsCurrent: fpsObj.fps,
        duration: fpsObj.frameTimeDiff,
      });

      this.noLowFpsDrop++;
    }

    // Record Lowest FPS
    if (fpsObj.fps < this.fpsLowest) {
      this.fpsLowest = fpsObj.fps;
    }

    // Record Longest Lagging
    if (this.laggingLongest < fpsObj.frameTimeDiff) {
      this.laggingLongest = fpsObj.frameTimeDiff;
    }
  }

  processLog ( item ) {
    this.listLog.unshift(item);

    // UI update
    if (!this.isActiveLogUi) return;
    if (!this.gui) return;

    const compLog = this.gui.getCompByType('CompLog')[0];
    compLog.setState({
      listLog: this.listLog,
    });
  }

  log ( item ) {
    // Add to "this.listFpsObj" with Type "log"
    this.listFpsObj.push({
      type: 'log',
      item
    });

    // // UI update
    // if (!this.isActiveLogUi) return;
    // if (!this.gui) return;
    //
    // const compLog = this.gui.getCompByType('CompLog')[0];
    // compLog.setState({
    //   listLog: this.listLog,
    // });
  }

  uiUpdateGraphAndFps( fpsCurrent ) {
    if (!this.gui) return;

    // Update Graph
    const compGraph = this.gui.getCompByType('CompGraph')[0];
    compGraph.graph.update(this.listFps);

    const compFps = this.gui.getCompByType('CompFps')[0];
    compFps.setState({
      fpsCurrent,
    });
  }

  logUiOnOff( onOrOff ) {
    this.isActiveLogUi = onOrOff;

    this.saveData();

    if (!this.gui) {
      console.warn('UI for logging was turned on but you might not see anything because it wasn\'t instantiated yet..');
      return;
    }

    const compLog = this.gui.getCompByType('CompLog')[0];
    compLog.setState({
      listLog: this.listLog,
    });
  }

  genReport() {
    if (this.gui) {
      // Update Graph to show all the recorded FPS not only the last couple of seconds.
      const compGraph = this.gui.getCompByType('CompGraph')[0];
      compGraph.graph.update(this.listFpsAll);
    }

    const listMark = this.listLog.filter(item => item.isPartOfReport);

    const dataReport = {
      averageFps:         Math.round(this.listFpsAll.reduce((sum, fps) => sum + fps, 0) / this.listFpsAll.length),
      laggingLongest:     Math.round(this.laggingLongest),
      lowFps: {
        average:  Math.round(this.listFpsLow.reduce((sum, fps) => sum + fps, 0) / this.listFpsLow.length),
        lowest:   Math.round(this.fpsLowest),
        noDrop:   Math.round(this.noLowFpsDrop),
      },
      listMark,

    };
    const CompReport = this.gui.getCompByType('CompReport')[0];
    CompReport.setState({dataReport});

    return dataReport;
  }

  genReportAsString() {
    const report = this.genReport();

    const lengthDurationLongest = report.listMark.reduce((lengthDurationLongest, mark) => {
      const length = (mark.duration+'').length;
      return lengthDurationLongest < length ? length : lengthDurationLongest;
    }, -1);

    const reportAsText = `
    * ************************* *
    * JS PERF VISUALIZER REPORT *
    * ************************* *
    
    GENERAL INFO
    > Average FPS : ${report.averageFps}
    > Longest Lagg: ${report.laggingLongest}
    
    FPS IN LOW RANGE
    > Average FPS: ${report.lowFps.average}
    > Lowest FPS : ${report.lowFps.lowest}
    > No Drops   : ${report.lowFps.noDrop}
    
    MARKS
    ${report.listMark.map(mark => '> Duration: '+formatNumber(mark.duration, lengthDurationLongest)+'ms "'+ mark.text+'"').join('\n')}
    `.replace(/\n    /g, '\n');

    console.log(reportAsText);
    console.log(report);
  }

  start() {
    // Skipp if already running
    if (this.isRun) throw('ERROR: Can\'t start JS Perf Runner, it\'t is already running.');

    this.isRun          = true;
    this.timestampInit  = Date.now();
    this.timestampLast  = this.timestampInit;

    this.heartbeat();
  }
}

// Util
const formatNumber = function (num, lengthMax) {
  const spaceLength = lengthMax - (num+'').length;
  const space = (new Array(spaceLength+1)).join(' ');

  return space+num;
};

export default JsPerfVisualizer;