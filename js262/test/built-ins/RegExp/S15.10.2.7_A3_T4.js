

/*---
info: |
    The production QuantifierPrefix :: + evaluates by returning the two
    results 1 and \infty
es5id: 15.10.2.7_A3_T4
description: Execute /\s+java\s+/.test("java\n\nobject") and check results
---*/

var __executed = /\s+java\s+/.test("java\n\nobject");

assert(!__executed, 'The value of !__executed is expected to be true');
