

/*---
esid: sec-web-compat-evaldeclarationinstantiation
description: >
    AnnexB extension not honored in strict mode, Block statement
    in eval code containing a function declaration
info: |
    B.3.3.3 Changes to EvalDeclarationInstantiation

    1. If strict is false, then
      ...

flags: [noStrict]
---*/

var err;

eval('{ function f() {} }');

try {
  f;
} catch (exception) {
  err = exception;
}

assert.sameValue(err, undefined);
