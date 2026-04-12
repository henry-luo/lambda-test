

/*---
info: The String.prototype.charAt.length property has the attribute ReadOnly
es5id: 15.5.4.4_A10
description: >
    Checking if varying the String.prototype.charAt.length property
    fails
includes: [propertyHelper.js]
---*/


if (!(String.prototype.charAt.hasOwnProperty('length'))) {
  throw new Test262Error('#1: String.prototype.charAt.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.charAt.hasOwnProperty('length'));
}


var __obj = String.prototype.charAt.length;

verifyNotWritable(String.prototype.charAt, "length", null, function() {
  return "shifted";
});


if (String.prototype.charAt.length !== __obj) {
  throw new Test262Error('#2: __obj = String.prototype.charAt.length; String.prototype.charAt.length = function(){return "shifted";}; String.prototype.charAt.length === __obj. Actual: ' + String.prototype.charAt.length);
}

