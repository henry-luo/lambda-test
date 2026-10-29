const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const {extractLayoutFromFile, closeSharedBrowser} = require('./extract_browser_references');

// Run from the Lambda checkout: all generated fixtures and captures stay in temp/.
(async () => {
    const output = path.resolve('temp/reference-text-fragments');
    await fs.mkdir(output, {recursive:true});
    const cases = [
        {id:'horizontal', css:'width:80px', text:'AA BB CC DD EE FF'},
        {id:'vertical-lr', css:'writing-mode:vertical-lr;direction:rtl;inline-size:80px;block-size:160px', text:'1 2 34'},
        {id:'vertical-rl', css:'writing-mode:vertical-rl;inline-size:80px;block-size:160px', text:'AA BB CC DD EE FF'},
        {id:'bidi-single', css:'direction:rtl;width:400px', text:'1 2 34'},
        {id:'bidi', css:'direction:rtl;width:80px', text:'abc אבג def xyz'},
        {id:'columns', css:'columns:2;column-gap:40px;width:200px;height:60px', text:'AA BB CC DD EE FF GG HH II JJ KK LL'},
        {id:'unicode', css:'writing-mode:vertical-rl;inline-size:80px;block-size:160px', text:'AA 😀 BB CC DD'},
        {id:'hidden', css:'display:none', text:'invisible source text'}
    ];
    const file = path.join(output, 'text-fragments.html');
    await fs.writeFile(file, '<!doctype html><meta charset="utf-8"><style>div{font:20px/1 Ahem}</style>' +
        cases.map(item => `<div id="${item.id}" style="${item.css}">${item.text}</div>`).join(''));
    try {
        const result = await extractLayoutFromFile(file, true, null, null, {outputDir:output});
        const find = (node, id) => node.id === id ? node :
            (node.children || []).map(child => find(child, id)).find(Boolean);
        for (const item of cases) {
            const element = find(result.layout_tree, item.id);
            assert.ok(element, item.id);
            const fragments = element.children.filter(child => child.nodeType === 'text');
            assert.equal(fragments.map(fragment => fragment.text).join(''), item.text,
                `${item.id}: source text must occur exactly once in source order`);
            for (const fragment of fragments) {
                assert.ok(!/^[\uDC00-\uDFFF]|[\uD800-\uDBFF]$/.test(fragment.text),
                    `${item.id}: preserve Unicode scalar boundaries`);
            }
            if (item.id !== 'hidden' && item.id !== 'bidi-single')
                assert.ok(fragments.length > 1, `${item.id}: exercise fragmentation`);
            if (item.id === 'bidi-single') {
                assert.equal(fragments.length, 1);
                assert.equal(fragments[0].layout.rects.length, 1);
                assert.equal(fragments[0].layout.rects[0].width, 120);
                assert.equal(fragments[0].layout.rects[0].height, 20);
            }
            if (item.id === 'vertical-lr') {
                assert.deepEqual(fragments.map(fragment => fragment.text), ['1 2 ', '34']);
                assert.equal(fragments[0].layout.rects[0].width, 20);
                assert.equal(fragments[0].layout.rects[0].height, 60);
                assert.equal(fragments[1].layout.rects[0].x - fragments[0].layout.rects[0].x, 20);
            }
            if (item.id === 'columns') {
                assert.ok(new Set(fragments.map(fragment => fragment.layout.rects[0].x)).size > 1,
                    'column regions at equal Y must remain separate');
            }
        }
        console.log('Reference fragmentation: horizontal, vertical, bidi, columns, Unicode and hidden text passed');
    } finally { await closeSharedBrowser(); }
})().catch(error => {console.error(error); process.exitCode = 1;});
