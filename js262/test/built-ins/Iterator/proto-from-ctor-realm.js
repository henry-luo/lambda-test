

/*---
esid: sec-iterator
description: Default [[Prototype]] value derived from realm of the NewTarget.
features: [cross-realm, iterator-helpers, Reflect, Symbol]
---*/

let other = $262.createRealm().global;
let newTarget = new other.Function();
let ai;

newTarget.prototype = undefined;
ai = Reflect.construct(Iterator, [1], newTarget);
assert.sameValue(Object.getPrototypeOf(ai), other.Iterator.prototype);

newTarget.prototype = null;
ai = Reflect.construct(Iterator, [1], newTarget);
assert.sameValue(Object.getPrototypeOf(ai), other.Iterator.prototype);

newTarget.prototype = true;
ai = Reflect.construct(Iterator, [1], newTarget);
assert.sameValue(Object.getPrototypeOf(ai), other.Iterator.prototype);

newTarget.prototype = '';
ai = Reflect.construct(Iterator, [1], newTarget);
assert.sameValue(Object.getPrototypeOf(ai), other.Iterator.prototype);

newTarget.prototype = Symbol();
ai = Reflect.construct(Iterator, [1], newTarget);
assert.sameValue(Object.getPrototypeOf(ai), other.Iterator.prototype);

newTarget.prototype = 0;
ai = Reflect.construct(Iterator, [1], newTarget);
assert.sameValue(Object.getPrototypeOf(ai), other.Iterator.prototype);
