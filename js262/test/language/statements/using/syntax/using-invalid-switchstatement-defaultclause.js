

/*---
esid: sec-let-const-using-and-await-using-declarations-static-semantics-early-errors
description: Disallowed in switch statement
info: |
  - It is a Syntax Error if the goal symbol is |Script| and |UsingDeclaration| is not contained, either directly or indirectly, within a |Block|, |ForStatement|, |ForInOfStatement|, |FunctionBody|, |GeneratorBody|, |AsyncGeneratorBody|, |AsyncFunctionBody|, or |ClassStaticBlockBody|.
  - It is a Syntax Error if |UsingDeclaration| is contained directly within the |StatementList| of either a |CaseClause| or |DefaultClause|.

negative:
  phase: parse
  type: SyntaxError

features: [explicit-resource-management]
---*/

switch (0) {
  default:
    using _ = null;
    break;
}

$DONOTEVALUATE();
