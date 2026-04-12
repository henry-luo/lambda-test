

/*---
info: If y is a prefix of x and x !== y, return true
es5id: 11.8.2_A4.11
description: x and y are string primitives
---*/


if (("x " > "x") !== true) {
  throw new Test262Error('#1: ("x " > "x") === true');
}


if (("x" > "") !== true) {
  throw new Test262Error('#2: ("x" > "") === true');
}


if (("abcd" > "ab") !== true) {
  throw new Test262Error('#3: ("abcd" > ab") === true');
}


if (("abc\u0064" > "abcd") !== false) {
  throw new Test262Error('#4: ("abc\\u0064" > abc") === false');
}


if (("x" + "y" > "x") !== true) {
  throw new Test262Error('#5: ("x" + "y" > "x") === true');
}


var x = "x";
if ((x + 'y' > x) !== true) {
  throw new Test262Error('#6: var x = "x"; (x + "y" > x) === true');
}


if (("a\u0000a" > "a\u0000") !== true) {
  throw new Test262Error('#7: ("a\\u0000a" > "a\\u0000") === true');
}


if ((" x" > "x") !== false) {
  throw new Test262Error('#8: (" x" > "x") === false');
}
