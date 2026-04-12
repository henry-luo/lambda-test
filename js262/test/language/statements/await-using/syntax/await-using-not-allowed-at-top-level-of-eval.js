

/*---
esid: sec-let-const-using-and-await-using-declarations-static-semantics-early-errors
description: >
    await using declarations not allowed at the top level of eval. Note that Eval parses text using the Script goal.
info: |
  AwaitUsingDeclaration : CoverAwaitExpressionAndAwaitUsingDeclarationHead BindingList ;

  - It is a Syntax Error if the goal symbol is Script and UsingDeclaration is not contained, either directly or 
    indirectly, within a Block, ForStatement, ForInOfStatement, FunctionBody, GeneratorBody, 
    AsyncGeneratorBody, AsyncFunctionBody, ClassStaticBlockBody, or ClassBody.

flags: [async]
includes: [asyncHelpers.js]
features: [explicit-resource-management]
---*/

asyncTest(async function () {
  await assert.throwsAsync(SyntaxError, async function () {
    eval('await using x = null;')
  });
});
