

/*---
description: Promise.try `name` property
includes: [propertyHelper.js]
features: [promise-try]
---*/

verifyProperty(Promise.try, "name", {
  value: "try",
  writable: false,
  enumerable: false,
  configurable: true
});
