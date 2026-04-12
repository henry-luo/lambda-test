

/*---
esid: sec-class-definitions-static-semantics-early-errors
description: The `await` keyword is disallowed in the IdentifierReference position
features: [class-static-block]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class C {
  static {
    ((x = await) => 0);
  }
}
