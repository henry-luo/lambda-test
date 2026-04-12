

/*---
es5id: 15.2.3.7-5-b-137
description: >
    Object.defineProperties - 'descObj' is the global object which
    implements its own [[Get]] method to get 'value' property (8.10.5
    step 5.a)
---*/

var obj = {};

this.value = "global";

Object.defineProperties(obj, {
  property: this
});

assert.sameValue(obj.property, "global", 'obj.property');
