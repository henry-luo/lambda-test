

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-object-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var obj = { get a() { return 1; } };
assertThrowsInstanceOf(() => {
    new Object.getOwnPropertyDescriptor(obj, "a").get
}, TypeError);

obj = { set a(b) { } };
assertThrowsInstanceOf(() => {
    new Object.getOwnPropertyDescriptor(obj, "a").set
}, TypeError);

obj = { get a() { return 1; }, set a(b) { } };
assertThrowsInstanceOf(() => {
    new Object.getOwnPropertyDescriptor(obj, "a").get
}, TypeError);
assertThrowsInstanceOf(() => {
    new Object.getOwnPropertyDescriptor(obj, "a").set
}, TypeError);

