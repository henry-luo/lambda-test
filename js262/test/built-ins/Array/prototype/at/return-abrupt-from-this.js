

/*---
esid: sec-array.prototype.at
description: >
  Return abrupt from ToObject(this value).
info: |
  Array.prototype.at( index )

  Let O be ? ToObject(this value).

features: [Array.prototype.at]
---*/
assert.sameValue(
  typeof Array.prototype.at,
  'function',
  'The value of `typeof Array.prototype.at` is expected to be "function"'
);

assert.throws(TypeError, () => {
  Array.prototype.at.call(undefined);
}, 'Array.prototype.at.call(undefined) throws a TypeError exception');

assert.throws(TypeError, () => {
  Array.prototype.at.call(null);
}, 'Array.prototype.at.call(null) throws a TypeError exception');
