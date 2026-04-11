

/*---
esid: sec-__proto__-property-names-in-object-initializers
es6id: B.3.1
description: Duplicate `__proto__` property
info: |
    It is a Syntax Error if PropertyNameList of PropertyDefinitionList contains
    any duplicate entries for "__proto__" and at least two of those entries
    were obtained from productions of the form
    PropertyDefinition : PropertyName : AssignmentExpression .
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

({
  __proto__: null,
  other: null,
  '__proto__': null
});
