

/*---
description: Properties of the groups object are created with CreateDataProperty
includes: [propertyHelper.js]
esid: sec-regexpbuiltinexec
features: [regexp-named-groups]
info: |
  Runtime Semantics: RegExpBuiltinExec ( R, S )
    24. If _R_ contains any |GroupName|, then
      a. Let _groups_ be ObjectCreate(*null*).
    25. Else,
      a. Let _groups_ be *undefined*.
    26. Perform ! CreateDataProperty(_A_, `"groups"`, _groups_).
---*/


let counter = 0;
Object.defineProperty(Array.prototype, "groups", {
  set() { counter++; }
});

let match = /(?<x>.)/.exec("a");
assert.sameValue(counter, 0);


verifyProperty(match, "groups", {
  writable: true,
  enumerable: true,
  configurable: true,
});


let {groups} = /(?<__proto__>.)/.exec("a");
assert.sameValue("a", groups.__proto__);
assert.sameValue(null, Object.getPrototypeOf(groups));
