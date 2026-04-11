

/*---
description: |
    The 'asyncTest' helper checks that it is called with the 'async' flag.
includes: [asyncHelpers.js]
---*/
function makePromise() {
  return {
    then(res, rej) {
      
      throw new Error("Should not be evaluated");
    },
  };
}
assert(
  !Object.hasOwn(globalThis, "$DONE"),
  "Without 'async' flag, $DONE should not be defined"
);
assert.throws(Test262Error, function () {
  asyncTest(makePromise);
});
