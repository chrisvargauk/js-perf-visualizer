var Graph = function ( selector, heightPercentageLine ) {
  this.init = function ( selector ) {
    this.selector = selector;
    this.dPasteDiffPackageHistory = document.querySelector( this.selector );

    // Skip if Dome element is not ready yet
    if ( this.dPasteDiffPackageHistory === null ) {
      return;
    }

    this.context = this.dPasteDiffPackageHistory.getContext("2d");
    this.heightPercentageLine = heightPercentageLine;
  };

  this.update = function ( listData ) {
    // Skip if Dome element is not ready yet
    if ( this.dPasteDiffPackageHistory === null ) {
      this.init( this.selector );
      return;
    }

    this.context.clearRect(0, 0, this.dPasteDiffPackageHistory.width, this.dPasteDiffPackageHistory.height);

    var pasteDiffPackagemax = Math.max.apply(null, listData);
    var heightMax = pasteDiffPackagemax <= this.heightPercentageLine ?
                      this.heightPercentageLine * 1.2 :
                      pasteDiffPackagemax  * 1.2;
    var unitHeight = this.dPasteDiffPackageHistory.height / heightMax;

    // Draw percentage line
    this.context.strokeStyle="#FF0000";
    this.line(0, this.dPasteDiffPackageHistory.height - this.heightPercentageLine * unitHeight, this.dPasteDiffPackageHistory.width, this.dPasteDiffPackageHistory.height - this.heightPercentageLine * unitHeight);
    this.context.strokeStyle="#000000";

    var withUnit = this.dPasteDiffPackageHistory.width / (listData.length - 1);

    var xPrev = 0,
        yPrev = 0;
    for (var indexListPasteDiffPackage = 0; indexListPasteDiffPackage < listData.length; indexListPasteDiffPackage++) {
      var pasteDiffPackage = listData[indexListPasteDiffPackage];

      var x2 = indexListPasteDiffPackage * withUnit,
        y2 = this.dPasteDiffPackageHistory.height - pasteDiffPackage * unitHeight,
        x1 = xPrev,
        y1 = yPrev;

      this.line(x1, y1, x2, y2);

      xPrev = x2;
      yPrev = y2;
    }
  };

  this.line = function (x1, y1, x2, y2) {
    this.context.lineCap = "round";
    this.context.beginPath();

    this.context.moveTo( x1 || 0, y1 || 0 );
    this.context.lineTo( x2 || 0, y2 || 0);

    this.context.stroke();

    this.context.closePath();
  };

  this.init( selector );
};

export default Graph;