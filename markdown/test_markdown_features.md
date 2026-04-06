# Markdown Features Test — Tables, Extended Syntax & Edge Cases

This file tests GFM (GitHub Flavored Markdown) and CommonMark features that
are often missing or broken in renderers.

---

## 1. Tables

### Simple Table

| Name | Age | City |
|------|-----|------|
| Alice | 30 | New York |
| Bob | 25 | London |
| Charlie | 35 | Tokyo |

### Alignment

| Left | Center | Right |
|:-----|:------:|------:|
| Left-aligned | Centered | Right-aligned |
| Short | A much longer cell value | 42 |
| x | y | z |

### Wide Table (many columns)

| Library | Version | License | Stars | Issues | Updated |
|---------|---------|---------|-------|--------|---------|
| React | 18.3.0 | MIT | 228k | 1.2k | 2024-04 |
| Vue | 3.4.0 | MIT | 207k | 643 | 2024-03 |
| Angular | 17.0 | MIT | 91k | 1.5k | 2024-04 |
| Svelte | 4.2 | MIT | 77k | 312 | 2024-03 |
| Solid | 1.8 | MIT | 31k | 120 | 2024-04 |
| Preact | 10.19 | MIT | 36k | 89 | 2024-02 |
| Lit | 3.1 | BSD-3 | 17k | 210 | 2024-03 |

### Table with Inline Formatting

| Feature | Status | Notes |
|---------|--------|-------|
| **Bold text** | ✅ Done | Core feature |
| _Italic text_ | ✅ Done | Core feature |
| ~~Strikethrough~~ | ✅ Done | GFM extension |
| `inline code` | ✅ Done | Core feature |
| [Links](https://example.com) | ✅ Done | Core feature |
| `<br>` line breaks | ⚠️ Partial | Renderer-specific |
| HTML entities | ✅ Done | &copy; &reg; &trade; |

### Table with Long Content

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `maxRetries` | `number` | `3` | Maximum number of retry attempts before giving up |
| `timeout` | `number` | `5000` | Request timeout in milliseconds (0 = no timeout) |
| `baseURL` | `string` | `""` | Base URL prepended to all relative request paths |
| `headers` | `object` | `{}` | Default headers merged with per-request headers |
| `withCredentials` | `boolean` | `false` | Whether to include cookies/auth in cross-origin requests |
| `responseType` | `string` | `"json"` | Expected response format: json, text, blob, arraybuffer |
| `validateStatus` | `function` | `null` | Custom function to determine if HTTP status is success |

### Minimal Table

|a|b|
|---|---|
|1|2|

### Table with Empty Cells

| A | B | C |
|---|---|---|
| 1 | | 3 |
| | 5 | |
| 7 | 8 | |
| | | 9 |

---

## 2. Strikethrough

~~This text is struck through~~

This has ~~struck-through words~~ inside a sentence.

Combined: ~~**Bold strikethrough**~~ and ~~_italic strikethrough_~~

~~Multi-word strike with `inline code` inside and [a link](https://example.com)~~

---

## 3. Task Lists (GFM)

### Project Checklist

- [x] Initialize repository
- [x] Set up CI/CD pipeline
- [x] Write unit tests
- [ ] Add integration tests
- [ ] Set up staging environment
- [ ] Write documentation
- [ ] Security audit
- [ ] Performance benchmarks
- [ ] Release v1.0

### Nested Task List

- [x] Backend
  - [x] REST API
  - [x] Database schema
  - [ ] GraphQL layer
    - [ ] Queries
    - [ ] Mutations
    - [x] Subscriptions
- [ ] Frontend
  - [x] Component library
  - [ ] Routing
  - [ ] State management
- [ ] DevOps
  - [x] Docker setup
  - [ ] Kubernetes config
  - [ ] Monitoring

---

## 4. Footnotes

Here is a sentence with a footnote.[^1]

Another sentence references a longer note.[^longnote]

Footnotes can also appear inline[^3] anywhere in the text.

[^1]: This is the first footnote.
[^longnote]: This is a longer footnote with multiple paragraphs.

    Indent paragraphs to include them in the footnote.

    You can also use code blocks and other formatting:

    ```python
    print("Hello from a footnote!")
    ```

[^3]: Inline footnotes are supported by some renderers.

---

## 5. Definition Lists

Term 1
:   Definition for Term 1. Can span multiple lines if you
    indent properly.

Term 2
:   First definition for Term 2.
:   Second definition for Term 2 (multiple allowed).

*Emphasized Term*
:   Definition with **inline formatting** and `code`.

Long Term With Multiple Words
:   This definition is quite verbose and explains a concept in detail.
    It continues on the next indented line.

---

## 6. Abbreviations

The HTML specification is maintained by the W3C.

*[HTML]: HyperText Markup Language
*[W3C]: World Wide Web Consortium
*[CSS]: Cascading Style Sheets

---

## 7. Nested Blockquotes

> Simple blockquote.

> Blockquote with **bold** and _italic_ text.

> Multiline blockquote.
> This continues on the next line.
> And this is the third line.

> Nested blockquote level 1.
>
> > Nested blockquote level 2.
> >
> > > Nested blockquote level 3.
> > >
> > > > Nested level 4.

> #### Blockquote with heading
>
> And a paragraph following the heading.
>
> - List item inside blockquote
> - Another item
>   - Nested item
>
> ```javascript
> // Code block inside blockquote
> const x = 42;
> ```

---

## 8. Fenced Code Blocks with Language Tags

```javascript
// JavaScript
const greet = (name) => `Hello, ${name}!`;
console.log(greet("World"));
```

```python
# Python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print(list(fibonacci(10)))
```

```bash
# Shell
#!/usr/bin/env bash
set -euo pipefail

NAME="${1:-World}"
echo "Hello, ${NAME}!"
```

```sql
-- SQL
SELECT u.name, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.name
HAVING COUNT(o.id) > 5
ORDER BY order_count DESC;
```

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0",
    "typescript": "^5.0.0"
  },
  "scripts": {
    "build": "tsc",
    "test": "jest"
  }
}
```

```yaml
# YAML
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm test
```

```diff
- This line was removed
+ This line was added
  This line is unchanged
