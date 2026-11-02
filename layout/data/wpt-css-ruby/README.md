# WPT CSS Ruby layout fixtures

Imported from the pinned checkout at `ref/wpt/css/css-ruby`. The mirror keeps
WPT's `css-ruby/` directory and its reference, parsing, and support resources so
relative and `/css/css-ruby/` URLs resolve during browser capture.

Capture Chromium references and compare Radiant with:

```sh
make capture-layout suite=wpt-css-ruby
make layout suite=wpt-css-ruby
```

The category is standalone and is not yet included in the aggregate layout
baseline. Browser references are stored under `test/layout/reference/wpt/`.
