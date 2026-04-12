

/*---
esid: sec-shadowrealm.prototype.evaluate
description: >
  ShadowRealm.prototype.evaluate throws a TypeError if evaluate resolves to non-primitive values
features: [ShadowRealm]
---*/

assert.sameValue(
  typeof ShadowRealm.prototype.evaluate,
  'function',
  'This test must fail if ShadowRealm.prototype.evaluate is not a function'
);

const r = new ShadowRealm();

assert.throws(TypeError, () => r.evaluate('globalThis'), 'globalThis');
assert.throws(TypeError, () => r.evaluate('[]'), 'array literal');
assert.throws(TypeError, () => r.evaluate(`
    ({
        [Symbol.toPrimitive]() { return 'string'; },
        toString() { return 'str'; },
        valueOf() { return 1; }
    });
`), 'object literal with immediate primitive coercion methods');
assert.throws(TypeError, () => r.evaluate('Object.create(null)'), 'ordinary object with null __proto__');
