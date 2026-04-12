

/*---
es5id: 15.2.3.7-5-b-31
description: >
    Object.defineProperties - 'descObj' is the global object which
    implements its own [[Get]] method to get 'enumerable' property
    (8.10.5 step 3.a)
---*/

var obj = {};
var accessed = false;

this.enumerable = true;

Object.defineProperties(obj, {
  prop: this
});
for (var property in obj) {
  if (property === "prop") {
    accessed = true;
  }
}

assert(accessed, 'accessed !== true');
