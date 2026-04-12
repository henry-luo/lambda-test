

/*---
description: >
  ImportCall parameter list forwards the Yield production parameter - invalid IdentifierReference
esid: sec-import-call-runtime-semantics-evaluation
info: |
  ImportCall[Yield, Await]:
    import ( AssignmentExpression[+In, ?Yield, ?Await] ,opt )
    import ( AssignmentExpression[+In, ?Yield, ?Await] , AssignmentExpression[+In, ?Yield, ?Await] ,opt )
features: [dynamic-import, import-attributes]
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/
$DONOTEVALUATE();

import('./empty_FIXTURE.js', yield);
