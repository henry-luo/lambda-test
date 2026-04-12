

/*---
info: The String.prototype.indexOf.length property has the attribute ReadOnly
es5id: 15.5.4.7_A10
description: >
    Checking if varying the String.prototype.indexOf.length property
    fails
includes: [propertyHelper.js]
---*/


if (!(String.prototype.indexOf.hasOwnProperty('length'))) {
  throw new Test262Error('#1: String.prototype.indexOf.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.indexOf.hasOwnProperty('length'));
}


var __obj = String.prototype.indexOf.length;

verifyNotWritable(String.prototype.indexOf, "length", null, function() {
  return "shifted";
});


if (String.prototype.indexOf.length !== __obj) {
  throw new Test262Error('#2: __obj = String.prototype.indexOf.length; String.prototype.indexOf.length = function(){return "shifted";}; String.prototype.indexOf.length === __obj. Actual: ' + String.prototype.indexOf.length);
}

