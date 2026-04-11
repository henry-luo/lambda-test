

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

    Strict Mode

negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();
var af = package => 1;
