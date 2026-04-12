

/*---
info: |
    Return the string consisting of the single digit of s,
    followed by lowercase character 'e', followed by a plus sign '+' or minus
    sign '-' according to whether n-1 is positive or negative, followed by the
    decimal representation of the integer abs(n-1) (with no leading zeros)
es5id: 9.8.1_A9_T1
description: Various big numbers convert to String by explicit transformation
---*/


if (String(1000000000000000000000) !== "1e+21") {
  throw new Test262Error('#1: String(1000000000000000000000) === "1e+21". Actual: ' + (String(1000000000000000000000)));
}


if (String(10000000000000000000000) !== "1e+22") {
  throw new Test262Error('#2: String(10000000000000000000000) === "1e+22". Actual: ' + (String(10000000000000000000000)));
}


if (String(1e21) !== "1e+21") {
  throw new Test262Error('#3: String(1e21) === "1e+21". Actual: ' + (String(1e21)));
}


if (String(1.0e22) !== "1e+22") {
  throw new Test262Error('#4: String(1.0e22) === "1e+22". Actual: ' + (String(1.0e22)));
}


if (String(1E21) !== "1e+21") {
  throw new Test262Error('#5: String(1E21) === "1e+21". Actual: ' + (String(1E21)));
}


if (String(1.0E22) !== "1e+22") {
  throw new Test262Error('#6: String(1.0E22) === "1e+22". Actual: ' + (String(1.0E22)));
}


if (String(-1000000000000000000000) !== "-1e+21") {
  throw new Test262Error('#7: String(-1000000000000000000000) === "-1e+21". Actual: ' + (String(-1000000000000000000000)));
}


if (String(-10000000000000000000000) !== "-1e+22") {
  throw new Test262Error('#8: String(-10000000000000000000000) === "-1e+22". Actual: ' + (String(-10000000000000000000000)));
}


if (String(-1e21) !== "-1e+21") {
  throw new Test262Error('#9: String(-1e21) === "-1e+21". Actual: ' + (String(-1e21)));
}


if (String(-1.0e22) !== "-1e+22") {
  throw new Test262Error('#10: String(-1.0e22) === "-1e+22". Actual: ' + (String(-1.0e22)));
}


if (String(-1E21) !== "-1e+21") {
  throw new Test262Error('#11: String(-1E21) === "-1e+21". Actual: ' + (String(-1E21)));
}


if (String(-1.0E22) !== "-1e+22") {
  throw new Test262Error('#12: String(-1.0E22) === "-1e+22". Actual: ' + (String(-1.0E22)));
}
