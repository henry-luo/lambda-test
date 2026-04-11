

/*---
info: |
    The String.prototype.toLowerCase.length property has the attribute
    ReadOnly
es5id: 15.5.4.16_A10
description: >
    Checking if varying the String.prototype.toLowerCase.length
    property fails
includes: [propertyHelper.js]
---*/


if (!(String.prototype.toLowerCase.hasOwnProperty('length'))) {
  throw new Test262Error('#1: String.prototype.toLowerCase.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.toLowerCase.hasOwnProperty('length'));
}


var __obj = String.prototype.toLowerCase.length;

verifyNotWritable(String.prototype.toLowerCase, "length", null, function() {
  return "shifted";
});


if (String.prototype.toLowerCase.length !== __obj) {
  throw new Test262Error('#2: __obj = String.prototype.toLowerCase.length; String.prototype.toLowerCase.length = function(){return "shifted";}; String.prototype.toLowerCase.length === __obj. Actual: ' + String.prototype.toLowerCase.length);
}

