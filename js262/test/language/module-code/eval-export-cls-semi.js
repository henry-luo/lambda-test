

/*---
description: >
    An exported class declaration does not need to be terminated with a
    semicolon or newline
esid: sec-moduleevaluation
flags: [module]
---*/

var count = 0;

export class C {} if (true) { count += 1; }

assert.sameValue(count, 1);
