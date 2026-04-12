

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

export { "\uD83D" } from "./export-expname_FIXTURE.js";
