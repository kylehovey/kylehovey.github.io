// General purpose non-method functions
//
// Author: Kyle Hovey

/*
 *  Generate an approximate bump function
 *    @param epsilon - value of function at 0, 1
 */
function genBump(epsilon) {
  // Find scaling factor
  var k = 4*Math.log(2/epsilon - 1);

  // Generate bump function
  return (x) => {
    if (x < 0 || x > 1) {
      return epsilon;
    } else {
      return 2/(1 + Math.exp(k*(x - 1/2)**2));
    }
  }
}
