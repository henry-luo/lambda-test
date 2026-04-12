

/*---
info: The String.prototype.search.length property has the attribute ReadOnly
es5id: 15.5.4.12_A10
description: >
    Checking if varying the String.prototype.search.length property
    fails
includes: [propertyHelper.js]
---*/


if (!(String.prototype.search.hasOwnProperty('length'))) {
  throw new Test262Error('#1: String.prototype.search.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.search.hasOwnProperty('length'));
}


var __obj = String.prototype.search.length;

verifyNotWritable(String.prototype.search, "length", null, function() {
  return "shifted";
});


if (String.prototype.search.length !== __obj) {
  throw new Test262Error('#2: __obj = String.prototype.search.length; String.prototype.search.length = function(){return "shifted";}; String.prototype.search.length === __obj. Actual: ' + String.prototype.search.length);
}

