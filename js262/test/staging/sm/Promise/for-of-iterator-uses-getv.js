

/*---
flags:
  - onlyStrict
includes: [sm/non262.js, sm/non262-shell.js]
description: |
  pending
esid: pending
---*/
"use strict"; 

var emptyIterator = {
  next() {
    return {done: true};
  }
};

Object.defineProperty(Number.prototype, Symbol.iterator, {
  configurable: true,
  get() {
    assert.sameValue(typeof this, "number");
    return function() {
      assert.sameValue(typeof this, "number");
      return emptyIterator;
    }
  }
});

Promise.all(0);
Promise.allSettled(0);
Promise.race(0);

