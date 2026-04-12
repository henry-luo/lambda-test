

/*---
info: Sanity test for throw statement
es5id: 12.13_A1
description: Trying to throw exception with "throw"
---*/

var inCatch = false;

try {
  throw "expected_message";
} catch (err) {
  assert.sameValue(err, "expected_message");
  inCatch = true;
}

assert.sameValue(inCatch, true);
