

/*---
es5id: 15.2.3.6-3-153
description: >
    Object.defineProperty - 'writable' property in 'Attributes' is not
    present  (8.10.5 step 6)
includes: [propertyHelper.js]
---*/

var obj = {};

var attr = {
  value: 100
};

Object.defineProperty(obj, "property", attr);

verifyProperty(obj, "property", {
  writable: false,
});
