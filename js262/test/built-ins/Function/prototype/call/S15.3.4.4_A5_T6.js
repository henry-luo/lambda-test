

/*---
info: |
    If thisArg is not null(defined) the called function is passed
    ToObject(thisArg) as the this value
es5id: 15.3.4.4_A5_T6
description: thisArg is new String()
---*/

var obj = new String("soap");

(function() {
  this.touched = true;
}).call(obj);

assert(obj.touched, 'The value of obj.touched is expected to be true');
