

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

{
  class C {
    static field = C;
  }
  assert.sameValue(C.field, C);
}
{
  let C = class Inner {
    static field = Inner;
  };
  assert.sameValue(C.field, C);
}


{
  assertThrowsInstanceOf(() => {
    let C = class {
      static field = C;
    };
  }, ReferenceError);
}


{
  let C = class {
    static field = () => C;
  };
  assert.sameValue(C.field(), C);
}


{
  class C {
    static field = () => C;
  }
  assert.sameValue(C.field(), C);

  const D = C;
  C = null;

  assert.sameValue(D.field(), D);
}
{
  let C = class Inner {
    static field = () => Inner;
  }
  assert.sameValue(C.field(), C);

  const D = C;
  C = null;

  assert.sameValue(D.field(), D);
}

