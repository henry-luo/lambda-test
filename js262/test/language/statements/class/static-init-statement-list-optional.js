

/*---
esid: sec-class-definitions
description: The block's statement list is optional
info: |
  Syntax

  [...]

  ClassStaticBlockStatementList :
     StatementList[~Yield, +Await, ~Return]opt
features: [class-static-block]
---*/

class C {
  static {}
}
