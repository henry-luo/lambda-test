

/*---
esid: sec-class-definitions-static-semantics-early-errors
description: The `await` keyword is disallowed in the BindingIdentifier position
features: [class-static-block]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class C {
  static {
    (await => 0);
  }
}
