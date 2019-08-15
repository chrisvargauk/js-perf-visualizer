class Mark {
  constructor( jsPerfVisualizer ) {
    console.log('Mark ins initializing..');
    this.jsPerfVisualizer       = jsPerfVisualizer;
    this.timestampInit          = this.jsPerfVisualizer.timestampInit;
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
      timeFromInit:   timestampNow - this.timestampInit,
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
    mark.timeFromInit   = mark.timestampStop - this.timestampInit;
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

export default Mark;