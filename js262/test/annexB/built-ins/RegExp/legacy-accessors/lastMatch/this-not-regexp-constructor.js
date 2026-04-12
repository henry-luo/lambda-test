

/*---
esid: pending
description: RegExp.lastMatch throws a TypeError for non-%RegExp% receiver
info: |
  get RegExp.lastMatch

  1. Return ? GetLegacyRegExpStaticProperty(%RegExp%, this value, [[RegExpLastMatch]]).

  GetLegacyRegExpStaticProperty( C, thisValue, internalSlotName ).

  1. Assert C is an object that has an internal slot named internalSlotName.
  2. If SameValue(C, thisValue) is false, throw a TypeError exception.
  3. ...
features: [legacy-regexp]
---*/

["lastMatch", "$&"].forEach(function (property) {
  const desc = Object.getOwnPropertyDescriptor(RegExp, property);

  
  assert.sameValue(typeof desc.get, "function", property + " getter");

  
  assert.throws(
    TypeError,
    function () {
      desc.get();
    },
    "RegExp." + property + " getter throws for property descriptor receiver"
  );

  assert.throws(
    TypeError,
    function () {
      desc.get.call(/ /);
    },
    "RegExp." + property + " getter throws for RegExp instance receiver"
  );

  assert.throws(
    TypeError,
    function () {
      desc.get.call(RegExp.prototype);
    },
    "RegExp." + property + " getter throws for %RegExp.prototype% receiver"
  );

  [undefined, null, {}, true, false, 0, 1, "string"].forEach(function (value) {
    assert.throws(
      TypeError,
      function () {
        desc.get.call(value);
      },
      "RegExp." + property + ' getter throws for primitive "' + value + '" receiver'
    );
  });
});
