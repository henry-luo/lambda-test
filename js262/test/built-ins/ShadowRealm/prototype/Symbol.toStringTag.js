

/*---
esid: sec-shadowrealm.prototype-@@tostringtag
description: >
  `Symbol.toStringTag` property descriptor
info: |
  The initial value of the @@toStringTag property is the String value
  "ShadowRealm".

  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [ShadowRealm, Symbol.toStringTag]
---*/

verifyProperty(ShadowRealm.prototype, Symbol.toStringTag, {
    value: 'ShadowRealm',
    enumerable: false,
    writable: false,
    configurable: true
});
