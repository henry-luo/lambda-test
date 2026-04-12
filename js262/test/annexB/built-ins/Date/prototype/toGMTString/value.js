

/*---
esid: sec-date.prototype.togmtstring
es6id: B.2.4.3
es5id: B.2.6
description: Value of `Date.prototype.toGMTString`
info: |
    The function object that is the initial value of Date.prototype.toGMTString
    is the same function object that is the initial value of
    Date.prototype.toUTCString.
---*/

assert.sameValue(Date.prototype.toGMTString, Date.prototype.toUTCString);
