

/*---
description: >
  * is not a valid prefix of an identifier reference
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

({* foo});
