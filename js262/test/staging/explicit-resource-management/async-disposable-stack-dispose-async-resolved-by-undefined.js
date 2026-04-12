

/*---
description: |
  AsyncDisposableStack resolved with undefned.
includes: [asyncHelpers.js]
flags: [async]
features: [explicit-resource-management]
---*/

asyncTest(async function() {
    async function TestAsyncDisposableStackDefer() {
      let stack = new AsyncDisposableStack();
      assert.sameValue(await stack.disposeAsync(), undefined);
    };
    await TestAsyncDisposableStackDefer();
  });
