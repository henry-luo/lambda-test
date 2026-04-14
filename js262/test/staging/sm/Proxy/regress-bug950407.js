

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var ab = new ArrayBuffer(5);
var p = new Proxy(ab, {});
var ps = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
var new_proto = {};
ps.call(p, new_proto);

assert.sameValue(ab.__proto__, new_proto);
