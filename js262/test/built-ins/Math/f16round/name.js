

/*---
esid: sec-math.f16round
description: >
  Math.f16round.name is "f16round"
features: [Float16Array]
includes: [propertyHelper.js]
---*/

verifyProperty(Math.f16round, 'name', {
  value: 'f16round',
  enumerable: false,
  writable: false,
  configurable: true
});
