

/*---
es5id: 15.2.3.10-3-10
description: >
    Object.preventExtensions - indexed properties cannot be added into
    an Error object
includes: [propertyHelper.js]
---*/

var errObj = new Error();

assert(Object.isExtensible(errObj));
Object.preventExtensions(errObj);
assert(!Object.isExtensible(errObj));

verifyNotWritable(errObj, "0", "nocheck");

assert(!errObj.hasOwnProperty("0"));
