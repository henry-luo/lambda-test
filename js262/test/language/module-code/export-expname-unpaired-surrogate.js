

/*---
description: >
  ExportSpecifier : ModuleExportName
  esid: prod-ExportSpecifier
info: |
  ModuleExportName : StringLiteral

  It is a Syntax Error if IsStringWellFormedUnicode of the StringValue of
  StringLiteral is *false*.
flags: [module]
features: [arbitrary-module-namespace-names]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

export { Foo as "\uD83D" }

function Foo() {}

