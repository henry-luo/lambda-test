

/*---
esid: sec-array.fromasync
description: Non-iterable input with thenable result with async mapped awaits each callback result once.
includes: [asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

asyncTest(async function () {
  let awaitCounter = 0;
  const input = {
    length: 3,
    0: 0,
    1: Promise.resolve(1),
    2: Promise.resolve(2),
    3: Promise.resolve(3), 
  };
  await Array.fromAsync(input, async v => {
    return {
      
      
      then (resolve, reject) {
        awaitCounter ++;
        resolve(v);
      },
    };
  });
  assert.sameValue(awaitCounter, 3);
});
