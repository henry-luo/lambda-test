

/*---
esid: pending
description: RegExp.lastParen throws a TypeError for subclass receiver
info: |
  get RegExp.lastParen

  1. Return ? GetLegacyRegExpStaticProperty(%RegExp%, this value, [[RegExpLastParen]]).

  GetLegacyRegExpStaticProperty( C, thisValue, internalSlotName ).

  1. Assert C is an object that has an internal slot named internalSlotName.
  2. If SameValue(C, thisValue) is false, throw a TypeError exception.
  3. ...
features: [legacy-regexp,class]
---*/

class MyRegExp extends RegExp {}

assert.throws(
  TypeError,
  function () {
    MyRegExp.lastParen;
  },
  "RegExp.lastParen getter throws for subclass receiver"
);

assert.throws(
  TypeError,
  function () {
    MyRegExp["$+"];
  },
  "RegExp.$+ getter throws for subclass receiver"
);
