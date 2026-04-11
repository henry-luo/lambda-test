

/*---
es6id: 14.2.1
description: >
    ArrowParameters[Yield] :
      ...
      CoverParenthesizedExpressionAndArrowParameterList[?Yield]

    CoverParenthesizedExpressionAndArrowParameterList, refined by:

    ArrowFormalParameters[Yield, GeneratorParameter] :
      ( StrictFormalParameters[?Yield, ?GeneratorParameter] )

    ObjectBindingPattern

    BindingPropertyList

    BindingRestElement

    No duplicates

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
var af = ({y: x}, ...x) => 1;
