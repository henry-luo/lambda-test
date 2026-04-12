

/*---
esid: sec-getiterator
description: >
    `GetIterator(obj, ~async~)` must attempt to call `obj[@@asyncIterator]` when
    that value is an object with an [[IsHTMLDDA]] internal slot, not act as if
    the value were `undefined`.
features: [async-iteration, IsHTMLDDA]
flags: [async]
---*/

async function f() {
  var IsHTMLDDA = $262.IsHTMLDDA;
  var iter = {
    [Symbol.asyncIterator]: IsHTMLDDA,
    get [Symbol.iterator]() {
      throw new Test262Error("shouldn't touch Symbol.iterator");
    },
  };

  
  for await (var x of iter)
    return "for-await-of body shouldn't be reached";

  return "should have failed earlier";
}

f().then($DONE,
         function (e) {
           assert.sameValue(e.constructor, TypeError,
                            "expected TypeError because " +
                            "`iter[Symbol.asyncIterator]() returned a " +
                            "non-object: " + e);
         })
   .then($DONE, $DONE);
