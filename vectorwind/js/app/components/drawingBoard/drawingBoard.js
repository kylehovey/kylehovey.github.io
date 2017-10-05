"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DrawingBoard = function () {
  /**
   * Construct a DrawingBoard
   * @param {Object} options object
   * @param {String} options.canvasId ID of canvas element
   * @param {Array} options.center Center of coordinate space
   * @param {Number} options.width Width of window in coordinate space
   *  (height in coordinate space is calculated based upon aspect ratio)
   */
  function DrawingBoard(options) {
    _classCallCheck(this, DrawingBoard);

    // Store options
    this._parameters = options;

    // Get canvas

    // Create context
    var _$ = $("#" + this._parameters.canvasId);

    var _$2 = _slicedToArray(_$, 1);

    this._canvas = _$2[0];
    this._ctx = this._canvas.getContext("2d");

    // Resize canvas
    this.resize();
  }

  /**
   * Resize the canvas
   */


  _createClass(DrawingBoard, [{
    key: "resize",
    value: function resize() {
      // Set canvas width
      this._ctx.canvas.width = window.innerWidth;
      this._ctx.canvas.height = window.innerHeight;

      // Update internal state
      this._width = window.innerWidth;
      this._height = window.innerHeight;
      this._pixelCenter = [this._width, this._height].map(function (x) {
        return x / 2;
      });

      // Update size of coordinate space
      this._parameters.height = this._parameters.width * this._height / this._width;
      this._parameters.unitsPerPixel = this._parameters.width / this._width;
    }

    /**
     * Clear the canvas
     */

  }, {
    key: "clear",
    value: function clear() {
      this._ctx.clearRect(0, 0, this._width, this._height);
    }

    /**
     * Get a random point from within our coordinate space
     * @return {Array}
     */

  }, {
    key: "getRandomPoint",
    value: function getRandomPoint() {
      return [_.random(-this._parameters.width / 2, this._parameters.width / 2, true), _.random(-this._parameters.height / 2, this._parameters.height / 2, true)];
    }

    /**
     * Given some [x, y] from the origin, determine location pixel-wise
     * @param {Number} x Horizontal coordinate (coordinate space)
     * @param {Number} y Vertical coordinate (coordinate space)
     * @return {Array}
     */

  }, {
    key: "_toPixels",
    value: function _toPixels(x, y) {
      // Easier values for center
      var _pixelCenter = _slicedToArray(this._pixelCenter, 2),
          cX = _pixelCenter[0],
          cY = _pixelCenter[1];

      return [Math.round(cX + x / this._parameters.unitsPerPixel), Math.round(cY - y / this._parameters.unitsPerPixel)];
    }

    /**
     * Draw a rectangle on the board
     * @param {Number} x Starting horizontal coordinate (pixel space)
     * @param {Number} y Starting vertical coordinate (pixel space)
     * @param {Number} width Width of rectangle (pixel space)
     * @param {Number} height Height of rectangle (pixel space)
     * @param {String} color Color of rectangle
     */

  }, {
    key: "_drawRectangle",
    value: function _drawRectangle(x, y, width, height, color) {
      // Begin path
      this._ctx.beginPath();

      // Draw rectangle
      this._ctx.rect(x, y, width, height);
      this._ctx.fillStyle = color;
      this._ctx.fill();

      // Close path
      this._ctx.closePath();
    }

    /**
     * Draw a particle on the board
     * @param {Number} x Horizontal location (coordinate space)
     * @param {Number} y Vertical location (coordinate space)
     * @param {String} color Particle color
     * @param {Number} size Particle width and height
     */

  }, {
    key: "drawParticle",
    value: function drawParticle(x, y) {
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#000";
      var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;

      // Determine location in pixel space
      var _toPixels2 = this._toPixels(x, y),
          _toPixels3 = _slicedToArray(_toPixels2, 2),
          cX = _toPixels3[0],
          cY = _toPixels3[1];

      // Draw square centered at that location


      this._drawRectangle(cX - size / 2, cY - size / 2, size, size, color);
    }

    /**
     * Fill the board with a given color
     * @param {String} color Color to fill
     */

  }, {
    key: "fill",
    value: function fill(color) {
      this._drawRectangle(0, 0, this._width, this._height, color);
    }
  }]);

  return DrawingBoard;
}();

