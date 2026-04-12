

/*---
es5id: 15.2.3.4-4-b-6
description: >
    Object.getOwnPropertyNames - elements of the returned array are
    configurable
---*/

var obj = {
  "a": "a"
};

var result = Object.getOwnPropertyNames(obj);

var beforeDeleted = (result.hasOwnProperty("0"));
delete result[0];
var afterDeleted = (result.hasOwnProperty("0"));

assert(beforeDeleted, 'beforeDeleted !== true');
assert.sameValue(afterDeleted, false, 'afterDeleted');
