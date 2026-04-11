

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Await's operand is a UnaryExpression
flags: [async]
includes: [asyncHelpers.js]
---*/

async function foo() {
  let x = 1;
  let y = await x++;
  assert.sameValue(y, 1);
  assert.sameValue(x, 2);
}
asyncTest(foo);
