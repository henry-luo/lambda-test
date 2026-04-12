

/*---
info: String.prototype.slice (start, end) returns a string value(not object)
es5id: 15.5.4.13_A2_T6
description: start is negative float number, end is 0
---*/

var __string = new String("this is a string object");


if (__string.slice(-0.01, 0) !== "") {
  throw new Test262Error('#1: __string = new String("this is a string object"); __string.slice(-0.01,0) === "". Actual: ' + __string.slice(-0.01, 0));
}

