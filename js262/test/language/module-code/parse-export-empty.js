

/*---
description: A NamedExport does not require an ExportsList.
esid: sec-parsemodule
info: |
    ExportDeclaration:
      export * FromClause;
      export * as IdentifierName FromClause;
      export NamedExports FromClause;
      export NamedExports;
      export VariableStatement
      export Declaration
      export default HoistableDeclaration[Default]
      export default ClassDeclaration[Default]
      export default [lookahead ∉ { function, class }] AssignmentExpression[In];

    NamedExports:
      { }
      { ExportsList }
      { ExportsList , }

    NOTE: This form has no observable side effects.
flags: [module]
---*/

export{};
export {};
export {}
export { };
export
{

};
export
{

};
export{};
