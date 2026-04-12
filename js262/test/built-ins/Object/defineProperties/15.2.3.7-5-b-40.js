

/*---
es5id: 15.2.3.7-5-b-40
description: >
    Object.defineProperties - value of 'enumerable' property of
    'descObj' is positive number (8.10.5 step 3.b)
---*/

var obj = {};
var accessed = false;

Object.defineProperties(obj, {
  prop: {
    enumerable: 12
  }
});
for (var property in obj) {
  if (property === "prop") {
    accessed = true;
  }
}

assert(accessed, 'accessed !== true');
