

/*---
esid: sec-get-regexp.prototype.source
description: >
    RegExp.prototype.source is an accessor property whose set accessor
    function is undefined
includes: [propertyHelper.js]
---*/

var d = Object.getOwnPropertyDescriptor(RegExp.prototype, 'source');

assert.sameValue(typeof d.get, 'function', 'typeof d.get');
assert.sameValue(d.set, undefined, 'd.set');

verifyProperty(RegExp.prototype, 'source', {
  enumerable: false,
  configurable: true,
});
