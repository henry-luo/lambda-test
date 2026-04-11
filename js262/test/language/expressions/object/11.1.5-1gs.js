

/*---
es5id: 11.1.5-1gs
description: >
    Strict Mode - SyntaxError is thrown when 'eval' occurs as the
    Identifier in a PropertySetParameterList of a PropertyAssignment
    that is contained in strict code
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

var obj = { set _11_1_5_1_fun(eval) {}};
