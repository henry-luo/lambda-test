

/*---
esid: sec-let-const-using-and-await-using-declarations
description: >
    'using' does not allow ObjectBindingPattern in lexical bindings, even after a valid lexical binding
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();

{
  using x = null, {} = null;
}
