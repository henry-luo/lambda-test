

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
features:
  - iterator-helpers
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/
const iter = (value) => Iterator.from({
  next: () => value,
});

for (let value of [
  undefined,
  null,
  0,
  false,
  "test",
  Symbol(""),
]) {
  assert.sameValue(iter(value).next(), value);
}

