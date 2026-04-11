

/*---
es5id: 12.10.1-13-s
description: >
    Strict Mode - SyntaxError isn't thrown when WithStatement body is
    in strict mode code
flags: [noStrict]
---*/

        with ({}) {
            "use strict";
        }
