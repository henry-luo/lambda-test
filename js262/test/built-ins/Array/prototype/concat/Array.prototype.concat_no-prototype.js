

/*---
esid: sec-array.prototype.concat
description: Array.prototype.concat no prototype
---*/
assert.sameValue(
  Array.prototype.concat.prototype,
  void 0,
  'The value of Array.prototype.concat.prototype is expected to be void 0'
);
