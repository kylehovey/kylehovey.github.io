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
     * Determine whether a point is within the bounds of the window
     * @param {Number} x Horizontal position (coordinate space)
     * @param {Number} y Vertical position (coordinate space)
     * @return {Boolean}
     */

  }, {
    key: "isWithin",
    value: function isWithin(x, y) {
      return x > -this._parameters.width / 2 && x < this._parameters.width / 2 && y > -this._parameters.height / 2 && y < this._parameters.height / 2;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZHJhd2luZ0JvYXJkL2RyYXdpbmdCb2FyZC5qcyJdLCJuYW1lcyI6WyJEcmF3aW5nQm9hcmQiLCJvcHRpb25zIiwiX3BhcmFtZXRlcnMiLCIkIiwiY2FudmFzSWQiLCJfY2FudmFzIiwiX2N0eCIsImdldENvbnRleHQiLCJyZXNpemUiLCJjYW52YXMiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIl93aWR0aCIsIl9oZWlnaHQiLCJfcGl4ZWxDZW50ZXIiLCJtYXAiLCJ4IiwidW5pdHNQZXJQaXhlbCIsImNsZWFyUmVjdCIsIl8iLCJyYW5kb20iLCJ5IiwiY1giLCJjWSIsIk1hdGgiLCJyb3VuZCIsImNvbG9yIiwiYmVnaW5QYXRoIiwicmVjdCIsImZpbGxTdHlsZSIsImZpbGwiLCJjbG9zZVBhdGgiLCJzaXplIiwiX3RvUGl4ZWxzIiwiX2RyYXdSZWN0YW5nbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQU1BLFk7QUFDSjs7Ozs7Ozs7QUFRQSx3QkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJELE9BQW5COztBQUVBOztBQUdBO0FBUG1CLGFBS0FFLFFBQU0sS0FBS0QsV0FBTCxDQUFpQkUsUUFBdkIsQ0FMQTs7QUFBQTs7QUFLakIsU0FBS0MsT0FMWTtBQVFuQixTQUFLQyxJQUFMLEdBQVksS0FBS0QsT0FBTCxDQUFhRSxVQUFiLENBQXdCLElBQXhCLENBQVo7O0FBRUE7QUFDQSxTQUFLQyxNQUFMO0FBQ0Q7O0FBRUQ7Ozs7Ozs7NkJBR1M7QUFDUDtBQUNBLFdBQUtGLElBQUwsQ0FBVUcsTUFBVixDQUFpQkMsS0FBakIsR0FBeUJDLE9BQU9DLFVBQWhDO0FBQ0EsV0FBS04sSUFBTCxDQUFVRyxNQUFWLENBQWlCSSxNQUFqQixHQUEwQkYsT0FBT0csV0FBakM7O0FBRUE7QUFDQSxXQUFLQyxNQUFMLEdBQWNKLE9BQU9DLFVBQXJCO0FBQ0Es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LElBQXBELEVBQTBETixLQUExRDtBQUNEOztBQUVEOzs7Ozs7O3lCQUlLQSxLLEVBQU87QUFDVixXQUFLUSxjQUFMLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLEtBQUt0QixNQUEvQixFQUF1QyxLQUFLQyxPQUE1QyxFQUFxRGEsS0FBckQ7QUFDRDs7Ozs7O0FBQ0YiLCJmaWxlIjoiY29tcG9uZW50cy9kcmF3aW5nQm9hcmQvZHJhd2luZ0JvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRHJhd2luZ0JvYXJkIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIERyYXdpbmdCb2FyZFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMuY2FudmFzSWQgSUQgb2YgY2FudmFzIGVsZW1lbnRcbiAgICogQHBhcmFtIHtBcnJheX0gb3B0aW9ucy5jZW50ZXIgQ2VudGVyIG9mIGNvb3JkaW5hdGUgc3BhY2VcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMud2lkdGggV2lkdGggb2Ygd2luZG93IGluIGNvb3JkaW5hdGUgc3BhY2VcbiAgICogIChoZWlnaHQgaW4gY29vcmRpbmF0ZSBzcGFjZSBpcyBjYWxjdWxhdGVkIGJhc2VkIHVwb24gYXNwZWN0IHJhdGlvKVxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIC8vIFN0b3JlIG9wdGlvbnNcbiAgICB0aGlzLl9wYXJhbWV0ZXJzID0gb3B0aW9ucztcblxuICAgIC8vIEdldCBjYW52YXNcbiAgICBbIHRoaXMuX2NhbnZhcyBdID0gJChgIyR7dGhpcy5fcGFyYW1ldGVycy5jYW52YXNJZH1gKTtcblxuICAgIC8vIENyZWF0ZSBjb250ZXh0XG4gICAgdGhpcy5fY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIC8vIFJlc2l6ZSBjYW52YXNcbiAgICB0aGlzLnJlc2l6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZSB0aGUgY2FudmFzXG4gICAqL1xuICByZXNpemUoKSB7XG4gICAgLy8gU2V0IGNhbnZhcyB3aWR0aFxuICAgIHRoaXMuX2N0eC5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLl9jdHguY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIC8vIFVwZGF0ZSBpbnRlcm5hbCBzdGF0ZVxuICAgIHRoaXMuX3dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5faGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuX3BpeGVsQ2VudGVyID0gW1xuICAgICAgdGhpcy5fd2lkdGgsXG4gICAgICB0aGlzLl9oZWlnaHRcbiAgICBdLm1hcCh4ID0+IHgvMik7XG5cbiAgICAvLyBVcGRhdGUgc2l6ZSBvZiBjb29yZGluYXRlIHNwYWNlXG4gICAgdGhpcy5fcGFyYW1ldGVycy5oZWlnaHQgPSB0aGlzLl9wYXJhbWV0ZXJzLndpZHRoICogdGhpcy5faGVpZ2h0L3RoaXMuX3dpZHRoO1xuICAgIHRoaXMuX3BhcmFtZXRlcnMudW5pdHNQZXJQaXhlbCA9IHRoaXMuX3BhcmFtZXRlcnMud2lkdGggLyB0aGlzLl93aWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgY2FudmFzXG4gICAqL1xuICBjbGVhcigpIHtcbiAgICB0aGlzLl9jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHJhbmRvbSBwb2ludCBmcm9tIHdpdGhpbiBvdXIgY29vcmRpbmF0ZSBzcGFjZVxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIGdldFJhbmRvbVBvaW50KCkge1xuICAgIHJldHVybiBbXG4gICAgICBfLnJhbmRvbSgtdGhpcy5fcGFyYW1ldGVycy53aWR0aC8yLCB0aGlzLl9wYXJhbWV0ZXJzLndpZHRoLzIsIHRydWUpLFxuICAgICAgXy5yYW5kb20oLXRoaXMuX3BhcmFtZXRlcnMuaGVpZ2h0LzIsIHRoaXMuX3BhcmFtZXRlcnMuaGVpZ2h0LzIsIHRydWUpXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciBhIHBvaW50IGlzIHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSB3aW5kb3dcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHggSG9yaXpvbnRhbCBwb3NpdGlvbiAoY29vcmRpbmF0ZSBzcGFjZSlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkgVmVydGljYWwgcG9zaXRpb24gKGNvb3JkaW5hdGUgc3BhY2UpXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBpc1dpdGhpbih4LCB5KSB7XG4gICAgcmV0dXJuIHggPiAtdGhpcy5fcGFyYW1ldGVycy53aWR0aC8yICYmIHggPCB0aGlzLl9wYXJhbWV0ZXJzLndpZHRoLzIgJiZcbiAgICAgIHkgPiAtdGhpcy5fcGFyYW1ldGVycy5oZWlnaHQvMiAmJiB5IDwgdGhpcy5fcGFyYW1ldGVycy5oZWlnaHQvMlxuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHNvbWUgW3gsIHldIGZyb20gdGhlIG9yaWdpbiwgZGV0ZXJtaW5lIGxvY2F0aW9uIHBpeGVsLXdpc2VcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHggSG9yaXpvbnRhbCBjb29yZGluYXRlIChjb29yZGluYXRlIHNwYWNlKVxuICAgKiBAcGFyYW0ge051bWJlcn0geSBWZXJ0aWNhbCBjb29yZGluYXRlIChjb29yZGluYXRlIHNwYWNlKVxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIF90b1BpeGVscyh4LCB5KSB7XG4gICAgLy8gRWFzaWVyIHZhbHVlcyBmb3IgY2VudGVyXG4gICAgY29uc3QgWyBjWCwgY1kgXSA9IHRoaXMuX3BpeGVsQ2VudGVyO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIE1hdGgucm91bmQoY1ggKyB4IC8gdGhpcy5fcGFyYW1ldGVycy51bml0c1BlclBpeGVsKSxcbiAgICAgIE1hdGgucm91bmQoY1kgLSB5IC8gdGhpcy5fcGFyYW1ldGVycy51bml0c1BlclBpeGVsKVxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBhIHJlY3RhbmdsZSBvbiB0aGUgYm9hcmRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHggU3RhcnRpbmcgaG9yaXpvbnRhbCBjb29yZGluYXRlIChwaXhlbCBzcGFjZSlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkgU3RhcnRpbmcgdmVydGljYWwgY29vcmRpbmF0ZSAocGl4ZWwgc3BhY2UpXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCBXaWR0aCBvZiByZWN0YW5nbGUgKHBpeGVsIHNwYWNlKVxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiByZWN0YW5nbGUgKHBpeGVsIHNwYWNlKVxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgQ29sb3Igb2YgcmVjdGFuZ2xlXG4gICAqL1xuICBfZHJhd1JlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xuICAgIC8vIEJlZ2luIHBhdGhcbiAgICB0aGlzLl9jdHguYmVnaW5QYXRoKCk7XG5cbiAgICAvLyBEcmF3IHJlY3RhbmdsZVxuICAgIHRoaXMuX2N0eC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMuX2N0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLl9jdHguZmlsbCgpO1xuXG4gICAgLy8gQ2xvc2UgcGF0aFxuICAgIHRoaXMuX2N0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGEgcGFydGljbGUgb24gdGhlIGJvYXJkXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IEhvcml6b250YWwgbG9jYXRpb24gKGNvb3JkaW5hdGUgc3BhY2UpXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IFZlcnRpY2FsIGxvY2F0aW9uIChjb29yZGluYXRlIHNwYWNlKVxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgUGFydGljbGUgY29sb3JcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgUGFydGljbGUgd2lkdGggYW5kIGhlaWdodFxuICAgKi9cbiAgZHJhd1BhcnRpY2xlKHgsIHksIGNvbG9yID0gXCIjMDAwXCIsIHNpemUgPSAyKSB7XG4gICAgLy8gRGV0ZXJtaW5lIGxvY2F0aW9uIGluIHBpeGVsIHNwYWNlXG4gICAgY29uc3QgWyBjWCwgY1kgXSA9IHRoaXMuX3RvUGl4ZWxzKHgsIHkpO1xuXG4gICAgLy8gRHJhdyBzcXVhcmUgY2VudGVyZWQgYXQgdGhhdCBsb2NhdGlvblxuICAgIHRoaXMuX2RyYXdSZWN0YW5nbGUoY1ggLSBzaXplLzIsIGNZIC0gc2l6ZS8yLCBzaXplLCBzaXplLCBjb2xvcik7XG4gIH1cblxuICAvKipcbiAgICogRmlsbCB0aGUgYm9hcmQgd2l0aCBhIGdpdmVuIGNvbG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb2xvciBDb2xvciB0byBmaWxsXG4gICAqL1xuICBmaWxsKGNvbG9yKSB7XG4gICAgdGhpcy5fZHJhd1JlY3RhbmdsZSgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCBjb2xvcik7XG4gIH1cbn07XG4iXX0=
