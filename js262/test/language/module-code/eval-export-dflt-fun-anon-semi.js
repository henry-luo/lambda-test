

/*---
description: >
    An exported default "anonymous" function declaration does not need to be
    terminated with a semicolon or newline
esid: sec-moduleevaluation
flags: [module]
---*/

var count = 0;

export default function() {} if (true) { count += 1; }

assert.sameValue(count, 1);
