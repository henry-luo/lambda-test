

/*---
es5id: 15.2.3.6-3-58
description: >
    Object.defineProperty - value of 'enumerable' property in
    'Attributes' is a Function object (8.10.5 step 3.b)
---*/

var obj = {};
var accessed = false;

Object.defineProperty(obj, "property", {
  enumerable: function() {}
});

for (var prop in obj) {
  if (prop === "property") {
    accessed = true;
  }
}

assert(accessed, 'accessed !== true');
