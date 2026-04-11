

/*---
description: ASI test in field declarations -- error when generator interpreted as multiplication
esid: sec-automatic-semicolon-insertion
features: [class, class-fields-public, generators]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var C = class {
  x = 42
  *gen() {}
}
