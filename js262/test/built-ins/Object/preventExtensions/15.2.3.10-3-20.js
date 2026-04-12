

/*---
es5id: 15.2.3.10-3-20
description: >
    Object.preventExtensions - named properties cannot be added into
    an Error object
includes: [propertyHelper.js]
---*/

var obj = new Error();

assert(Object.isExtensible(obj));
Object.preventExtensions(obj);
assert(!Object.isExtensible(obj));

verifyNotWritable(obj, "exName", "nocheck");

assert(!obj.hasOwnProperty("exName"));
