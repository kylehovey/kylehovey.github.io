"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Particle = function () {
  /**
   * Construct a Particle
   * @param {Object} options object
   * @param {Object} options.location Location of particle in coordinate space
   *  (uses { x, y } structure)
   * @param {Number} options.intensity Current intensity value
   */
  function Particle(options) {
    _classCallCheck(this, Particle);

    this.location = options.location;
    this.intensity = options.intensity;
  }

  /**
   * Make particle fade a little bit
   * @param {Number} falloff Falloff rate
   */


  _createClass(Particle, [{
    key: "diminish",
    value: function diminish(falloff) {
      this.intensity *= falloff;
    }

    /**
     * Move particle
     * @param {Object} push Push vector
     *  (uses { x, y } structure)
     */

  }, {
    key: "move",
    value: function move(push) {
      this.location.x += push.x;
      this.location.y += push.y;
    }
  }]);

  return Particle;
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFydGljbGUvcGFydGljbGUuanMiXSwibmFtZXMiOlsiUGFydGljbGUiLCJvcHRpb25zIiwibG9jYXRpb24iLCJpbnRlbnNpdHkiLCJmYWxsb2ZmIiwicHVzaCIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsUTtBQUNKOzs7Ozs7O0FBT0Esb0JBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0MsUUFBTCxHQUFnQkQsUUFBUUMsUUFBeEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCRixRQUFRRSxTQUF6QjtBQUNEOztBQUVEOzs7Ozs7Ozs2QkFJU0MsTyxFQUFTO0FBQ2hCLFdBQUtELFNBQUwsSUFBa0JDLE9BQWxCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O3lCQUtLQyxJLEVBQU07QUFDVCxXQUFLSCxRQUFMLENBQWNJLENBQWQsSUFBbUJELEtBQUtDLENBQXhCO0FBQ0EsV0FBS0osUUFBTCxDQUFjSyxDQUFkLElBQW1CRixLQUFLRSxDQUF4QjtBQUNEIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFydGljbGUvcGFydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQYXJ0aWNsZSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBQYXJ0aWNsZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMubG9jYXRpb24gTG9jYXRpb24gb2YgcGFydGljbGUgaW4gY29vcmRpbmF0ZSBzcGFjZVxuICAgKiAgKHVzZXMgeyB4LCB5IH0gc3RydWN0dXJlKVxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5pbnRlbnNpdHkgQ3VycmVudCBpbnRlbnNpdHkgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmxvY2F0aW9uID0gb3B0aW9ucy5sb2NhdGlvbjtcbiAgICB0aGlzLmludGVuc2l0eSA9IG9wdGlvbnMuaW50ZW5zaXR5O1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgcGFydGljbGUgZmFkZSBhIGxpdHRsZSBiaXRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGZhbGxvZmYgRmFsbG9mZiByYXRlXG4gICAqL1xuICBkaW1pbmlzaChmYWxsb2ZmKSB7XG4gICAgdGhpcy5pbnRlbnNpdHkgKj0gZmFsbG9mZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHBhcnRpY2xlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwdXNoIFB1c2ggdmVjdG9yXG4gICAqICAodXNlcyB7IHgsIHkgfSBzdHJ1Y3R1cmUpXG4gICAqL1xuICBtb3ZlKHB1c2gpIHtcbiAgICB0aGlzLmxvY2F0aW9uLnggKz0gcHVzaC54O1xuICAgIHRoaXMubG9jYXRpb24ueSArPSBwdXNoLnk7XG4gIH1cbn1cbiJdfQ==
