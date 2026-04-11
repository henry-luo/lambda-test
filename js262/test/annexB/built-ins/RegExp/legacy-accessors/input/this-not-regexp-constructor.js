

/*---
esid: pending
description: RegExp.input throws a TypeError for non-%RegExp% receiver
info: |
  get RegExp.input

  1. Return ? GetLegacyRegExpStaticProperty(%RegExp%, this value, [[RegExpInput]]).

  set RegExp.input = val

  1. Return ? SetLegacyRegExpStaticProperty(%RegExp%, this value, [[RegExpInput]], val).

  GetLegacyRegExpStaticProperty( C, thisValue, internalSlotName ).

  1. Assert C is an object that has an internal slot named internalSlotName.
  2. If SameValue(C, thisValue) is false, throw a TypeError exception.
  3. ...

  SetLegacyRegExpStaticProperty( C, thisValue, internalSlotName, val ).

  1. Assert C is an object that has an internal slot named internalSlotName.
  2. If SameValue(C, thisValue) is false, throw a TypeError exception.
  3. ...
features: [legacy-regexp]
---*/

["input", "$_"].forEach(function (property) {
  const desc = Object.getOwnPropertyDescriptor(RegExp, property);

  ["get", "set"].forEach(function (accessor) {
    const messagePrefix = "RegExp." + property + " " + accessor + "ter";

    
    assert.sameValue(typeof desc[accessor], "function", messagePrefix);

    
    assert.throws(
      TypeError,
      function () {
        desc[accessor]();
      },
      messagePrefix + " throws for property descriptor receiver"
    );

    assert.throws(
      TypeError,
      function () {
        desc[accessor].call(/ /);
      },
      messagePrefix + " throws for RegExp instance receiver"
    );

    assert.throws(
      TypeError,
      function () {
        desc[accessor].call(RegExp.prototype);
      },
      messagePrefix + " throws for %RegExp.prototype% receiver"
    );

    [undefined, null, {}, true, false, 0, 1, "string"].forEach(function (value) {
      assert.throws(
        TypeError,
        function () {
          desc[accessor].call(value);
        },
        messagePrefix + ' throws for primitive "' + value + '" receiver'
      );
    });
  });
});
