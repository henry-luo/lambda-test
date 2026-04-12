

/*---
es5id: 15.2.3.7-5-b-130
description: >
    Object.defineProperties - 'descObj' is the Math object which
    implements its own [[Get]] method to get 'value' property (8.10.5
    step 5.a)
---*/

var obj = {};

Math.value = "Math";

Object.defineProperties(obj, {
  property: Math
});

assert.sameValue(obj.property, "Math", 'obj.property');
