

/*---
esid: prod-OptionalExpression
description: >
  demonstrate syntax-based short-circuiting.
info: |
  If the expression on the LHS of ?. evaluates to null/undefined, the RHS is
  not evaluated
features: [optional-chaining]
---*/

const a = undefined;
let x = 1;

a?.[++x] 
a?.b.c(++x).d; 

undefined?.[++x] 
undefined?.b.c(++x).d; 

assert.sameValue(1, x);
