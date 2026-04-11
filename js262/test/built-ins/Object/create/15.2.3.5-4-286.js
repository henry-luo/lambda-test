

/*---
es5id: 15.2.3.5-4-286
description: >
    Object.create - one property in 'Properties' is a RegExp object
    that uses Object's [[Get]] method to access the 'set' property
    (8.10.5 step 8.a)
---*/

var regObj = new RegExp();
var data = "data";
regObj.set = function(value) {
  data = value;
};

var newObj = Object.create({}, {
  prop: regObj
});

var hasProperty = newObj.hasOwnProperty("prop");

newObj.prop = "overrideData";

assert(hasProperty, 'hasProperty !== true');
assert.sameValue(data, "overrideData", 'data');
