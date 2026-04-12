

/*---
es5id: 15.2.3.7-5-b-193
description: >
    Object.defineProperties - 'get' property of 'descObj' is own data
    property (8.10.5 step 7.a)
---*/

var obj = {};

var getter = function() {
  return "ownDataProperty";
};

Object.defineProperties(obj, {
  property: {
    get: getter
  }
});

assert.sameValue(obj.property, "ownDataProperty", 'obj.property');
