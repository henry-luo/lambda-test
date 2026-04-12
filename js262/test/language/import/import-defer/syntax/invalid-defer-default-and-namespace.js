

/*---
esid: sec-imports
description: >
  `import defer` cannot be used if there are both a default and namespace bindings
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

import x, defer * as ns from "./dep_FIXTURE.js";
