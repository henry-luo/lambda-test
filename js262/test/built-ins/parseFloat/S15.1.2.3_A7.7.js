

/*---
info: The parseFloat property can't be used as constructor
esid: sec-parsefloat-string
description: >
    If property does not implement the internal [[Construct]] method,
    throw a TypeError exception
---*/


try {
  new parseFloat();
  throw new Test262Error('#1.1: new parseFloat() throw TypeError. Actual: ' + (new parseFloat()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#1.2: new parseFloat() throw TypeError. Actual: ' + (e));
  }
}
