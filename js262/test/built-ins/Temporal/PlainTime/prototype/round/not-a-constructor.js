

/*---
esid: sec-temporal.plaintime.prototype.round
description: >
  Temporal.PlainTime.prototype.round does not implement [[Construct]], is not new-able
info: |
    Built-in function objects that are not identified as constructors do not implement the
    [[Construct]] internal method unless otherwise specified in the description of a particular
    function.
includes: [isConstructor.js]
features: [Reflect.construct, Temporal]
---*/

assert.throws(TypeError, () => {
  new Temporal.PlainTime.prototype.round();
}, "Calling as constructor");

assert.sameValue(isConstructor(Temporal.PlainTime.prototype.round), false,
  "isConstructor(Temporal.PlainTime.prototype.round)");
