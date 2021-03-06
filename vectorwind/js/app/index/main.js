"use strict";

$(function () {
  // Create the application
  window.app = new App();

  /*
   * Listeners
   */
  $(window).resize(function (e) {
    app.vectorField.resize();
  });

  $("#enter-equation").on('keydown', function (e) {
    // If enter key
    if (e.which === 13) {
      try {
        app.vectorField.setField(eval($(e.target).val()));
      } catch (err) {
        console.log(err);
      }
    }
  });

  $("#enter-width").on('keydown', function (e) {
    // If enter key
    if (e.which === 13) {
      app.vectorField.setWidth(eval($(e.target).val()));
    }
  });

  /*
   * Animation loop
   */
  setInterval(function () {
    app.vectorField.progress();
  }, 1);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4L21haW4uanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsImFwcCIsIkFwcCIsInJlc2l6ZSIsInZlY3RvckZpZWxkIiwib24iLCJlIiwid2hpY2giLCJzZXRGaWVsZCIsImV2YWwiLCJ0YXJnZXQiLCJ2YWwiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic2V0V2lkdGgiLCJzZXRJbnRlcnZhbCIsInByb2dyZXNzIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxFQUFFLFlBQU07QUFDTjtBQUNBQyxTQUFPQyxHQUFQLEdBQWEsSUFBSUMsR0FBSixFQUFiOztBQUVBOzs7QUFHQUgsSUFBRUMsTUFBRixFQUFVRyxNQUFWLENBQWlCLGFBQUs7QUFDcEJGLFFBQUlHLFdBQUosQ0FBZ0JELE1BQWhCO0FBQ0QsR0FGRDs7QUFJQUosSUFBRSxpQkFBRixFQUFxQk0sRUFBckIsQ0FBd0IsU0FBeEIsRUFBbUMsYUFBSztBQUN0QztBQUNBLFFBQUlDLEVBQUVDLEtBQUYsS0FBWSxFQUFoQixFQUFvQjtBQUNsQixVQUFJO0FBQ0ZOLFlBQUlHLFdBQUosQ0FBZ0JJLFFBQWhCLENBQXlCQyxLQUFLVixFQUFFTyxFQUFFSSxNQUFKLEVBQVlDLEdBQVosRUFBTCxDQUF6QjtBQUNELE9BRkQsQ0FFRSxPQUFPQyxHQUFQLEVBQVk7QUFDWkMsZ0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBQ0Y7QUFDRixHQVREOztBQVdBYixJQUFFLGNBQUYsRUFBa0JNLEVBQWxCLENBQXFCLFNBQXJCLEVBQWdDLGFBQUs7QUFDbkM7QUFDQSxRQUFJQyxFQUFFQyxLQUFGLEtBQVksRUFBaEIsRUFBb0I7QUFDbEJOLFVBQUlHLFdBQUosQ0FBZ0JXLFFBQWhCLENBQXlCTixLQUFLVixFQUFFTyxFQUFFSSxNQUFKLEVBQVlDLEdBQVosRUFBTCxDQUF6QjtBQUNEO0FBQ0YsR0FMRDs7QUFPQTs7O0FBR0FLLGNBQVksWUFBTTtBQUNoQmYsUUFBSUcsV0FBSixDQUFnQmEsUUFBaEI7QUFDRCxHQUZELEVBRUcsQ0FGSDtBQUdELENBbkNEIiwiZmlsZSI6ImluZGV4L21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCgpID0+IHtcbiAgLy8gQ3JlYXRlIHRoZSBhcHBsaWNhdGlvblxuICB3aW5kb3cuYXBwID0gbmV3IEFwcCgpO1xuXG4gIC8qXG4gICAqIExpc3RlbmVyc1xuICAgKi9cbiAgJCh3aW5kb3cpLnJlc2l6ZShlID0+IHtcbiAgICBhcHAudmVjdG9yRmllbGQucmVzaXplKCk7XG4gIH0pO1xuXG4gICQoXCIjZW50ZXItZXF1YXRpb25cIikub24oJ2tleWRvd24nLCBlID0+IHtcbiAgICAvLyBJZiBlbnRlciBrZXlcbiAgICBpZiAoZS53aGljaCA9PT0gMTMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGFwcC52ZWN0b3JGaWVsZC5zZXRGaWVsZChldmFsKCQoZS50YXJnZXQpLnZhbCgpKSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gICQoXCIjZW50ZXItd2lkdGhcIikub24oJ2tleWRvd24nLCBlID0+IHtcbiAgICAvLyBJZiBlbnRlciBrZXlcbiAgICBpZiAoZS53aGljaCA9PT0gMTMpIHtcbiAgICAgIGFwcC52ZWN0b3JGaWVsZC5zZXRXaWR0aChldmFsKCQoZS50YXJnZXQpLnZhbCgpKSk7XG4gICAgfVxuICB9KTtcblxuICAvKlxuICAgKiBBbmltYXRpb24gbG9vcFxuICAgKi9cbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGFwcC52ZWN0b3JGaWVsZC5wcm9ncmVzcygpO1xuICB9LCAxKTtcbn0pO1xuIl19
