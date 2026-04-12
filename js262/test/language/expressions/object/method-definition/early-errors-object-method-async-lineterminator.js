

/*---
esid: prod-AsyncMethod
description: async methods cannot have a line terminator between "async" and the property name
info: |
  14.6 Async Function Definitions

  AsyncMethod:
    async [no LineTerminator here] PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

({
  async
  foo() { }
})
