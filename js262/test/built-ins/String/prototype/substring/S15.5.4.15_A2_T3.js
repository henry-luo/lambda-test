

/*---
info: String.prototype.substring (start, end) returns a string value(not object)
es5id: 15.5.4.15_A2_T3
description: Call substring from empty String object
---*/

var __string = new String("");


if (__string.substring(1, 0) !== "") {
  throw new Test262Error('#1: __string = new String(""); __string.substring(1,0) === "". Actual: ' + __string.substring(1, 0));
}

