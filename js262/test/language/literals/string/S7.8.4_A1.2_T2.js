

/*---
info: "StringLiteral :: 'SingleStringCharacters_opt'"
es5id: 7.8.4_A1.2_T2
description: >
    SingleStringCharacter :: SourceCharacter but not single-quote ' or
    LineTerminator
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


'
'
