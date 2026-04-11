

/*---
esid: sec-let-const-using-and-await-using-declarations-static-semantics-early-errors
description: >
    using declarations allowed at the top level of a module
info: |
  UsingDeclaration : using BindingList ;

  - It is a Syntax Error if the goal symbol is Script and UsingDeclaration is not contained, either directly or 
    indirectly, within a Block, ForStatement, ForInOfStatement, FunctionBody, GeneratorBody, 
    AsyncGeneratorBody, AsyncFunctionBody, ClassStaticBlockBody, or ClassBody.

flags: [module]
features: [explicit-resource-management]
---*/

using x = null;
