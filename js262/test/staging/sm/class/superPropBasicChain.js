

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var o = {
    access() {
        super.foo.bar;
    }
};


assertThrowsInstanceOf(o.access, TypeError);

