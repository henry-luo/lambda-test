

/*---
esid: sec-dataview.prototype-@@tostringtag
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "DataView".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Symbol.toStringTag]
---*/

assert.sameValue(
  DataView.prototype[Symbol.toStringTag],
  'DataView',
  'The value of DataView.prototype[Symbol.toStringTag] is expected to be "DataView"'
);

verifyProperty(DataView.prototype, Symbol.toStringTag, {
  writable: false,
  enumerable: false,
  configurable: true,
});
