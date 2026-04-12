

/*---
esid: sec-createbuiltinfunction
description: DateTimeFormat bound format function property order
info: |
  Set order: "length", "name"
includes: [compareArray.js]
---*/

var formatFn = new Intl.DateTimeFormat().format;

assert.compareArray(
  Object.getOwnPropertyNames(formatFn),
  ['length', 'name']
);
