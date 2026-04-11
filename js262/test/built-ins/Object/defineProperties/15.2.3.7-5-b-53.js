

/*---
es5id: 15.2.3.7-5-b-53
description: >
    Object.defineProperties - value of 'enumerable' property of
    'descObj' is an Error object (8.10.5 step 3.b)
---*/

var obj = {};
var accessed = false;

Object.defineProperties(obj, {
  prop: {
    enumerable: new Error()
  }
});
for (var property in obj) {
  if (property === "prop") {
    accessed = true;
  }
}

assert(accessed, 'accessed !== true');
