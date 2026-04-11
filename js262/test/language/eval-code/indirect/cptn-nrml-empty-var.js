

/*---
info: |
    If Result(3).type is normal and its completion value is empty,
    then return the value undefined
esid: sec-performeval
es5id: 15.1.2.1_A3.2_T2
description: Var statement
---*/

assert.sameValue((0,eval)("var x = 1"), undefined);
