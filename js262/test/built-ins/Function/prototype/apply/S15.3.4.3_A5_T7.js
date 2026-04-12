

/*---
info: |
    If thisArg is not null(defined) the called function is passed
    ToObject(thisArg) as the this value
es5id: 15.3.4.3_A5_T7
description: thisArg is new Number()
---*/

var obj = new Number(1);

Function("this.touched= true;").apply(obj);

assert(obj.touched, 'The value of obj.touched is expected to be true');
