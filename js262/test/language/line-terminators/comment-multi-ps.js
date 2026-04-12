

/*---
info: Multi line comment can contain PARAGRAPH SEPARATOR (U+2029)
esid: sec-line-terminators
es5id: 7.3_A5.1_T2
description: Insert real PARAGRAPH SEPARATOR into multi line comment
negative:
  phase: runtime
  type: Test262Error
---*/


var x = 0;


if (x === 0) {
  throw new Test262Error();
}
