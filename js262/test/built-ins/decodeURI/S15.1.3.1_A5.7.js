

/*---
info: The decodeURI property can't be used as constructor
esid: sec-decodeuri-encodeduri
description: >
    If property does not implement the internal [[Construct]] method,
    throw a TypeError exception
---*/


try {
  new decodeURI();
  throw new Test262Error('#1.1: new decodeURI() throw TypeError. Actual: ' + (new decodeURI()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#1.2: new decodeURI() throw TypeError. Actual: ' + (e));
  }
}
