

/*---
description: |
  pending
esid: pending
---*/


var obj = {
  m() {
    super[0]?.a
  }
};

obj.m();

