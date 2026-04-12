

/*---
description: |
  Computed Property Names
info: bugzilla.mozilla.org/show_bug.cgi?id=924688
esid: pending
---*/

var key = "z";
var { [key]: foo } = { z: "bar" };
assert.sameValue(foo, "bar");
