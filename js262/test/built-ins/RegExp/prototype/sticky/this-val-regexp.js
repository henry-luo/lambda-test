

/*---
description: >
    `sticky` accessor function invoked on a RegExp instance
es6id: 21.2.5.12
info: |
    21.2.5.12 get RegExp.prototype.sticky

    4. Let flags be the value of R’s [[OriginalFlags]] internal slot.
    5. If flags contains the code unit "y", return true.
    6. Return false.
---*/

assert.sameValue(/./.sticky, false);
assert.sameValue(/./i.sticky, false);
assert.sameValue(/./g.sticky, false);
assert.sameValue(/./gi.sticky, false);

assert.sameValue(/./y.sticky, true);
assert.sameValue(/./iy.sticky, true);
assert.sameValue(/./yg.sticky, true);
assert.sameValue(/./iyg.sticky, true);
