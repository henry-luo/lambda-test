

/*---
info: |
    The String.prototype.toUpperCase.length property has the attribute
    ReadOnly
es5id: 15.5.4.18_A10
description: >
    Checking if varying the String.prototype.toUpperCase.length
    property fails
includes: [propertyHelper.js]
---*/


if (!(String.prototype.toUpperCase.hasOwnProperty('length'))) {
  throw new Test262Error('#1: String.prototype.toUpperCase.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.toUpperCase.hasOwnProperty('length'));
}


var __obj = String.prototype.toUpperCase.length;

verifyNotWritable(String.prototype.toUpperCase, "length", null, function() {
  return "shifted";
});


if (String.prototype.toUpperCase.length !== __obj) {
  throw new Test262Error('#2: __obj = String.prototype.toUpperCase.length; String.prototype.toUpperCase.length = function(){return "shifted";}; String.prototype.toUpperCase.length === __obj. Actual: ' + String.prototype.toUpperCase.length);
}

