

/*---
description: >
    It is a Syntax Error if HasDirectSuper of MethodDefinition is true.
esid: sec-object-initializer-static-semantics-early-errors
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

({
  method(param = super()) {}
});
