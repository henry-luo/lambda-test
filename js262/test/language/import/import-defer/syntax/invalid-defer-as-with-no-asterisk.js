

/*---
esid: sec-imports
description: >
  `import defer` must be followed by `*`
info: |
  ImportDeclaration :
    `import` ImportClause FromClause `;`
    `import` `defer` NameSpaceImport FromClause `;`
    `import` ModuleSpecifier `;`

  ImportClause :
    ImportedDefaultBinding
    NameSpaceImport
    NamedImports
    ImportedDefaultBinding `,` NameSpaceImport
    ImportedDefaultBinding `,` NamedImports

  NameSpaceImport :
    `*` `as` ImportedBinding

features: [import-defer]

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

import defer as ns from "./dep_FIXTURE.js";
