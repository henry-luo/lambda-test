

/*---
description: ASI test in field declarations -- error when method on same line after initializer
esid: sec-automatic-semicolon-insertion
features: [class, class-fields-public]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class C {
  field = 1  method(){}
}
