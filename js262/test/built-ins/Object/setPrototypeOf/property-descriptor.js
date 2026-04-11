

/*---
es6id: 19.1.2.18
description: Object.setPrototypeOf property descriptor
info: |
    Every other data property described in clauses 18 through 26 and in Annex
    B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

assert.sameValue(typeof Object.setPrototypeOf, 'function');

verifyProperty(Object, "setPrototypeOf", {
  writable: true,
  enumerable: false,
  configurable: true,
});
