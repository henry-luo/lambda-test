

/*---
es5id: 15.2.3.7-5-b-106
description: >
    Object.defineProperties - value of 'configurable' property of
    'descObj' is Error object (8.10.5 step 4.b)
---*/

var obj = {};

Object.defineProperties(obj, {
  property: {
    configurable: new SyntaxError()
  }
});
var preCheck = obj.hasOwnProperty("property");
delete obj.property;

assert(preCheck, 'preCheck !== true');
assert.sameValue(obj.hasOwnProperty("property"), false, 'obj.hasOwnProperty("property")');
