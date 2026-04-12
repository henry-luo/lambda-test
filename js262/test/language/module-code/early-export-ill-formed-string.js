

/*---
description: >
    Ill formed unicode cannot be an exported name
esid: sec-module-semantics
info: |
    ModuleExportName : StringLiteral

    It is a Syntax Error if IsStringWellFormedUnicode of the StringValue of StringLiteral is *false*.
flags: [module]
negative:
  phase: parse
  type: SyntaxError
features: [arbitrary-module-namespace-names]
---*/

$DONOTEVALUATE();


export {Moon as "\uD83C",} from "./early-export-ill-formed-string.js";
export {"\uD83C"} from "./early-export-ill-formed-string.js";
import {'\uD83C' as Usagi} from "./early-export-ill-formed-string.js";

function Moon() {}
