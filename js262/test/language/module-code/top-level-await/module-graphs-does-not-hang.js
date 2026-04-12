

/*---
description: Module graphs with Top-Level Await shouldn't hang.
flags: [module, async]
features: [top-level-await]
---*/

import "./module-graphs-parent-tla_FIXTURE.js";
await import("./module-graphs-grandparent-tla_FIXTURE.js");

$DONE();
