

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: pending
description: >
  Implementations must defer rejecting an async function's Promise until after
  all finally blocks have been evaluated.
flags: [async]
---*/

async function f() {
  try {
    await new Promise(function(resolve, reject) {
      reject("early-reject");
    });
  } finally {
    await new Promise(function(resolve, reject) {
      reject("override");
    });
  }
}

f().then($DONE, function(value) {
  assert.sameValue(value, "override", "Awaited rejection in finally block");
}).then($DONE, $DONE);
