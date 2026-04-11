

/*---
esid: sec-web-compat-functiondeclarationinstantiation
description: >
  Nested function declarations, the second declaration is not Annex-B applicable.
info: |
  B.3.3.1 Changes to FunctionDeclarationInstantiation

  1. If strict is false, then
    a. For each FunctionDeclaration f that is directly contained in the
       StatementList of a Block, CaseClause, or DefaultClause, do
      i. Let F be StringValue of the BindingIdentifier of FunctionDeclaration f.
      ii. If replacing the FunctionDeclaration f with a VariableStatement that
          has F as a BindingIdentifier would not produce any Early Errors for
          func and F is not an element of parameterNames, then
       ...
flags: [noStrict]
---*/

function g() {
    
    {
        
        
        function f() { return 1; }

        
        {
            function f() { return 2; }
        }
    }

    assert.sameValue(f(), 1);
}

g();
