

/*---
esid: sec-method-definitions
description: Formal parameters may not contain duplicates
info: |
  # 14.3 Method Definitions

  MethodDefinition[Yield, Await]:
    PropertyName[?Yield, ?Await](UniqueFormalParameters[~Yield, ~Await]){FunctionBody[~Yield, ~Await]}

  # 14.1.2 Static Semantics: Early Errors

  UniqueFormalParameters:FormalParameters

  - It is a Syntax Error if BoundNames of FormalParameters contains any
    duplicate elements.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
({
  foo(a, a) { }
})
