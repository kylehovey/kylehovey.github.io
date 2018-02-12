/**
 * Resolution component
 */
export default class Resolution {
  /**
   * Construct a resolution on the page
   * @param {String} container ID of container
   * @param {String} goal Title of resolution
   * @param {Boolean} progressBar True if progressbar should be rendered
   * @param {Number} progressGoal Quantity for resolution
   * @param {Number} progress Progress so far
   * @param {String} unit Type of thing being measured
   */
  constructor(opts) {
    this._opts = Object.assign({
      container : "body",
      goal : "Do a thing.",
      progressBar : false,
      progressGoal : 100,
      progress : 0,
      unit : "%",
      done : false
    }, opts);

    this._element = $(`
      <li class="resolution">
        ${this._opts.goal}
        ${this._opts.progressBar ? `
          <div class="progress progress-striped">
            <div class="progress-bar" style="width:0%">
              0 ${this._opts.unit}
            </div>
          </div>
        ` : ""}
      </li>
    `);

    $(`#${this._opts.container}`).append(this._element);

    if (this._opts.progressBar) {
      this.setProgress(this._opts.progress);
    }

    if (this._opts.done) {
      this.complete();
    }
  }

  /**
   * Complete the resolution
   */
  complete() {
    this._element.addClass("done");
    this._opts.done = true;
  }

  /**
   * Get the progress of this resolution (0-1)
   * @return {Number}
   */
  getProgress() {
    if (this._opts.progressBar) {
      return this._opts.progress / this._opts.progressGoal;
    } else {
      return this._opts.done ? 1 : 0;
    }
  }

  /**
   * Set the progress bar
   * @param {Number} value Value to set
   * @throws {Error} Throws error if no progress bar is found
   */
  setProgress(value = 0) {
    if (this._opts.progressBar) {
      this._opts.progress = value;
      const percent = Math.round(100 * value / this._opts.progressGoal);

      this._element
        .find(".progress-bar")
        .css("width", `${percent}%`)
        .text(`${value} ${this._opts.unit}`);
    } else {
      throw new Error("No progress bar in this resolution.");
    }
  }
}
