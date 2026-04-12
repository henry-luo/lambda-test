

/*---
description: >
    `Promise.reject` invoked on a non-constructor value
es6id: 25.4.4.4
info: |
    [...]
    3. Let promiseCapability be NewPromiseCapability(C).
    4. ReturnIfAbrupt(promiseCapability).
---*/

assert.throws(TypeError, function() {
  Promise.reject.call(eval);
});
