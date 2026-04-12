

/*---
info: |
    The production QuantifierPrefix :: { DecimalDigits , DecimalDigits }
    evaluates as ...
es5id: 15.10.2.7_A1_T2
description: Execute /\d{2,4}/.test("the 7 movie") and check results
---*/

var __executed = /\d{2,4}/.test("the 7 movie");

assert(!__executed, 'The value of !__executed is expected to be true');
