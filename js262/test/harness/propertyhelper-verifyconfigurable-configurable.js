

/*---
description: >
    Objects whose specified property is configurable satisfy the assertion.
includes: [propertyHelper.js]
---*/

var obj = {};
Object.defineProperty(obj, 'a', {
  configurable: true
});

verifyConfigurable(obj, 'a');
