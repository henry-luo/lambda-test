

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-expressions-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


{
  assertThrowsInstanceOf(() => {
    const Null = null;
    Null?.[b];
    b = 0;
    let b;
  }, ReferenceError);

  assertThrowsInstanceOf(() => {
    const Null = null;
    Null?.[b]();
    b = 0;
    let b;
  }, ReferenceError);

  assertThrowsInstanceOf(() => {
    const Null = null;
    delete Null?.[b];
    b = 0;
    let b;
  }, ReferenceError);
}

