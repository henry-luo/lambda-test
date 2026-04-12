

/*---
esid: sec-create-text-module
description: Supports self-referential text imports
flags: [module]
features: [import-attributes, import-text]
---*/

import value from './text-self.js' with { type: 'text' };

assert.sameValue(typeof value, 'string');
