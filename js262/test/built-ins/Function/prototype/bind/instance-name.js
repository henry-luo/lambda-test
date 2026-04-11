

/*---
es6id: 19.2.3.2
description: Assignment of function `name` attribute
info: |
    12. Let targetName be Get(Target, "name").
    13. ReturnIfAbrupt(targetName).
    14. If Type(targetName) is not String, let targetName be the empty string.
    15. Perform SetFunctionName(F, targetName, "bound").
includes: [propertyHelper.js]
---*/

var target = Object.defineProperty(function() {}, 'name', {
  value: 'target'
});

assert.sameValue(target.bind().name, 'bound target');
verifyNotEnumerable(target.bind(), 'name');
verifyNotWritable(target.bind(), 'name');
verifyConfigurable(target.bind(), 'name');
