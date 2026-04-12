

/*---
es5id: 15.2.3.7-5-b-204
description: >
    Object.defineProperties - 'descObj' is a Function object which
    implements its own [[Get]] method to get 'get' property (8.10.5
    step 7.a)
---*/

var obj = {};

var func = function(a, b) {
  return a + b;
};

func.get = function() {
  return "Function";
};

Object.defineProperties(obj, {
  property: func
});

assert.sameValue(obj.property, "Function", 'obj.property');
