

/*---
es5id: 15.2.3.7-6-a-34
description: >
    Object.defineProperties - 'P' doesn't exist in 'O', test [[Set]]
    of 'P' is set as undefined value if absent in accessor descriptor
    'desc' (8.12.9 step 4.b.i)
---*/

var obj = {};
var getFunc = function() {
  return 10;
};

Object.defineProperties(obj, {
  prop: {
    get: getFunc,
    enumerable: true,
    configurable: true
  }
});

var desc = Object.getOwnPropertyDescriptor(obj, "prop");

assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(typeof(desc.set), "undefined", 'typeof (desc.set)');
