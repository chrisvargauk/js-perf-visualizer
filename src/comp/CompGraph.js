import {Component} from "game-gui";
import "./CompGraph.scss";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import Graph from "../lib/Graph";

class CompGraph extends Component {
  constructor (option, config) {
    super(option, config);

    this.isDraggingActive = false;
    this.pageXLast;
    this.pageYLast;

    this.dataDefault = {
      positionX: 0,
      positionY: 0,
    };

    const dataLoaded = this.loadData();
    this.positionX = dataLoaded.positionX;
    this.positionY = dataLoaded.positionY;

    this.position( this.positionY, this.positionX );
  }

  render () {
    return `
      <div class="head">JS PERF VISUALIZER</div>
      <canvas id="graph-root"></canvas>
      ${this.include(CompFps)}
      ${this.include(CompBtnPausePlay)}
    `;
  }

  afterRender() {
    this.dom.addEventListener('mousedown', this.handlerMouseDown.bind( this ));
    this.dom.addEventListener('mousemove', this.handlerMouseMove.bind( this ));
    this.dom.addEventListener('mouseup', this.handlerMouseUp.bind( this ));

    this.graph = new Graph('#graph-root', this.option.jsPerfVisualizer.config.fpsWarningLevel);
  }

  handlerMouseDown( evt ) {
    this.isDraggingActive = true;
    console.log('Mouse Down');
    this.pageXLast = evt.pageX;
    this.pageYLast = evt.pageY;
  }

  handlerMouseMove(evt) {
    // Skip if inactive
    if (!this.isDraggingActive) return;

    this.pageXLast = this.pageXLast || evt.pageX;
    const pageXdiff = evt.pageX - this.pageXLast;
    this.pageXLast = evt.pageX;
    this.pageYLast = this.pageYLast || evt.pageY;
    const pageYdiff = evt.pageY - this.pageYLast;
    this.pageYLast = evt.pageY;

    const dJsPerfVisualizerRoot = document.getElementById('js-perf-visualizer-root');

    let topOrigin = dJsPerfVisualizerRoot.style.top.replace('px', '');
    topOrigin = topOrigin || 0;

    let leftOrigin = dJsPerfVisualizerRoot.style.left.replace('px', '');
    leftOrigin = leftOrigin || 0;

    this.positionX = parseInt(leftOrigin) + pageXdiff;
    this.positionY = parseInt(topOrigin) + pageYdiff;

    this.position(this.positionY, this.positionX)
  }

  position(top, left) {
    const dJsPerfVisualizerRoot = document.getElementById('js-perf-visualizer-root');
    dJsPerfVisualizerRoot.style.top = top + 'px';
    dJsPerfVisualizerRoot.style.left = left +'px';
  }

  handlerMouseUp() {
    this.isDraggingActive = false;
    this.saveData();
  }

  saveData() {
    localStorage.compGraph = JSON.stringify({
      positionX: this.positionX,
      positionY: this.positionY,
    });
  }

  loadData() {
    // Return Default Data if nothing saved;
    if (!localStorage.compGraph) {
      // Return a copy of default data
      return JSON.parse(JSON.stringify(this.dataDefault));
    }

    return JSON.parse(localStorage.compGraph);
  }
}

class CompFps extends Component {
  constructor( option, config ) {
    super( option, config );

    this.setState({
      fpsCurrent: 0,
    });
  }

  render () {
    const fpsCurrent = this.getState().fpsCurrent;
    return `
      <span class="${(
        fpsCurrent < this.option.jsPerfVisualizer.config.fpsWarningLevel ? 'red' : ''
      )}">
        ${this.option.jsPerfVisualizer.config.fpsTarget}/${Math.round(fpsCurrent)}
      </span>
    `;
  }
}

class CompBtnPausePlay extends Component {
  constructor (option, config) {
    super(option, config);

    this.setState({
      isPaused: this.option.jsPerfVisualizer.isPaused
    });
  }

  render () {
    const btnPlay = '<span class="fas fa-play-circle"/>';
    const btnPause = '<span class="fas fa-pause-circle"/>';

    return `
      <div ui-click="handlerClick">
        ${this.getState().isPaused ? btnPlay : btnPause}
      </div>
    `;
  }

  handlerClick () {
    this.option.jsPerfVisualizer.isPaused = !this.option.jsPerfVisualizer.isPaused;

    this.setState({
      isPaused: this.option.jsPerfVisualizer.isPaused
    });

    this.option.jsPerfVisualizer.genReport();
  }
}

export default CompGraph;