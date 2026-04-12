

/*---
es5id: 15.2.3.5-4-89
description: >
    Object.create - 'enumerable' property of one property in
    'Properties' is the Math object (8.10.5 step 3.b)
---*/

var accessed = false;

var newObj = Object.create({}, {
  prop: {
    enumerable: Math
  }
});
for (var property in newObj) {
  if (property === "prop") {
    accessed = true;
  }
}

assert(accessed, 'accessed !== true');
