

/*---
es6id: 14.2.1
description: >
    ArrowParameters[Yield] :
      ...
      CoverParenthesizedExpressionAndArrowParameterList[?Yield]

    Parameter named "arguments", non-strict

flags: [noStrict]
---*/
var af = (arguments) => arguments;

assert.sameValue(typeof af, "function");
assert.sameValue(af(1), 1);
