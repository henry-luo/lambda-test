

/*---
description: >
    The Initializer of a SingleNameBinding witihn the FormalParameters of a
    GeneratorMethod may not contain the `yield` keyword.
es6id: 14.4
features: [generators]
flags: [noStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

(function*() {
  ({
    *method(x = yield) {}
  });
});
