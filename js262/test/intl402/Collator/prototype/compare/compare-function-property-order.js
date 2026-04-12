

/*---
esid: sec-createbuiltinfunction
description: Collator bound compare function property order
info: |
  Set order: "length", "name"
includes: [compareArray.js]
---*/

var compareFn = new Intl.Collator().compare;

assert.compareArray(
  Object.getOwnPropertyNames(compareFn),
  ['length', 'name']
);
