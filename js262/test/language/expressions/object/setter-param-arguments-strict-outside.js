

/*---
es5id: 11.1.5-2-s
description: >
    Strict Mode - SyntaxError is thrown when 'arguments' occurs as the
    Identifier in a PropertySetParameterList of a PropertyAssignment
    that is contained in strict code
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

void {
  set x(arguments) {}
};
