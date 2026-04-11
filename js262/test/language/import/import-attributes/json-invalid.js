

/*---
esid: sec-parse-json-module
description: Does not define
info: |
  # 1.4 ParseJSONModule ( source )

  The abstract operation ParseJSONModule takes a single argument source which
  is a String representing the contents of a module.

  1. Let json be ? Call(%JSON.parse%, undefined, « source »).
  2. Return CreateDefaultExportSyntheticModule(json).
flags: [module]
features: [import-attributes, json-modules]
negative:
  phase: resolution
  type: SyntaxError
---*/

$DONOTEVALUATE();

import value from './json-invalid_FIXTURE.json' with { type: 'json' };
