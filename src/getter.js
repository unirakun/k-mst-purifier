/* eslint-disable no-param-reassign */

export default (fn) => {
  fn.isGetter = true
  return fn
}
