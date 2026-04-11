

/*---
es5id: 15.2.3.7-5-b-44
description: >
    Object.defineProperties - value of 'enumerable' property of
    'descObj' is a Function object (8.10.5 step 3.b)
---*/

var obj = {};
var accessed = false;

Object.defineProperties(obj, {
  prop: {
    enumerable: function() {}
  }
});
for (var property in obj) {
  if (property === "prop") {
    accessed = true;
  }
}

assert(accessed, 'accessed !== true');
