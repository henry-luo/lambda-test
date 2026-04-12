

/*---
es5id: 15.2.3.4-4-b-5
description: >
    Object.getOwnPropertyNames - elements of the returned array are
    enumerable
---*/

var propertyFound = false;

var obj = {
  "a": "a"
};

var result = Object.getOwnPropertyNames(obj);

for (var p in result) {
  if (result[p] === "a") {
    propertyFound = true;
    break;
  }
}

assert(propertyFound, 'Property not found');
