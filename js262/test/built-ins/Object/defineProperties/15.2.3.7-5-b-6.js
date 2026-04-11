

/*---
es5id: 15.2.3.7-5-b-6
description: >
    Object.defineProperties - 'enumerable' property of 'descObj' is
    present (8.10.5 step 3)
---*/

var obj = {};
var accessed = false;

Object.defineProperties(obj, {
  prop: {
    enumerable: true
  }
});

for (var property in obj) {
  if (property === "prop") {
    accessed = true;
  }
}

assert(accessed, 'accessed !== true');
