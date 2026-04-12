

/*---
esid: sec-error.iserror
description: >
  Returns false on bigints
features: [Error.isError, BigInt]
---*/

assert.sameValue(Error.isError(0n), false);
assert.sameValue(Error.isError(42n), false);
assert.sameValue(Error.isError(BigInt(0)), false);
assert.sameValue(Error.isError(BigInt(42)), false);
