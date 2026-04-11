

/*---
description: >
  Object literal shorthands are only valid with identifier references,
  not property names. (0)
esid: sec-object-initializer
info: |
  PropertyDefinition:
    IdentifierReference
    CoverInitializedName
    PropertyName : AssignmentExpression
    MethodDefinition
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

({0});
