

/*---
esid: sec-promise.prototype.finally
description: >
  Promise.prototype.finally invoked on thenable returns result of "then" call.
features: [Promise.prototype.finally]
---*/

var thenResult = {};
var Thenable = function() {};
Thenable.prototype.then = function() { return thenResult; };

assert.sameValue(
  Promise.prototype.finally.call(new Thenable()),
  thenResult
);
