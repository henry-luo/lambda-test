

/*---
es5id: 15.2.3.5-4-35
description: >
    Object.create - 'Properties' is a RegExp object that uses Object's
    [[Get]] method to access own enumerable property (15.2.3.7 step
    5.a)
---*/

var props = new RegExp();
props.prop = {
  value: 12,
  enumerable: true
};
var newObj = Object.create({}, props);

assert(newObj.hasOwnProperty("prop"), 'newObj.hasOwnProperty("prop") !== true');
