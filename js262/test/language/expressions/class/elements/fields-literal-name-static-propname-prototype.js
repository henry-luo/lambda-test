

/*---
description: static class fields forbid PropName 'prototype' (early error -- PropName of IdentifierName is forbidden)
esid: sec-class-definitions-static-semantics-early-errors
features: [class, class-fields-public]
negative:
  phase: parse
  type: SyntaxError
info: |
    Static Semantics: PropName
    LiteralPropertyName : IdentifierName
      Return StringValue of IdentifierName.


    // This test file tests the following early error:
    Static Semantics: Early Errors

      ClassElement : staticFieldDefinition;
        It is a Syntax Error if PropName of FieldDefinition is "prototype" or "constructor".

---*/


$DONOTEVALUATE();

var C = class {
  static prototype;
};
