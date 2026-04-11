

/*---
description: Named groups can be forward references.
esid: sec-atomescape
features: [regexp-named-groups]
---*/

assert(/\k<a>(?<a>x)/.test("x"));
