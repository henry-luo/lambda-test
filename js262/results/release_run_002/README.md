# JS262 Release Run 002 Report

## Run Identity

- Date captured: 2026-05-25
- Fresh artifact timestamp: 2026-05-25 21:58:12 local time
- Commit: `df106e3921ab1757d9d26424f4e7f6b5b76b0a1e`
- Runtime under test: existing release `lambda.exe`
- Binary sizes observed after the run:
  - `lambda.exe`: 13M, modified 2026-05-25 21:26
  - `test/test_js_test262_gtest.exe`: 3.1M, modified 2026-05-25 08:54

## Capture Note

The fresh files emitted by the just-finished run were:

- `temp/_t262_timing_o0.tsv`
- `temp/_t262_memory_o0.tsv`

No `js262*failures*.tsv` file in `temp/` had the same finish timestamp, so this capture does not include a failure manifest. Older failure manifests were intentionally not copied into this run folder.

## Counts

- Timing rows: 34,161 tests
- Memory rows: 34,161 tests
- Current baseline snapshot: 34,161 non-comment entries
- Current non-fully-passing snapshot: 6 non-comment entries
- Slow tests at `>= 3s`: 0

## Per-Test Timing

- Raw timing file: `t262_timing_release.tsv`
- Sorted timing file: `top_slow_tests.tsv`
- Slow subset: `slow_tests_ge_3s.tsv`, empty for this run
- Sum of per-test elapsed times: 529.417s
- Average per-test elapsed time: 15.498ms
- Max per-test elapsed time: 2.971187s
- Max test: `language_identifiers_start_unicode_10_0_0_js`

## Memory Summary

- Tests with memory data: 34,161 / 34,161
- Peak RSS: 975.7 MB
- Peak RSS test: `language_identifiers_start_unicode_5_2_0_class_escaped_js`
- Minimum RSS: 43.1 MB
- Average RSS delta/test: +2,604.6 KB
- Largest single-test growth: 186.2 MB
- Largest growth test: `language_identifiers_start_unicode_8_0_0_escaped_js`
- Tests over 1 MB growth: 15,518
- Tests over 10 MB growth: 905

## Top Slow Tests

| Seconds | Test |
| ---: | --- |
| 2.971187 | `language_identifiers_start_unicode_10_0_0_js` |
| 2.703135 | `language_identifiers_start_unicode_10_0_0_escaped_js` |
| 1.919629 | `language_identifiers_start_unicode_5_2_0_escaped_js` |
| 1.878629 | `built_ins_RegExp_character_class_escape_non_whitespace_js` |
| 1.768227 | `language_identifiers_start_unicode_9_0_0_js` |
| 1.758442 | `language_identifiers_start_unicode_9_0_0_escaped_js` |
| 1.747244 | `language_identifiers_start_unicode_8_0_0_escaped_js` |
| 1.513946 | `language_identifiers_start_unicode_5_2_0_js` |
| 1.457196 | `language_identifiers_start_unicode_8_0_0_js` |
| 1.438551 | `language_identifiers_start_unicode_13_0_0_escaped_js` |

## Captured Files

| File | Purpose |
| --- | --- |
| `README.md` | this report |
| `t262_timing_release.tsv` | raw release timing data |
| `t262_memory_release.tsv` | raw release RSS data |
| `top_slow_tests.tsv` | sorted timing data in seconds |
| `slow_tests_ge_3s.tsv` | slow-test subset at or above 3s |
| `top_memory_delta_mb.tsv` | sorted RSS delta in MB |
| `top_peak_rss_mb.tsv` | sorted post-test peak RSS in MB |
| `test262_baseline_at_run.txt` | baseline snapshot at capture time |
| `t262_partial_at_run.txt` | non-fully-passing snapshot at capture time |
| `commit.txt` | commit hash at capture time |
| `git_status_short.txt` | working-tree status at capture time |
| `binary_sizes.txt` | binary sizes and mtimes observed after the run |
