

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: pending
description: >
  Implementations must defer rejecting an async function's Promise until after
  all finally blocks have been evaluated.
flags: [async]
---*/

var f = async() => {
  try {
    await new Promise(function(resolve, reject) {
      reject("early-reject");
    });
  } finally {
    return "override";
  }
};

f().then(function(value) {
  assert.sameValue(value, "override", "Return in finally block");
}).then($DONE, $DONE);
