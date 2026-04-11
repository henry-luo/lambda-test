

/*---
esid: sec-set-constructor
description: >
    Set ( [ iterable ] )

    When the Set function is called with optional argument iterable the following steps are taken:

    ...
    9. Repeat
      a. Let next be IteratorStep(iter).
      b. ReturnIfAbrupt(next).
features: [Symbol.iterator]
---*/

var iterable = {};

function MyError() {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new MyError();
    }
  };
};

assert.throws(MyError, function() {
  new Set(iterable);
});
