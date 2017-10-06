"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
     * Overloaded resize function to accomodate for redrawing vector field
     */

  }, {
    key: "resize",
    value: function resize() {
      _get(VectorField.prototype.__proto__ || Object.getPrototypeOf(VectorField.prototype), "resize", this).call(this);
      this._drawBackground(1);
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
        // Get particle location
        var _particle$location2 = particle.location,
            x = _particle$location2.x,
            y = _particle$location2.y;


        if (particle.intensity > _this4._parameters.killPoint && _this4.isWithin(x, y)) {
          // Find vector at particle location
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
          if (_.random(0, 1, true) < _this4._parameters.ageProbability) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdmVjdG9yRmllbGQvdmVjdG9yRmllbGQuanMiXSwibmFtZXMiOlsiVmVjdG9yRmllbGQiLCJvcHRpb25zIiwicG9wdWxhdGUiLCJfZHJhd0JhY2tncm91bmQiLCJwcm9ncmVzcyIsInZlY3Rvck1hcCIsIl9wYXJhbWV0ZXJzIiwid2lkdGgiLCJyZXNpemUiLCJnZXRSYW5kb21Qb2ludCIsIngiLCJ5IiwiUGFydGljbGUiLCJsb2NhdGlvbiIsImludGVuc2l0eSIsIl8iLCJyYW5kb20iLCJfcGFydGljbGVzIiwicmFuZ2UiLCJwYXJ0aWNsZUNvdW50IiwibWFwIiwiX2NyZWF0ZVBhcnRpY2xlIiwiYWxwaGEiLCJmYWRlIiwiZmlsbCIsImJhY2tncm91bmRDb2xvciIsInIiLCJnIiwiYiIsImZvckVhY2giLCJwYXJ0aWNsZSIsImRyYXdQYXJ0aWNsZSIsInBhcnRpY2xlQ29sb3IiLCJraWxsUG9pbnQiLCJpc1dpdGhpbiIsIlZ4IiwiVnkiLCJlcHNpbG9uIiwiYWdlUHJvYmFiaWxpdHkiLCJkaW1pbmlzaCIsImZhbGxvZmYiLCJkcmF3UGFydGljbGVzIiwiRHJhd2luZ0JvYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFNQSxXOzs7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSx1QkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUluQjtBQUptQiwwSEFFYkEsT0FGYTtBQUNuQjs7O0FBSUEsVUFBS0MsUUFBTDs7QUFFQTtBQUNBLFVBQUtDLGVBQUwsQ0FBcUIsQ0FBckI7O0FBRUE7QUFDQSxVQUFLQyxRQUFMO0FBWG1CO0FBWXBCOztBQUVEOzs7Ozs7Ozs7NkJBS1NDLFMsRUFBVztBQUNsQixXQUFLQyxXQUFMLENBQWlCRCxTQUFqQixHQUE2QkEsU0FBN0I7QUFDRDs7QUFFRDs7Ozs7OzZCQUdTO0FBQ1A7QUFDQSxXQUFLRixlQUFMLENBQXFCLENBQXJCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7NkJBSVNJLEssRUFBTztBQUNkLFdBQUtELFdBQUwsQ0FBaUJDLEtBQWpCLEdBQXlCQSxLQUF6QjtBQUNBLFdBQUtDLE1BQUw7QUFDRDs7QUFFRDs7Ozs7OztzQ0FJa0I7QUFDaEI7QUFEZ0IsNEJBRUMsS0FBS0MsY0FBTCxFQUZEO0FBQUE7QUFBQSxVQUVSQyxDQUZRO0FBQUEsVUFFTEMsQ0FGSzs7QUFJaEI7OztBQUNBLGFBQU8sSUFBSUMsUUFBSixDQUFhO0FBQ2xCQyxrQkFBVyxFQUFFSCxJQUFGLEVBQUtDLElBQUwsRUFETztBQUVsQkcsbUJBQVlDLEVBQUVDLE1BQUYsQ0FBUyxDQUFULEVBQVksR0FBWixFQUFpQixJQUFqQjtBQUZNLE9BQWIsQ0FBUDtBQUlEOztBQUVEOzs7Ozs7K0JBR1c7QUFBQTs7QUFDVCxXQUFLQyxVQUFMLEdBQWtCRixFQUNmRyxLQURlLENBQ1QsS0FBS1osV0FBTCxDQUFpQmEsYUFEUixFQUVmQyxHQUZlLENBRVg7QUFBQSxlQUFXLE9BQUtDLGVBQUwsRUFBWDtBQUFBLE9BRlcsQ0FBbEI7QUFHRDs7QUFFRDs7Ozs7OzhCQUdVO0FBQ1IsV0FBS0osVUFBTCxHQUFrQixFQUFsQjtBQUNEOztBQUVEOzs7Ozs7O3NDQUkrQztBQUFBLFVBQS9CSyxLQUErQix1RUFBdkIsS0FBS2hCLFdBQUwsQ0FBaUJpQixJQUFNOztBQUM3QztBQUNBLFdBQUtDLElBQUwsV0FDRSxLQUFLbEIsV0FBTCxDQUFpQm1CLGVBQWpCLENBQWlDQyxDQURuQyxVQUdFLEtBQUtwQixXQUFMLENBQWlCbUIsZUFBakIsQ0FBaUNFLENBSG5DLFVBS0UsS0FBS3JCLFdBQUwsQ0FBaUJtQixlQUFqQixDQUFpQ0csQ0FMbkMsVUFPRU4sS0FQRjtBQVNEOztBQUVEOzs7Ozs7b0NBR2dCO0FBQUE7O0FBQ2Q7QUFDQSxXQUFLbkIsZUFBTDs7QUFFQTtBQUNBLFdBQUtjLFVBQUwsQ0FDR1ksT0FESCxDQUNXLG9CQUFZO0FBQUEsaUNBQ0hDLFNBQVNqQixRQUROO0FBQUEsWUFDWEgsQ0FEVyxzQkFDWEEsQ0FEVztBQUFBLFlBQ1JDLENBRFEsc0JBQ1JBLENBRFE7O0FBRW5CLGVBQUtvQixZQUFMLENBQWtCckIsQ0FBbEIsRUFBcUJDLENBQXJCLFlBQ0UsT0FBS0wsV0FBTCxDQUFpQjBCLGFBQWpCLENBQStCTixDQURqQyxVQUdFLE9BQUtwQixXQUFMLENBQWlCMEIsYUFBakIsQ0FBK0JMLENBSGpDLFVBS0UsT0FBS3JCLFdBQUwsQ0FBaUIwQixhQUFqQixDQUErQkosQ0FMakMsVUFPRUUsU0FBU2hCLFNBQVQsR0FBcUIsR0FQdkI7QUFTRCxPQVpIO0FBYUQ7O0FBRUQ7Ozs7OzsrQkFHVztBQUFBOztBQUNULFdBQUtHLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQkcsR0FBaEIsQ0FBb0Isb0JBQVk7QUFDaEQ7QUFEZ0Qsa0NBRWpDVSxTQUFTakIsUUFGd0I7QUFBQSxZQUUxQ0gsQ0FGMEMsdUJBRTFDQSxDQUYwQztBQUFBLFlBRXZDQyxDQUZ1Qyx1QkFFdkNBLENBRnVDOzs7QUFJaEQsWUFBSW1CLFNBQVNoQixTQUFULEdBQXFCLE9BQUtSLFdBQUwsQ0FBaUIyQixTQUF0QyxJQUFtRCxPQUFLQyxRQUFMLENBQWN4QixDQUFkLEVBQWlCQyxDQUFqQixDQUF2RCxFQUE0RTtBQUMxRTtBQUQwRSxzQ0FFdkQsT0FBS0wsV0FBTCxDQUFpQkQsU0FBakIsQ0FBMkJLLENBQTNCLEVBQThCQyxDQUE5QixDQUZ1RDtBQUFBO0FBQUEsY0FFbEV3QixFQUZrRTtBQUFBLGNBRTlEQyxFQUY4RDs7QUFJMUU7OztBQUNBMUIsZUFBS3lCLEtBQUssT0FBSzdCLFdBQUwsQ0FBaUIrQixPQUEzQjtBQUNBMUIsZUFBS3lCLEtBQUssT0FBSzlCLFdBQUwsQ0FBaUIrQixPQUEzQjs7QUFFQTtBQUNBUCxtQkFBU2pCLFFBQVQsR0FBb0IsRUFBRUgsSUFBRixFQUFLQyxJQUFMLEVBQXBCOztBQUVBO0FBQ0EsY0FBSUksRUFBRUMsTUFBRixDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsSUFBZixJQUF1QixPQUFLVixXQUFMLENBQWlCZ0MsY0FBNUMsRUFBNEQ7QUFDMURSLHFCQUFTUyxRQUFULENBQWtCLE9BQUtqQyxXQUFMLENBQWlCa0MsT0FBbkM7QUFDRDs7QUFFRCxpQkFBT1YsUUFBUDtBQUNELFNBakJELE1BaUJPO0FBQ0wsaUJBQU8sT0FBS1QsZUFBTCxFQUFQO0FBQ0Q7QUFDRixPQXhCaUIsQ0FBbEI7O0FBMEJBO0FBQ0EsV0FBS29CLGFBQUw7QUFDRDs7OztFQW5LdUJDLFk7O0FBb0t6QiIsImZpbGUiOiJjb21wb25lbnRzL3ZlY3RvckZpZWxkL3ZlY3RvckZpZWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVmVjdG9yRmllbGQgZXh0ZW5kcyBEcmF3aW5nQm9hcmQge1xuICAvKipcbiAgICogQ29uc3RydWN0IGEgVmVjdG9yRmllbGRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgb2JqZWN0XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLnBhcnRpY2xlQ291bnQgQW1vdW50IG9mIHBhcnRpY2xlcyB0byBoYXZlIGFsaXZlIGF0XG4gICAqICBhbnkgZ2l2ZW4gdGltZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5wYXJ0aWNsZUNvbG9yIENvbG9yIG9mIHdpbmQgcGFydGljbGVzXG4gICAqICAodXNlcyB7IHIsIGcsIGIgfSBzdHJ1Y3R1cmUpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLmJhY2tncm91bmRDb2xvciBDb2xvciBvZiBiYWNrZ3JvdW5kXG4gICAqICAodXNlcyB7IHIsIGcsIGIgfSBzdHJ1Y3R1cmUpXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBlcHNpbG9uIERpZmZlcmVudGlhbCB1bml0IHVzZWQgZm9yIEV1bGVyJ3MgTWV0aG9kXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBmYWxsb2ZmIFBhcnRpY2xlIGludGVuc2l0eSBtdWx0aXBsaWVyIChoYXBwZW5zIGVhY2ggY3ljbGUpXG4gICAqICAoc2hvdWxkIGJlIGJldHdlZW4gMCBhbmQgMSlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGZhZGUgQWxwaGEgdmFsdWUgb2YgY29sb3IgZHJhd24gb3ZlciBjYW52YXMgZWFjaCBjeWNsZVxuICAgKiBAcGFyYW0ge051bWJlcn0gYWdlUHJvYmFiaWxpdHkgUHJvYmFiaWxpdHkgdGhhdCBhIHBhcnRpY2xlIHdpbGwgZmFkZSBlYWNoIGN5Y2xlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLmtpbGxwb2ludCBQYXJ0aWNsZSBpbnRlbnNpdHkgdGhhdCBjb3JyZXNwb25kc1xuICAgKiAgdG8gZGVhdGhcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy52ZWN0b3JNYXAgR2l2ZW4gKHgsIHkpLCByZXR1cm4gYW4gQXJyYXlcbiAgICogIHJlcHJlc2VudGluZyB0aGUgdmVjdG9yIGF0IHRoYXQgcG9pbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAvLyBDcmVhdGUgZHJhd2luZyBib2FyZCBhbmQgc3RvcmUgb3B0aW9uc1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgLy8gQ3JlYXRlIHBhcnRpY2xlc1xuICAgIHRoaXMucG9wdWxhdGUoKTtcblxuICAgIC8vIERyYXcgdGhlIGluaXRpYWwgYmFja2dyb3VuZCB3aXRoIG5vIGFscGhhXG4gICAgdGhpcy5fZHJhd0JhY2tncm91bmQoMSk7XG5cbiAgICAvLyBQcm9ncmVzcyBvbmUgdW5pdFxuICAgIHRoaXMucHJvZ3Jlc3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIHZlY3RvciBmaWVsZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB2ZWN0b3JNYXAgR2l2ZW4gKHgsIHkpLCByZXR1cm4gYW4gQXJyYXkgcmVwcmVzZW50aW5nXG4gICAqICB0aGUgdmVjdG9yIGF0IHRoYXQgcG9pbnRcbiAgICovXG4gIHNldEZpZWxkKHZlY3Rvck1hcCkge1xuICAgIHRoaXMuX3BhcmFtZXRlcnMudmVjdG9yTWFwID0gdmVjdG9yTWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJsb2FkZWQgcmVzaXplIGZ1bmN0aW9uIHRvIGFjY29tb2RhdGUgZm9yIHJlZHJhd2luZyB2ZWN0b3IgZmllbGRcbiAgICovXG4gIHJlc2l6ZSgpIHtcbiAgICBzdXBlci5yZXNpemUoKTtcbiAgICB0aGlzLl9kcmF3QmFja2dyb3VuZCgxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSB3aW5kb3cgaW4gY29vcmRpbmF0ZSBzcGFjZVxuICAgKiBAcGFyYW1ldGVyIHtOdW1iZXJ9IHdpZHRoIFdpZHRoIGluIGNvb3JkaW5hdGUgc3BhY2VcbiAgICovXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVycy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMucmVzaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgYSBuZXcgcGFydGljbGVcbiAgICogQHJldHVybiB7UGFydGljbGV9XG4gICAqL1xuICBfY3JlYXRlUGFydGljbGUoKSB7XG4gICAgLy8gR2V0IGEgcmFuZG9tIHBvaW50XG4gICAgY29uc3QgWyB4LCB5IF0gPSB0aGlzLmdldFJhbmRvbVBvaW50KCk7XG5cbiAgICAvLyBDb25zdHJ1Y3QgYW5kIHJldHVybiBwYXJ0aWNsZVxuICAgIHJldHVybiBuZXcgUGFydGljbGUoe1xuICAgICAgbG9jYXRpb24gOiB7IHgsIHkgfSxcbiAgICAgIGludGVuc2l0eSA6IF8ucmFuZG9tKDAsIDEwMCwgdHJ1ZSlcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQb3B1bGF0ZSB0aGUgcGFydGljbGUgZmllbGRcbiAgICovXG4gIHBvcHVsYXRlKCkge1xuICAgIHRoaXMuX3BhcnRpY2xlcyA9IF9cbiAgICAgIC5yYW5nZSh0aGlzLl9wYXJhbWV0ZXJzLnBhcnRpY2xlQ291bnQpXG4gICAgICAubWFwKGRpc2NhcmQgPT4gdGhpcy5fY3JlYXRlUGFydGljbGUoKSk7XG4gIH1cblxuICAvKipcbiAgICogS2lsbCBvZmYgYWxsIHBhcnRpY2xlc1xuICAgKi9cbiAga2lsbEFsbCgpIHtcbiAgICB0aGlzLl9wYXJ0aWNsZXMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBiYWNrZ3JvdW5kXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBhbHBoYSBBbHBoYSBjaGFubmVsIHZhbHVlXG4gICAqL1xuICBfZHJhd0JhY2tncm91bmQoYWxwaGEgPSB0aGlzLl9wYXJhbWV0ZXJzLmZhZGUpIHtcbiAgICAvLyBEcmF3IGJhY2tncm91bmRcbiAgICB0aGlzLmZpbGwoYHJnYmEoJHtcbiAgICAgIHRoaXMuX3BhcmFtZXRlcnMuYmFja2dyb3VuZENvbG9yLnJcbiAgICB9LCAke1xuICAgICAgdGhpcy5fcGFyYW1ldGVycy5iYWNrZ3JvdW5kQ29sb3IuZ1xuICAgIH0sICR7XG4gICAgICB0aGlzLl9wYXJhbWV0ZXJzLmJhY2tncm91bmRDb2xvci5iXG4gICAgfSwgJHtcbiAgICAgIGFscGhhXG4gICAgfSlgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBwYXJ0aWNsZXNcbiAgICovXG4gIGRyYXdQYXJ0aWNsZXMoKSB7XG4gICAgLy8gRHJhdyB0aGUgYmFja2dyb3VuZFxuICAgIHRoaXMuX2RyYXdCYWNrZ3JvdW5kKCk7XG5cbiAgICAvLyBEcmF3IHRoZSBwYXJ0aWNsZXNcbiAgICB0aGlzLl9wYXJ0aWNsZXNcbiAgICAgIC5mb3JFYWNoKHBhcnRpY2xlID0+IHtcbiAgICAgICAgY29uc3QgeyB4LCB5fSA9IHBhcnRpY2xlLmxvY2F0aW9uO1xuICAgICAgICB0aGlzLmRyYXdQYXJ0aWNsZSh4LCB5LCBgcmdiYSgke1xuICAgICAgICAgIHRoaXMuX3BhcmFtZXRlcnMucGFydGljbGVDb2xvci5yXG4gICAgICAgIH0sICR7XG4gICAgICAgICAgdGhpcy5fcGFyYW1ldGVycy5wYXJ0aWNsZUNvbG9yLmdcbiAgICAgICAgfSwgJHtcbiAgICAgICAgICB0aGlzLl9wYXJhbWV0ZXJzLnBhcnRpY2xlQ29sb3IuYlxuICAgICAgICB9LCAke1xuICAgICAgICAgIHBhcnRpY2xlLmludGVuc2l0eSAvIDEwMFxuICAgICAgICB9KWApO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWR2YW5jZSBvbmUgc3RlcCBmdXJ0aGVyXG4gICAqL1xuICBwcm9ncmVzcygpIHtcbiAgICB0aGlzLl9wYXJ0aWNsZXMgPSB0aGlzLl9wYXJ0aWNsZXMubWFwKHBhcnRpY2xlID0+IHtcbiAgICAgIC8vIEdldCBwYXJ0aWNsZSBsb2NhdGlvblxuICAgICAgbGV0IHsgeCwgeSB9ID0gcGFydGljbGUubG9jYXRpb247XG5cbiAgICAgIGlmIChwYXJ0aWNsZS5pbnRlbnNpdHkgPiB0aGlzLl9wYXJhbWV0ZXJzLmtpbGxQb2ludCAmJiB0aGlzLmlzV2l0aGluKHgsIHkpKSB7XG4gICAgICAgIC8vIEZpbmQgdmVjdG9yIGF0IHBhcnRpY2xlIGxvY2F0aW9uXG4gICAgICAgIGNvbnN0IFsgVngsIFZ5IF0gPSB0aGlzLl9wYXJhbWV0ZXJzLnZlY3Rvck1hcCh4LCB5KTtcblxuICAgICAgICAvLyBNb3ZlIHZlY3RvclxuICAgICAgICB4ICs9IFZ4ICogdGhpcy5fcGFyYW1ldGVycy5lcHNpbG9uO1xuICAgICAgICB5ICs9IFZ5ICogdGhpcy5fcGFyYW1ldGVycy5lcHNpbG9uO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBsb2NhdGlvblxuICAgICAgICBwYXJ0aWNsZS5sb2NhdGlvbiA9IHsgeCwgeSB9O1xuXG4gICAgICAgIC8vIERpbWluaXNoIHBhcnRpY2xlXG4gICAgICAgIGlmIChfLnJhbmRvbSgwLCAxLCB0cnVlKSA8IHRoaXMuX3BhcmFtZXRlcnMuYWdlUHJvYmFiaWxpdHkpIHtcbiAgICAgICAgICBwYXJ0aWNsZS5kaW1pbmlzaCh0aGlzLl9wYXJhbWV0ZXJzLmZhbGxvZmYpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnRpY2xlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBhcnRpY2xlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEcmF3IHBhcnRpY2xlc1xuICAgIHRoaXMuZHJhd1BhcnRpY2xlcygpO1xuICB9XG59O1xuIl19
