

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: sec-generator-function-definitions
description: >
  The right-hand side of a `yield *` expression may appear on a new line.
flags: [async]
features: [async-iteration]
---*/

var g = async function*() {};

(async function*() {
  yield*
  g();
})().next().then(function(result) {
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, true);
}).then($DONE, $DONE);
