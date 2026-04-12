

/*---
es5id: 15.2.3.7-5-b-27
description: >
    Object.defineProperties - 'descObj' is the JSON object which
    implements its own [[Get]] method to get 'enumerable' property
    (8.10.5 step 3.a)
---*/

var obj = {};
var accessed = false;

JSON.enumerable = true;

Object.defineProperties(obj, {
  prop: JSON
});
for (var property in obj) {
  if (property === "prop") {
    accessed = true;
  }
}

assert(accessed, 'accessed !== true');
