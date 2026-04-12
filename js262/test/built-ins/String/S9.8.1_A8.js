

/*---
info: |
    If 1 > s > -1, and -6 < n <= 0, return the string consisting of the
    character '0', followed by a decimal point '.', followed by -n occurrences
    of the character '0', followed by the k digits of the decimal
    representation of s
es5id: 9.8.1_A8
description: Various float numbers convert to String by explicit transformation
---*/


if (String(0.1) !== "0.1") {
  throw new Test262Error('#1: String(0.1) === "0.1". Actual: ' + (String(0.1)));
}


if (String(0.000001) !== "0.000001") {
  throw new Test262Error('#2: String(0.000001) === "0.000001". Actual: ' + (String(0.000001)));
}


if (String(1e-6) !== "0.000001") {
  throw new Test262Error('#3: String(1e-6) === "0.000001". Actual: ' + (String(1e-6)));
}


if (String(1E-6) !== "0.000001") {
  throw new Test262Error('#4: String(1E-6) === "0.000001". Actual: ' + (String(1E-6)));
}


if (String(-0.1) !== "-0.1") {
  throw new Test262Error('#5: String(-0.1) === "-0.1". Actual: ' + (String(-0.1)));
}


if (String(-0.000001) !== "-0.000001") {
  throw new Test262Error('#6: String(-0.000001) === "-0.000001". Actual: ' + (String(-0.000001)));
}


if (String(-1e-6) !== "-0.000001") {
  throw new Test262Error('#7: String(-1e-6) === "0.000001". Actual: ' + (String(-1e-6)));
}


if (String(-1E-6) !== "-0.000001") {
  throw new Test262Error('#8: String(-1E-6) === "0.000001". Actual: ' + (String(-1E-6)));
}
