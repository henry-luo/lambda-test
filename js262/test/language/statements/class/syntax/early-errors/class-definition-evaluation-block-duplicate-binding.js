

/*---
es6id: 13.1.1
description: >
    Block : { StatementList }

    It is a Syntax Error if the LexicallyDeclaredNames of StatementList contains any duplicate entries.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
{
  class A {}
  class A {}
}
