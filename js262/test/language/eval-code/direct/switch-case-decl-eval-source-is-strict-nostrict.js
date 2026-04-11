

/*---
esid: sec-web-compat-evaldeclarationinstantiation
description: >
    AnnexB extension not honored in strict mode, Function declaration
    in the `case` clause of a `switch` statement in eval code
info: |
    B.3.3.3 Changes to EvalDeclarationInstantiation

    1. If strict is false, then
      ...

flags: [noStrict]
---*/

var err;

eval('\
  "use strict";\
  switch (1) {\
    case 1:\
      function f() {  }\
  }\
');

try {
  f;
} catch (exception) {
  err = exception;
}

assert.sameValue(err.constructor, ReferenceError);
