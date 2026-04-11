

/*---
es5id: 10.6-6-2
description: "'length' property of arguments object has correct attributes"
includes: [propertyHelper.js]
---*/

function testcase() {
  verifyProperty(arguments, "length", {
    writable: true,
    enumerable: false,
    configurable: true,
  });
}
testcase();
