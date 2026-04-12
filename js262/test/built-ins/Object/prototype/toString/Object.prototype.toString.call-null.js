

/*---
esid: sec-object.prototype.tostring
description: If the this value is null, return "[object Null]".
---*/
assert.sameValue(
  Object.prototype.toString.call(null),
  "[object Null]",
  "Object.prototype.toString.call(null) returns [object Null]"
);
