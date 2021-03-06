'use strict';

const path = require('path');

module.exports = {

  /**
   * load app.js
   *
   * @example
   * ```js
   * module.exports = function(app) {
   *   // can do everything
   *   do();
   *
   *   // if you will invork asynchronous, you can use readyCallback
   *   const done = app.readyCallback();
   *   doAsync(done);
   * }
   * ```
   */
  loadCustomApp() {
    this.getLoadUnits()
      .forEach(unit => this.loadFile(path.join(unit.path, 'app.js')));
  },

  /**
   * Load agent.js, same as {@link EggLoader#loadCustomApp}
   */
  loadCustomAgent() {
    this.getLoadUnits()
      .forEach(unit => this.loadFile(path.join(unit.path, 'agent.js')));
  },

};
