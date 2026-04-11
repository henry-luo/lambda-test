

/*---
es5id: 15.2.3.5-4-237
description: >
    Object.create - 'get' property of one property in 'Properties' is
    own accessor property (8.10.5 step 7.a)
---*/

var descObj = {};

Object.defineProperty(descObj, "get", {
  get: function() {
    return function() {
      return "ownAccessorProperty";
    };
  }
});

var newObj = Object.create({}, {
  prop: descObj
});

assert.sameValue(newObj.prop, "ownAccessorProperty", 'newObj.prop');
