

/*---
es6id: 14.2.1
description: >
    ArrowParameters[Yield] :
      ...
      CoverParenthesizedExpressionAndArrowParameterList[?Yield]

    Parameter named "yield", non-strict

flags: [noStrict]
---*/
var af = (yield) => 1;

assert.sameValue(typeof af, "function");
assert.sameValue(af(1), 1);
