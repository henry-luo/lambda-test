

/*---
esid: sec-class-definitions-static-semantics-early-errors
description: Block cannot declare duplicate labels
info: |
  ClassStaticBlockBody : ClassStaticBlockStatementList

  - It is a Syntax Error if ContainsDuplicateLabels of
    ClassStaticBlockStatementList with argument « » is true.
negative:
  phase: parse
  type: SyntaxError
features: [class-static-block]
---*/

$DONOTEVALUATE();

class C {
  static {
    x: x: 0;
  }
}

