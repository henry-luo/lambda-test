

/*---
es6id: 14.2.1
description: >
    ArrowParameters[Yield] :
      ...
      CoverParenthesizedExpressionAndArrowParameterList[?Yield]

    No parameter named "yield"

negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();
var af = (yield) => 1;
