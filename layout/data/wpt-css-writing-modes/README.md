# WPT CSS writing modes and bidi fixtures

Imported from the pinned checkout in `ref/wpt`:

- `css/css-writing-modes` — vertical and horizontal writing modes, orthogonal layout, and bidi interactions.
- `css/CSS2/bidi-text` — CSS 2 bidirectional text and direction behavior.
- `css/css-text/bidi` — CSS Text bidirectional text cases.

Run `make capture-layout suite=wpt-css-writing-modes` to create browser references, then `make layout suite=wpt-css-writing-modes` to compare Radiant. The suite is manual and is not part of the required Radiant baseline gate until its accepted scores are recorded.
