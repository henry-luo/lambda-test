

/*---
info: |
    The production QuantifierPrefix :: ? evaluates by returning the two
    results 0 and 1
es5id: 15.10.2.7_A5_T3
description: >
    Execute /java(script)?/.test("state: both Java and JavaScript used
    in web development") and check results
---*/

var __executed = /java(script)?/.test("state: both Java and JavaScript used in web development");

assert(!__executed, 'The value of !__executed is expected to be true');
