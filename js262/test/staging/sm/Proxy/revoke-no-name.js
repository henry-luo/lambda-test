

/*---
description: |
  pending
esid: pending
---*/
var revocationFunction = Proxy.revocable({}, {}).revoke;
assert.sameValue(revocationFunction.name, "");
