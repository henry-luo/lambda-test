

/*---
es5id: 15.2.3.6-3-235
description: >
    Object.defineProperty - 'set' property in 'Attributes' is present
    (8.10.5 step 8)
---*/

var obj = {};
var data = "data";

Object.defineProperty(obj, "property", {
  set: function(value) {
    data = value;
  }
});

obj.property = "overrideData";

assert(obj.hasOwnProperty("property"), 'obj.hasOwnProperty("property") !== true');
assert.sameValue(data, "overrideData", 'data');
