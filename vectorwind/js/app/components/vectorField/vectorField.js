"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VectorField = function (_DrawingBoard) {
  _inherits(VectorField, _DrawingBoard);

  /**
   * Construct a VectorField
   * @param {Object} options object
   * @param {Number} options.particleCount Amount of particles to have alive at
   *  any given time
   * @param {Object} options.particleColor Color of wind particles
   *  (uses { r, g, b } structure)
   * @param {Object} options.backgroundColor Color of background
   *  (uses { r, g, b } structure)
   * @param {Number} epsilon Differential unit used for Euler's Method
   * @param {Number} falloff Particle intensity multiplier (happens each cycle)
   *  (should be between 0 and 1)
   * @param {Number} fade Alpha value of color drawn over canvas each cycle
   * @param {Number} ageProbability Probability that a particle will fade each cycle
   * @param {Number} options.killpoint Particle intensity that corresponds
   *  to death
   * @param {Function} options.vectorMap Given (x, y), return an Array
   *  representing the vector at that point
   */
  function VectorField(options) {
    _classCallCheck(this, VectorField);

    // Create particles
    var _this = _possibleConstructorReturn(this, (VectorField.__proto__ || Object.getPrototypeOf(VectorField)).call(this, options));
    // Create drawing board and store options


    _this.populate();

    // Draw the initial background with no alpha
    _this._drawBackground(1);

    // Progress one unit
    _this.progress();
    return _this;
  }

  /**
   * Change the vector field
   * @param {Function} vectorMap Given (x, y), return an Array representing
   *  the vector at that point
   */


  _createClass(VectorField, [{
    key: "setField",
    value: function setField(vectorMap) {
      this._parameters.vectorMap = vectorMap;
    }

    /**
     * Set the width of the window in coordinate space
     * @parameter {Number} width Width in coordinate space
     */

  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this._parameters.width = width;
      this.resize();
    }

    /**
     * Generate a new particle
     * @return {Particle}
     */

  }, {
    key: "_createParticle",
    value: function _createParticle() {
      // Get a random point
      var _getRandomPoint = this.getRandomPoint(),
          _getRandomPoint2 = _slicedToArray(_getRandomPoint, 2),
          x = _getRandomPoint2[0],
          y = _getRandomPoint2[1];

      // Construct and return particle


      return new Particle({
        location: { x: x, y: y },
        intensity: _.random(0, 100, true)
      });
    }

    /**
     * Populate the particle field
     */

  }, {
    key: "populate",
    value: function populate() {
      var _this2 = this;

      this._particles = _.range(this._parameters.particleCount).map(function (discard) {
        return _this2._createParticle();
      });
    }

    /**
     * Kill off all particles
     */

  }, {
    key: "killAll",
    value: function killAll() {
      this._particles = [];
    }

    /**
     * Draw the background
     * @param {Number} alpha Alpha channel value
     */

  }, {
    key: "_drawBackground",
    value: function _drawBackground() {
      var alpha = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._parameters.fade;

      // Draw background
      this.fill("rgba(" + this._parameters.backgroundColor.r + ", " + this._parameters.backgroundColor.g + ", " + this._parameters.backgroundColor.b + ", " + alpha + ")");
    }

    /**
     * Draw the particles
     */

  }, {
    key: "drawParticles",
    value: function drawParticles() {
      var _this3 = this;

      // Draw the background
      this._drawBackground();

      // Draw the particles
      this._particles.forEach(function (particle) {
        var _particle$location = particle.location,
            x = _particle$location.x,
            y = _particle$location.y;

        _this3.drawParticle(x, y, "rgba(" + _this3._parameters.particleColor.r + ", " + _this3._parameters.particleColor.g + ", " + _this3._parameters.particleColor.b + ", " + particle.intensity / 100 + ")");
      });
    }

    /**
     * Advance one step further
     */

  }, {
    key: "progress",
    value: function progress() {
      var _this4 = this;

      this._particles = this._particles.map(function (particle) {
        if (particle.intensity > _this4._parameters.killPoint) {
          // Find vector at particle location
          var _particle$location2 = particle.location,
              x = _particle$location2.x,
              y = _particle$location2.y;

          var _parameters$vectorMap = _this4._parameters.vectorMap(x, y),
              _parameters$vectorMap2 = _slicedToArray(_parameters$vectorMap, 2),
              Vx = _parameters$vectorMap2[0],
              Vy = _parameters$vectorMap2[1];

          // Move vector


          x += Vx * _this4._parameters.epsilon;
          y += Vy * _this4._parameters.epsilon;

          // Update location
          particle.location = { x: x, y: y };

          // Diminish particle
          if (_.random(0, 1, true) > _this4._parameters.ageProbability) {
            particle.diminish(_this4._parameters.falloff);
          }

          return particle;
        } else {
          return _this4._createParticle();
        }
      });

      // Draw particles
      this.drawParticles();
    }
  }]);

  return VectorField;
}(DrawingBoard);

