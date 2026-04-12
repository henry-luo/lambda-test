

/*---
info: The eval property can't be used as constructor
esid: sec-eval-x
description: >
    If property does not implement the internal [[Construct]] method,
    throw a TypeError exception
---*/


try {
  new eval();
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#1.2: new eval() throw TypeError. Actual: ' + (e));
  }
}
