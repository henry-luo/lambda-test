

/*---
es6id: 14.2.1
description: >
    ArrowParameters[Yield] :
      ...
      CoverParenthesizedExpressionAndArrowParameterList[?Yield]

    CoverParenthesizedExpressionAndArrowParameterList, refined by:

    ArrowFormalParameters[Yield, GeneratorParameter] :
      ( StrictFormalParameters[?Yield, ?GeneratorParameter] )

    ArrayBindingPattern

    No duplicates

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
var af = ([x, x]) => 1;
