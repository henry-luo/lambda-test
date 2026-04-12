

/*---
description: |
  DisposableStack return undefned.
features: [explicit-resource-management]
---*/

(function TestDisposableStackDisposeReturnsUndefined() {
    let stack = new DisposableStack();
    assert.sameValue(stack.dispose(), undefined);
})();
