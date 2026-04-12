

/*---
esid: sec-temporal.plaintime.prototype.add
description: >
  Temporal.PlainTime.prototype.add does not implement [[Construct]], is not new-able
info: |
    Built-in function objects that are not identified as constructors do not implement the
    [[Construct]] internal method unless otherwise specified in the description of a particular
    function.
includes: [isConstructor.js]
features: [Reflect.construct, Temporal]
---*/

assert.throws(TypeError, () => {
  new Temporal.PlainTime.prototype.add();
}, "Calling as constructor");

assert.sameValue(isConstructor(Temporal.PlainTime.prototype.add), false,
  "isConstructor(Temporal.PlainTime.prototype.add)");
