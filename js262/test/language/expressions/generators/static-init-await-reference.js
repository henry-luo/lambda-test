

/*---
esid: sec-class-definitions-static-semantics-early-errors
description: The `await` keyword is interpreted as an Identifier within generator function expressions
info: |
  ClassStaticBlockBody : ClassStaticBlockStatementList

  [...]
  - It is a Syntax Error if ContainsAwait of ClassStaticBlockStatementList is true.
features: [class-static-block]
---*/

var await = 0;
var fromParam, fromBody;

class C {
  static {
    (function * (x = fromParam = await) {
      fromBody = await;
    })().next();
  }
}

assert.sameValue(fromParam, 0, 'from parameter');
assert.sameValue(fromBody, 0, 'from body');
