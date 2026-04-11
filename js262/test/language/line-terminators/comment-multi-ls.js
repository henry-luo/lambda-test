

/*---
info: Multi line comment can contain LINE SEPARATOR (U+2028)
esid: sec-line-terminators
es5id: 7.3_A5.3
description: Insert LINE SEPARATOR (U+2028) into multi line comment
negative:
  phase: runtime
  type: Test262Error
---*/


var x = 0;


if (x === 0) {
  throw new Test262Error();
}
