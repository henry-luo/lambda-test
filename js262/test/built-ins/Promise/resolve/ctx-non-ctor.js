

/*---
description: >
    `Promise.resolve` invoked on a non-constructor value
es6id: 25.4.4.5
info: |
    [...]
    4. Let promiseCapability be NewPromiseCapability(C).
    5. ReturnIfAbrupt(promiseCapability).
---*/

assert.throws(TypeError, function() {
  Promise.resolve.call(eval);
});
