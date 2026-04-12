

/*---
description: |
  pending
esid: pending
---*/
(function () {
    var [x, y] = [function () { return y; }, 13];
    assert.sameValue(x(), 13);
})();

