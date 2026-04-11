

/*---
esid: sec-math.sumprecise
description: Math.sumPrecise.length is 1.
includes: [propertyHelper.js]
features: [Math.sumPrecise]
---*/

verifyProperty(Math.sumPrecise, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
