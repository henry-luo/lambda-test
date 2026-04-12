

/*---
es5id: 15.2.3.7-5-a-12
description: >
    Object.defineProperties - 'Properties' is the Math object which
    implements its own [[Get]] method to get enumerable own property
---*/

var obj = {};

Math.prop = {
  value: 12
};
Object.defineProperties(obj, Math);

assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(obj.prop, 12, 'obj.prop');
