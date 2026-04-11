

/*---
esid: sec-imports
description: >
  `import defer` can be used with namespace imports
info: |
  ImportDeclaration :
    `import` ImportClause FromClause WithClause? `;`
    `import` `defer` NameSpaceImport FromClause WithClause? `;`
    `import` ModuleSpecifier WithClause? `;`

  NameSpaceImport :
    `*` `as` ImportedBinding

flags: [module]
features: [import-defer]
---*/

import defer * as ns from "./dep_FIXTURE.js" with { };
