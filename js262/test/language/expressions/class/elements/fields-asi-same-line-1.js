

/*---
description: ASI test in field declarations -- error when method on same line
esid: sec-automatic-semicolon-insertion
features: [class, class-fields-public]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var C = class {
  field  method(){}
}
