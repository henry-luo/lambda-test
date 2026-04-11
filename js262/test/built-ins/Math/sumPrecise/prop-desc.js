

/*---
esid: sec-math.sumprecise
description: checks the "sumPrecise" property of Math
includes: [propertyHelper.js]
features: [Math.sumPrecise]
---*/

verifyProperty(Math, "sumPrecise", {
  writable: true,
  enumerable: false,
  configurable: true
});
