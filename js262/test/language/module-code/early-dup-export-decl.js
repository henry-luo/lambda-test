

/*---
es6id: 15.2.1.1
description: >
    It is a Syntax Error if the ExportedNames of ModuleItemList contains any
    duplicate entries.
flags: [module]
negative:
  phase: parse
  type: SyntaxError
features: [generators]
---*/

$DONOTEVALUATE();

export function f() {}
export function *f() {}
