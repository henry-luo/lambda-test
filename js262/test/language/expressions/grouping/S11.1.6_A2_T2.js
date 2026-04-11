

/*---
info: |
    "This" operator doesn't use GetValue. The operators "delete" and "typeof"
    can be applied to parenthesised expressions
es5id: 11.1.6_A2_T2
description: >
    Applying "delete" operator to an undefined variable
flags: [noStrict]
---*/


if (delete (x) !== true) {
  throw new Test262Error('#1: delete (x) === true');
}
