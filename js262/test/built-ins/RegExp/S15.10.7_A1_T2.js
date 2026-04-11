

/*---
info: RegExp instance has no [[Call]] internal method
es5id: 15.10.7_A1_T2
description: Checking if call of RegExp("a|b","g")() fails
---*/

try {
  throw new Test262Error('#1.1: RegExp("a|b","g")() throw TypeError. Actual: ' + (RegExp("a|b","g")()));
} catch (e) {
  assert.sameValue(
    e instanceof TypeError,
    true,
    'The result of evaluating (e instanceof TypeError) is expected to be true'
  );
}

