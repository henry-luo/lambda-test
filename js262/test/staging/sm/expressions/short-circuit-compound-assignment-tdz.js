

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-expressions-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


{
  assertThrowsInstanceOf(() => { let a = (a &&= 0); }, ReferenceError);
  assertThrowsInstanceOf(() => { let a = (a ||= 0); }, ReferenceError);
  assertThrowsInstanceOf(() => { let a = (a ??= 0); }, ReferenceError);
}


{
  assertThrowsInstanceOf(() => { const a = (a &&= 0); }, ReferenceError);
  assertThrowsInstanceOf(() => { const a = (a ||= 0); }, ReferenceError);
  assertThrowsInstanceOf(() => { const a = (a ??= 0); }, ReferenceError);
}


{
  assertThrowsInstanceOf((a = (b &&= 0), b) => {}, ReferenceError);
  assertThrowsInstanceOf((a = (b ||= 0), b) => {}, ReferenceError);
  assertThrowsInstanceOf((a = (b ??= 0), b) => {}, ReferenceError);
}


{
  assertThrowsInstanceOf(() => { class a extends (a &&= 0) {} }, ReferenceError);
  assertThrowsInstanceOf(() => { class a extends (a ||= 0) {} }, ReferenceError);
  assertThrowsInstanceOf(() => { class a extends (a ??= 0) {} }, ReferenceError);
}


{
  assertThrowsInstanceOf(() => {
    const False = false;
    False &&= b;
    b = 2;
    let b;
  }, ReferenceError);

  assertThrowsInstanceOf(() => {
    const True = true;
    True ||= b;
    b = 2;
    let b;
  }, ReferenceError);

  assertThrowsInstanceOf(() => {
    const NonNull = {};
    NonNull ??= b;
    b = 2;
    let b;
  }, ReferenceError);
}

