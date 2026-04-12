

/*---
info: The RegExp.prototype.exec.length property has the attribute ReadOnly
es5id: 15.10.6.2_A10
description: Checking if varying the RegExp.prototype.exec.length property fails
includes: [propertyHelper.js]
---*/
assert.sameValue(
  RegExp.prototype.exec.hasOwnProperty('length'),
  true,
  'RegExp.prototype.exec.hasOwnProperty(\'length\') must return true'
);

var __obj = RegExp.prototype.exec.length;

verifyNotWritable(RegExp.prototype.exec, "length", null, function(){return "shifted";});

assert.sameValue(
  RegExp.prototype.exec.length,
  __obj,
  'The value of RegExp.prototype.exec.length is expected to equal the value of __obj'
);

