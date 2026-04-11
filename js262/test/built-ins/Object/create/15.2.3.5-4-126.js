

/*---
es5id: 15.2.3.5-4-126
description: >
    Object.create - 'configurable' property of one property in
    'Properties' is null (8.10.5 step 4.b)
includes: [propertyHelper.js]
---*/

var newObj = Object.create({}, {
  prop: {
    configurable: null
  }
});

verifyProperty(newObj, "prop", {
  configurable: false,
});
