

/*---
description: >
    `unicode` accessor function invoked on a RegExp instance
es6id: 21.2.5.15
info: |
    21.2.5.15 get RegExp.prototype.unicode

    [...]
    4. Let flags be the value of R’s [[OriginalFlags]] internal slot.
    5. If flags contains the code unit "u", return true.
    6. Return false.
---*/

assert.sameValue(/./.unicode, false);
assert.sameValue(/./i.unicode, false);
assert.sameValue(/./g.unicode, false);
assert.sameValue(/./gi.unicode, false);

assert.sameValue(/./u.unicode, true);
assert.sameValue(/./iu.unicode, true);
assert.sameValue(/./ug.unicode, true);
assert.sameValue(/./iug.unicode, true);
