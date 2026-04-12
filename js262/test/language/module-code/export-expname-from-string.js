

/*---
description: >
  ExportFromClause : NamedExports
  esid: prod-ExportFromClause
info: |
  ExportFromClause :
    NamedExports[+From]

  NamedExports[From] :
    [+From] ModuleExportName

  ModuleExportName : StringLiteral

flags: [module]
features: [arbitrary-module-namespace-names]
---*/
import * as Scouts from "./export-expname-from-string.js";
export { "☿" } from "./export-expname_FIXTURE.js";

assert.sameValue(typeof Scouts["☿"], "function");
