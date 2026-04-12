

/*---
info: Block within a "do-while" Expression is not allowed
es5id: 12.6.1_A15
description: Using "{0}" Block as an Expression
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


do{
    ;
}while({0});

