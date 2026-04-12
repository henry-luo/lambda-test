

/*---
esid: sec-class-definitions-static-semantics-early-errors
description: The `await` keyword is interpreted as an identifier within accessor methods
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
    ({
      set accessor(x = fromParam = await) {
        fromBody = await;
      }
    }).accessor = undefined;
  }
}

assert.sameValue(fromParam, 0, 'from parameter');
assert.sameValue(fromBody, 0, 'from body');
