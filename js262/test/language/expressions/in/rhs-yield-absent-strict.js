

/*---
description: Parsing observes the `Yield` production parameter when absent (within strict mode)
info: |
  Syntax
    RelationalExpression[In, Yield, Await]:
    [...]
    [+In] RelationalExpression[+In, ?Yield, ?Await] in ShiftExpression[?Yield, ?Await]
esid: sec-relational-operators
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

'' in (yield);
