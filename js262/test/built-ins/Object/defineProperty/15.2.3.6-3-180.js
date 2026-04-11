

/*---
es5id: 15.2.3.6-3-180
description: >
    Object.defineProperty - 'writable' property in 'Attributes' is
    true  (8.10.5 step 6.b)
---*/

var obj = {};

Object.defineProperty(obj, "property", {
  writable: true
});

var beforeWrite = obj.hasOwnProperty("property");

obj.property = "isWritable";

var afterWrite = (obj.property === "isWritable");

assert.sameValue(beforeWrite, true, 'beforeWrite');
assert.sameValue(afterWrite, true, 'afterWrite');
