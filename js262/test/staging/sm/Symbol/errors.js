

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var sym = Symbol();


assertThrowsInstanceOf(() => sym(), TypeError);
assertThrowsInstanceOf(() => Function.prototype.call.call(sym), TypeError);


assertThrowsInstanceOf(() => new sym(), TypeError);
assertThrowsInstanceOf(() => new Symbol(), TypeError);

