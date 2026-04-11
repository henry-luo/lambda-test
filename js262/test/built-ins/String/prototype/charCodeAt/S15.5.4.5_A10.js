

/*---
info: The String.prototype.charCodeAt.length property has the attribute ReadOnly
es5id: 15.5.4.5_A10
description: >
    Checking if varying the String.prototype.charCodeAt.length
    property fails
includes: [propertyHelper.js]
---*/


if (!(String.prototype.charCodeAt.hasOwnProperty('length'))) {
  throw new Test262Error('#1: String.prototype.charCodeAt.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.charCodeAt.hasOwnProperty('length'));
}


var __obj = String.prototype.charCodeAt.length;

verifyNotWritable(String.prototype.charCodeAt, "length", null, function() {
  return "shifted";
});


if (String.prototype.charCodeAt.length !== __obj) {
  throw new Test262Error('#2: __obj = String.prototype.charCodeAt.length; String.prototype.charCodeAt.length = function(){return "shifted";}; String.prototype.charCodeAt.length === __obj. Actual: ' + String.prototype.charCodeAt.length);
}

