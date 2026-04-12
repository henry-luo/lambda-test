

/*---
description: leading `async` token in for-of LHS
info: |
  The `async` token is disallowed in the LHS when followed by `of`
esid: sec-for-in-and-for-of-statements
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var async;
for (async of [1]) ;
