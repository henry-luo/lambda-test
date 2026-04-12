

/*---
es5id: 15.2.3.10-3-19
description: >
    Object.preventExtensions - named properties cannot be added into a
    RegExp object
includes: [propertyHelper.js]
---*/

var obj = new RegExp();

assert(Object.isExtensible(obj));
Object.preventExtensions(obj);
assert(!Object.isExtensible(obj));

verifyNotWritable(obj, "exName", "nocheck");

assert(!obj.hasOwnProperty("exName"));
