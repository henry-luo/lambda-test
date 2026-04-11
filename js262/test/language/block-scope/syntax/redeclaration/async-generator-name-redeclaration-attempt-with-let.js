

/*---
description: redeclaration with let-LexicalDeclaration (AsyncGeneratorDeclaration in BlockStatement)
esid: sec-block-static-semantics-early-errors
features: [async-iteration]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Block : { StatementList }

    It is a Syntax Error if the LexicallyDeclaredNames of StatementList contains
    any duplicate entries.

---*/


$DONOTEVALUATE();

{ async function* f() {} let f }
