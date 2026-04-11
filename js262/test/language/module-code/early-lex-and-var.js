

/*---
es6id: 10.2.1
description: >
    It is a Syntax Error if any element of the LexicallyDeclaredNames of
    ModuleItemList also occurs in the VarDeclaredNames of ModuleItemList.
flags: [module]
features: [let]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

let x;
var x;
