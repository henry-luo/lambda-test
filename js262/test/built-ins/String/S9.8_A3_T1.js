

/*---
info: |
    Result of ToString conversion from boolean value is "true" if
    the argument is "true", else is "false"
es5id: 9.8_A3_T1
description: True and false convert to String by explicit transformation
---*/


if (String(false) !== "false") {
  throw new Test262Error('#1: String(false) === "false". Actual: ' + (String(false)));
}


if (String(true) !== "true") {
  throw new Test262Error('#2: String(true) === "true". Actual: ' + (String(true)));
}
