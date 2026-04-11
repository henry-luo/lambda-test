

/*---
es5id: 15.2.3.10-3-9
description: >
    Object.preventExtensions - indexed properties cannot be added into
    a RegExp object
includes: [propertyHelper.js]
---*/

var obj = new RegExp();

assert(Object.isExtensible(obj));
Object.preventExtensions(obj);
assert(!Object.isExtensible(obj));

verifyNotWritable(obj, "0", "nocheck");

assert(!obj.hasOwnProperty("0"));
