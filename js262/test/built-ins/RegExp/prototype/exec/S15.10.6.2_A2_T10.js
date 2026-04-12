

/*---
info: |
    A TypeError exception is thrown if the this value is not an object for
    which the value of the internal [[Class]] property is "RegExp"
es5id: 15.10.6.2_A2_T10
description: The tested object is undefined
---*/

var exec = RegExp.prototype.exec;

try {
    throw new Test262Error('#1.1: exec = RegExp.prototype.exec; exec("message to investigate"). Actual: ' + (exec("message to investigate")));
} catch (e) {
  assert.sameValue(
    e instanceof TypeError,
    true,
    'The result of evaluating (e instanceof TypeError) is expected to be true'
  );
}

