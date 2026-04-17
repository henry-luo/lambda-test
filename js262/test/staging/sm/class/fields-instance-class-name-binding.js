

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
    field = C;
  }
  assert.sameValue(new C().field, C);
}
{
  let C = class Inner {
    field = Inner;
  };
  assert.sameValue(new C().field, C);
}


{
  class C {
    field = () => C;
  }
  assert.sameValue(new C().field(), C);

  const D = C;
  C = null;

  assert.sameValue(new D().field(), D);
}
{
  let C = class Inner {
    field = () => Inner;
  }
  assert.sameValue(new C().field(), C);

  const D = C;
  C = null;

  assert.sameValue(new D().field(), D);
}

