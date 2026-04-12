

/*---
esid: sec-atomics.waitasync
description: Atomics.waitAsync is callable
features: [Atomics.waitAsync, Atomics]
---*/

assert.sameValue(typeof Atomics.waitAsync, 'function', 'The value of `typeof Atomics.waitAsync` is "function"');
