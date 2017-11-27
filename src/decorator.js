/* eslint-disable no-param-reassign */

export default fns => (self) => {
  const keys = Object.keys(fns)
  const [getters, functions] = keys.reduce(
    (acc, fn) => {
      const [gs, fs] = acc
      return [
        fns[fn].isGetter ? [...gs, fn] : gs,
        fns[fn].isGetter ? fs : [...fs, fn],
      ]
    },
    [[], []],
  )

  const result = {}

  getters.forEach((fn) => {
    Object.defineProperty(result, fn, { get: () => fns[fn](self), enumerable: true })
  })

  functions.forEach((fn) => {
    result[fn] = fns[fn](self)
  })

  return result
}
