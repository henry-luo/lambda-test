

/*---
es5id: 15.2.3.10-3-5-1
description: >
    Object.preventExtensions - indexed properties cannot be added into
    a String object
includes: [propertyHelper.js]
---*/

var obj = new String("bbq");

assert(Object.isExtensible(obj));
Object.preventExtensions(obj);
assert(!Object.isExtensible(obj));

verifyNotWritable(obj, "10", "nocheck");

assert(!obj.hasOwnProperty("10"));
