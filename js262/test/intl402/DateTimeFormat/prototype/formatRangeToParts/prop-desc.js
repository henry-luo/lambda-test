

/*---
description: Property type and descriptor.
includes: [propertyHelper.js]
features: [Intl.DateTimeFormat-formatRange]
---*/

assert.sameValue(
  typeof Intl.DateTimeFormat.prototype.formatRangeToParts,
  'function',
  '`typeof Intl.DateTimeFormat.prototype.formatRangeToParts` is `function`'
);

verifyProperty(Intl.DateTimeFormat.prototype, 'formatRangeToParts', {
  enumerable: false,
  writable: true,
  configurable: true,
});
