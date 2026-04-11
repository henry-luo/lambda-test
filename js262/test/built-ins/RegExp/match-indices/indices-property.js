

/*---
description: The "indices" property is created with DefinePropertyOrThrow
includes: [propertyHelper.js]
esid: sec-regexpbuiltinexec
features: [regexp-match-indices]
info: |
  Runtime Semantics: RegExpBuiltinExec ( R, S )
    8. If _flags_ contains `"d"`, let _hasIndices_ be *true*, else let _hasIndices_ be *false*.
    ...
    36. If _hasIndices_ is *true*, then
      a. Let _indicesArray_ be MakeIndicesArray(_S_, _indices_, _groupNames_, _hasGroups_).
      b. Perform ! CreateDataProperty(_A_, `"indices"`, _indicesArray_).
---*/


let counter = 0;
Object.defineProperty(Array.prototype, "indices", {
  set() { counter++; }
});

let match = /a/d.exec("a");
assert.sameValue(counter, 0);


verifyProperty(match, 'indices', {
  writable: true,
  enumerable: true,
  configurable: true
});
