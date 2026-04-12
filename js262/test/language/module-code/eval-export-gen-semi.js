

/*---
description: >
    An exported generator function declaration does not need to be terminated
    with a semicolon or newline
esid: sec-moduleevaluation
flags: [module]
features: [generators]
---*/

var count = 0;

export function* g() {} if (true) { count += 1; }

assert.sameValue(count, 1);
