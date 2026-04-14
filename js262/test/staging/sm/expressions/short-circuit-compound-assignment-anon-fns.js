

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-expressions-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


{
  let a;
  a ??= function(){};
  assert.sameValue(a.name, "a");
}

{
  let a = false;
  a ||= function(){};
  assert.sameValue(a.name, "a");
}

{
  let a = true;
  a &&= function(){};
  assert.sameValue(a.name, "a");
}


{
  let a;
  (a) ??= function(){};
  assert.sameValue(a.name, "");
}

{
  let a = false;
  (a) ||= function(){};
  assert.sameValue(a.name, "");
}

{
  let a = true;
  (a) &&= function(){};
  assert.sameValue(a.name, "");
}

