

/*---
description: Object.getOwnPropertyDescriptors should produce a normal object inheriting from Object.prototype
esid: sec-object.getownpropertydescriptors
author: Jordan Harband
---*/

assert.sameValue(
  Object.getPrototypeOf(Object.getOwnPropertyDescriptors({})),
  Object.prototype
);
