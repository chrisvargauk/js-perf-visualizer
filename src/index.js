import './polyfill/functionName';
import GameGUI from 'game-gui';
import CompRoot from './comp/CompRoot';

class JsPerfDoctor {
  constructor ( configOverwrite ) {
    this.config = {
        fpsTarget: 60,
        fpsWarningLevel: 30,
        ...configOverwrite
    };

    this.timestampInit = Date.now();
    this.timestampLast = this.timestampInit
    this.listDiff = [];
    this.listFpsBelowWarnLevel = [];

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
    document.body.insertAdjacentHTML('afterBegin', '<div id="js-perf-doctor-root"></div>');
    this.gui = new GameGUI(CompRoot, '#js-perf-doctor-root', {
      jsPerfDoctor: this,
    });
  }

  initTracking() {
    setTimeout(() => {
      const timestampNow = Date.now();
      const diff = timestampNow - this.timestampLast;
      const fpsCurrent = 2 * this.config.fpsTarget - diff;
      this.listDiff.push(fpsCurrent);

      // Update UI
      this.uiUpdate(fpsCurrent, timestampNow);

      if (1000 / this.config.fpsTarget * 9 < this.listDiff.length) {
        this.listDiff.shift();
      }
      this.timestampLast = timestampNow;

      this.initTracking();
    }, this.config.fpsTarget);
  }

  uiUpdate(fpsCurrent, timestampNow) {
    if (!this.gui) return;

    const compFps = this.gui.getCompByType('CompFps')[0];
    compFps.setState({
      fpsCurrent
    });

    if (fpsCurrent < this.config.fpsWarningLevel ) {
      this.listFpsBelowWarnLevel.unshift({
        timeFromInit: timestampNow - this.timestampInit,
        fpsCurrent,
      });

      const compLog = this.gui.getCompByType('CompLog')[0];
      compLog.setState({
        listFpsBelowWarnLevel: this.listFpsBelowWarnLevel,
      });

    }

    // Update Graph
    const compGraph = this.gui.getCompByType('CompGraph')[0];
    compGraph.graph.update(this.listDiff);
  }
}

export default JsPerfDoctor;