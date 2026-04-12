

/*---
description: new SubURIError() instanceof URIError (Subclass instanceof Heritage)
flags: [generated]
---*/


const Subclass = class extends URIError {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof URIError);
