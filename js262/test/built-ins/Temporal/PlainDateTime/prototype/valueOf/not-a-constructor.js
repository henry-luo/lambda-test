

/*---
esid: sec-temporal.plaindatetime.prototype.valueof
description: >
  Temporal.PlainDateTime.prototype.valueOf does not implement [[Construct]], is not new-able
info: |
    Built-in function objects that are not identified as constructors do not implement the
    [[Construct]] internal method unless otherwise specified in the description of a particular
    function.
includes: [isConstructor.js]
features: [Reflect.construct, Temporal]
---*/

assert.throws(TypeError, () => {
  new Temporal.PlainDateTime.prototype.valueOf();
}, "Calling as constructor");

assert.sameValue(isConstructor(Temporal.PlainDateTime.prototype.valueOf), false,
  "isConstructor(Temporal.PlainDateTime.prototype.valueOf)");
