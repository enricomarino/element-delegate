/**
 * element-delegate
 * Element event delegate component
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Dependencies.
 */

var matches = require('matches-selector');

/**
 * Expose `Element`.
 */

module.exports = Element;

/**
 * Element
 *
 * @param {Element} el
 * @api public
 */

function Element (el) {
  this.el = el;
}

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

Element.prototype.delegate = function (type, selector, callback, capture) {
  var el = this.el;
  var fn = function (event) {
    if (matches(event.target, selector)) {
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

Element.prototype.undelegate = function (event, callback, capture) {
  var el = this.el;
  el.removeEventListener(event, callback, capture || false);
  return this;
};
