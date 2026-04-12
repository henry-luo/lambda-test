

/*---
esid: sec-unescape-string
description: Observable operations from string coercion
info: |
    B.2.1.2 unescape ( string )

    1. Set string to ? ToString(string).
    ....
features: [Symbol.toPrimitive]
---*/

var obj = {
  toString() { throw new Test262Error('this should be unreachable'); },
  valueOf() { throw new Test262Error('this should be unreachable'); },
  [Symbol.toPrimitive]() { return 'success'; }
};

assert.sameValue(unescape(obj), 'success');
