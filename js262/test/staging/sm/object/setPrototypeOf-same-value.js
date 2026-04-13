

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-object-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var x = {}, t = Object.create(x);
Object.preventExtensions(t);

Object.setPrototypeOf(t, x);


Object.setPrototypeOf(Object.prototype, null);

