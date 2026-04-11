

/*---
esid: sec-ecmascript-function-objects-call-thisargument-argumentslist
description: >
  Error when invoking a default class constructor, honoring the Realm
  that the class was defined in.
features: [cross-realm, class]
---*/

const realm = $262.createRealm();
const C = realm.global.eval('(class {})');
const TE = realm.global.TypeError;

assert.throws(TE, function() {
  C();
});
