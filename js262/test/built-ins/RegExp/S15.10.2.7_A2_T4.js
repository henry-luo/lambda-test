

/*---
info: |
    i) The production QuantifierPrefix :: { DecimalDigits } evaluates...
    ii) The production QuantifierPrefix :: ? evaluates by returning the two results 0 and 1
es5id: 15.10.2.7_A2_T4
description: Execute /b{8}c/.test("aaabbbbcccddeeeefffff") and check results
---*/

var __executed = /b{8}/.test("aaabbbbcccddeeeefffff");

assert(!__executed, 'The value of !__executed is expected to be true');
