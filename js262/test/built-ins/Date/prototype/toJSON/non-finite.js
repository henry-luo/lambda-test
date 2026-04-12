

/*---
esid: sec-date.prototype.tojson
description: >
  If this value coerces to non-finite number, null is returned.
info: |
  Date.prototype.toJSON ( key )

  [...]
  2. Let tv be ? ToPrimitive(O, hint Number).
  3. If Type(tv) is Number and tv is not finite, return null.
---*/

var toJSON = Date.prototype.toJSON;

assert.sameValue(
  toJSON.call({
    get toISOString() { throw new Test262Error();  },
    valueOf: function() { return NaN; },
  }),
  null
);

var num = new Number(-Infinity);
num.toISOString = function() { throw new Test262Error(); };
assert.sameValue(toJSON.call(num), null);
