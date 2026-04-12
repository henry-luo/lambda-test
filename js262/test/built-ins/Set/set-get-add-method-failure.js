

/*---
esid: sec-set-constructor
description: >
    Set ( [ iterable ] )

    When the Set function is called with optional argument iterable the following steps are taken:

    ...
    6. If iterable is either undefined or null, let iter be undefined.
    7. Else,
      a. Let adder be Get(set, "add").
      b. ReturnIfAbrupt(adder).
---*/

function MyError() {}
Object.defineProperty(Set.prototype, 'add', {
  get: function() {
    throw new MyError();
  }
});

new Set();

assert.throws(MyError, function() {
  new Set([]);
});
