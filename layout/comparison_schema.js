const COMPARISON_SCHEMA_VERSION = 2;

function compactFixturePath(referencePath) {
    return referencePath.replace(/\.json$/i, '.min.json');
}

function compactFixtureCandidates(referencePath) {
    return [compactFixturePath(referencePath)];
}

function compactRect(rect) {
    if (!rect || typeof rect !== 'object') return null;
    const compact = {};
    for (const key of ['x', 'y', 'width', 'height']) {
        if (rect[key] !== undefined) compact[key] = rect[key];
    }
    if (Array.isArray(rect.rects)) {
        compact.rects = rect.rects.map(compactRect).filter(Boolean);
    }
    return compact;
}

function browserChildrenInOrder(node) {
    if (!node) return [];
    const elementChildren = Array.isArray(node.children)
        ? node.children.map(child => ({
            node: child,
            text: child.nodeType === 'text' ? (child.text || '') : (child.textContent || '')
        }))
        : [];
    if (!Array.isArray(node.textNodes) || node.textNodes.length === 0) {
        return elementChildren.map(child => child.node);
    }

    const candidates = elementChildren.concat(node.textNodes.map(textNode => ({
        node: { ...textNode, nodeType: 'text' },
        text: textNode.text || ''
    })));
    const remaining = candidates.slice();
    const ordered = [];
    const fullText = node.textContent || '';
    let scanPosition = 0;
    while (remaining.length > 0) {
        let bestIndex = -1;
        let bestPosition = Infinity;
        for (let index = 0; index < remaining.length; index++) {
            const candidateText = remaining[index].text;
            if (!candidateText) continue;
            const position = fullText.indexOf(candidateText, scanPosition);
            if (position >= 0 && position < bestPosition) {
                bestIndex = index;
                bestPosition = position;
            }
        }
        if (bestIndex < 0) {
            ordered.push(...remaining.map(candidate => candidate.node));
            break;
        }
        const [matched] = remaining.splice(bestIndex, 1);
        ordered.push(matched.node);
        scanPosition = bestPosition + matched.text.length;
    }
    return ordered;
}

function compactBrowserNode(node) {
    if (!node || typeof node !== 'object') return node;
    if (node.nodeType === 'text') {
        const compact = { nodeType: 'text', text: node.text || '' };
        if (node.layout) compact.layout = compactRect(node.layout);
        if (Array.isArray(node.rects)) {
            compact.rects = node.rects.map(compactRect).filter(Boolean);
        }
        return compact;
    }

    const compact = {
        nodeType: node.nodeType || 'element',
        tag: node.tag,
        layout: compactRect(node.layout)
    };
    if (node.tag === 'span' && node.selector) compact.selector = node.selector;
    if (node.computed) {
        const computed = {};
        if (node.computed.display !== undefined) computed.display = node.computed.display;
        if (node.computed.textAlign !== undefined) computed.textAlign = node.computed.textAlign;
        if (node.tag === 'span') {
            for (const key of ['fontFamily', 'fontSize', 'fontWeight', 'color']) {
                if (node.computed[key] !== undefined) computed[key] = node.computed[key];
            }
        }
        if (Object.keys(computed).length > 0) compact.computed = computed;
    }
    compact.children = browserChildrenInOrder(node).map(compactBrowserNode);
    return compact;
}

function compactBrowserReference(reference) {
    return {
        schema_version: COMPARISON_SCHEMA_VERSION,
        layout_tree: compactBrowserNode(reference.layout_tree)
    };
}

module.exports = {
    COMPARISON_SCHEMA_VERSION,
    browserChildrenInOrder,
    compactBrowserReference,
    compactFixtureCandidates,
    compactFixturePath
};
