

/*---
es5id: 15.2.3.7-5-b-125
description: >
    Object.defineProperties - 'descObj' is a Function object which
    implements its own [[Get]] method to get 'value' property (8.10.5
    step 5.a)
---*/

var obj = {};

var func = function(a, b) {
  return a + b;
};

func.value = "Function";

Object.defineProperties(obj, {
  property: func
});

assert.sameValue(obj.property, "Function", 'obj.property');
