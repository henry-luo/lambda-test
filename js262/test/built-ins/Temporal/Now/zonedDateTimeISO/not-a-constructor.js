

/*---
esid: sec-temporal.now.zoneddatetimeiso
description: Temporal.Now.zonedDateTimeISO does not implement [[Construct]]
includes: [isConstructor.js]
features: [Reflect.construct, Temporal, arrow-function]
---*/

assert.sameValue(isConstructor(Temporal.Now.zonedDateTimeISO), false, 'isConstructor(Temporal.Now.zonedDateTimeISO) must return false');

assert.throws(TypeError, () => {
  new Temporal.Now.zonedDateTimeISO();
}, 'new Temporal.Now.zonedDateTimeISO() throws a TypeError exception');
