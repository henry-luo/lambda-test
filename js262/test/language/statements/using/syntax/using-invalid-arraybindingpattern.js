

/*---
esid: sec-let-const-using-and-await-using-declarations
description: >
    'using' does not allow ArrayBindingPattern in lexical bindings
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();

{
  using [] = null;
}
