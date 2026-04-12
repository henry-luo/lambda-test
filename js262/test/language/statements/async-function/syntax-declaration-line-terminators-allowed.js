

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Declarations allow line breaks after function and after arguments list
---*/

async function
foo()
{
  
}

assert(foo instanceof Function);
