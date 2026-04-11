

/*---
info: The RegExp.prototype property has the attribute ReadOnly
es5id: 15.10.5.1_A4
description: Checking if varying the RegExp.prototype property fails
includes: [propertyHelper.js]
---*/
assert.sameValue(RegExp.hasOwnProperty('prototype'), true, 'RegExp.hasOwnProperty(\'prototype\') must return true');

var __obj = RegExp.prototype;

verifyNotWritable(RegExp, "prototype", null, function(){return "shifted";});

assert.sameValue(RegExp.prototype, __obj, 'The value of RegExp.prototype is expected to equal the value of __obj');

