

/*---
esid: sec-temporal.plaintime.compare
description: Temporal.PlainTime.compare does not implement [[Construct]], is not new-able
info: |
    Built-in function objects that are not identified as constructors do not implement the
    [[Construct]] internal method unless otherwise specified in the description of a particular
    function.
includes: [isConstructor.js]
features: [Reflect.construct, Temporal]
---*/

assert.throws(TypeError, () => {
  new Temporal.PlainTime.compare();
}, "Calling as constructor");

assert.sameValue(isConstructor(Temporal.PlainTime.compare), false,
  "isConstructor(Temporal.PlainTime.compare)");
