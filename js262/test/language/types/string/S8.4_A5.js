

/*---
info: Zero "\0" not terminates the string(C string)
es5id: 8.4_A5
description: Insert "\0" into string
---*/


if ("x\0y" === "x") {
  throw new Test262Error('#1: "x\\0y" !== "x"');
}


if (!(("x\0a" < "x\0b") && ("x\0b" < "x\0c"))) {
  throw new Test262Error('#2: (("x\\0a" < "x\\0b") && ("x\\0b" < "x\\0c")) === true');
}
