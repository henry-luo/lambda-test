

/*---
esid: sec-reflect.construct
es6id: 26.1.2
description: Value when invoked via `Reflect.construct`
info: |
  [...]
  2. If newTarget is not present, let newTarget be target.
  [...]
  5. Return ? Construct(target, args, newTarget).
features: [new.target, Reflect, Reflect.construct]
---*/

var customNewTarget = function() {};
var newTarget = null;

function f() {
  newTarget = new.target;
}

Reflect.construct(f, []);

assert.sameValue(newTarget, f, 'NewTarget unspecified');

Reflect.construct(f, [], customNewTarget);

assert.sameValue(newTarget, customNewTarget, 'NewTarget explicitly defined');
