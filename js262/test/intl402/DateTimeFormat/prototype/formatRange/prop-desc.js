

/*---
description: Property type and descriptor.
includes: [propertyHelper.js]
features: [Intl.DateTimeFormat-formatRange]
---*/

assert.sameValue(
  typeof Intl.DateTimeFormat.prototype.formatRange,
  'function',
  '`typeof Intl.DateTimeFormat.prototype.formatRange` is `function`'
);

verifyProperty(Intl.DateTimeFormat.prototype, 'formatRange', {
  enumerable: false,
  writable: true,
  configurable: true,
});
