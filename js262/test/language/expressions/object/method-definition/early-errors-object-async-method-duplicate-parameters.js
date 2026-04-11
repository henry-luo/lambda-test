

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: sec-async-function-definitions
description: Formal parameters may not contain duplicates
info: |
  # 14.7 Async Function Definitions

   AsyncMethod[Yield, Await]:
     async[no LineTerminator here]PropertyName[?Yield, ?Await](UniqueFormalParameters[~Yield, +Await]){AsyncFunctionBody}

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
  async foo(a, a) { }
})
