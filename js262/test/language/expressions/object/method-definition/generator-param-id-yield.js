

/*---
description: >
    The BindingIdentifier of a SingleNameBinding witihn the FormalParameters of
    a GeneratorMethod may not be the `yield` keyword.
es6id: 14.4
features: [generators]
flags: [noStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

({
  *method(yield) {}
});
