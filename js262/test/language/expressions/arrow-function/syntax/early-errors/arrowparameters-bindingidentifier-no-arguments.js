

/*---
es6id: 14.2.1
description: >
    ArrowParameters[Yield] :
      BindingIdentifier[?Yield]
      ...

    No parameter named "arguments"

negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();
var af = arguments => 1;
