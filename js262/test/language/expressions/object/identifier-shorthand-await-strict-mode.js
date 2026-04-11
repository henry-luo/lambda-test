

/*---
description: >
  Object literal shorthands are limited to valid identifier references. await is valid in non-module strict mode code.
esid: sec-object-initializer
flags: [noStrict]
info: |
  PropertyDefinition:
    IdentifierReference
    CoverInitializedName
    PropertyName : AssignmentExpression
    MethodDefinition
  Identifier : IdentifierName but not ReservedWord

---*/

var await = 1;
(function() {
  "use strict";
  ({
    await
  });
});
