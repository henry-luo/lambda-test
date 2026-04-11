

/*---
es5id: 15.2.3.6-3-38-1
description: >
    Object.defineProperty - 'Attributes' is the Math object that uses
    Object's [[Get]] method to access the 'enumerable' property of
    prototype object (8.10.5 step 3.a)
---*/

var obj = {};
var accessed = false;

Object.prototype.enumerable = true;

Object.defineProperty(obj, "property", Math);

for (var prop in obj) {
  if (prop === "property") {
    accessed = true;
  }
}

assert(accessed, 'accessed !== true');
