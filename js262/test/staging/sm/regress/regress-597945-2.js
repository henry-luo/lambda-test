

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var a = {d: true, w: true};
Object.defineProperty(a, "d", {set: undefined});
delete a.d;
delete a.w;
a.d = true;

