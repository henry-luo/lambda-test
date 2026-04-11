

/*---
description: |
  pending
esid: pending
---*/

assert.throws(URIError, function() {
  decodeURIComponent('%ED%A0%80');
});
