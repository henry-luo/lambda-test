

/*---
esid: sec-let-const-using-and-await-using-declarations-static-semantics-early-errors
description: >
    using declarations not allowed at the top level of eval. Note that Eval parses text using the Script goal.
info: |
  UsingDeclaration : using BindingList ;

  - It is a Syntax Error if the goal symbol is Script and UsingDeclaration is not contained, either directly or 
    indirectly, within a Block, ForStatement, ForInOfStatement, FunctionBody, GeneratorBody, 
    AsyncGeneratorBody, AsyncFunctionBody, ClassStaticBlockBody, or ClassBody.

features: [explicit-resource-management]
---*/

assert.throws(SyntaxError, function() {
  eval('using x = null;')
});
