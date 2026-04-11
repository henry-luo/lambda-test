

/*---
description: |
    assert.throwsAsync returns a promise that never settles if func returns a thenable that never settles.
flags: [async]
includes: [asyncHelpers.js]
---*/

var realDone = $DONE;
var doneCalls = 0
globalThis.$DONE = function () {
  doneCalls++;
}

function delay() {
  var later = Promise.resolve();
  for (var i = 0; i < 100; i++) {
    later = later.then();
  }
  return later;
}

(async function () {
  
  
  var neverSettlingThenable = { then: function () { } };
  const p = assert.throwsAsync(TypeError, function () { return neverSettlingThenable });
  assert(p instanceof Promise, "assert.throwsAsync should return a promise");
  p.then($DONE, $DONE);
})()
  
  .then(delay, delay)
  .then(function () {
    assert.sameValue(doneCalls, 0, "$DONE should not have been called")
  })
  .then(realDone, realDone);
