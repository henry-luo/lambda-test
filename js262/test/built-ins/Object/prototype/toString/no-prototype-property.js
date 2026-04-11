

/*---
es5id: sec-object.prototype.tostring
description: Object.prototype.toString has no prototype property
---*/

assert.sameValue(
  Object.prototype.toString.hasOwnProperty("prototype"),
  false,
  "Object.prototype.toString.hasOwnProperty(\"prototype\") returns false"
);
