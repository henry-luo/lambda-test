

/*---
description: redeclaration with FunctionDeclaration (FunctionDeclaration in BlockStatement)
esid: sec-block-static-semantics-early-errors
flags: [generated, onlyStrict]
negative:
  phase: parse
  type: SyntaxError
info: |
    Block : { StatementList }

    It is a Syntax Error if the LexicallyDeclaredNames of StatementList contains
    any duplicate entries.

---*/


$DONOTEVALUATE();

{ function f() {} function f() {} }
