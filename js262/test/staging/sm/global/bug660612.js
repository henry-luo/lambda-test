

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
try {
    decodeURIComponent('%ED%A0%80');
    assert.sameValue(true, false, "expected an URIError");
} catch (e) {
  assert.sameValue(e instanceof URIError, true);
}
