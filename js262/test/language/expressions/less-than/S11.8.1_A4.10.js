

/*---
info: If y is a prefix of x, return false
es5id: 11.8.1_A4.10
description: x and y are string primitives
---*/


if (("x" < "x") !== false) {
  throw new Test262Error('#1: ("x" < "x") === false');
}


if (("x" < "") !== false) {
  throw new Test262Error('#2: ("x" < "") === false');
}


if (("abcd" < "ab") !== false) {
  throw new Test262Error('#3: ("abcd" < ab") === false');
}


if (("abc\u0064" < "abcd") !== false) {
  throw new Test262Error('#4: ("abc\\u0064" < abcd") === false');
}


if (("x" + "y" < "x") !== false) {
  throw new Test262Error('#5: ("x" + "y" < "x") === false');
}


var x = "x";
if ((x + "y" < x) !== false) {
  throw new Test262Error('#6: var x = "x"; (x + "y" < x) === false');
}
