

/*---
esid: sec-iterator.zipkeyed
description: >
  The "options" argument can either be undefined or an object.
info: |
  Iterator.zipKeyed ( iterables [ , options ] )
    ...
    2. Set options to ? GetOptionsObject(options).
    ...

  GetOptionsObject ( options )
    1. If options is undefined, then
      a. Return OrdinaryObjectCreate(null).
    2. If options is an Object, then
      a. Return options.
    3. Throw a TypeError exception.
features: [joint-iteration]
---*/

var validOptions = [
  undefined,
  {},
];

var invalidOptions = [
  null,
  true,
  "",
  Symbol(),
  0,
  0n,
];


Iterator.zipKeyed({});


for (var options of validOptions) {
  Iterator.zipKeyed({}, options);
}


for (var options of invalidOptions) {
  assert.throws(TypeError, function() {
    Iterator.zipKeyed({}, options);
  });
}
