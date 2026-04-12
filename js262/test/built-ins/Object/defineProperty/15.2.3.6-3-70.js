

/*---
es5id: 15.2.3.6-3-70
description: >
    Object.defineProperty - value of 'enumerable' property in
    'Attributes' is the global object (8.10.5 step 3.b)
---*/

var obj = {};
var accessed = false;

Object.defineProperty(obj, "property", {
  enumerable: this
});

for (var prop in obj) {
  if (prop === "property") {
    accessed = true;
  }
}

assert(accessed, 'accessed !== true');
