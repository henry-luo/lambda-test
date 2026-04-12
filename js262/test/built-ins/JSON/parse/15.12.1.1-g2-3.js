

/*---
es5id: 15.12.1.1-g2-3
description: A JSONString may not be delimited by Uncode escaped quotes
---*/

assert.throws(SyntaxError, function() {
  JSON.parse("\\u0022abc\\u0022");
});
