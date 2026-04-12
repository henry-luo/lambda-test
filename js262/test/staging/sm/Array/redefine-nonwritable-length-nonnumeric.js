

/*---
description: |
  Assertion redefining non-writable length to a non-numeric value
info: bugzilla.mozilla.org/show_bug.cgi?id=866700
esid: pending
---*/

var arr = [];
Object.defineProperty(arr, "length", { value: 0, writable: false });


Object.defineProperty(arr, "length", { value: '' });

assert.sameValue(arr.length, 0);
