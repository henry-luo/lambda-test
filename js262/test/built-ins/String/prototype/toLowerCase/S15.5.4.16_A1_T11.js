

/*---
info: String.prototype.toLowerCase()
es5id: 15.5.4.16_A1_T11
description: >
    Override toString function, toString throw exception, then call
    toLowerCase() function for this object
---*/

var __obj = {
  toString: function() {
    throw "intostr";
  }
}
__obj.toLowerCase = String.prototype.toLowerCase;


try {
  var x = __obj.toLowerCase();
  throw new Test262Error('#1: "var x = __obj.toLowerCase()" lead to throwing exception');
} catch (e) {
  if (e !== "intostr") {
    throw new Test262Error('#1.1: Exception === "intostr". Actual: ' + e);
  }
}

