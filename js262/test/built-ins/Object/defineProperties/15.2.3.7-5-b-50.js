

/*---
es5id: 15.2.3.7-5-b-50
description: >
    Object.defineProperties - value of 'enumerable' property of
    'descObj' is a Date object (8.10.5 step 3.b)
---*/

var obj = {};
var accessed = false;

Object.defineProperties(obj, {
  prop: {
    enumerable: new Date(0)
  }
});
for (var property in obj) {
  if (property === "prop") {
    accessed = true;
  }
}

assert(accessed, 'accessed !== true');
