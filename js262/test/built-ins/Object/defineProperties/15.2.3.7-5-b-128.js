

/*---
es5id: 15.2.3.7-5-b-128
description: >
    Object.defineProperties - 'descObj' is a Boolean object which
    implements its own [[Get]] method to get 'value' property (8.10.5
    step 5.a)
---*/

var obj = {};

var descObj = new Boolean(false);

descObj.value = "Boolean";

Object.defineProperties(obj, {
  property: descObj
});

assert.sameValue(obj.property, "Boolean", 'obj.property');
