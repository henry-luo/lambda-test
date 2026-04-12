

/*---
es5id: 15.2.3.10-3-18
description: >
    Object.preventExtensions - named properties cannot be added into a
    Date object
includes: [propertyHelper.js]
---*/

var obj = new Date(0);

assert(Object.isExtensible(obj));
Object.preventExtensions(obj);
assert(!Object.isExtensible(obj));

verifyNotWritable(obj, "exName", "nocheck");

assert(!obj.hasOwnProperty("exName"));
