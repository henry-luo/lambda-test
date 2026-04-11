

/*---
info: If x is a prefix of y and x !== y, return false
es5id: 11.8.4_A4.10
description: x and y are string primitives
---*/


if (("x" >= "x ") !== false) {
  throw new Test262Error('#1: ("x" >= "x ") === false');
}


if (("" >= "x") !== false) {
  throw new Test262Error('#2: ("" >= "x") === false');
}


if (("ab" >= "abcd") !== false) {
  throw new Test262Error('#3: ("ab" >= abcd") === false');
}


if (("abcd" >= "abc\u0064") !== true) {
  throw new Test262Error('#4: ("abcd" >= abc\\u0064") === true');
}


if (("x" >= "x" + "y") !== false) {
  throw new Test262Error('#5: ("x" >= "x" + "y") === false');
}


var x = "x";
if ((x >= x + "y") !== false) {
  throw new Test262Error('#6: var x = "x"; (x >= x + "y") === false');
}
