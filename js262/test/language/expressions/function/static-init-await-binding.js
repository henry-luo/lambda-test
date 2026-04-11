

/*---
esid: sec-class-definitions-static-semantics-early-errors
description: The `await` keyword is interpreted as an IdentifierReference within function expressions
info: |
  ClassStaticBlockBody : ClassStaticBlockStatementList

  [...]
  - It is a Syntax Error if ContainsAwait of ClassStaticBlockStatementList is true.
features: [class-static-block]
---*/

class C {
  static {
    (function await(await) {});
  }
}
