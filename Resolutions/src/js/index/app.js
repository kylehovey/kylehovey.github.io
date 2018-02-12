import ResolutionList from "../components/resolutionList/resolutionList.js";

/**
 * Main application code for one view
 */
export default class App {
  /**
   * Construct the view from components
   */
  constructor() {
    Promise.resolve($.getJSON("./resolutions.json")).then(resolutions => {
      this.resolutions = new ResolutionList({
        container : "body",
        resolutions
      });
    });
  }
}
