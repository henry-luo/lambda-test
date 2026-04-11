

/*---
es5id: 15.12.1.1-g2-4
description: A JSONString must both begin and end with double quotes
---*/

assert.throws(SyntaxError, function() {
  JSON.parse('"ab'+"c'");
});
