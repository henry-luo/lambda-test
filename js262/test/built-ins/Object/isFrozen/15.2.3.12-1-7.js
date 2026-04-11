

/*---
es5id: 15.2.3.12-1-7
description: >
    Object.isFrozen applies to non-array object which contains index
    named properties
---*/

var obj = Object.freeze({
  0: 0,
  1: 1,
  1000: 1000
});

assert(Object.isFrozen(obj), 'Object.isFrozen(obj) !== true');
