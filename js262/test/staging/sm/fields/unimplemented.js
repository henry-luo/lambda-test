

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


let fieldsEnabled = false;
try {
  Function("class C { x; }");
  fieldsEnabled = true;
} catch (exc) {
  assert.sameValue(exc instanceof SyntaxError, true);
}


if (!fieldsEnabled) {
  let source = `class C {
    x
  }`;
  assertThrowsInstanceOf(() => Function(source), SyntaxError);

  source = `class C {
    x = 0;
  }`;
  assertThrowsInstanceOf(() => Function(source), SyntaxError);

  source = `class C {
    0 = 0;
  }`;
  assertThrowsInstanceOf(() => Function(source), SyntaxError);

  source = `class C {
    [0] = 0;
  }`;
  assertThrowsInstanceOf(() => Function(source), SyntaxError);

  source = `class C {
    "hi" = 0;
  }`;
  assertThrowsInstanceOf(() => Function(source), SyntaxError);

  source = `class C {
    "hi" = 0;
  }`;
  assertThrowsInstanceOf(() => Function(source), SyntaxError);

  source = `class C {
    d = function(){};
  }`;
  assertThrowsInstanceOf(() => Function(source), SyntaxError);

  source = `class C {
    d = class D { x = 0; };
  }`;
  assertThrowsInstanceOf(() => Function(source), SyntaxError);
}

