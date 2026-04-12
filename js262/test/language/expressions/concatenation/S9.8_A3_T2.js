

/*---
info: |
    Result of ToString conversion from boolean value is "true" if
    the argument is "true", else is "false"
es5id: 9.8_A3_T2
description: True and false convert to String by implicit transformation
---*/


if (false + "" !== "false") {
  throw new Test262Error('#1: false + "" === "false". Actual: ' + (false + ""));
}


if (true + "" !== "true") {
  throw new Test262Error('#2: true + "" === "true". Actual: ' + (true + ""));	
}
