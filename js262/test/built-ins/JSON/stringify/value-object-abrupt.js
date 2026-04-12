

/*---
esid: sec-serializejsonproperty
description: >
  Abrupt completion from Get.
info: |
  JSON.stringify ( value [ , replacer [ , space ] ] )

  [...]
  12. Return ? SerializeJSONProperty(the empty String, wrapper).

  SerializeJSONProperty ( key, holder )

  1. Let value be ? Get(holder, key).
---*/

assert.throws(Test262Error, function() {
  JSON.stringify({
    get key() {
      throw new Test262Error();
    },
  });
});
