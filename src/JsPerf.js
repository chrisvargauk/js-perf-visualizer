// License: MIT | https://github.com/chrisvargauk/js-perf-visualizer/blob/master/LICENSE

import './polyfill/functionName';
import Mark from './Mark';

export class JsPerf {
  constructor ( configOverwrite, GameGUI, CompRoot ) {
    // Config Default/Overwrites
    this.config = {
      fpsTarget:            60,
      fpsWarningLevel:      30,
      isAutoStart:          true,
      isMinimizedByDefault: false,
      ...configOverwrite
    };
    this.config.frameTimeTarget = 1000 / this.config.fpsTarget;

    // Load Saved Data if any
    this.dataDefault = {
      isActiveLogUi:  false,
      isMinimized:    this.config.isMinimizedByDefault,
    };
    const dataLoaded = this.loadData();
    this.isActiveLogUi  = dataLoaded.isActiveLogUi;
    this.isMinimized    = dataLoaded.isMinimized;

    // Create Mark Helper
    this.mark = new Mark(this);

    // Declare/initiate default values
    this.setResetDefault();

    // Start GUI
    if (document.body) {
      this.initGui( GameGUI, CompRoot );
    } else {
      document.addEventListener('DOMContentLoaded', this.initGui.bind( this ));
    }

    // Kick of tracking
    if (this.config.isAutoStart) {
      this.heartbeat();
    }
  }

  setResetDefault() {
    this.idEvtLoop        = 0;
    this.isPaused         = false;
    this.timestampInit    = Date.now();
    this.timestampLast    = this.timestampInit;
    this.listFps          = [];
    this.listFpsAll       = [];
    this.listFpsLow       = [];
    this.listLog          = [];
    this.fpsLowest        = this.config.fpsTarget;
    this.laggingLongest   = 0;
    this.noLowFpsDrop     = 0;
    this.isRun            = false;
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

  initGui ( GameGUI, CompRoot ) {
    // Skip if No GUI is provided
    if (!GameGUI) {
      return;
    }
    
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

      if (fpsCurrent < this.config.fpsWarningLevel ) {
        this.listFpsLow.push( fpsCurrent );

        this.log({
          type: 'fpsWarnLevel',
          idEvtLoop: this.idEvtLoop,
          timeFromInit: timestampNow - this.timestampInit,
          fpsCurrent,
          duration: frameTimeDiff,
        });

        this.noLowFpsDrop++;
      }

      if (fpsCurrent < this.fpsLowest) {
        this.fpsLowest = fpsCurrent;
      }

      if (this.laggingLongest < frameTimeDiff) {
        this.laggingLongest = frameTimeDiff;
      }

      // Update UI
      this.uiUpdateGraphAndFps(fpsCurrent);

      this.timestampLast = timestampNow;

      this.idEvtLoop++;
    }

    this.tokenTimeout = setTimeout(this.heartbeat.bind( this ), this.config.frameTimeTarget);
  }

  log ( item ) {
    this.listLog.unshift(item);

    // UI update
    if (!this.isActiveLogUi) return;
    if (!this.gui) return;

    const compLog = this.gui.getCompByType('CompLog')[0];
    compLog.setState({
      listLog: this.listLog,
    });
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

    const listMark    = this.listLog.filter(item => item.isPartOfReport);
    const listLowFps  = this.listLog.filter(item => item.type === 'fpsWarnLevel');

    const dataReport = {
      averageFps:         Math.round(this.listFpsAll.reduce((sum, fps) => sum + fps, 0) / this.listFpsAll.length),
      laggingLongest:     Math.round(this.laggingLongest),
      lowFps: {
        average:  -1,
        lowest:   -1,
        noDrop:   -1,
      },
      listMark,
      listLowFps,
    };

    // If there was any FPS registered in the Low Range
    if ( this.listFpsLow.length ) {
      dataReport.lowFps.average = Math.round(this.listFpsLow.reduce((sum, fps) => sum + fps, 0) / this.listFpsLow.length);
      dataReport.lowFps.lowest  = Math.round(this.fpsLowest);
      dataReport.lowFps.noDrop  = Math.round(this.noLowFpsDrop);
    }

    // Update related UI if ready
    const compReport = this.gui ? this.gui.getCompByType('CompReport')[0] : undefined;
    if ( compReport ) {
      compReport.setState({dataReport});
    }

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
  }

  start() {
    // Skipp if already running
    if (this.isRun) throw('ERROR: Can\'t start JS Perf Runner, it\'s is already running.');

    this.setResetDefault();
    this.mark.setResetDefault();
    this.isRun = true;

    // Update related UI if ready
    // Note:  when you call start the very first time, GUI is probably not ready yet,
    //        but when you stop and start multiple times then GUI has to reset.
    const compReport = this.gui ? this.gui.getCompByType('CompReport')[0] : undefined;
    if (compReport) {
      compReport.setResetDefault();
    }

    const compLog = this.gui ? this.gui.getCompByType('CompLog')[0] : undefined;
    if (compLog) {
      compLog.setResetDefault();
    }

    this.heartbeat();
  }

  stop() {
    // Skipp if not running yet
    if (!this.isRun) throw('ERROR: Can\'t stop JS Perf Runner, it\'s is NOT running yet.');
    clearTimeout(this.tokenTimeout);
    this.isRun = false;

    // Note:  dont reset anything here, you might need the data for the report,
    //        do it instead at start.
  }
}

// Util
const formatNumber = function (num, lengthMax) {
  const spaceLength = lengthMax - (num+'').length;
  const space = (new Array(spaceLength+1)).join(' ');

  return space+num;
};

export default JsPerf;