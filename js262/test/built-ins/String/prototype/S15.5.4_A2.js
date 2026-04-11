

/*---
info: The String prototype object is itself a String object whose value is an empty string
es5id: 15.5.4_A2
description: Checking String.prototype
---*/


if (String.prototype != "") {
  throw new Test262Error('#1: String.prototype =="". Actual: String.prototype ==' + String.prototype);
}

