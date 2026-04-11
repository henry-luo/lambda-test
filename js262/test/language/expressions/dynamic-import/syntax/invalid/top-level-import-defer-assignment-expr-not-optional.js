

/*---
description: It's a SyntaxError if AssignmentExpression is omitted (top level syntax)
esid: sec-import-call-runtime-semantics-evaluation
features: [import-defer, dynamic-import]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ImportCall :
        import( AssignmentExpression )


    ImportCall[Yield, Await] :
        import . defer ( AssignmentExpression[+In, ?Yield, ?Await] )

---*/

$DONOTEVALUATE();

import.defer();

