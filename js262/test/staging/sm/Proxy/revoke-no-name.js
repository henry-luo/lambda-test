

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var revocationFunction = Proxy.revocable({}, {}).revoke;
assert.sameValue(revocationFunction.name, "");
