#!/bin/bash

#
# move_passed_tests.sh
#
# Script to move passed layout tests from a source suite to the baseline suite.
#
# Usage:
#   ./test/layout/move_passed_tests.sh box              # Move passed tests from 'box' to 'baseline'
#   ./test/layout/move_passed_tests.sh basic            # Move passed tests from 'basic' to 'baseline'
#   ./test/layout/move_passed_tests.sh wpt-css-lists    # Move passed WPT tests to 'baseline/wpt'
#
# This script:
# 1. Runs layout tests for the specified suite
# 2. Parses the output to identify passed tests
# 3. Moves .htm/.html test files to baseline suite
#    - WPT suites (wpt-*) are moved to baseline/wpt/ subdirectory
#    - Other suites are moved to baseline/ directly
# Note: Reference JSON files are stored in a flat combined directory and don't need to be moved.
#

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if suite argument is provided
if [ -z "$1" ]; then
    echo -e "${RED}Error: No suite specified${NC}"
    echo "Usage: $0 <suite_name>"
    echo "Example: $0 box"
    exit 1
fi

SOURCE_SUITE="$1"
TARGET_SUITE="baseline"

# Validate suite directories exist
DATA_SOURCE_DIR="test/layout/data/$SOURCE_SUITE"

# WPT suites (wpt-*) go into baseline/wpt/ subdirectory
if [[ "$SOURCE_SUITE" == wpt-* ]]; then
    DATA_TARGET_DIR="test/layout/data/$TARGET_SUITE/wpt"
else
    DATA_TARGET_DIR="test/layout/data/$TARGET_SUITE"
fi

if [ ! -d "$DATA_SOURCE_DIR" ]; then
    echo -e "${RED}Error: Source data directory not found: $DATA_SOURCE_DIR${NC}"
    exit 1
fi

# Create target directory if it doesn't exist
mkdir -p "$DATA_TARGET_DIR"

echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}  Moving Passed Tests: ${SOURCE_SUITE} → ${TARGET_SUITE}${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo ""

# Run the layout tests and capture output
echo -e "${YELLOW}Running layout tests for suite: $SOURCE_SUITE${NC}"
echo ""

TEMP_OUTPUT="./temp/move_passed_tests_output.txt"
mkdir -p ./temp
make layout suite="$SOURCE_SUITE" 2>&1 | tee "$TEMP_OUTPUT"

echo ""
echo -e "${YELLOW}Analyzing test results...${NC}"
echo ""

# Parse the output to find passed tests
# Look for lines like:
#   ✅ PASS Overall: Elements 100.0%, Text 100.0%
# preceded by test case name like:
#   📊 Test Case: blocks-001
#
# We need to extract test names where both Elements and Text pass rates are 100%

PASSED_TESTS=()

# Extract test results using awk
# The output format is:
#   📊 Test Case: <test_name>
#   ...
#   ✅ PASS Overall: Elements X%, Text Y%
# or
#   ❌ FAIL Overall: Elements X%, Text Y%

while IFS= read -r line; do
    if [[ "$line" =~ 📊[[:space:]]Test[[:space:]]Case:[[:space:]](.+) ]]; then
        current_test="${BASH_REMATCH[1]}"
    elif [[ "$line" =~ ✅[[:space:]]PASS[[:space:]]Overall ]]; then
        if [ -n "$current_test" ]; then
            PASSED_TESTS+=("$current_test")
            current_test=""
        fi
    elif [[ "$line" =~ ❌[[:space:]]FAIL[[:space:]]Overall ]]; then
        # Clear current test since it failed
        current_test=""
    fi
done < "$TEMP_OUTPUT"

rm "$TEMP_OUTPUT"

# Report findings
echo -e "${GREEN}Found ${#PASSED_TESTS[@]} passed tests${NC}"
echo ""

if [ ${#PASSED_TESTS[@]} -eq 0 ]; then
    echo -e "${YELLOW}No passed tests to move. Exiting.${NC}"
    exit 0
fi

# Show the list of tests to be moved
echo -e "${BLUE}Tests to be moved:${NC}"
for test in "${PASSED_TESTS[@]}"; do
    echo "  • $test"
done
echo ""

# Ask for confirmation
echo -e "${YELLOW}Move these tests from '$SOURCE_SUITE' to '$TARGET_SUITE'? [y/N]${NC}"
read -r confirmation

if [[ ! "$confirmation" =~ ^[Yy]$ ]]; then
    echo -e "${RED}Aborted.${NC}"
    exit 0
fi

echo ""
echo -e "${YELLOW}Moving files...${NC}"
echo ""

MOVED_COUNT=0
SKIPPED_COUNT=0

for test in "${PASSED_TESTS[@]}"; do
    # Try both .htm and .html extensions
    HTML_FILE=""
    if [ -f "$DATA_SOURCE_DIR/$test.htm" ]; then
        HTML_FILE="$test.htm"
    elif [ -f "$DATA_SOURCE_DIR/$test.html" ]; then
        HTML_FILE="$test.html"
    fi

    # Check if HTML file exists
    if [ -z "$HTML_FILE" ]; then
        echo -e "${RED}  ⚠️  HTML file not found for: $test${NC}"
        ((SKIPPED_COUNT++))
        continue
    fi

    # Move HTML file
    if [ -f "$DATA_SOURCE_DIR/$HTML_FILE" ]; then
        mv "$DATA_SOURCE_DIR/$HTML_FILE" "$DATA_TARGET_DIR/$HTML_FILE"
        echo -e "${GREEN}  ✓ Moved: $HTML_FILE${NC}"
    fi

    ((MOVED_COUNT++))
done

echo ""
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✓ Successfully moved $MOVED_COUNT tests${NC}"
if [ $SKIPPED_COUNT -gt 0 ]; then
    echo -e "${YELLOW}⚠ Skipped $SKIPPED_COUNT tests (files not found)${NC}"
fi
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo ""

echo -e "${YELLOW}Tip: Run 'make layout suite=baseline' to verify moved tests still pass${NC}"
echo ""
