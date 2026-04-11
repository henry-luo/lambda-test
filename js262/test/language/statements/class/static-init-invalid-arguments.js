

/*---
esid: sec-class-definitions-static-semantics-early-errors
description: Block cannot use `arguments` as an identifier
info: |
  ClassStaticBlockBody : ClassStaticBlockStatementList

  - It is a Syntax Error if ContainsArguments of ClassStaticBlockStatementList
    is true.
negative:
  phase: parse
  type: SyntaxError
features: [class-static-block]
---*/

$DONOTEVALUATE();

class C {
  static {
    (class { [argument\u0073]() {} });
  }
}
