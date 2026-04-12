

/*---
esid: sec-class-definitions-static-semantics-early-errors
description: Block cannot declare duplicate lexically-scoped bindings
info: |
  ClassStaticBlockBody : ClassStaticBlockStatementList

  - It is a Syntax Error if the LexicallyDeclaredNames of
    ClassStaticBlockStatementList contains any duplicate entries.
negative:
  phase: parse
  type: SyntaxError
features: [class-static-block]
---*/

$DONOTEVALUATE();

class C {
  static {
    let x;
    let x;
  }
}
