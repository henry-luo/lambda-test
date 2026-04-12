

/*---
esid: sec-static-semantics-early-errors
description: >
    ModuleBody : ModuleItemList
      It is a Syntax Error if AllPrivateIdentifiersValid of ModuleItemList with an empty List as an argument is false.
flags: [module]
features: [class-static-fields-private]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var x = {};
x.#f = 'Test262';
