

/*---
description: ImportCall is not extensible - no arguments list (top level syntax)
esid: sec-import-call-runtime-semantics-evaluation
features: [dynamic-import]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ImportCall :
        import( AssignmentExpression )


    ImportCall :
        import( AssignmentExpression[+In, ?Yield, ?Await] ,opt )
        import( AssignmentExpression[+In, ?Yield, ?Await] , AssignmentExpression[+In, ?Yield, ?Await] ,opt )

    Forbidden Extensions

    - ImportCall must not be extended.
---*/

$DONOTEVALUATE();

import('./empty_FIXTURE.js', {}, '');
