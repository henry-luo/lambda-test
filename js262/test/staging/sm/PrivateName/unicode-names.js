

/*---
description: |
  pending
esid: pending
---*/

var source = `class A {
  // Ensure this name parses.
  #℘;
}`;

Function(source);
