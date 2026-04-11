

/*---
es6id: 14.2
description: >
    ArrowFunction[In, Yield] :
      ArrowParameters[?Yield] [no LineTerminator here] => ConciseBody[?In]

    No parens around ArrowParameters

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
var af = x
=> {};
