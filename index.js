/**
 * element-delegate
 * event delegate, plugin for element
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Componentn dependencies.
 */

var match = require('element-match');

/**
 * Expose component.
 */

module.exports = function (element) {

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
   * @return {Element} this for chaining
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
    callback._delegate = fn;
    el.addEventListener(event, fn, capture || false);
    return this;
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
  
  element.prototype.undelegate = function (event, callback, capture) {
    var el = this.el;
    var fn = callback._delegate;
    el.removeEventListener(event, fn, capture || false);
    return this;
  };
 
  return element;
};
