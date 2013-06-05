/**
 * element-delegate
 * event delegate plugin for element
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Dependencies.
 */

var match = require('element-match');

/**
 * Expose `delegate`
 */

module.exports = delegate;

/**
 * delegate
 */

function delegate (element) {

  /**
   * element dependencies.
   */

  element.use(match);

  /**
   * delegate
   * Delegate event.
   *
   * @param {String} type event type
   * @param {String} selector selector
   * @param {Function} callback callback
   * @param {Boolean} capture capture
   * @return {Function} function that can be undelegated
   * @api public
   */
  
  element.prototype.delegate = function (type, selector, callback, capture) {
    var el = this.el;
    var fn = function (event) {
      var target = element(event.target);
      if (target.match(selector)) {
        callback.call(el, event);
      }
    };
    el.addEventListener(event, fn, capture || false);
    return fn;
  };
  
  /**
   * undelegate
   * Undelegate event.
   *
   * @param {String} event event name
   * @param {Function} callback callback
   * @param {Boolean} capture capture
   * @return {Element} this for chaining
   * @api public
   */
  
  exports.undelegate = function (event, callback, capture) {
    this.el.removeEventListener(event, callback, capture || false);
    return this;
  };
 

  return element;
}
