

/*---
esid: sec-set-constructor
description: >
    Set ( [ iterable ] )

    When the Set function is called with optional argument iterable the following steps are taken:

    1. If NewTarget is undefined, throw a TypeError exception.
    ...

---*/

assert.throws(TypeError, function() {
  Set();
});

assert.throws(TypeError, function() {
  Set([]);
});
