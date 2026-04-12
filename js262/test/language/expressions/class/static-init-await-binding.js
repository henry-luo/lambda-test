

/*---
esid: sec-class-definitions-static-semantics-early-errors
description: The `await` keyword is disallowed as a BindingIdentifier
info: |
  ClassStaticBlockBody : ClassStaticBlockStatementList

  [...]
  - It is a Syntax Error if ContainsAwait of ClassStaticBlockStatementList is true.
features: [class-static-block]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class C {
  static {
    (class await {});
  }
}
