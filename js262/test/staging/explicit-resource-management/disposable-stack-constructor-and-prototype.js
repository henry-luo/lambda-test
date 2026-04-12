

/*---
description: Test DisposableStack constructor and prototype.
includes: [propertyHelper.js]
features: [globalThis, explicit-resource-management]
---*/


assert.sameValue(
    typeof DisposableStack, 'function',
    'The value of `typeof DisposableStack` is "function"');


verifyProperty(DisposableStack, 'prototype', {
  value: DisposableStack.prototype,
  writable: false,
  enumerable: false,
  configurable: false,
});
