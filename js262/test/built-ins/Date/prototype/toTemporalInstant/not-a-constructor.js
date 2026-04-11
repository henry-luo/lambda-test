

/*---
esid: sec-date.prototype.totemporalinstant
description: >
  Date.prototype.toTemporalInstant does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Temporal, Reflect.construct]
---*/

assert.sameValue(
  isConstructor(Date.prototype.toTemporalInstant),
  false,
  'isConstructor(Date.prototype.toTemporalInstant) must return false'
);

var date = new Date(0);

assert.throws(TypeError, function() {
  new date.toTemporalInstant();
});

