

/*---
es6id: 12.2.8.5
description: Method invocation in expression position of TemplateMiddleList
info: |
    TemplateMiddleList : TemplateMiddle Expression

    1. Let head be the TV of TemplateMiddle as defined in 11.8.6.
    2. Let sub be the result of evaluating Expression.
    3. Let middle be ToString(sub).
    4. ReturnIfAbrupt(middle).
---*/
var object = {
  fn: function() { return 'result'; }
};

assert.sameValue(`${0} ${object.fn()} bar`, '0 result bar');
