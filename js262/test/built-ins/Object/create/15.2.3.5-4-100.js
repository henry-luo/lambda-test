

/*---
es5id: 15.2.3.5-4-100
description: >
    Object.create - 'configurable' property of one property in
    'Properties' is not present (8.10.5 step 4)
includes: [propertyHelper.js]
---*/

var newObj = Object.create({}, {
  prop: {
    value: "ownDataProperty"
  }
});

verifyProperty(newObj, "prop", {
  configurable: false,
});