- Old function name
+ New function name
```

---

## 9. Setext and ATX Headings

# H1 — ATX style
## H2 — ATX style
### H3 — ATX style
#### H4 — ATX style
##### H5 — ATX style
###### H6 — ATX style

H1 Setext style
===============

H2 Setext style
---------------

---

## 10. Lists — All Variants

### Ordered List (numeric)
1. First item
2. Second item
3. Third item

### Ordered List (starts at other number)
3. Third
4. Fourth
5. Fifth

### Ordered with nesting
1. First level
   1. Second level
      1. Third level
         1. Fourth level
2. Back to first

### Unordered (hyphens)
- Item A
- Item B
  - Nested B1
  - Nested B2
    - Deep B2a
- Item C

### Unordered (asterisks)
* Alpha
* Beta
  * Gamma
    * Delta

### Unordered (plus signs)
+ One
+ Two
+ Three

### Mixed nested
1. Ordered item
   - Unordered sub-item
   - Another sub-item
     1. Back to ordered
     2. Still ordered
2. Second ordered item

### Loose list (paragraphs in items)

- First item

  This paragraph belongs to the first item.

- Second item

  This paragraph belongs to the second item.

  And a second paragraph in the second item.

- Third item

---

## 11. Links & Images

### Link variants
- [Inline link](https://example.com)
- [Link with title](https://example.com "Example Domain")
- [Reference link][ref1]
- [Reference link with title][ref2]
- [Collapsed reference][]
- <https://autolink.example.com>
- <email@example.com>

[ref1]: https://reference1.example.com
[ref2]: https://reference2.example.com "Reference 2"
[Collapsed reference]: https://collapsed.example.com

### Image variants
![Alt text](https://via.placeholder.com/100x50)
![Alt with title](https://via.placeholder.com/100x50 "Image Title")
[![Linked image](https://via.placeholder.com/100x30)](https://example.com)

---

## 12. Inline Formatting Edge Cases

Normal **bold** and _italic_ text.

**_Bold and italic_** and ***also valid*** triple asterisk.

__Double underscore bold__ and _single underscore italic_.

Bold mid**word**bold and italic mid_word_test.

\*Escaped asterisks\* don't format.

`Code spans with backticks — "quotes" & <html> entities`

Code with embedded backtick: `` let x = `template ${literal}`; ``

Hard line break (two spaces at end):  
versus soft line break (single newline).

---

## 13. HTML Blocks

<details>
<summary>Click to expand</summary>

This content is hidden until expanded. Markdown **rendering** inside HTML blocks varies by renderer.

```javascript
console.log("Inside details block");
```

</details>

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>

<sub>Subscript text</sub> and <sup>Superscript text</sup>

<mark>Highlighted text</mark> (HTML mark element)

---

## 14. Horizontal Rules

Three hyphens:

---

Three asterisks:

***

Three underscores:

___

---

## 15. Escaping

\\ Backslash  
\` Backtick  
\* Asterisk  
\_ Underscore  
\{ Curly brace  
\} Close curly brace  
\[ Open bracket  
\] Close bracket  
\( Parenthesis  
\) Close parenthesis  
\# Hash  
\+ Plus  
\- Minus  
\. Period  
\! Exclamation  
\| Pipe  

---

## 16. Long Paragraph (Wrapping Test)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

---

## 17. Nested Formatting Combinations

> **Bold in blockquote** with _italic_ and ~~strikethrough~~.
>
> | Col1 | Col2 |
> |------|------|
> | `code` | **bold** |
>
> 1. Ordered list in blockquote
> 2. Second item
>    - With nested unordered
>    - Items here

---

*End of markdown features test.*
