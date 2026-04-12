

/*---
description: Test AsyncDisposableStack constructor and prototype.
includes: [propertyHelper.js]
features: [globalThis, explicit-resource-management]
---*/


assert.sameValue(
    typeof AsyncDisposableStack, 'function',
    'The value of `typeof AsyncDisposableStack` is "function"');


verifyProperty(AsyncDisposableStack, 'prototype', {
  value: AsyncDisposableStack.prototype,
  writable: false,
  enumerable: false,
  configurable: false,
});
