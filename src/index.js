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

    this.idEvtLoop = 0;
    this.isPaused = false;
    this.timestampInit = Date.now();
    this.timestampLast = this.timestampInit;
    this.listDiff = [];
    this.listLog = [];

    this.mark = new Mark(this);

    // Kick of tracking ASAP
    this.initTracking();

    if (document.body) {
      this.initGraph();
    } else {
      document.addEventListener('DOMContentLoaded', this.initGraph.bind( this ));
    }
  }

  initGraph () {
    console.log('Graph is getting initialized..');
    document.body.insertAdjacentHTML('afterBegin', '<div id="js-perf-visualizer-root"></div>');
    this.gui = new GameGUI(CompRoot, '#js-perf-visualizer-root', {
      jsPerfVisualizer: this,
    });
  }

  initTracking() {
    if (!this.isPaused) {
      const timestampNow = Date.now();
      const diff = timestampNow - this.timestampLast;
      const fpsCurrent = 2 * this.config.fpsTarget - diff;
      const duration = diff - this.config.fpsTarget;
      this.listDiff.push( fpsCurrent );

      if (fpsCurrent < this.config.fpsWarningLevel ) {
        this.log({
          type: 'fpsWarnLevel',
          idEvtLoop: this.idEvtLoop,
          timeFromInit: timestampNow - this.timestampInit,
          fpsCurrent,
          duration,
        });
      }

      // Update UI
      this.uiUpdateGraphAndFps(fpsCurrent);

      this.timestampLast = timestampNow;

      this.idEvtLoop++;
    }

    setTimeout(this.initTracking.bind( this ), this.config.fpsTarget);
  }

  log ( item ) {
    this.listLog.unshift(item);

    if (1000 / this.config.fpsTarget * 9 < this.listDiff.length) {
      this.listDiff.shift();
    }

    // UI update
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
    compGraph.graph.update(this.listDiff);

    const compFps = this.gui.getCompByType('CompFps')[0];
    compFps.setState({
      fpsCurrent,
    });
  }
}

export default JsPerfVisualizer;