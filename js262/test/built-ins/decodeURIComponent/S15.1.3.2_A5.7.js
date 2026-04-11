

/*---
info: The decodeURIComponent property can't be used as constructor
esid: sec-decodeuricomponent-encodeduricomponent
description: >
    If property does not implement the internal [[Construct]] method,
    throw a TypeError exception
---*/


try {
  new decodeURIComponent();
  throw new Test262Error('#1.1: new decodeURIComponent() throw TypeError. Actual: ' + (new decodeURIComponent()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    throw new Test262Error('#1.2: new decodeURIComponent() throw TypeError. Actual: ' + (e));
  }
}
