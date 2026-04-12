

/*---
description: >
    Objects whose specified property is configurable satisfy the assertion.
includes: [propertyHelper.js]
---*/

Object.defineProperty(this, 'Object', {
  configurable: true,
  value: Object
});

verifyConfigurable(this, 'Object');
