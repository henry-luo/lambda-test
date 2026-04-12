

/*---
description: module graphs with TLA shouldn't hang
flags: [module, async]
features: [top-level-await]
---*/

import "./parent-tla_FIXTURE.js";
await import("./grandparent-tla_FIXTURE.js");

$DONE();
