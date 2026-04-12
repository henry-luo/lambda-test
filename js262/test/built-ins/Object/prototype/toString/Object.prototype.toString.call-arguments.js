

/*---
esid: sec-object.prototype.tostring
description: has a [[ParameterMap]] internal slot, let builtinTag be "Arguments".
---*/
assert.sameValue(
  Object.prototype.toString.call(function() { return arguments; }()),
  "[object Arguments]",
  "Object.prototype.toString.call(function() { return arguments; }()) returns [object Arguments]"
);
