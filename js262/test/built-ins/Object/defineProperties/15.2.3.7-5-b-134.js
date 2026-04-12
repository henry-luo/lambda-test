

/*---
es5id: 15.2.3.7-5-b-134
description: >
    Object.defineProperties - 'descObj' is an Error object which
    implements its own [[Get]] method to get 'value' property (8.10.5
    step 5.a)
---*/

var obj = {};

var descObj = new Error();

descObj.value = "Error";

Object.defineProperties(obj, {
  property: descObj
});

assert.sameValue(obj.property, "Error", 'obj.property');
