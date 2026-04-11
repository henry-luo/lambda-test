

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  Math.f16round does not implement [[Construct]], is not new-able
includes: [isConstructor.js]
features: [Float16Array, Reflect.construct]
---*/

assert(!isConstructor(Math.f16round), "Math.f16round is not a constructor");

assert.throws(TypeError, function () {
  new Math.f16round();
});
