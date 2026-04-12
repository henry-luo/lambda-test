

/*---
es6id: 15.2.1.1
description: >
    It is a Syntax Error if ContainsDuplicateLabels of ModuleItemList with
    argument « » is true.
flags: [module]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

label: {
  label: 0;
}
