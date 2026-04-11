

/*---
description: >
  ExportFromClause : `*`
  esid: prod-ExportFromClause
info: |
  ExportFromClause :
    `*`

flags: [module]
features: [arbitrary-module-namespace-names]
---*/
import * as Scouts from "./export-expname-from-star.js";
export * from "./export-expname_FIXTURE.js";

assert.sameValue(Scouts["☿"], globalThis.Mercury);
