

/*---
description: |
  Assertion redefining length property of a frozen array
info: bugzilla.mozilla.org/show_bug.cgi?id=866580
esid: pending
---*/

var arr = Object.freeze([]);
Object.defineProperty(arr, "length", {});
