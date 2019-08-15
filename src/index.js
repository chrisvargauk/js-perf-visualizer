import './polyfill/functionName';
import GameGUI from 'game-gui';
import CompRoot from './comp/CompRoot';
import Mark from './Mark';

class JsPerfVisualizer {
  constructor ( configOverwrite ) {
    this.config = {
        fpsTarget: 60,
        fpsWarningLevel: 30,
        ...configOverwrite
    };
    this.config.frameTimeTarget = 1000 / this.config.fpsTarget;

    this.idEvtLoop        = 0;
    this.isPaused         = false;
    this.timestampInit    = Date.now();
    this.timestampLast    = this.timestampInit;
    this.listFps          = [];
    this.listFpsLow       = [];
    this.listLog          = [];
    this.fpsLowest        = this.config.fpsTarget;
    this.laggingLongest   = 0;
    this.noLowFpsDrop     = 0;

    this.dataDefault = {
      isActiveLogUi: false,
    };
    const dataLoaded = this.loadData();
    this.isActiveLogUi  = dataLoaded.isActiveLogUi;

    this.mark = new Mark(this);

    if (document.body) {
      this.initGraph();
    } else {
      document.addEventListener('DOMContentLoaded', this.initGraph.bind( this ));
    }

    // Kick of tracking
    this.timeoutTracker();
  }

  saveData() {
    localStorage.jsPerfVisualizer = JSON.stringify({
      isActiveLogUi: this.isActiveLogUi,
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

  timeoutTracker() {
    if (!this.isPaused) {
      const timestampNow = Date.now();
      const frameTimeCurrent = timestampNow - this.timestampLast;
      const frameTimeDiff = frameTimeCurrent - this.config.frameTimeTarget;
      let fpsCurrent = 1000 / frameTimeCurrent;

      // Filter off "unexpected" spikes - Looking at you IE
      fpsCurrent = this.config.fpsTarget < fpsCurrent ? this.config.fpsTarget : fpsCurrent;

      this.listFps.push( fpsCurrent );

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

    setTimeout(this.timeoutTracker.bind( this ), this.config.frameTimeTarget);
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
    const listMark = this.listLog.filter(item => item.isPartOfReport);

    const dataReport = {
      averageFps:         Math.round(this.listFps.reduce((sum, fps) => sum + fps, 0) / this.listFps.length),
      laggingLongest:     this.laggingLongest.toFixed(2),
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
}

export default JsPerfVisualizer;