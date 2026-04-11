

/*---
es5id: 15.2.3.6-3-67
description: >
    Object.defineProperty - value of 'enumerable' property in
    'Attributes' is an Error Object (8.10.5 step 3.b)
---*/

var obj = {};
var accessed = false;

Object.defineProperty(obj, "property", {
  enumerable: new Error()
});

for (var prop in obj) {
  if (prop === "property") {
    accessed = true;
  }
}

assert(accessed, 'accessed !== true');
