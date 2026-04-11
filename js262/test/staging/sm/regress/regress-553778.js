

/*---
description: |
  pending
esid: pending
---*/


function f() {
    function g() {
        function h() {
            g; x;
        }
        var [x] = [];
    }
}

