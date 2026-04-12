

/*---
esid: sec-date.prototype.valueof
info: |
    Result of ToInteger(value) conversion is the result of computing
    sign(ToNumber(value)) * floor(abs(ToNumber(value)))
es5id: 9.4_A3_T2
description: >
    For testing constructor Date(NaN, Infinity, Infinity, +0 and -0)
    is used
---*/


var d1 = new Date(Number.NaN);
assert.sameValue(d1.valueOf(), NaN, 'd1.valueOf() returns NaN');


var d2 = new Date(Infinity);
assert.sameValue(d2.valueOf(), NaN, 'd2.valueOf() returns NaN');


var d3 = new Date(-Infinity);
assert.sameValue(d3.valueOf(), NaN, 'd3.valueOf() returns NaN');


var d4 = new Date(0);
assert.sameValue(d4.valueOf(), 0, 'd4.valueOf() must return 0');


var d5 = new Date(-0);
assert.sameValue(d5.valueOf(), 0, 'd5.valueOf() must return 0');
