

/*---
description: Statement cannot contain an `export` declaration
esid: sec-modules
negative:
  phase: parse
  type: SyntaxError
flags: [module]
---*/

$DONOTEVALUATE();

try { } catch (err) { } finally {
  export default null;
}
