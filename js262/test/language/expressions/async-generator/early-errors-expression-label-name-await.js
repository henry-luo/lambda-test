

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: sec-identifiers-static-semantics-early-errors
description: >
  `await` is a reserved keyword within async generator function bodies and may
  not be used as a label.
info: |
  BindingIdentifier : await

  It is a Syntax Error if this production has an [Await] parameter.
negative:
  phase: parse
  type: SyntaxError
features: [async-iteration]
---*/

$DONOTEVALUATE();

(async function*() {
  await: 1;
});
