

/*---
description: ASI test in field declarations -- error when generator interpreted as multiplication
esid: sec-automatic-semicolon-insertion
features: [class, class-fields-public, generators]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class C {
  x = 42
  *gen() {}
}
