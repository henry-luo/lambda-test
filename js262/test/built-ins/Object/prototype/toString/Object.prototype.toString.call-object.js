

/*---
esid: sec-object.prototype.tostring
description: Else, let builtinTag be "Object".
---*/
assert.sameValue(
  Object.prototype.toString.call({}),
  "[object Object]",
  "Object.prototype.toString.call({}) returns [object Object]"
);
assert.sameValue(
  Object.prototype.toString.call(Object({})),
  "[object Object]",
  "Object.prototype.toString.call(Object({})) returns [object Object]"
);
assert.sameValue(
  Object.prototype.toString.call(new Object({})),
  "[object Object]",
  "Object.prototype.toString.call(new Object({})) returns [object Object]"
);
