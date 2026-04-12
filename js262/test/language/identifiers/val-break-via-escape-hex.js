

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: break
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u{62}\u{72}\u{65}\u{61}\u{6b} = 123;;
