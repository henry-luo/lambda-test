

/*---
es6id: 14.2
description: >
    ArrowParameters[Yield] :
      BindingIdentifier[?Yield]

    (12.1)
    BindingIdentifier[Yield] :
      Identifier[~Yield] yield

    Identifier :
      IdentifierName but not ReservedWord

    ReservedWord : FutureReservedWord

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
var af = enum => 1;
