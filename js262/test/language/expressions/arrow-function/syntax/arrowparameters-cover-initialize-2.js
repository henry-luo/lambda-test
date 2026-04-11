

/*---
es6id: 14.2.1
description: >
    ArrowParameters[Yield] :
      ...
      CoverParenthesizedExpressionAndArrowParameterList[?Yield]

    12.14.5
---*/
var af = ({x = 1}) => x;

assert.sameValue(typeof af, "function");
assert.sameValue(af({}), 1);
assert.sameValue(af({x: 2}), 2);
