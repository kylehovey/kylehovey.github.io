import Resolution from "../resolution/resolution.js";

/**
 * Resolution list component
 */
export default class ResolutionList {
  /**
   * Construct a resolution list on the page
   * @param {String} container ID of container to place list in
   * @param {Array} resolutions JSON of resolutions loaded from file. Example:
   * [
   *  {
   *    "goal" : "Go Skiing 25 Days",
   *    "progressBar" : true,
   *    "progressGoal" : 25,
   *    "unit" : "days",
   *    "progress" : 10,
   *    "done" : false
   *  },{
   *    "goal" : "Hammock Camp in a Snow Storm",
   *    "done" : true
   *  }
   * ]
   */
  constructor(opts) {
    this._opts = Object.assign({
      resolutions : [ ]
    }, opts);

    this._element = $(`
      <section id="resolution-progress">
        <div class="container">
          <div class="row">
            <div class="col-xs-10 col-xs-offset-1 card-container" id="about-col">
              <center>
                <span class="title-text">
                  Progress
                </span>
                <div class="progress progress-striped">
                  <div id="main-bar" class="progress-bar" style="width:12%">
                    12%
                  </div>
                </div>
              </center>
            </div>
          </div>
        </div>
      </section>
      <section id="resolutions">
        <div class="container">
          <div class="row">
            <div class="col-xs-10 col-xs-offset-1 card-container" id="resolutions-col">
              <ul id="resolutions-list"></ul>
            </div>
          </div>
        </div>
      </section>
    `);

    $(this._opts.container).append(this._element);

    this._resolutions = [ ];

    this._opts.resolutions
      .map(this.addResolution.bind(this));
  }

  /**
   * Add a resolution to the list
   * @param {Object} resoution Resolution JSON
   */
  addResolution(resolution) {
    this._resolutions.push(new Resolution(Object.assign({
      container : "resolutions-list"
    }, resolution)));

    this.computeProgress();
  }

  /**
   * Compute and render progress
   */
  computeProgress() {
    const progress = this._resolutions.reduce((total, res) => {
      return total + res.getProgress();
    }, 0) / this._resolutions.length;

    const percent = Math.round(progress * 100);

    $("#main-bar")
      .css("width", `${percent}%`)
      .text(`${percent}%`);
  }
}
