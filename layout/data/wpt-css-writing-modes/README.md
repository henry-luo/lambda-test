# WPT CSS writing modes and bidi fixtures

Imported from the pinned checkout in `ref/wpt`:

- `css/css-writing-modes` — vertical and horizontal writing modes, orthogonal layout, and bidi interactions.
- `css/CSS2/bidi-text` — CSS 2 bidirectional text and direction behavior.
- `css/css-text/bidi` — CSS Text bidirectional text cases.

Run `make capture-layout suite=wpt-css-writing-modes` to create browser references, then `make layout suite=wpt-css-writing-modes` to compare Radiant. The recorded baseline includes all 1,980 fixtures (1,600 full matches and 380 partials at admission). Both `make test-layout-baseline` and `make test-radiant-baseline` include it through `build_lambda_config.json` → `test.layout_baseline_suites`. The gate checks every recorded metric floor; raw conformance mismatches remain visible in `make layout`.
