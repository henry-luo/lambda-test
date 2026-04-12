

/*---
es5id: 15.11.4.4-6-2
description: >
    Error.prototype.toString - 'Error' is returned when 'name' is
    absent and value of 'msg' is returned when 'msg' is non-empty
    string
---*/

var errObj = new Error("ErrorMessage");

assert.sameValue(errObj.toString(), "Error: ErrorMessage", 'errObj.toString()');
