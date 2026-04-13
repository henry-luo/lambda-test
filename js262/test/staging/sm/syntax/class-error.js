

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
function assertThrowsSyntaxError(x) {
    let success = false;
    try {
        eval(x);
        success = true;
    } catch (e) {
        assert.sameValue(e instanceof SyntaxError, true);
    }
    assert.sameValue(success, false);
}


assertThrowsSyntaxError("class X { x: 1 }")

if ('assert.sameValue' in this) {
}
