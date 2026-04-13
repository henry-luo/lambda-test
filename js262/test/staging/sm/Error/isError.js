

/*---
features:
  - Error.isError
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assert.sameValue(Error.isError(null), false);
assert.sameValue(Error.isError(undefined), false);
assert.sameValue(Error.isError(123), false);
assert.sameValue(Error.isError("string"), false);


assert.sameValue(Error.isError({}), false);
assert.sameValue(Error.isError(new Object()), false);


assert.sameValue(Error.isError(new Error()), true);
assert.sameValue(Error.isError(new TypeError()), true);
assert.sameValue(Error.isError(new RangeError()), true);

