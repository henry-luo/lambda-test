

/*---
esid: sec-temporal.zoneddatetime.prototype.tojson
description: >
  Temporal.ZonedDateTime.prototype.toJSON does not implement [[Construct]], is not new-able
info: |
    Built-in function objects that are not identified as constructors do not implement the
    [[Construct]] internal method unless otherwise specified in the description of a particular
    function.
includes: [isConstructor.js]
features: [Reflect.construct, Temporal]
---*/

assert.throws(TypeError, () => {
  new Temporal.ZonedDateTime.prototype.toJSON();
}, "Calling as constructor");

assert.sameValue(isConstructor(Temporal.ZonedDateTime.prototype.toJSON), false,
  "isConstructor(Temporal.ZonedDateTime.prototype.toJSON)");
