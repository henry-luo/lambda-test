

/*---
esid: sec-set-constructor
description: >
    Properties of the Set Constructor

    Besides the length property (whose value is 0)

includes: [propertyHelper.js]
---*/

verifyProperty(Set, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
