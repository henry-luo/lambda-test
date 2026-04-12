

/*---
info: |
    The production Assertion :: ^ evaluates by returning an internal
    AssertionTester closure that takes a State argument x and performs the ...
es5id: 15.10.2.6_A2_T7
description: Execute /^..^e/.test("ab\ncde") and check results
---*/

var __executed = /^..^e/.test("ab\ncde");

assert(!__executed, 'The value of !__executed is expected to be true');
