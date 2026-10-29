// Install the same DOM-Range mapping for capture and browser integration checks.
function installReferenceTextFragments() {
    window.__layoutReferenceTextFragments = (textNode, rects, writingMode) => {
        const text = textNode.data;
        const vertical = writingMode !== 'horizontal-tb';
        const blockStart = vertical ? 'x' : 'y';
        const blockSize = vertical ? 'width' : 'height';
        const inlineStart = vertical ? 'y' : 'x';
        const inlineSize = vertical ? 'height' : 'width';
        const lines = [];
        const end = (rect, start, size) => rect[start] + rect[size];

        // Bidi runs share a line's block interval. Separate columns can share
        // that interval too, so join only touching inline intervals.
        for (const rect of rects) {
            const lo = rect[inlineStart];
            const hi = end(rect, inlineStart, inlineSize);
            let line = {block: rect[blockStart], size: rect[blockSize], lo, hi};
            let joined;
            while ((joined = lines.findIndex(other =>
                other.block === line.block && other.size === line.size &&
                other.lo <= line.hi && line.lo <= other.hi)) !== -1) {
                const other = lines.splice(joined, 1)[0];
                line.lo = Math.min(line.lo, other.lo);
                line.hi = Math.max(line.hi, other.hi);
            }
            lines.push(line);
        }

        const range = document.createRange();
        const characters = [];
        let offset = 0;
        for (const character of text) {
            const next = offset + character.length;
            range.setStart(textNode, offset);
            range.setEnd(textNode, next);
            // A collapsed wrapping space can have carets on both lines;
            // CSSOM's first rectangle keeps it with the preceding fragment.
            const rect = range.getClientRects()[0];
            let selected = null;
            let distance = Infinity;
            if (rect) {
                for (const line of lines) {
                    const inlineDistance = Math.max(0, line.lo - end(rect, inlineStart, inlineSize),
                        rect[inlineStart] - line.hi);
                    const candidate = Math.abs(rect[blockStart] - line.block) +
                        Math.abs(rect[blockSize] - line.size) + inlineDistance;
                    if (candidate < distance) {
                        distance = candidate;
                        selected = line;
                    }
                }
            }
            characters.push({start: offset, end: next, line: selected});
            offset = next;
        }

        // Unpainted source characters still belong to exactly one segment.
        let preceding = null;
        for (const character of characters) {
            if (character.line) preceding = character.line;
            else character.line = preceding;
        }
        let following = null;
        for (let i = characters.length - 1; i >= 0; i--) {
            if (characters[i].line) following = characters[i].line;
            else characters[i].line = following;
        }
        const runs = [];
        for (const character of characters) {
            const previous = runs[runs.length - 1];
            const line = character.line || previous?.line;
            if (previous && previous.line === line) previous.end = character.end;
            else runs.push({start: character.start, end: character.end, line});
        }

        return runs.map(run => {
            range.setStart(textNode, run.start);
            range.setEnd(textNode, run.end);
            const measured = Array.from(range.getClientRects());
            const visible = measured.filter(rect => rect[inlineSize] > 0);
            const boxes = visible.length ? visible : measured;
            if (!boxes.length) throw new Error('Text fragment has no DOM Range geometry');
            const x = Math.min(...boxes.map(rect => rect.left));
            const y = Math.min(...boxes.map(rect => rect.top));
            const right = Math.max(...boxes.map(rect => rect.right));
            const bottom = Math.max(...boxes.map(rect => rect.bottom));
            const round = value => Math.round(value * 100) / 100;
            return {text: text.slice(run.start, run.end), rect: {
                x: round(x), y: round(y), width: round(right - x), height: round(bottom - y),
                right: round(right), bottom: round(bottom)
            }};
        });
    };
}

module.exports = {installReferenceTextFragments};
