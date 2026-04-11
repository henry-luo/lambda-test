

/*---
description: The groups object of indices is created with CreateDataProperty
includes: [propertyHelper.js, compareArray.js]
esid: sec-makeindicesarray
features: [regexp-named-groups, regexp-match-indices]
info: |
  MakeIndicesArray ( S, indices, groupNames, hasIndices )
    10. If _hasIndices_ is *true*, then
      a. Let _groups_ be ! ObjectCreate(*null*).
    11. Else,
      a. Let _groups_ be *undefined*.
    12. Perform ! CreateDataProperty(_A_, `"groups"`, _groups_).
---*/


let counter = 0;
Object.defineProperty(Array.prototype, "groups", {
  set() { counter++; }
});

let indices = /(?<x>.)/d.exec("a").indices;
assert.sameValue(counter, 0);


verifyProperty(indices, 'groups', {
    writable: true,
    enumerable: true,
    configurable: true
});


let {groups} = /(?<__proto__>.)/d.exec("a").indices;
assert.compareArray([0, 1], groups.__proto__);
assert.sameValue(null, Object.getPrototypeOf(groups));
