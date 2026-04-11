

/*---
es5id: 15.2.3.5-4-158
description: >
    Object.create - 'value' property of one property in 'Properties'
    is own accessor property (8.10.5 step 5.a)
---*/

var descObj = {};

Object.defineProperty(descObj, "value", {
  get: function() {
    return "ownAccessorProperty";
  }
});

var newObj = Object.create({}, {
  prop: descObj
});

assert.sameValue(newObj.prop, "ownAccessorProperty", 'newObj.prop');
