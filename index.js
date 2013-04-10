/**
 * element-delegate
 * Element event delegate component
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Expose `Delegate`.
 */

/**
 * Delegate
 *
 * @param {Element} el
 * @api public
 */

function Delegate (el) {
  this.el = el;
}

/**
 * delegate
 * Delegate event.
 *
 * @param {String} event event name
 * @param {String} selector selector
 * @param {Function} callback callback
 * @return {Event} this for chaining
 * @api public
 */

Event.prototype.delegate = function (event, selector, callback) {
  //TODO
  return this;
};

/**
 * undelegate
 * Undelegate event.
 *
 * @param {String} event event name
 * @param {Function} callback callback
 * @return {Event} this for chaining
 * @api public
 */

Delegate.prototype.undelegate = function (event, callback) {
  //TODO
  return this;
};
