

/*---
esid: sec-set-constructor
description: >
    Set ( [ iterable ] )

    When the Set function is called with optional argument iterable the following steps are taken:

    ...
    9. Repeat
      ...
      d. Let nextValue be IteratorValue(next).
      e. ReturnIfAbrupt(nextValue).
features: [Symbol.iterator]
---*/

var count = 0;
var iterable = {};

function MyError() {}
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return {
        get value() {
          throw new MyError();
        },
        done: false
      };
    }
  };
};

assert.throws(MyError, function() {
  new Set(iterable);
});
