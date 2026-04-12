

/*---
info: String.prototype.toUpperCase()
es5id: 15.5.4.18_A1_T4
description: >
    Call toUpperCase() function without arguments of string and from
    empty string
---*/

var __lowerCase = "".toUpperCase();

var __expected = "";


if (__lowerCase.length !== __expected.length) {
  throw new Test262Error('#1: __lowerCase = "".toUpperCase(); __expected = ""; __lowerCase.length === __expected.length. Actual: ' + __lowerCase.length);
}


if (__lowerCase.index !== __expected.index) {
  throw new Test262Error('#2: __lowerCase = "".toUpperCase(); __expected = ""; __lowerCase.index === __expected.index. Actual: ' + __lowerCase.index);
}


if (__lowerCase.input !== __expected.input) {
  throw new Test262Error('#3: __lowerCase = "".toUpperCase(); __expected = ""; __lowerCase.input === __expected.input. Actual: ' + __lowerCase.input);
}


if (__lowerCase[0] !== __expected[0]) {
  throw new Test262Error('#4: __lowerCase = "".toUpperCase(); __expected = ""; __lowerCase[0]===' + __expected[0] + '. Actual: ' + __lowerCase[0]);
}

