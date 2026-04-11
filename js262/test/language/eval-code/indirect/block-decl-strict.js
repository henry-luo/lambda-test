

/*---
description: AnnexB extension not honored in strict mode
es6id: B.3.3.2
info: |
    Block statement in eval code containing a function declaration

    B.3.3.3 Changes to EvalDeclarationInstantiation

    1. If strict is false, then
---*/

var err;

(0,eval)('"use strict";{ function f() {} }');

try {
  f;
} catch (exception) {
  err = exception;
}

assert.sameValue(err.constructor, ReferenceError);
