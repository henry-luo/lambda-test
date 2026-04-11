

/*---
es5id: 15.2.3.6-4-570
description: >
    ES5 Attributes - [[Get]] attribute is a function which doesn't
    contains return statement
---*/

var obj = {};
var verifyExecute = false;
var getFunc = function() {
  verifyExecute = true;
};

Object.defineProperty(obj, "prop", {
  get: getFunc
});

var desc = Object.getOwnPropertyDescriptor(obj, "prop");

assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(desc.get, getFunc, 'desc.get');
assert.sameValue(typeof obj.prop, "undefined", 'typeof obj.prop');
assert(verifyExecute, 'verifyExecute !== true');
