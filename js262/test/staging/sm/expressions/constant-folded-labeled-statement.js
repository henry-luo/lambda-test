

/*---
description: |
  Constant folder should fold labeled statements
info: bugzilla.mozilla.org/show_bug.cgi?id=1499448
esid: pending
---*/

if (typeof disassemble === "function") {
    var code = disassemble(() => { x: 2+2; });

    assert.sameValue(true, /Int8 4/.test(code));
}

