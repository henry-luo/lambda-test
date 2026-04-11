

/*---
info: |
    If ToNumber(value) is +0, -0, +Infinity, or -Infinity,
    return ToNumber(value)
es5id: 9.4_A2
description: >
    Check what position is defined by Number.NaN in string "abc":
    "abc".charAt(Number.NaN)
---*/


if ("abc".charAt(0.0) !== "a") {
  throw new Test262Error('#1: "abc".charAt(0.0) === "a". Actual: ' + ("abc".charAt(0.0)));
}


if ("abc".charAt(-0.0) !== "a") {
  throw new Test262Error('#2: "abc".charAt(-0.0) === "a". Actual: ' + ("abc".charAt(-0.0)));
}
