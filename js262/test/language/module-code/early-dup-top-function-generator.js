

/*---
esid: sec-module-semantics-static-semantics-early-errors
description: >
    It is a Syntax Error if the LexicallyDeclaredNames of ModuleItemList
    contains any duplicate entries.
    At the top level of a Module, function declarations are treated like
    lexical declarations rather than like var declarations.
flags: [module]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function x() {}
function* x() {}
