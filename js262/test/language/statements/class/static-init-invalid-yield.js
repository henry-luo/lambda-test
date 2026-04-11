

/*---
esid: sec-class-definitions
description: The "Yield" parsing context does not apply to the block's statement list
info: |
  Syntax

  [...]

  ClassStaticBlockStatementList :
     StatementList[~Yield, +Await, ~Return]opt
negative:
  phase: parse
  type: SyntaxError
features: [class-static-block]
---*/

$DONOTEVALUATE();

function * g() {
  class C {
    static {
      yield;
    }
  }
}
