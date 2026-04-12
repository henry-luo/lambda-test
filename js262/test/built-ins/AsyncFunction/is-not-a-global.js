

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: sec-async-function-constructor-properties
description: >
  %AsyncFunction% is not exposed as a global
---*/

assert.throws(ReferenceError, function() {
  AsyncFunction
}, "AsyncFunction should not be present as a global");
