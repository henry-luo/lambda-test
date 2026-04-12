

/*---
esid: sec-set.prototype.issupersetof
description: >
  Set.prototype.isSupersetOf calls return() on the set-like iterator, but
  only if the iterator is not exhausted, i.e., the set is not a superset
  of the set-like.
features: [set-methods, Array.prototype.includes]
---*/

const iter = {
  a: [4, 5, 6],
  nextCalls: 0,
  returnCalls: 0,
  next() {
    const done = this.nextCalls >= this.a.length;
    const value = this.a[this.nextCalls];
    this.nextCalls++;
    return {done, value};
  },
  return() {
    this.returnCalls++;
    return this;
  },
};

const setlike = {
  size: iter.a.length,
  has(v) { return iter.a.includes(v); },
  keys() { return iter; },
};


assert.sameValue(new Set([4, 5, 6, 7]).isSupersetOf(setlike), true);
assert.sameValue(iter.nextCalls, 4);
assert.sameValue(iter.returnCalls, 0);
iter.nextCalls = iter.returnCalls = 0;

assert.sameValue(new Set([0, 1, 2, 3]).isSupersetOf(setlike), false);
assert.sameValue(iter.nextCalls, 1);
assert.sameValue(iter.returnCalls, 1);
iter.nextCalls = iter.returnCalls = 0;
