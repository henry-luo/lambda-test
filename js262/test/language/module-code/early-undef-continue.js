

/*---
es6id: 15.2.1.1
description: >
    It is a Syntax Error if ContainsUndefinedContinueTarget of ModuleItemList
    with arguments « » and « » is true.
flags: [module]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

while (false) {
  continue undef;
}
