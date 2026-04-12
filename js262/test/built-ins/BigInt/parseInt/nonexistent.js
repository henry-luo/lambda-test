

/*---
description: BigInt does not have a static parseInt function
features: [BigInt]
---*/

assert(!BigInt.hasOwnProperty("parseInt"));
