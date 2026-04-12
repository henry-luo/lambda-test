

/*---
es6id: 21.2.3
description: Subclassing the RegExp object
info: |
  21.2.3 The RegExp Constructor

  ...

  The RegExp constructor is designed to be subclassable. It may be used as the
  value of an extends clause of a class definition. Subclass constructors that
  intend to inherit the specified RegExp behaviour must include a super call to
  the RegExp constructor to create and initialize subclass instances with the
  necessary internal slots.
---*/

class RE extends RegExp {}

var re = new RE(39);

assert.sameValue(re.test('TC39'), true);
assert.sameValue(re.test('42'), false);
