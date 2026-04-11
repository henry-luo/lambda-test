

/*---
description: ASI test in field declarations -- error when computed name interpreted as index
esid: sec-automatic-semicolon-insertion
features: [class, class-fields-public]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class C {
  x = "string"
  [0]() {}
}
