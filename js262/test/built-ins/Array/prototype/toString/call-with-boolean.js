

/*---
esid: sec-array.prototype.tostring
description: Array.prototype.toString applied to boolean primitive
---*/

assert.sameValue(
  Array.prototype.toString.call(true),
  "[object Boolean]",
  'Array.prototype.toString.call(true) must return "[object Boolean]"'
);
assert.sameValue(
  Array.prototype.toString.call(false),
  "[object Boolean]",
  'Array.prototype.toString.call(false) must return "[object Boolean]"'
);
