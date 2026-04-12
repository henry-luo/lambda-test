

/*---
es6id: 14.2
description: >
    ArrowFunction[In, Yield] :
      ArrowParameters[?Yield] [no LineTerminator here] => ConciseBody[?In]

    LineTerminator between arrow and ConciseBody[?In]
    ArrowParameters : CoverParenthesizedExpressionAndArrowParameterList[?Yield]
    ConciseBody[In] : { FunctionBody }

    Includes ...rest
---*/
var af = (...x) => { return x.length; };

assert.sameValue(typeof af, "function");
assert.sameValue(af(1, 1, 1), 3);
