

/*---
es6id: S25.4.4.3_A5.1_T1
author: Sam Mikes
description: Promise.race([]) never settles
flags: [async]
---*/

var p = Promise.race([]);

p.then(function() {
  throw new Test262Error("Never settles.");
}, function() {
  throw new Test262Error("Never settles.");
}).then($DONE, $DONE);


Promise.resolve().then().then().then($DONE, $DONE);
