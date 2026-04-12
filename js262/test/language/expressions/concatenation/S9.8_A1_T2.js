

/*---
info: Result of ToString conversion from undefined value is "undefined"
es5id: 9.8_A1_T2
description: >
    Undefined values is undefined, void 0 and eval("var x"). Use
    implicit transformation
---*/


if (undefined + "" !== "undefined") {
  throw new Test262Error('#1: undefined + "" === "undefined". Actual: ' + (undefined + ""));
}


if (void 0 + "" !== "undefined") {
  throw new Test262Error('#2: void 0 + "" === "undefined". Actual: ' + (void 0 + ""));
}


if (eval("var x") + "" !== "undefined") {
  throw new Test262Error('#3: eval("var x") + "" === "undefined". Actual: ' + (eval("var x") + ""));
}
