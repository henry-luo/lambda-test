

/*---
esid: sec-math.log
description: >
  "log" property of Math
info: |
  Section 17: Every other data property described in clauses 18 through 26
  and in Annex B.2 has the attributes { [[Writable]]: true,
  [[Enumerable]]: false, [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

verifyProperty(Math, "log", {
  writable: true,
  enumerable: false,
  configurable: true
});
