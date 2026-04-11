

/*---
es5id: 12.2.1-32-s
esid: sec-variable-statement
description: >
    arguments as local var identifier defined twice and assigned once
    throws SyntaxError in strict mode within a function declaration
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function f() {
  var arguments, arguments = 42;
}
