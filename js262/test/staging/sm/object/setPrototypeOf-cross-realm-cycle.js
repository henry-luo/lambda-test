

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-object-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var gw = createNewGlobal();

var obj = {};
var w = gw.Object.create(obj);
assertThrowsInstanceOf(() => Object.setPrototypeOf(obj, w), TypeError);
assertThrowsInstanceOf(() => gw.Object.setPrototypeOf(obj, w), gw.TypeError);

