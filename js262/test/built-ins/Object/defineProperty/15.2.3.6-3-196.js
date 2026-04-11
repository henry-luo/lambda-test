

/*---
es5id: 15.2.3.6-3-196
description: >
    Object.defineProperty - 'writable' property in 'Attributes' is a
    Date object (8.10.5 step 6.b)
---*/

var obj = {};

Object.defineProperty(obj, "property", {
  writable: new Date(0)
});

var beforeWrite = obj.hasOwnProperty("property");

obj.property = "isWritable";

var afterWrite = (obj.property === "isWritable");

assert.sameValue(beforeWrite, true, 'beforeWrite');
assert.sameValue(afterWrite, true, 'afterWrite');
