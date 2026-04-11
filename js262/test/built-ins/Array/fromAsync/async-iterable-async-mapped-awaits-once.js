

/*---
esid: sec-array.fromasync
description: >
  Async-iterable awaits each input once with mapping callback
includes: [asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

asyncTest(async function () {
  async function* generateInput () {
    yield* [ 0, 1, 2 ];
  }
  const input = generateInput();
  let awaitCounter = 0;
  await Array.fromAsync(input, v => {
    return {
      
      
      then (resolve, reject) {
        awaitCounter ++;
        resolve(v);
      },
    };
  });
  assert.sameValue(awaitCounter, 3);
});
