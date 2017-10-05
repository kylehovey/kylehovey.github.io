"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
  _classCallCheck(this, App);

  this.vectorField = new VectorField({
    /* ==== Drawing Board Options ===== */
    canvasId: "vector-canvas",
    center: [0, 0],
    width: 1,

    /* ===== Vector Field Options ===== */
    particleCount: 5000,
    particleColor: {
      r: 102,
      g: 198,
      b: 228
    },
    backgroundColor: {
      r: 24,
      g: 97,
      b: 152
    },
    epsilon: 0.001,
    falloff: 0.95,
    fade: 0.1,
    ageProbability: 0.3,
    killPoint: 10,
    vectorMap: function vectorMap(x, y) {
      return [-5 * y, 5 * y * Math.cos(y)];
    }
  });
};

;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4L2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJ2ZWN0b3JGaWVsZCIsIlZlY3RvckZpZWxkIiwiY2FudmFzSWQiLCJjZW50ZXIiLCJ3aWR0aCIsInBhcnRpY2xlQ291bnQiLCJwYXJ0aWNsZUNvbG9yIiwiciIsImciLCJiIiwiYmFja2dyb3VuZENvbG9yIiwiZXBzaWxvbiIsImZhbGxvZmYiLCJmYWRlIiwiYWdlUHJvYmFiaWxpdHkiLCJraWxsUG9pbnQiLCJ2ZWN0b3JNYXAiLCJ4IiwieSIsIk1hdGgiLCJjb3MiXSwibWFwcGluZ3MiOiI7Ozs7SUFBTUEsRyxHQUNKLGVBQWM7QUFBQTs7QUFDWixPQUFLQyxXQUFMLEdBQW1CLElBQUlDLFdBQUosQ0FBZ0I7QUFDakM7QUFDQUMsY0FBVyxlQUZzQjtBQUdqQ0MsWUFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLENBSHdCO0FBSWpDQyxXQUFRLENBSnlCOztBQU1qQztBQUNBQyxtQkFBZ0IsSUFQaUI7QUFRakNDLG1CQUFnQjtBQUNkQyxTQUFJLEdBRFU7QUFFZEMsU0FBSSxHQUZVO0FBR2RDLFNBQUk7QUFIVSxLQVJpQjtBQWFqQ0MscUJBQWtCO0FBQ2hCSCxTQUFJLEVBRFk7QUFFaEJDLFNBQUksRUFGWTtBQUdoQkMsU0FBSTtBQUhZLEtBYmU7QUFrQmpDRSxhQUFVLEtBbEJ1QjtBQW1CakNDLGFBQVUsSUFuQnVCO0FBb0JqQ0MsVUFBTyxHQXBCMEI7QUFxQmpDQyxvQkFBaUIsR0FyQmdCO0FBc0JqQ0MsZUFBWSxFQXRCcUI7QUF1QmpDQyxlQUFZLG1CQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFVLENBQUMsQ0FBQyxDQUFELEdBQUtBLENBQU4sRUFBVSxJQUFJQSxDQUFKLEdBQVFDLEtBQUtDLEdBQUwsQ0FBU0YsQ0FBVCxDQUFsQixDQUFWO0FBQUE7QUF2QnFCLEdBQWhCLENBQW5CO0FBeUJELEM7O0FBQ0YiLCJmaWxlIjoiaW5kZXgvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52ZWN0b3JGaWVsZCA9IG5ldyBWZWN0b3JGaWVsZCh7XG4gICAgICAvKiA9PT09IERyYXdpbmcgQm9hcmQgT3B0aW9ucyA9PT09PSAqL1xuICAgICAgY2FudmFzSWQgOiBcInZlY3Rvci1jYW52YXNcIixcbiAgICAgIGNlbnRlciA6IFswLCAwXSxcbiAgICAgIHdpZHRoIDogMSxcblxuICAgICAgLyogPT09PT0gVmVjdG9yIEZpZWxkIE9wdGlvbnMgPT09PT0gKi9cbiAgICAgIHBhcnRpY2xlQ291bnQgOiA1MDAwLFxuICAgICAgcGFydGljbGVDb2xvciA6IHtcbiAgICAgICAgciA6IDEwMixcbiAgICAgICAgZyA6IDE5OCxcbiAgICAgICAgYiA6IDIyOFxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmRDb2xvciA6IHtcbiAgICAgICAgciA6IDI0LFxuICAgICAgICBnIDogOTcsXG4gICAgICAgIGIgOiAxNTJcbiAgICAgIH0sXG4gICAgICBlcHNpbG9uIDogMC4wMDEsXG4gICAgICBmYWxsb2ZmIDogMC45NSxcbiAgICAgIGZhZGUgOiAwLjEsXG4gICAgICBhZ2VQcm9iYWJpbGl0eSA6IDAuMyxcbiAgICAgIGtpbGxQb2ludCA6IDEwLFxuICAgICAgdmVjdG9yTWFwIDogKHgsIHkpID0+IFstNSAqIHksICA1ICogeSAqIE1hdGguY29zKHkpXVxuICAgIH0pO1xuICB9XG59O1xuIl19
