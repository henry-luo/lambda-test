

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
for (var u = 0; u < 3; ++u) {
    var y = [];
    Object.create(y);
    $262.gc();
    y.t = 3;
    $262.gc();
}

