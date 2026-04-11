

/*---
esid: sec-block-static-semantics-early-errors
description: >
  Redeclaration with VariableDeclaration (FunctionDeclaration in BlockStatement)
info: |
  13.2.1 Static Semantics: Early Errors

  It is a Syntax Error if any element of the LexicallyDeclaredNames of
  StatementList also occurs in the VarDeclaredNames of StatementList.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function g() {
    
    {
        
        function f() {}

        
        {
            var f;
        }
    }
}
