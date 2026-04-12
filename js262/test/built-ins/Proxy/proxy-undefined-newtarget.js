

/*---
es6id: 26.2.1.1
description: >
    Proxy ( target, handler )

    When Proxy is called with arguments target and handler performs
    the following steps:

    1. If NewTarget is undefined, throw a TypeError exception.
    ...

features: [Proxy]
---*/

assert.throws(TypeError, function() {
  Proxy({}, {});
});
