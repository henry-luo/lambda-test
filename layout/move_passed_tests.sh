#!/bin/bash

#
# move_passed_tests.sh
#
# Wrapper script — delegates to move_passed_tests.js (Node.js).
#
# Usage:
#   ./test/layout/move_passed_tests.sh box              # Move passed tests from 'box' to 'baseline'
#   ./test/layout/move_passed_tests.sh basic            # Move passed tests from 'basic' to 'baseline'
#   ./test/layout/move_passed_tests.sh wpt-css-lists    # Move passed WPT tests to 'baseline/wpt'
#
# The Node.js script:
# 1. Runs layout tests for the specified suite
# 2. Parses the output to identify passed tests
# 3. Checks each HTML file for external dependencies (CSS, JS, images, fonts)
# 4. Only moves self-contained HTML files (no external dependencies)
#    - WPT suites (wpt-*) are moved to baseline/wpt/ subdirectory
#    - Other suites are moved to baseline/ directly
#

exec node "$(dirname "$0")/move_passed_tests.js" "$@"
