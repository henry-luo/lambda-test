

/*---
esid: sec-map-iterable
description: >
  The iterator is closed when iterable `next` value throws an error.
info: |
  Map ( [ iterable ] )

  ...
  9. Repeat
    ...
    d. Let nextItem be IteratorValue(next).
    e. ReturnIfAbrupt(nextItem).
features: [Symbol.iterator]
---*/

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
  new Map(iterable);
});
