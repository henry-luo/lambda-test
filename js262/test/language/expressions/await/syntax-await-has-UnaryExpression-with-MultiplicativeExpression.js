

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Await's operand is a UnaryExpression
flags: [async]
includes: [asyncHelpers.js]
---*/

async function foo() {
  let x = 2;
  let y = await Promise.resolve(2) * x
  assert.sameValue(y, 4);
}
asyncTest(foo);
