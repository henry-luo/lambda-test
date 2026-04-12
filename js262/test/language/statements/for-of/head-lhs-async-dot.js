

/*---
description: leading `async` token in for-of LHS
info: |
  The `async` token is allowed in the LHS if not followed by `of`
esid: sec-for-in-and-for-of-statements
---*/

var async = { x: 0 };

for (async.x of [1]) ;

assert.sameValue(async.x, 1);
