

/*---
es5id: 15.2.3.6-3-63
description: >
    Object.defineProperty - value of 'enumerable' property in
    'Attributes' is the Math Object (8.10.5 step 3.b)
---*/

var obj = {};
var accessed = false;

Object.defineProperty(obj, "property", {
  enumerable: Math
});

for (var prop in obj) {
  if (prop === "property") {
    accessed = true;
  }
}

assert(accessed, 'accessed !== true');
