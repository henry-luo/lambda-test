

/*---
author: Jordan Harband
description: Promise.try property descriptor
features: [promise-try]
includes: [propertyHelper.js]
---*/

verifyProperty(Promise, 'try', {
  value: Promise.try,
  writable: true,
  enumerable: false,
  configurable: true
})
