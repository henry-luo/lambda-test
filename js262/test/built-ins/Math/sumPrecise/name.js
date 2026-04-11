

/*---
esid: sec-math.sumprecise
description: Math.sumPrecise.name is "sumPrecise".
includes: [propertyHelper.js]
features: [Math.sumPrecise]
---*/

verifyProperty(Math.sumPrecise, "name", {
  value: "sumPrecise",
  writable: false,
  enumerable: false,
  configurable: true
});
