

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-Date-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 861219;
var summary = 'Date.prototype.toString is a generic function';


print(BUGNUMBER + ": " + summary);

for (var thisValue of [{}, [], /foo/, Date.prototype, new Proxy(new Date(), {})])
  assertThrowsInstanceOf(() => Date.prototype.toString.call(thisValue), TypeError);

for (var prim of [null, undefined, 0, 1.2, true, false, "foo", Symbol.iterator])
  assertThrowsInstanceOf(() => Date.prototype.toString.call(prim), TypeError);

