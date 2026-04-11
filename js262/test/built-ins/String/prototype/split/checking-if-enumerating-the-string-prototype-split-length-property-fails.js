

/*---
info: The String.prototype.split.length property has the attribute DontEnum
es5id: 15.5.4.14_A8
description: >
    Checking if enumerating the String.prototype.split.length property
    fails
---*/

assert(
  String.prototype.split.hasOwnProperty('length'),
  'String.prototype.split.hasOwnProperty(\'length\') must return true'
);

assert(
  !String.prototype.split.propertyIsEnumerable('length'),
  'The value of `!String.prototype.split.propertyIsEnumerable(\'length\')` is true'
);


var count = 0;

for (var p in String.prototype.split) {
  if (p === "length") {
    count++;
  }
}

assert.sameValue(count, 0, 'The value of `count` is 0');
