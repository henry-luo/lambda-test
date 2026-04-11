

/*---
es6id: 15.2.1.1
description: >
    It is a Syntax Error if ContainsUndefinedBreakTarget of ModuleItemList with
    argument « » is true.
flags: [module]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

while (false) {
  break undef;
}
