

/*---
esid: sec-class-definitions-static-semantics-early-errors
description: Block cannot reference an undefined `continue` target
info: |
  ClassStaticBlockBody : ClassStaticBlockStatementList

  - It is a Syntax Error if ContainsUndefinedContinueTarget of
    ClassStaticBlockStatementList with arguments « » and « » is true.
negative:
  phase: parse
  type: SyntaxError
features: [class-static-block]
---*/

$DONOTEVALUATE();

class C {
  static {
    x: while (false) {
      continue y;
    }
  }
}
