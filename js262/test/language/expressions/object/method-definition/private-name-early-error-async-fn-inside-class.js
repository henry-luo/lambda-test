

/*---
esid: sec-method-definitions-static-semantics-early-errors
description: >
  Throws an early SyntaxError if a method definition has a private name even
  inside a class body (async method).
info: |
  Static Semantics: Early Errors

  PropertyDefinition : MethodDefinition
    It is a Syntax Error if PrivateBoundNames of MethodDefinition is non-empty.
negative:
  phase: parse
  type: SyntaxError
features: [class-methods-private, async-functions, class, class-fields-public]
---*/

$DONOTEVALUATE();

class C {
  field = {
    async #m() {}
  }
}
