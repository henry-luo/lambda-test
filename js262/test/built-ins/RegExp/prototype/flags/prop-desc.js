

/*---
esid: sec-get-regexp.prototype.flags
description: >
  get RegExp.prototype.flags property descriptor
info: |
  get RegExp.prototype.flags

  RegExp.prototype.flags is an accessor property whose set accessor
  function is undefined
includes: [propertyHelper.js]
---*/

var d = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags');

assert.sameValue(typeof d.get, 'function', 'typeof d.get');
assert.sameValue(d.set, undefined, 'd.set');

verifyProperty(RegExp.prototype, 'flags', {
  enumerable: false,
  configurable: true,
});
