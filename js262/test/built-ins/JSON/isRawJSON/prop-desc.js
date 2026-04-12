

/*---
esid: sec-json.israwjson
description: >
  Property type and descriptor.
info: |
  JSON.isRawJSON ( O )

  18 ECMAScript Standard Built-in Objects
  ...
  Every other data property described in clauses 19 through 28 and in Annex B.2
  has the attributes { [[Writable]]: true, [[Enumerable]]: false,
  [[Configurable]]: true } unless otherwise specified.

includes: [propertyHelper.js]
features: [json-parse-with-source]
---*/

verifyProperty(JSON, 'isRawJSON', {
  enumerable: false,
  writable: true,
  configurable: true
});