;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZHJhd2luZ0JvYXJkL2RyYXdpbmdCb2FyZC5qcyJdLCJuYW1lcyI6WyJEcmF3aW5nQm9hcmQiLCJvcHRpb25zIiwiX3BhcmFtZXRlcnMiLCIkIiwiY2FudmFzSWQiLCJfY2FudmFzIiwiX2N0eCIsImdldENvbnRleHQiLCJyZXNpemUiLCJjYW52YXMiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIl93aWR0aCIsIl9oZWlnaHQiLCJfcGl4ZWxDZW50ZXIiLCJtYXAiLCJ4IiwidW5pdHNQZXJQaXhlbCIsImNsZWFyUmVjdCIsIl8iLCJyYW5kb20iLCJ5IiwiY1giLCJjWSIsIk1hdGgiLCJyb3VuZCIsImNvbG9yIiwiYmVnaW5QYXRoIiwicmVjdCIsImZpbGxTdHlsZSIsImZpbGwiLCJjbG9zZVBhdGgiLCJzaXplIiwiX3RvUGl4ZWxzIiwiX2RyYXdSZWN0YW5nbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQU1BLFk7QUFDSjs7Ozs7Ozs7QUFRQSx3QkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJELE9BQW5COztBQUVBOztBQUdBO0FBUG1CLGFBS0FFLFFBQU0sS0FBS0QsV0FBTCxDQUFpQkUsUUFBdkIsQ0FMQTs7QUFBQTs7QUFLakIsU0FBS0MsT0FMWTtBQVFuQixTQUFLQyxJQUFMLEdBQVksS0FBS0QsT0FBTCxDQUFhRSxVQUFiLENBQXdCLElBQXhCLENBQVo7O0FBRUE7QUFDQSxTQUFLQyxNQUFMO0FBQ0Q7O0FBRUQ7Ozs7Ozs7NkJBR1M7QUFDUDtBQUNBLFdBQUtGLElBQUwsQ0FBVUcsTUFBVixDQUFpQkMsS0FBakIsR0FBeUJDLE9BQU9DLFVBQWhDO0FBQ0EsV0FBS04sSUFBTCxDQUFVRyxNQUFWLENBQWlCSSxNQUFqQixHQUEwQkYsT0FBT0csV0FBakM7O0FBRUE7QUFDQSxXQUFLQyxNQUFMLEdBQWNKLE9BQU9DLFVBQXJCO0FBQ0EsV0FBS0ksT0FBTCxHQUFlTCxPQUFPRyxXQUF0QjtBQUNBLFdBQUtHLFlBQUwsR0FBb0IsQ0FDbEIsS0FBS0YsTUFEYSxFQUVsQixLQUFLQyxPQUZhLEVBR2xCRSxHQUhrQixDQUdkO0FBQUEsZUFBS0MsSUFBRSxDQUFQO0FBQUEsT0FIYyxDQUFwQjs7QUFLQTtBQUNBLFdBQUtqQixXQUFMLENBQWlCVyxNQUFqQixHQUEwQixLQUFLWCxXQUFMLENBQWlCUSxLQUFqQixHQUF5QixLQUFLTSxPQUE5QixHQUFzQyxLQUFLRCxNQUFyRTtBQUNBLFdBQUtiLFdBQUwsQ0FBaUJrQixhQUFqQixHQUFpQyxLQUFLbEIsV0FBTCxDQUFpQlEsS0FBakIsR0FBeUIsS0FBS0ssTUFBL0Q7QUFDRDs7QUFFRDs7Ozs7OzRCQUdRO0FBQ04sV0FBS1QsSUFBTCxDQUFVZSxTQUFWLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLEtBQUtOLE1BQS9CLEVBQXVDLEtBQUtDLE9BQTVDO0FBQ0Q7O0FBRUQ7Ozs7Ozs7cUNBSWlCO0FBQ2YsYUFBTyxDQUNMTSxFQUFFQyxNQUFGLENBQVMsQ0FBQyxLQUFLckIsV0FBTCxDQUFpQlEsS0FBbEIsR0FBd0IsQ0FBakMsRUFBb0MsS0FBS1IsV0FBTCxDQUFpQlEsS0FBakIsR0FBdUIsQ0FBM0QsRUFBOEQsSUFBOUQsQ0FESyxFQUVMWSxFQUFFQyxNQUFGLENBQVMsQ0FBQyxLQUFLckIsV0FBTCxDQUFpQlcsTUFBbEIsR0FBeUIsQ0FBbEMsRUFBcUMsS0FBS1gsV0FBTCxDQUFpQlcsTUFBakIsR0FBd0IsQ0FBN0QsRUFBZ0UsSUFBaEUsQ0FGSyxDQUFQO0FBSUQ7O0FBRUQ7Ozs7Ozs7Ozs4QkFNVU0sQyxFQUFHSyxDLEVBQUc7QUFDZDtBQURjLHdDQUVLLEtBQUtQLFlBRlY7QUFBQSxVQUVOUSxFQUZNO0FBQUEsVUFFRkMsRUFGRTs7QUFJZCxhQUFPLENBQ0xDLEtBQUtDLEtBQUwsQ0FBV0gsS0FBS04sSUFBSSxLQUFLakIsV0FBTCxDQUFpQmtCLGFBQXJDLENBREssRUFFTE8sS0FBS0MsS0FBTCxDQUFXRixLQUFLRixJQUFJLEtBQUt0QixXQUFMLENBQWlCa0IsYUFBckMsQ0FGSyxDQUFQO0FBSUQ7O0FBRUQ7Ozs7Ozs7Ozs7O21DQVFlRCxDLEVBQUdLLEMsRUFBR2QsSyxFQUFPRyxNLEVBQVFnQixLLEVBQU87QUFDekM7QUFDQSxXQUFLdkIsSUFBTCxDQUFVd0IsU0FBVjs7QUFFQTtBQUNBLFdBQUt4QixJQUFMLENBQVV5QixJQUFWLENBQWVaLENBQWYsRUFBa0JLLENBQWxCLEVBQXFCZCxLQUFyQixFQUE0QkcsTUFBNUI7QUFDQSxXQUFLUCxJQUFMLENBQVUwQixTQUFWLEdBQXNCSCxLQUF0QjtBQUNBLFdBQUt2QixJQUFMLENBQVUyQixJQUFWOztBQUVBO0FBQ0EsV0FBSzNCLElBQUwsQ0FBVTRCLFNBQVY7QUFDRDs7QUFFRDs7Ozs7Ozs7OztpQ0FPYWYsQyxFQUFHSyxDLEVBQTZCO0FBQUEsVUFBMUJLLEtBQTBCLHVFQUFsQixNQUFrQjtBQUFBLFVBQVZNLElBQVUsdUVBQUgsQ0FBRzs7QUFDM0M7QUFEMkMsdUJBRXhCLEtBQUtDLFNBQUwsQ0FBZWpCLENBQWYsRUFBa0JLLENBQWxCLENBRndCO0FBQUE7QUFBQSxVQUVuQ0MsRUFGbUM7QUFBQSxVQUUvQkMsRUFGK0I7O0FBSTNDOzs7QUFDQSxXQUFLVyxjQUFMLENBQW9CWixLQUFLVSxPQUFLLENBQTlCLEVBQWlDVCxLQUFLUyxPQUFLLENBQTNDLEVBQThDQSxJQUE5QyxFQUFvREEsSUFBcEQsRUFBMEROLEtBQTFEO0FBQ0Q7O0FBRUQ7Ozs7Ozs7eUJBSUtBLEssRUFBTztBQUNWLFdBQUtRLGNBQUwsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEIsS0FBS3RCLE1BQS9CLEVBQXVDLEtBQUtDLE9BQTVDLEVBQXFEYSxLQUFyRDtBQUNEOzs7Ozs7QUFDRiIsImZpbGUiOiJjb21wb25lbnRzL2RyYXdpbmdCb2FyZC9kcmF3aW5nQm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEcmF3aW5nQm9hcmQge1xuICAvKipcbiAgICogQ29uc3RydWN0IGEgRHJhd2luZ0JvYXJkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5jYW52YXNJZCBJRCBvZiBjYW52YXMgZWxlbWVudFxuICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zLmNlbnRlciBDZW50ZXIgb2YgY29vcmRpbmF0ZSBzcGFjZVxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy53aWR0aCBXaWR0aCBvZiB3aW5kb3cgaW4gY29vcmRpbmF0ZSBzcGFjZVxuICAgKiAgKGhlaWdodCBpbiBjb29yZGluYXRlIHNwYWNlIGlzIGNhbGN1bGF0ZWQgYmFzZWQgdXBvbiBhc3BlY3QgcmF0aW8pXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgLy8gU3RvcmUgb3B0aW9uc1xuICAgIHRoaXMuX3BhcmFtZXRlcnMgPSBvcHRpb25zO1xuXG4gICAgLy8gR2V0IGNhbnZhc1xuICAgIFsgdGhpcy5fY2FudmFzIF0gPSAkKGAjJHt0aGlzLl9wYXJhbWV0ZXJzLmNhbnZhc0lkfWApO1xuXG4gICAgLy8gQ3JlYXRlIGNvbnRleHRcbiAgICB0aGlzLl9jdHggPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgLy8gUmVzaXplIGNhbnZhc1xuICAgIHRoaXMucmVzaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzaXplIHRoZSBjYW52YXNcbiAgICovXG4gIHJlc2l6ZSgpIHtcbiAgICAvLyBTZXQgY2FudmFzIHdpZHRoXG4gICAgdGhpcy5fY3R4LmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuX2N0eC5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgLy8gVXBkYXRlIGludGVybmFsIHN0YXRlXG4gICAgdGhpcy5fd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLl9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5fcGl4ZWxDZW50ZXIgPSBbXG4gICAgICB0aGlzLl93aWR0aCxcbiAgICAgIHRoaXMuX2hlaWdodFxuICAgIF0ubWFwKHggPT4geC8yKTtcblxuICAgIC8vIFVwZGF0ZSBzaXplIG9mIGNvb3JkaW5hdGUgc3BhY2VcbiAgICB0aGlzLl9wYXJhbWV0ZXJzLmhlaWdodCA9IHRoaXMuX3BhcmFtZXRlcnMud2lkdGggKiB0aGlzLl9oZWlnaHQvdGhpcy5fd2lkdGg7XG4gICAgdGhpcy5fcGFyYW1ldGVycy51bml0c1BlclBpeGVsID0gdGhpcy5fcGFyYW1ldGVycy53aWR0aCAvIHRoaXMuX3dpZHRoO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBjYW52YXNcbiAgICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuX2N0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcmFuZG9tIHBvaW50IGZyb20gd2l0aGluIG91ciBjb29yZGluYXRlIHNwYWNlXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgZ2V0UmFuZG9tUG9pbnQoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIF8ucmFuZG9tKC10aGlzLl9wYXJhbWV0ZXJzLndpZHRoLzIsIHRoaXMuX3BhcmFtZXRlcnMud2lkdGgvMiwgdHJ1ZSksXG4gICAgICBfLnJhbmRvbSgtdGhpcy5fcGFyYW1ldGVycy5oZWlnaHQvMiwgdGhpcy5fcGFyYW1ldGVycy5oZWlnaHQvMiwgdHJ1ZSlcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHNvbWUgW3gsIHldIGZyb20gdGhlIG9yaWdpbiwgZGV0ZXJtaW5lIGxvY2F0aW9uIHBpeGVsLXdpc2VcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHggSG9yaXpvbnRhbCBjb29yZGluYXRlIChjb29yZGluYXRlIHNwYWNlKVxuICAgKiBAcGFyYW0ge051bWJlcn0geSBWZXJ0aWNhbCBjb29yZGluYXRlIChjb29yZGluYXRlIHNwYWNlKVxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIF90b1BpeGVscyh4LCB5KSB7XG4gICAgLy8gRWFzaWVyIHZhbHVlcyBmb3IgY2VudGVyXG4gICAgY29uc3QgWyBjWCwgY1kgXSA9IHRoaXMuX3BpeGVsQ2VudGVyO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIE1hdGgucm91bmQoY1ggKyB4IC8gdGhpcy5fcGFyYW1ldGVycy51bml0c1BlclBpeGVsKSxcbiAgICAgIE1hdGgucm91bmQoY1kgLSB5IC8gdGhpcy5fcGFyYW1ldGVycy51bml0c1BlclBpeGVsKVxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBhIHJlY3RhbmdsZSBvbiB0aGUgYm9hcmRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHggU3RhcnRpbmcgaG9yaXpvbnRhbCBjb29yZGluYXRlIChwaXhlbCBzcGFjZSlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkgU3RhcnRpbmcgdmVydGljYWwgY29vcmRpbmF0ZSAocGl4ZWwgc3BhY2UpXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCBXaWR0aCBvZiByZWN0YW5nbGUgKHBpeGVsIHNwYWNlKVxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiByZWN0YW5nbGUgKHBpeGVsIHNwYWNlKVxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgQ29sb3Igb2YgcmVjdGFuZ2xlXG4gICAqL1xuICBfZHJhd1JlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xuICAgIC8vIEJlZ2luIHBhdGhcbiAgICB0aGlzLl9jdHguYmVnaW5QYXRoKCk7XG5cbiAgICAvLyBEcmF3IHJlY3RhbmdsZVxuICAgIHRoaXMuX2N0eC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMuX2N0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLl9jdHguZmlsbCgpO1xuXG4gICAgLy8gQ2xvc2UgcGF0aFxuICAgIHRoaXMuX2N0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGEgcGFydGljbGUgb24gdGhlIGJvYXJkXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IEhvcml6b250YWwgbG9jYXRpb24gKGNvb3JkaW5hdGUgc3BhY2UpXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IFZlcnRpY2FsIGxvY2F0aW9uIChjb29yZGluYXRlIHNwYWNlKVxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgUGFydGljbGUgY29sb3JcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgUGFydGljbGUgd2lkdGggYW5kIGhlaWdodFxuICAgKi9cbiAgZHJhd1BhcnRpY2xlKHgsIHksIGNvbG9yID0gXCIjMDAwXCIsIHNpemUgPSAyKSB7XG4gICAgLy8gRGV0ZXJtaW5lIGxvY2F0aW9uIGluIHBpeGVsIHNwYWNlXG4gICAgY29uc3QgWyBjWCwgY1kgXSA9IHRoaXMuX3RvUGl4ZWxzKHgsIHkpO1xuXG4gICAgLy8gRHJhdyBzcXVhcmUgY2VudGVyZWQgYXQgdGhhdCBsb2NhdGlvblxuICAgIHRoaXMuX2RyYXdSZWN0YW5nbGUoY1ggLSBzaXplLzIsIGNZIC0gc2l6ZS8yLCBzaXplLCBzaXplLCBjb2xvcik7XG4gIH1cblxuICAvKipcbiAgICogRmlsbCB0aGUgYm9hcmQgd2l0aCBhIGdpdmVuIGNvbG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb2xvciBDb2xvciB0byBmaWxsXG4gICAqL1xuICBmaWxsKGNvbG9yKSB7XG4gICAgdGhpcy5fZHJhd1JlY3RhbmdsZSgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCBjb2xvcik7XG4gIH1cbn07XG4iXX0=
