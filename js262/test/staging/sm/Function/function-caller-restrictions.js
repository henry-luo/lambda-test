

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


function caller() {
    return caller.caller;
}

assert.sameValue(caller(), null);
assert.sameValue(Reflect.apply(caller, undefined, []), null);

assert.sameValue([0].map(caller)[0], null);

(function strict() {
    "use strict";
    assert.sameValue(caller(), null);
})();

(async function() {
    assert.sameValue(caller(), null);
})();

assert.sameValue(function*() {
    yield caller();
}().next().value, null);


if (typeof assert.sameValue === "function") {
}
