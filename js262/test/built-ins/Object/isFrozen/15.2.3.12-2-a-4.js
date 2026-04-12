

/*---
es5id: 15.2.3.12-2-a-4
description: Object.isFrozen - 'P' is own accessor property
---*/

var obj = {};
Object.defineProperty(obj, "foo", {
  get: function() {
    return 9;
  },
  configurable: true
});

Object.preventExtensions(obj);

assert.sameValue(Object.isFrozen(obj), false, 'Object.isFrozen(obj)');
