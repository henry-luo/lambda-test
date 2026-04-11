

/*---
esid: sec-object.prototype.tostring
description: If the this value is undefined, return "[object Undefined]".
---*/
assert.sameValue(
  Object.prototype.toString.call(undefined),
  "[object Undefined]",
  "Object.prototype.toString.call(undefined) returns [object Undefined]"
);
