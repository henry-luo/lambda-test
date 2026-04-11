

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: sec-async-function-instances-name
description: Async function declarations have a name property
includes: [propertyHelper.js]
---*/

async function foo() {};

verifyProperty(foo, "name", {
  value: "foo",
  writable: false,
  enumerable: false,
  configurable: true
});
