

/*---
description: |
  pending
esid: pending
features: [host-gc-required]
---*/
var x = {}, h = new WeakMap;
h.set(x, null);
$262.gc();

