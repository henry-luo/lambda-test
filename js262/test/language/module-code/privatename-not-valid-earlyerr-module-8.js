

/*---
esid: sec-module-semantics-static-semantics-early-errors
description: Early error when referencing privatename on object, outside of class.
info: |
  Static Semantics: Early Errors
  Module : ModuleBody
    It is a Syntax Error if AllPrivateNamesValid of ModuleBody with an empty List as an argument is false.
features: [class-fields-private]
flags: [module]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function f() {
  this.#x;
}
