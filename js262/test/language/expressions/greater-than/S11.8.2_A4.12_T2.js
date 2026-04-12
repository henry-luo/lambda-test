

/*---
info: |
    If neither x, nor y is a prefix of each other, returned result of strings
    comparison applies a simple lexicographic ordering to the sequences of
    code unit value values
es5id: 11.8.2_A4.12_T2
description: x and y are string primitives
---*/


if (("x" > "0") !== true) {
  throw new Test262Error('#1: ("x" > "0") !== true');
}


if (("0" > "-") !== true) {
  throw new Test262Error('#2: ("0" > "-") !== true');
}


if (("0" > ".") !== true) {
  throw new Test262Error('#3: ("0" > ".") !== true');
}


if (("-" > "+") !== true) {
  throw new Test262Error('#4: ("-" > "+") !== true');
}


if (("-1" > "-0") !== true) {
  throw new Test262Error('#5: ("-1" > "-0") !== true');
}


if (("-1" > "+1") !== true) {
  throw new Test262Error('#6: ("-1" > "+1") !== true');
}


if (("1e-10" > "1") !== true) {
throw new Test262Error('#7: ("1e-10" > "1") !== true');
}
