

/*---
es5id: 15.2.3.5-4-272
description: >
    Object.create - 'set' property of one property in 'Properties' is
    own accessor property (8.10.5 step 8.a)
---*/

var data = "data";
var descObj = {};

Object.defineProperty(descObj, "set", {
  get: function() {
    return function(value) {
      data = value;
    };
  }
});

var newObj = Object.create({}, {
  prop: descObj
});

var hasProperty = newObj.hasOwnProperty("prop");

newObj.prop = "overrideData";

assert(hasProperty, 'hasProperty !== true');
assert.sameValue(data, "overrideData", 'data');
