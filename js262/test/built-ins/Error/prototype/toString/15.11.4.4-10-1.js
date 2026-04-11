

/*---
es5id: 15.11.4.4-10-1
description: >
    Error.prototype.toString return the result of concatenating
    'name', ':', a single space character, and 'msg' when 'name' and
    'msg' are non-empty string
---*/

var errObj = new Error("ErrorMessage");
errObj.name = "ErrorName";

assert.sameValue(errObj.toString(), "ErrorName: ErrorMessage", 'errObj.toString()');
