

/*---
description: new SubURIError() instanceof URIError (Subclass instanceof Heritage)
flags: [generated]
---*/


class Subclass extends URIError {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof URIError);
