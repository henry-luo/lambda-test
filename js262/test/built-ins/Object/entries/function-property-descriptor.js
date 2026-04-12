

/*---
esid: sec-object.entries
description: Object.entries should be writable, non-enumerable, and configurable
author: Jordan Harband
includes: [propertyHelper.js]
---*/

verifyProperty(Object, "entries", {
  writable: true,
  enumerable: false,
  configurable: true,
});
