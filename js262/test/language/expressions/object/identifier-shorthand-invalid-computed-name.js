

/*---
description: >
  Object literal shorthands are only valid with identifier references,
  not computed property names.
esid: sec-object-initializer
info: |
  PropertyDefinition:
    IdentifierReference
    CoverInitializedName
    PropertyName : AssignmentExpression
    MethodDefinition

  PropertyName:
    LiteralPropertyName
    ComputedPropertyName
negative:
  phase: parse
  type: SyntaxError
---*/

var x = "y";
var y = 42;

$DONOTEVALUATE();

({[x]});
