

/*---
description: Property type and descriptor.
includes: [propertyHelper.js]
features: [Intl.NumberFormat-v3]
---*/

assert.sameValue(
  typeof Intl.NumberFormat.prototype.formatRangeToParts,
  'function',
  '`typeof Intl.NumberFormat.prototype.formatRangeToParts` is `function`'
);

verifyProperty(Intl.NumberFormat.prototype, 'formatRangeToParts', {
  enumerable: false,
  writable: true,
  configurable: true,
});
