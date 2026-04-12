

/*---
es6id: 15.2.1.1
description: >
    It is a Syntax Error if ModuleItemList Contains NewTarget
flags: [module]
negative:
  phase: parse
  type: SyntaxError
features: [new.target]
---*/

$DONOTEVALUATE();

new.target;
