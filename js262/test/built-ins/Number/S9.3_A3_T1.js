

/*---
info: |
    Result of number conversion from boolean value is 1 if the argument is
    true, else is +0
es5id: 9.3_A3_T1
description: False and true convert to Number by explicit transformation
---*/
assert.sameValue(Number(false), +0, 'Number(false) must return +0');
assert.sameValue(Number(true), 1, 'Number(true) must return 1');
