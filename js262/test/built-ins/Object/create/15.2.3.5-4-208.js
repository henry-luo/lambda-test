

/*---
es5id: 15.2.3.5-4-208
description: >
    Object.create - 'writable' property of one property in
    'Properties' is 0 (8.10.5 step 6.b)
includes: [propertyHelper.js]
---*/

var newObj = Object.create({}, {
  prop: {
    writable: 0
  }
});

verifyProperty(newObj, "prop", {
  value: undefined,
  writable: false,
});
