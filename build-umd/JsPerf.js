(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JsPerf"] = factory();
	else
		root["JsPerf"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/polyfill/functionName.js
var functionName = __webpack_require__(4);

// CONCATENATED MODULE: ./src/Mark.js
class Mark {
  constructor( jsPerfVisualizer ) {
    console.log('Mark ins initializing..');
    this.jsPerfVisualizer = jsPerfVisualizer;
    this.setResetDefault();
  }

  setResetDefault() {
    this.listObjMarkStart       = {};
    this.markLatest             = undefined;
    this.ctr                    = -1;
  }

  start( markText, isPartOfReport ) {
    if ( this.listObjMarkStart[ markText ] ) {
      console.error(`Error: JS Perf Visualizer / Mark: mark already exists: ${markText}`);
      return;
    }

    const timestampNow = Date.now();
    this.listObjMarkStart[ markText ] = {
      type: 'mark',
      ctr: ++this.ctr,
      idEvtLoopStart: this.jsPerfVisualizer.idEvtLoop,
      idEvtLoopStop:  undefined,
      timestampStart: timestampNow,
      timeFromInit:   timestampNow - this.jsPerfVisualizer.timestampInit,
      timestampStop:  undefined,
      duration:       undefined,
      text:           markText,
      indentLevel:    0,
      isPartOfReport,
    };

    this.markLatest = this.listObjMarkStart[ markText ];
  }

  stop( markText ) {
    if ( !this.listObjMarkStart[ markText ] ) {
      console.error(`Error: JS Perf Visualizer / Mark: Cant stop mark ("${markText}") because there is not start mark ("${markText}") registered yet.`);
      return;
    }

    const mark = this.listObjMarkStart[ markText ];
    mark.timestampStop  = Date.now();
    mark.timeFromInit   = mark.timestampStop - this.jsPerfVisualizer.timestampInit;
    mark.duration       = mark.timestampStop - mark.timestampStart;
    mark.idEvtLoopStop  = this.jsPerfVisualizer.idEvtLoop;
    mark.indentLevel    = Object.keys(this.listObjMarkStart).length - 1;

    this.jsPerfVisualizer.log( mark );

    delete this.listObjMarkStart[ markText ];
    delete this.markLatest;
  }

  here( markText ) {
    this.start( markText );
    this.stop( markText );
  }

  getLatest() {
    if (!this.markLatest) {
      return;
    }

    return JSON.parse(JSON.stringify(this.markLatest));
  }
}

/* harmony default export */ var src_Mark = (Mark);
// CONCATENATED MODULE: ./src/JsPerf.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsPerf", function() { return JsPerf_JsPerf; });
// License: MIT | https://github.com/chrisvargauk/js-perf-visualizer/blob/master/LICENSE




class JsPerf_JsPerf {
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
    this.mark = new src_Mark(this);

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

    const listMark = this.listLog.filter(item => item.isPartOfReport);

    const dataReport = {
      averageFps:         Math.round(this.listFpsAll.reduce((sum, fps) => sum + fps, 0) / this.listFpsAll.length),
      laggingLongest:     Math.round(this.laggingLongest),
      lowFps: {
        average:  -1,
        lowest:   -1,
        noDrop:   -1,
      },
      listMark,
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

/* harmony default export */ var src_JsPerf = __webpack_exports__["default"] = (JsPerf_JsPerf);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Hack in support for Function.name for browsers that don't support it.
 * IE, I'm looking at you.
 * Source: https://matt.scharley.me/2012/03/monkey-patch-name-ie.html
 **/
if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
  Object.defineProperty(Function.prototype, 'name', {
    get: function() {
      var funcNameRegex = /function\s([^(]{1,})\(/;
      var results = (funcNameRegex).exec((this).toString());
      return (results && results.length > 1) ? results[1].trim() : "";
    },
    set: function(value) {}
  });
}

/***/ })
/******/ ]);
});