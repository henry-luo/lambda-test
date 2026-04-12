

/*---
esid: sec-date.prototype.getyear
es6id: B.2.4.1
es5id: B.2.4
description: NaN time value
info: |
    1. Let t be ? thisTimeValue(this value).
    2. If t is NaN, return NaN.
---*/

var date = new Date({});

assert.sameValue(date.getYear(), NaN);
