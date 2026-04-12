

/*---
description: |
  pending
esid: pending
---*/
var o = {
    access() {
        super.foo.bar;
    }
};


assert.throws(TypeError, o.access);

