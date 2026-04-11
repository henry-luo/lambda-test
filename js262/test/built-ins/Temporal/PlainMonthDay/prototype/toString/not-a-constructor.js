

/*---
esid: sec-temporal.plainmonthday.prototype.tostring
description: >
  Temporal.PlainMonthDay.prototype.toString does not implement [[Construct]], is not new-able
info: |
    Built-in function objects that are not identified as constructors do not implement the
    [[Construct]] internal method unless otherwise specified in the description of a particular
    function.
includes: [isConstructor.js]
features: [Reflect.construct, Temporal]
---*/

assert.throws(TypeError, () => {
  new Temporal.PlainMonthDay.prototype.toString();
}, "Calling as constructor");

assert.sameValue(isConstructor(Temporal.PlainMonthDay.prototype.toString), false,
  "isConstructor(Temporal.PlainMonthDay.prototype.toString)");
