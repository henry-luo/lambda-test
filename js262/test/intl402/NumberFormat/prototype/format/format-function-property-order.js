

/*---
esid: sec-createbuiltinfunction
description: NumberFormat bound format function property order
info: |
  Set order: "length", "name"
includes: [compareArray.js]
---*/

var formatFn = new Intl.NumberFormat().format;

assert.compareArray(
  Object.getOwnPropertyNames(formatFn),
  ['length', 'name']
);
