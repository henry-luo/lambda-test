

/*---
description: Test if disposed methods are called correctly in generator body.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [explicit-resource-management]
---*/

asyncTest(async function() {
    let generatorBodyValues = [];

    async function* gen() {
      await using x = {
        value: 1,
        [Symbol.asyncDispose]() {
          generatorBodyValues.push(42);
        }
      };
      yield x;
    }

    async function TestUsingInGeneratorBody() {
      let iter = gen();
      await iter.next();
      assert.compareArray(generatorBodyValues, []);
      iter.next().then((result) => assert.sameValue(result.value, 1));
      generatorBodyValues.push(43);
    }
    await TestUsingInGeneratorBody();
    assert.compareArray(generatorBodyValues, [42, 43]);
  });
