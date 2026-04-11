

/*---
esid: sec-object-initializer-static-semantics-early-errors
es6id: 12.2.6.1
description: Initialized name is explicitly barred from object initializers
info: |
  PropertyDefinition : CoverInitializedName

  - Always throw a Syntax Error if code matches this production.

  NOTE This production exists so that ObjectLiteral can serve as a cover
       grammar for ObjectAssignmentPattern. It cannot occur in an actual object
       initializer.

  12.2.6 Object Initializer

  Syntax

  [...]

  CoverInitializedName[Yield]:

    IdentifierReference[?Yield] Initializer[+In, ?Yield]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

({ a = 1 });
