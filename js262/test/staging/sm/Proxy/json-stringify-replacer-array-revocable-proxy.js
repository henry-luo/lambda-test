

/*---
description: |
  Don't assert when JSON.stringify is passed a revocable proxy to an array, then that proxy is revoked midflight during stringification
info: bugzilla.mozilla.org/show_bug.cgi?id=1196497
esid: pending
---*/

var arr = [];
var { proxy, revoke } = Proxy.revocable(arr, {
  get(thisv, prop, receiver) {
    
    
    assert.sameValue(thisv, arr);
    assert.sameValue(prop, "length");
    assert.sameValue(receiver, proxy);

    revoke();
    return 0;
  }
});

assert.sameValue(JSON.stringify({a: 0}, proxy), "{}");
