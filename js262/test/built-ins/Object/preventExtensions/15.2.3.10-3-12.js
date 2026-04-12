

/*---
es5id: 15.2.3.10-3-12
description: >
    Object.preventExtensions - named properties cannot be added into
    the returned object
includes: [propertyHelper.js]
---*/

var obj = {};

assert(Object.isExtensible(obj));
Object.preventExtensions(obj);
assert(!Object.isExtensible(obj));

verifyNotWritable(obj, "exName", "nocheck");

assert(!obj.hasOwnProperty("exName"));
