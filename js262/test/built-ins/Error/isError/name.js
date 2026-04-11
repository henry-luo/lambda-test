

/*---
esid: sec-error.iserror
description: >
  The initial value of Error.isError.name is "isError".
features: [Error.isError]
---*/

assert.sameValue(Error.isError.name, 'isError');

