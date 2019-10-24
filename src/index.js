// License: MIT | https://github.com/chrisvargauk/js-perf-visualizer/blob/master/LICENSE

import JsPerf from './JsPerf';
import GameGUI from 'game-gui';
import CompRoot from './comp/CompRoot';

class JsPerfVisualizer extends JsPerf {
  constructor ( configOverwrite ) {
    super(configOverwrite, GameGUI, CompRoot);
  }
}

export { JsPerf };
export default JsPerfVisualizer;