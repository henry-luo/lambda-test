

/*---
info: |
    Return the string consisting of the single digit of s,
    followed by lowercase character 'e', followed by a plus sign '+' or minus
    sign '-' according to whether n-1 is positive or negative, followed by the
    decimal representation of the integer abs(n-1) (with no leading zeros)
es5id: 9.8.1_A9_T2
description: >
    Various float numbers with many zeros convert to String by
    explicit transformation
---*/


if (String(0.0000001) !== "1e-7") {
  throw new Test262Error('#1: String(0.0000001) === "1e-7". Actual: ' + (String(0.0000001)));
}


if (String(0.000000000100000000000) !== "1e-10") {
  throw new Test262Error('#2: String(0.000000000100000000000) === "1e-10". Actual: ' + (String(0.000000000100000000000)));
}


if (String(1e-7) !== "1e-7") {
  throw new Test262Error('#3: String(1e-7) === "1e-7". Actual: ' + (String(1e-7)));
}


if (String(1.0e-10) !== "1e-10") {
  throw new Test262Error('#4: String(1.0e-10) === "1e-10". Actual: ' + (String(1.0e-10)));
}


if (String(1E-7) !== "1e-7") {
  throw new Test262Error('#5: String(1E-7) === "1e-7". Actual: ' + (String(1E-7)));
}


if (String(1.0E-10) !== "1e-10") {
  throw new Test262Error('#6: String(1.0E-10) === "1e-10". Actual: ' + (String(1.0E-10)));
}


if (String(-0.0000001) !== "-1e-7") {
  throw new Test262Error('#7: String(-0.0000001) === "1e-7". Actual: ' + (String(-0.0000001)));
}


if (String(-0.000000000100000000000) !== "-1e-10") {
  throw new Test262Error('#8: String(-0.000000000100000000000) === "1e-10". Actual: ' + (String(-0.000000000100000000000)));
}


if (String(-1e-7) !== "-1e-7") {
  throw new Test262Error('#9: String(-1e-7) === "-1e-7". Actual: ' + (String(-1e-7)));
}


if (String(-1.0e-10) !== "-1e-10") {
  throw new Test262Error('#10: String(-1.0e-10) === "-1e-10". Actual: ' + (String(-1.0e-10)));
}


if (String(-1E-7) !== "-1e-7") {
  throw new Test262Error('#11: String(-1E-7) === "-1e-7". Actual: ' + (String(-1E-7)));
}


if (String(-1.0E-10) !== "-1e-10") {
  throw new Test262Error('#12: String(-1.0E-10) === "-1e-10". Actual: ' + (String(-1.0E-10)));
}
