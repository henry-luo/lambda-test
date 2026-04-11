

/*---
es5id: 15.2.3.5-4-204
description: >
    Object.create - 'writable' property of one property in
    'Properties' is undefined (8.10.5 step 6.b)
includes: [propertyHelper.js]
---*/

var newObj = Object.create({}, {
  prop: {
    writable: undefined
  }
});

verifyProperty(newObj, "prop", {
  value: undefined,
  writable: false,
});
