

/*---
esid: sec-weakset-iterable
description: >
  If the iterable argument is empty, return new Weakset object.
info: |
  23.4.1.1 WeakSet ( [ iterable ] )

  ...
  9. Repeat
    ...
    d. Let nextValue be IteratorValue(next).
    e. ReturnIfAbrupt(nextValue).
features: [Symbol.iterator]
---*/

var count = 0;
var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return {
        get value() {
          throw new Test262Error();
        },
        done: false
      };
    }
  };
};

assert.throws(Test262Error, function() {
  new WeakSet(iterable);
});