;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdmVjdG9yRmllbGQvdmVjdG9yRmllbGQuanMiXSwibmFtZXMiOlsiVmVjdG9yRmllbGQiLCJvcHRpb25zIiwicG9wdWxhdGUiLCJfZHJhd0JhY2tncm91bmQiLCJwcm9ncmVzcyIsInZlY3Rvck1hcCIsIl9wYXJhbWV0ZXJzIiwid2lkdGgiLCJyZXNpemUiLCJnZXRSYW5kb21Qb2ludCIsIngiLCJ5IiwiUGFydGljbGUiLCJsb2NhdGlvbiIsImludGVuc2l0eSIsIl8iLCJyYW5kb20iLCJfcGFydGljbGVzIiwicmFuZ2UiLCJwYXJ0aWNsZUNvdW50IiwibWFwIiwiX2NyZWF0ZVBhcnRpY2xlIiwiYWxwaGEiLCJmYWRlIiwiZmlsbCIsImJhY2tncm91bmRDb2xvciIsInIiLCJnIiwiYiIsImZvckVhY2giLCJwYXJ0aWNsZSIsImRyYXdQYXJ0aWNsZSIsInBhcnRpY2xlQ29sb3IiLCJraWxsUG9pbnQiLCJWeCIsIlZ5IiwiZXBzaWxvbiIsImFnZVByb2JhYmlsaXR5IiwiZGltaW5pc2giLCJmYWxsb2ZmIiwiZHJhd1BhcnRpY2xlcyIsIkRyYXdpbmdCb2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLFc7OztBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLHVCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBSW5CO0FBSm1CLDBIQUViQSxPQUZhO0FBQ25COzs7QUFJQSxVQUFLQyxRQUFMOztBQUVBO0FBQ0EsVUFBS0MsZUFBTCxDQUFxQixDQUFyQjs7QUFFQTtBQUNBLFVBQUtDLFFBQUw7QUFYbUI7QUFZcEI7O0FBRUQ7Ozs7Ozs7Ozs2QkFLU0MsUyxFQUFXO0FBQ2xCLFdBQUtDLFdBQUwsQ0FBaUJELFNBQWpCLEdBQTZCQSxTQUE3QjtBQUNEOztBQUVEOzs7Ozs7OzZCQUlTRSxLLEVBQU87QUFDZCxXQUFLRCxXQUFMLENBQWlCQyxLQUFqQixHQUF5QkEsS0FBekI7QUFDQSxXQUFLQyxNQUFMO0FBQ0Q7O0FBRUQ7Ozs7Ozs7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QWxCOztBQXdCQTtBQUNBLFdBQUttQixhQUFMO0FBQ0Q7Ozs7RUF6SnVCQyxZOztBQTBKekIiLCJmaWxlIjoiY29tcG9uZW50cy92ZWN0b3JGaWVsZC92ZWN0b3JGaWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFZlY3RvckZpZWxkIGV4dGVuZHMgRHJhd2luZ0JvYXJkIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIFZlY3RvckZpZWxkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5wYXJ0aWNsZUNvdW50IEFtb3VudCBvZiBwYXJ0aWNsZXMgdG8gaGF2ZSBhbGl2ZSBhdFxuICAgKiAgYW55IGdpdmVuIHRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMucGFydGljbGVDb2xvciBDb2xvciBvZiB3aW5kIHBhcnRpY2xlc1xuICAgKiAgKHVzZXMgeyByLCBnLCBiIH0gc3RydWN0dXJlKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgQ29sb3Igb2YgYmFja2dyb3VuZFxuICAgKiAgKHVzZXMgeyByLCBnLCBiIH0gc3RydWN0dXJlKVxuICAgKiBAcGFyYW0ge051bWJlcn0gZXBzaWxvbiBEaWZmZXJlbnRpYWwgdW5pdCB1c2VkIGZvciBFdWxlcidzIE1ldGhvZFxuICAgKiBAcGFyYW0ge051bWJlcn0gZmFsbG9mZiBQYXJ0aWNsZSBpbnRlbnNpdHkgbXVsdGlwbGllciAoaGFwcGVucyBlYWNoIGN5Y2xlKVxuICAgKiAgKHNob3VsZCBiZSBiZXR3ZWVuIDAgYW5kIDEpXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBmYWRlIEFscGhhIHZhbHVlIG9mIGNvbG9yIGRyYXduIG92ZXIgY2FudmFzIGVhY2ggY3ljbGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGFnZVByb2JhYmlsaXR5IFByb2JhYmlsaXR5IHRoYXQgYSBwYXJ0aWNsZSB3aWxsIGZhZGUgZWFjaCBjeWNsZVxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5raWxscG9pbnQgUGFydGljbGUgaW50ZW5zaXR5IHRoYXQgY29ycmVzcG9uZHNcbiAgICogIHRvIGRlYXRoXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMudmVjdG9yTWFwIEdpdmVuICh4LCB5KSwgcmV0dXJuIGFuIEFycmF5XG4gICAqICByZXByZXNlbnRpbmcgdGhlIHZlY3RvciBhdCB0aGF0IHBvaW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgLy8gQ3JlYXRlIGRyYXdpbmcgYm9hcmQgYW5kIHN0b3JlIG9wdGlvbnNcbiAgICBzdXBlcihvcHRpb25zKTtcblxuICAgIC8vIENyZWF0ZSBwYXJ0aWNsZXNcbiAgICB0aGlzLnBvcHVsYXRlKCk7XG5cbiAgICAvLyBEcmF3IHRoZSBpbml0aWFsIGJhY2tncm91bmQgd2l0aCBubyBhbHBoYVxuICAgIHRoaXMuX2RyYXdCYWNrZ3JvdW5kKDEpO1xuXG4gICAgLy8gUHJvZ3Jlc3Mgb25lIHVuaXRcbiAgICB0aGlzLnByb2dyZXNzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHRoZSB2ZWN0b3IgZmllbGRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gdmVjdG9yTWFwIEdpdmVuICh4LCB5KSwgcmV0dXJuIGFuIEFycmF5IHJlcHJlc2VudGluZ1xuICAgKiAgdGhlIHZlY3RvciBhdCB0aGF0IHBvaW50XG4gICAqL1xuICBzZXRGaWVsZCh2ZWN0b3JNYXApIHtcbiAgICB0aGlzLl9wYXJhbWV0ZXJzLnZlY3Rvck1hcCA9IHZlY3Rvck1hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSB3aW5kb3cgaW4gY29vcmRpbmF0ZSBzcGFjZVxuICAgKiBAcGFyYW1ldGVyIHtOdW1iZXJ9IHdpZHRoIFdpZHRoIGluIGNvb3JkaW5hdGUgc3BhY2VcbiAgICovXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVycy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMucmVzaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgYSBuZXcgcGFydGljbGVcbiAgICogQHJldHVybiB7UGFydGljbGV9XG4gICAqL1xuICBfY3JlYXRlUGFydGljbGUoKSB7XG4gICAgLy8gR2V0IGEgcmFuZG9tIHBvaW50XG4gICAgY29uc3QgWyB4LCB5IF0gPSB0aGlzLmdldFJhbmRvbVBvaW50KCk7XG5cbiAgICAvLyBDb25zdHJ1Y3QgYW5kIHJldHVybiBwYXJ0aWNsZVxuICAgIHJldHVybiBuZXcgUGFydGljbGUoe1xuICAgICAgbG9jYXRpb24gOiB7IHgsIHkgfSxcbiAgICAgIGludGVuc2l0eSA6IF8ucmFuZG9tKDAsIDEwMCwgdHJ1ZSlcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQb3B1bGF0ZSB0aGUgcGFydGljbGUgZmllbGRcbiAgICovXG4gIHBvcHVsYXRlKCkge1xuICAgIHRoaXMuX3BhcnRpY2xlcyA9IF9cbiAgICAgIC5yYW5nZSh0aGlzLl9wYXJhbWV0ZXJzLnBhcnRpY2xlQ291bnQpXG4gICAgICAubWFwKGRpc2NhcmQgPT4gdGhpcy5fY3JlYXRlUGFydGljbGUoKSk7XG4gIH1cblxuICAvKipcbiAgICogS2lsbCBvZmYgYWxsIHBhcnRpY2xlc1xuICAgKi9cbiAga2lsbEFsbCgpIHtcbiAgICB0aGlzLl9wYXJ0aWNsZXMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBiYWNrZ3JvdW5kXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBhbHBoYSBBbHBoYSBjaGFubmVsIHZhbHVlXG4gICAqL1xuICBfZHJhd0JhY2tncm91bmQoYWxwaGEgPSB0aGlzLl9wYXJhbWV0ZXJzLmZhZGUpIHtcbiAgICAvLyBEcmF3IGJhY2tncm91bmRcbiAgICB0aGlzLmZpbGwoYHJnYmEoJHtcbiAgICAgIHRoaXMuX3BhcmFtZXRlcnMuYmFja2dyb3VuZENvbG9yLnJcbiAgICB9LCAke1xuICAgICAgdGhpcy5fcGFyYW1ldGVycy5iYWNrZ3JvdW5kQ29sb3IuZ1xuICAgIH0sICR7XG4gICAgICB0aGlzLl9wYXJhbWV0ZXJzLmJhY2tncm91bmRDb2xvci5iXG4gICAgfSwgJHtcbiAgICAgIGFscGhhXG4gICAgfSlgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBwYXJ0aWNsZXNcbiAgICovXG4gIGRyYXdQYXJ0aWNsZXMoKSB7XG4gICAgLy8gRHJhdyB0aGUgYmFja2dyb3VuZFxuICAgIHRoaXMuX2RyYXdCYWNrZ3JvdW5kKCk7XG5cbiAgICAvLyBEcmF3IHRoZSBwYXJ0aWNsZXNcbiAgICB0aGlzLl9wYXJ0aWNsZXNcbiAgICAgIC5mb3JFYWNoKHBhcnRpY2xlID0+IHtcbiAgICAgICAgY29uc3QgeyB4LCB5fSA9IHBhcnRpY2xlLmxvY2F0aW9uO1xuICAgICAgICB0aGlzLmRyYXdQYXJ0aWNsZSh4LCB5LCBgcmdiYSgke1xuICAgICAgICAgIHRoaXMuX3BhcmFtZXRlcnMucGFydGljbGVDb2xvci5yXG4gICAgICAgIH0sICR7XG4gICAgICAgICAgdGhpcy5fcGFyYW1ldGVycy5wYXJ0aWNsZUNvbG9yLmdcbiAgICAgICAgfSwgJHtcbiAgICAgICAgICB0aGlzLl9wYXJhbWV0ZXJzLnBhcnRpY2xlQ29sb3IuYlxuICAgICAgICB9LCAke1xuICAgICAgICAgIHBhcnRpY2xlLmludGVuc2l0eSAvIDEwMFxuICAgICAgICB9KWApO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWR2YW5jZSBvbmUgc3RlcCBmdXJ0aGVyXG4gICAqL1xuICBwcm9ncmVzcygpIHtcbiAgICB0aGlzLl9wYXJ0aWNsZXMgPSB0aGlzLl9wYXJ0aWNsZXMubWFwKHBhcnRpY2xlID0+IHtcbiAgICAgIGlmIChwYXJ0aWNsZS5pbnRlbnNpdHkgPiB0aGlzLl9wYXJhbWV0ZXJzLmtpbGxQb2ludCkge1xuICAgICAgICAvLyBGaW5kIHZlY3RvciBhdCBwYXJ0aWNsZSBsb2NhdGlvblxuICAgICAgICBsZXQgeyB4LCB5IH0gPSBwYXJ0aWNsZS5sb2NhdGlvbjtcbiAgICAgICAgY29uc3QgWyBWeCwgVnkgXSA9IHRoaXMuX3BhcmFtZXRlcnMudmVjdG9yTWFwKHgsIHkpO1xuXG4gICAgICAgIC8vIE1vdmUgdmVjdG9yXG4gICAgICAgIHggKz0gVnggKiB0aGlzLl9wYXJhbWV0ZXJzLmVwc2lsb247XG4gICAgICAgIHkgKz0gVnkgKiB0aGlzLl9wYXJhbWV0ZXJzLmVwc2lsb247XG5cbiAgICAgICAgLy8gVXBkYXRlIGxvY2F0aW9uXG4gICAgICAgIHBhcnRpY2xlLmxvY2F0aW9uID0geyB4LCB5IH07XG5cbiAgICAgICAgLy8gRGltaW5pc2ggcGFydGljbGVcbiAgICAgICAgaWYgKF8ucmFuZG9tKDAsIDEsIHRydWUpID4gdGhpcy5fcGFyYW1ldGVycy5hZ2VQcm9iYWJpbGl0eSkge1xuICAgICAgICAgIHBhcnRpY2xlLmRpbWluaXNoKHRoaXMuX3BhcmFtZXRlcnMuZmFsbG9mZik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFydGljbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUGFydGljbGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERyYXcgcGFydGljbGVzXG4gICAgdGhpcy5kcmF3UGFydGljbGVzKCk7XG4gIH1cbn07XG4iXX0=
