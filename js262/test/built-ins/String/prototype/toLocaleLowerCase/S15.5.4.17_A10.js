

/*---
info: |
    The String.prototype.toLocaleLowerCase.length property has the attribute
    ReadOnly
es5id: 15.5.4.17_A10
description: >
    Checking if varying the String.prototype.toLocaleLowerCase.length
    property fails
includes: [propertyHelper.js]
---*/


if (!(String.prototype.toLocaleLowerCase.hasOwnProperty('length'))) {
  throw new Test262Error('#1: String.prototype.toLocaleLowerCase.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.toLocaleLowerCase.hasOwnProperty('length'));
}


var __obj = String.prototype.toLocaleLowerCase.length;

verifyNotWritable(String.prototype.toLocaleLowerCase, "length", null, function() {
  return "shifted";
});


if (String.prototype.toLocaleLowerCase.length !== __obj) {
  throw new Test262Error('#2: __obj = String.prototype.toLocaleLowerCase.length; String.prototype.toLocaleLowerCase.length = function(){return "shifted";}; String.prototype.toLocaleLowerCase.length === __obj. Actual: ' + String.prototype.toLocaleLowerCase.length);
}

