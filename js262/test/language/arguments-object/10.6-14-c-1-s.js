

/*---
es5id: 10.6-14-c-1-s
description: >
    [[Enumerable]] attribute value in 'callee' is false
includes: [propertyHelper.js]
---*/

var argObj = function () {
    return arguments;
} ();

verifyProperty(argObj, "callee", {
    enumerable: false,
});
