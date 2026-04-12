

/*---
description: >
    Objects whose specified property is not configurable satisfy the assertion.
includes: [propertyHelper.js]
---*/

var obj = {};
Object.defineProperty(obj, 'a', {
  configurable: false
});

verifyNotConfigurable(obj, 'a');
