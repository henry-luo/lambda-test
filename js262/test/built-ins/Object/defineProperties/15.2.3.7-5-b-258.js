

/*---
es5id: 15.2.3.7-5-b-258
description: >
    Object.defineProperties - value of 'set' property of 'descObj' is
    a function (8.10.5 step 8.b)
---*/

var data = "data";
var setFun = function(value) {
  data = value;
};
var obj = {};


Object.defineProperties(obj, {
  prop: {
    set: setFun
  }
});
obj.prop = "funData";

assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(data, "funData", 'data');
