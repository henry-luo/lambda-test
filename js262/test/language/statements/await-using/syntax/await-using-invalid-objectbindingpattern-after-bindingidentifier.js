

/*---
esid: sec-let-const-using-and-await-using-declarations
description: >
    'await using' does not allow ObjectBindingPattern in lexical bindings, even after a valid lexical binding
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
async function f() {
  await using x = null, {} = null;
}
