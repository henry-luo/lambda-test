

/*---
es5id: 15.2.3.7-5-b-103
description: >
    Object.defineProperties - value of 'configurable' property of
    'descObj' is Date object (8.10.5 step 4.b)
---*/

var obj = {};

Object.defineProperties(obj, {
  property: {
    configurable: new Date(0)
  }
});
var preCheck = obj.hasOwnProperty("property");
delete obj.property;

assert(preCheck, 'preCheck !== true');
assert.sameValue(obj.hasOwnProperty("property"), false, 'obj.hasOwnProperty("property")');
