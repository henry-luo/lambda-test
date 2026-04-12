

/*---
esid: sec-class-definitions-runtime-semantics-evaluation
description: Class declaration completion value is empty.
info: |
    ClassDeclaration : class BindingIdentifier ClassTail

    1. Perform ? BindingClassDeclarationEvaluation of this ClassDeclaration.
    2. Return NormalCompletion(empty).
---*/

assert.sameValue(eval('class C {}'), undefined);
assert.sameValue(eval('1; class C {}'), 1);
