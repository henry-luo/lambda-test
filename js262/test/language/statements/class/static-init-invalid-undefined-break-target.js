

/*---
esid: sec-class-definitions-static-semantics-early-errors
description: Block cannot reference an undefined `break` target
info: |
  ClassStaticBlockBody : ClassStaticBlockStatementList

  - It is a Syntax Error if ContainsUndefinedBreakTarget of
    ClassStaticBlockStatementList with argument « » is true.
negative:
  phase: parse
  type: SyntaxError
features: [class-static-block]
---*/

$DONOTEVALUATE();

class C {
  static {
    x: while (false) {
      break y;
    }
  }
}
