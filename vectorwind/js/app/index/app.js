class App {
  constructor() {
    this.vectorField = new VectorField({
      /* ==== Drawing Board Options ===== */
      canvasId : "vector-canvas",
      center : [0, 0],
      width : 15,

      /* ===== Vector Field Options ===== */
      particleCount : 5000,
      particleColor : {
        r : 87,
        g : 170,
        b : 226
      },
      backgroundColor : {
        r : 19,
        g : 80,
        b : 111
      },
      epsilon : 0.002,
      falloff : 0.97,
      fade : 0.05,
      ageProbability : 0.8,
      killPoint : 15,
      vectorMap : (x,y) => [
        Math.cos(x)*Math.sin(y) + Math.cos(y),
        Math.sin(x)*Math.cos(y) + Math.sin(x)
      ].map(x => 10*x) 
    });
  }
};
