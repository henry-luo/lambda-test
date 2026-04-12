

/*---
description: RequireObjectCoercible for BigInt values
esid: pending
features: [BigInt]
---*/

try {
  let {} = 0n;
} catch (e) {
  throw new Test262Error('Expected RequireObjectCoercible to succeed for BigInt values');
}

assert.sameValue(Object.setPrototypeOf(0n, null), 0n);
