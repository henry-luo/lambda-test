

/*---
info: String.prototype.slice (start, end) returns a string value(not object)
es5id: 15.5.4.13_A2_T9
description: start is -Infinity, end is -Infinity
---*/

var __string = new String("this is a string object");


if (__string.slice(-Infinity, -Infinity) !== "") {
  throw new Test262Error('#1: __string = new String("this is a string object"); __string.slice(-Infinity, -Infinity) === "". Actual: ' + __string.slice(-Infinity, -Infinity));
}

