

/*---
description: Promise.try `length` property
includes: [propertyHelper.js]
features: [promise-try]
---*/

verifyProperty(Promise.try, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
