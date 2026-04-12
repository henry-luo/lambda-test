

/*---
esid: sec-let-const-using-and-await-using-declarations
description: >
    'await using' does not allow ArrayBindingPattern in lexical bindings
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
async function() {
  await using [] = null;
}
