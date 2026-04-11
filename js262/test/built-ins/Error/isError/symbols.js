

/*---
esid: sec-error.iserror
description: >
  Returns false on symbols
features: [Error.isError, Symbol]
---*/

assert.sameValue(Error.isError(Symbol()), false);
