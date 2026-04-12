

/*---
description: Property type and descriptor.
includes: [propertyHelper.js]
features: [Intl.NumberFormat-v3]
---*/

assert.sameValue(
  typeof Intl.NumberFormat.prototype.formatRange,
  'function',
  '`typeof Intl.NumberFormat.prototype.formatRange` is `function`'
);

verifyProperty(Intl.NumberFormat.prototype, 'formatRange', {
  enumerable: false,
  writable: true,
  configurable: true,
});
