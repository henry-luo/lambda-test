

/*---
description: Test move() on a disposed-stack.
includes: [asyncHelpers.js]
flags: [async]
features: [explicit-resource-management]
---*/


asyncTest(async function() {
  async function TestAsyncDisposableStackMoveOnDisposedStack() {
    let stack = new AsyncDisposableStack();
    await stack.disposeAsync();
    let newStack = stack.move();
  };

  await assert.throwsAsync(
      ReferenceError, () => TestAsyncDisposableStackMoveOnDisposedStack(),
      'Cannot move elements from a disposed stack!');
});
