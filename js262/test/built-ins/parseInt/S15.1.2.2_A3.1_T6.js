

/*---
info: Operator use ToNumber
es5id: 15.1.2.2_A3.1_T6
description: Checking for String object
esid: sec-parseint-string-radix
---*/

assert.sameValue(
  parseInt("11", new String("2")),
  parseInt("11", 2),
  'parseInt("11", new String("2")) must return the same value returned by parseInt("11", 2)'
);

assert.sameValue(
  parseInt("11", new String("Infinity")),
  parseInt("11", Infinity),
  'parseInt("11", new String("Infinity")) must return the same value returned by parseInt("11", Infinity)'
);
