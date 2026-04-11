

/*---
flags:
  - module
description: |
  pending
esid: pending
---*/

var x = "ok";

export {x as "*"};

import {"*" as y} from "./module-export-name-star.js"

assert.sameValue(y, "ok");

