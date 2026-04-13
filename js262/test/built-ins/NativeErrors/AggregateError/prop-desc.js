

/*---
esid: sec-aggregate-error
description: >
  Property descriptor of AggregateError
info: |
  The AggregateError Object

  ECMAScript Standard Built-in Objects:

  Every other data property described in clauses 18 through 26 and in Annex B.2
  has the attributes { [[Writable]]: true, [[Enumerable]]: false,
  [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
features: [AggregateError]
---*/

assert.sameValue(typeof AggregateError, 'function');

verifyProperty(this, 'AggregateError', {
  enumerable: false,
  writable: true,
  configurable: true
});
