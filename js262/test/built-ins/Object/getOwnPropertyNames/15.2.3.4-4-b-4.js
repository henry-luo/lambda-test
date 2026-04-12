

/*---
es5id: 15.2.3.4-4-b-4
description: >
    Object.getOwnPropertyNames - elements of the returned array are
    writable
---*/

var obj = {
  "a": "a"
};

var result = Object.getOwnPropertyNames(obj);

var beforeOverride = (result[0] === "a");
result[0] = "b";
var afterOverride = (result[0] === "b");

assert(beforeOverride, 'beforeOverride !== true');
assert(afterOverride, 'afterOverride !== true');
