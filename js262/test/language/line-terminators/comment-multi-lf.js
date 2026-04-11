

/*---
info: Multi line comment can contain LINE FEED (U+000A)
esid: sec-line-terminators
es5id: 7.3_A5.1_T2
description: Insert real LINE FEED into multi line comment
negative:
  phase: runtime
  type: Test262Error
---*/


var x = 0;


if (x === 0) {
  throw new Test262Error();
}
