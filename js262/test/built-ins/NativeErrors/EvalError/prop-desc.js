

/*---
esid: sec-constructor-properties-of-the-global-object-evalerror
description: Property descriptor for EvalError
info: |
  Every other data property described in clauses 18 through 26 and in Annex B.2
  has the attributes { [[Writable]]: true, [[Enumerable]]: false,
  [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

verifyProperty(this, "EvalError", {
  writable: true,
  enumerable: false,
  configurable: true
});
