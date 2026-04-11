

/*---
description: Re-entry to a disposable stack should do nothing.
includes: [compareArray.js]
features: [explicit-resource-management]
---*/

let values = [];

(function TestDisposableStackReEntry() {
  let stack = new DisposableStack();
  stack.use({
    [Symbol.dispose]() {
      values.push(42);
      stack.dispose();
    }
  });
  stack.dispose();
})();
assert.compareArray(values, [42]);
