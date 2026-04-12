

/*---
es5id: 15.2.3.7-5-b-132
description: >
    Object.defineProperties - 'descObj' is a RegExp object which
    implements its own [[Get]] method to get 'value' property (8.10.5
    step 5.a)
---*/

var obj = {};

var descObj = new RegExp();

descObj.value = "RegExp";

Object.defineProperties(obj, {
  property: descObj
});

assert.sameValue(obj.property, "RegExp", 'obj.property');
