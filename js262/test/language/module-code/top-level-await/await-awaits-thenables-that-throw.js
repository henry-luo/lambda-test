

/*---
esid: prod-AwaitExpression
description: >
  Await can await any thenable.
flags: [module, async]
features: [top-level-await]
---*/

var error = {};
var thenable = {
  then: function (resolve, reject) {
    throw error;
  }
}

var caught = false;
try {
  await thenable;
} catch(e) {
  caught = e;
  
}

assert.sameValue(caught, error);

$DONE();
