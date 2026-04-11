

/*---
description: redeclaration with GeneratorDeclaration (VariableDeclaration in SwitchStatement)
esid: sec-switch-statement-static-semantics-early-errors
features: [generators]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    SwitchStatement : switch ( Expression ) CaseBlock

    It is a Syntax Error if any element of the LexicallyDeclaredNames of
    CaseBlock also occurs in the VarDeclaredNames of CaseBlock.

---*/


$DONOTEVALUATE();

switch (0) { case 1: var f; default: function* f() {} }
