

/*---
es5id: 15.2.3.5-4-282
description: >
    Object.create - one property in 'Properties' is a Boolean object
    that uses Object's [[Get]] method to access the 'set' property
    (8.10.5 step 8.a)
---*/

var boolObj = new Boolean(true);
var data = "data";
boolObj.set = function(value) {
  data = value;
};

var newObj = Object.create({}, {
  prop: boolObj
});

var hasProperty = newObj.hasOwnProperty("prop");

newObj.prop = "overrideData";

assert(hasProperty, 'hasProperty !== true');
assert.sameValue(data, "overrideData", 'data');
