

/*---
info: RegExp instance has no [[Construct]] internal method
es5id: 15.10.7_A2_T2
description: Checking if creating "new RegExp" instance fails
---*/

try {
  throw new Test262Error('#1.1: new new RegExp throw TypeError. Actual: ' + (new new RegExp));
} catch (e) {
  assert.sameValue(
    e instanceof TypeError,
    true,
    'The result of evaluating (e instanceof TypeError) is expected to be true'
  );
}

