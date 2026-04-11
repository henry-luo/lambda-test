

/*---
info: "EscapeSequence :: 0"
es5id: 7.8.4_A5.1_T1
description: String.fromCharCode(0x0000)
---*/


if (String.fromCharCode(0x0000) !== "\0") {
  throw new Test262Error('#1: String.fromCharCode(0x0000) === "\\0"');
}
