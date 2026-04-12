

/*---
author: Mathias Bynens
description: >
  Setting the `u` and `v` flag at the same time produces an error.
esid: sec-parsepattern
negative:
  phase: parse
  type: SyntaxError
features: [regexp-v-flag]
---*/

$DONOTEVALUATE();

/./uv;
