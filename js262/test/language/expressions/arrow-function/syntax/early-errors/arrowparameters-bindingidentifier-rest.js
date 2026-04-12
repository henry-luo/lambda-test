

/*---
es6id: 14.2
description: >
    ArrowParameters : BindingIdentifier[?Yield]

    Includes ...rest

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
var af = ...x => x;
