// Chrome/Blink editing harness subset for Lambda runner bootstrap.
// This shim covers the assertion, dump, selection, and synthetic-input APIs
// that the imported editing corpus expects before each bucket is promoted.

var _chrome_editing_pass = 0;
var _chrome_editing_fail = 0;
var _chrome_editing_total = 0;
var _chrome_editing_dump_mode = "";
var _chrome_editing_waiting = false;
var _chrome_editing_summary_printed = false;
var _chrome_editing_expected_text = null;
var _chrome_editing_expected_path = "";
var _chrome_editing_test_path = "";
var _chrome_event_sender_x = 0;
var _chrome_event_sender_y = 0;
var _chrome_event_sender_button = 0;
var _chrome_clipboard_html = "";
var _chrome_clipboard_text = "";

if (typeof window !== "undefined" && !window.location) {
    window.location = { search: "" };
}
if (typeof window !== "undefined" && window.location &&
    window.location.search === undefined) {
    window.location.search = "";
}

var internals = typeof internals !== "undefined" ? internals : {
    textAffinity: "Downstream",
    settings: {
        editingBehavior: "mac",
        setEditingBehavior: function(value) {
            this.editingBehavior = String(value || "mac");
        }
    },
    firstChildInFlatTree: function(node) { return node ? node.firstChild : null; },
    nextSiblingInFlatTree: function(node) { return node ? node.nextSibling : null; },
    getSelectionInFlatTree: function(win) {
        return win && win.getSelection ? win.getSelection() : getSelection();
    }
};
if (typeof window !== "undefined") {
    window.internals = internals;
}

function _chrome_call_selection_modify(alter, direction, granularity) {
    var selection = getSelection();
    if (selection && selection.modify) {
        return selection.modify(alter, direction, granularity);
    }
    return false;
}

function moveSelectionLeftByCharacterCommand() {
    return _chrome_call_selection_modify("move", "left", "character");
}
function moveSelectionRightByCharacterCommand() {
    return _chrome_call_selection_modify("move", "right", "character");
}
function moveSelectionForwardByCharacterCommand() {
    return _chrome_call_selection_modify("move", "forward", "character");
}
function moveSelectionBackwardByCharacterCommand() {
    return _chrome_call_selection_modify("move", "backward", "character");
}
function moveSelectionForwardByLineCommand() {
    return _chrome_call_selection_modify("move", "forward", "line");
}
function moveSelectionBackwardByLineCommand() {
    return _chrome_call_selection_modify("move", "backward", "line");
}
function extendSelectionForwardByCharacterCommand() {
    return _chrome_call_selection_modify("extend", "forward", "character");
}
function extendSelectionBackwardByCharacterCommand() {
    return _chrome_call_selection_modify("extend", "backward", "character");
}
function extendSelectionForwardByLineCommand() {
    return _chrome_call_selection_modify("extend", "forward", "line");
}
function extendSelectionBackwardByLineCommand() {
    return _chrome_call_selection_modify("extend", "backward", "line");
}
function debugForDumpAsText(name) {
    debug(name);
}
function focusOnFirstTextInTestElementIfExists() {
    var elem = document.getElementById("test") || document.getElementById("root");
    var selection = getSelection();
    if (!elem || !selection || !selection.collapse) return;
    var stack = [elem];
    while (stack.length) {
        var node = stack.shift();
        if (node.nodeType === 3 && (node.nodeValue || "").length) {
            selection.collapse(node, 0);
            return;
        }
        for (var child = node.firstChild; child; child = child.nextSibling) {
            stack.push(child);
        }
    }
    selection.collapse(elem, 0);
}
function runEditingTest() {
    if (window.testRunner) {
        testRunner.dumpEditingCallbacks();
        testRunner.dumpAsLayoutWithPixelResults();
    }
    focusOnFirstTextInTestElementIfExists();
    if (typeof editingTest === "function") editingTest();
}
function runDumpAsTextEditingTest(enableCallbacks) {
    if (window.testRunner) {
        testRunner.dumpAsText();
        if (enableCallbacks) testRunner.dumpEditingCallbacks();
    }
    focusOnFirstTextInTestElementIfExists();
    if (typeof editingTest === "function") editingTest();
}

function _chrome_editing_record(ok, name, message) {
    _chrome_editing_total++;
    if (ok) {
        _chrome_editing_pass++;
        return;
    }
    _chrome_editing_fail++;
    console.log("FAIL: " + (name || "test") +
        (message ? " - " + message : ""));
}

function _chrome_stringify(value) {
    if (typeof JSON !== "undefined" && JSON.stringify) {
        try { return JSON.stringify(value); } catch (e) {}
    }
    return String(value);
}

function _chrome_eval(expression) {
    return eval(expression);
}

function _chrome_trim_trailing(text) {
    return String(text).replace(/[ \t\r\n]+$/g, "");
}

function _chrome_normalize_dump(text) {
    return _chrome_trim_trailing(String(text).replace(/\r\n/g, "\n"));
}

function description(text) {
    console.log("DESCRIPTION: " + text);
}

function debug(text) {
    console.log(String(text));
}

function test(func, name) {
    try {
        func();
        _chrome_editing_record(true, name || "test", "");
    } catch (e) {
        _chrome_editing_record(false, name || "test", e && e.message ? e.message : String(e));
    }
}

function async_test(func, name) {
    return test(func || function() {}, name || "async_test");
}

function promise_test(func, name) {
    return test(function() {
        var result = func();
        if (result && typeof result.then === "function") {
            result.then(function() {}, function(e) {
                _chrome_editing_record(false, name || "promise_test",
                    e && e.message ? e.message : String(e));
            });
        }
    }, name || "promise_test");
}

function testPassed(name) {
    _chrome_editing_record(true, name || "testPassed", "");
}

function testFailed(name) {
    _chrome_editing_record(false, name || "testFailed", "");
}

function assert_true(actual, description) {
    if (actual !== true) throw new Error(description || ("expected true, got " + _chrome_stringify(actual)));
}

function assert_false(actual, description) {
    if (actual !== false) throw new Error(description || ("expected false, got " + _chrome_stringify(actual)));
}

function assert_equals(actual, expected, description) {
    if (actual !== expected) {
        throw new Error((description ? description + ": " : "") +
            "got " + _chrome_stringify(actual) +
            ", expected " + _chrome_stringify(expected));
    }
}

function assert_not_equals(actual, expected, description) {
    if (actual === expected) {
        throw new Error((description ? description + ": " : "") +
            "expected value not to equal " + _chrome_stringify(expected));
    }
}

function assert_own_property(object, property, description) {
    if (!Object.prototype.hasOwnProperty.call(object, property)) {
        throw new Error(description || ("missing own property " + property));
    }
}

function assert_array_equals(actual, expected, description) {
    if (!actual || !expected || actual.length !== expected.length) {
        throw new Error(description || "array lengths differ");
    }
    for (var i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            throw new Error((description ? description + ": " : "") +
                "arrays differ at " + i);
        }
    }
}

function shouldBeEqualToString(expression, expected) {
    var actual;
    try {
        actual = _chrome_eval(expression);
    } catch (e) {
        _chrome_editing_record(false, expression, e.message || String(e));
        return;
    }
    _chrome_editing_record(
        actual === expected,
        expression,
        "got " + _chrome_stringify(actual) + ", expected " + _chrome_stringify(expected)
    );
}

function shouldBe(expression, expectedExpression) {
    var actual;
    var expected;
    try {
        actual = _chrome_eval(expression);
        expected = _chrome_eval(expectedExpression);
    } catch (e) {
        _chrome_editing_record(false, expression, e.message || String(e));
        return;
    }
    _chrome_editing_record(
        actual === expected,
        expression,
        "got " + _chrome_stringify(actual) + ", expected " + _chrome_stringify(expected)
    );
}

function shouldNotBe(expression, expectedExpression) {
    var actual;
    var expected;
    try {
        actual = _chrome_eval(expression);
        expected = _chrome_eval(expectedExpression);
    } catch (e) {
        _chrome_editing_record(false, expression, e.message || String(e));
        return;
    }
    _chrome_editing_record(actual !== expected, expression,
        "both values were " + _chrome_stringify(actual));
}

function shouldBeTrue(expression) {
    shouldBe(expression, "true");
}

function shouldBeFalse(expression) {
    shouldBe(expression, "false");
}

function shouldBeNull(expression) {
    shouldBe(expression, "null");
}

function shouldBeUndefined(expression) {
    shouldBe(expression, "undefined");
}

function shouldBeNaN(expression) {
    var actual;
    try {
        actual = _chrome_eval(expression);
    } catch (e) {
        _chrome_editing_record(false, expression, e.message || String(e));
        return;
    }
    _chrome_editing_record(actual !== actual, expression,
        "got " + _chrome_stringify(actual) + ", expected NaN");
}

function shouldBeGreaterThanOrEqual(expression, expectedExpression) {
    var actual = _chrome_eval(expression);
    var expected = _chrome_eval(expectedExpression);
    _chrome_editing_record(actual >= expected, expression,
        "got " + actual + ", expected >= " + expected);
}

function shouldBeLessThanOrEqual(expression, expectedExpression) {
    var actual = _chrome_eval(expression);
    var expected = _chrome_eval(expectedExpression);
    _chrome_editing_record(actual <= expected, expression,
        "got " + actual + ", expected <= " + expected);
}

function shouldThrow(expression) {
    var didThrow = false;
    try {
        _chrome_eval(expression);
    } catch (e) {
        didThrow = true;
    }
    _chrome_editing_record(didThrow, expression, "expected exception");
}

function shouldNotThrow(expression) {
    try {
        _chrome_eval(expression);
        _chrome_editing_record(true, expression, "");
    } catch (e) {
        _chrome_editing_record(false, expression, e.message || String(e));
    }
}

function $(id) {
    return document.getElementById(id);
}

function gc() {}

function finishJSTest() {
    _chrome_editing_waiting = false;
}

function successfullyParsed() {
    return true;
}

function isSuccessfullyParsed() {
    return true;
}

function _chrome_remember_marker(kind, node, offset, state) {
    if (kind === "^") {
        if (state.anchorNode) throw new Error("Anchor marker should be one.");
        state.anchorNode = node;
        state.anchorOffset = offset;
    } else {
        if (state.focusNode) throw new Error("Focus marker should be one.");
        state.focusNode = node;
        state.focusOffset = offset;
    }
}

function _chrome_parse_selection_markers(node, state) {
    if (node.nodeType === 3 || node.nodeType === 8) {
        var text = node.nodeValue || "";
        var out = "";
        for (var i = 0; i < text.length; i++) {
            var ch = text.charAt(i);
            if (ch === "^" || ch === "|") {
                _chrome_remember_marker(ch, node, out.length, state);
            } else {
                out += ch;
            }
        }
        if (node.nodeType === 3 && typeof node.data !== "undefined") {
            node.data = out;
        } else if (node.nodeType === 3) {
            node.textContent = out;
        } else {
            node.nodeValue = out;
        }
        if (out.length === 0 && node.parentNode) {
            var parent = node.parentNode;
            var index = 0;
            for (var child = parent.firstChild; child && child !== node;
                 child = child.nextSibling) {
                index++;
            }
            if (state.anchorNode === node) {
                state.anchorNode = parent;
                state.anchorOffset = index;
            }
            if (state.focusNode === node) {
                state.focusNode = parent;
                state.focusOffset = index;
            }
            parent.removeChild(node);
        }
        return;
    }
    if (node.nodeType !== 1 && node.nodeType !== 9 && node.nodeType !== 11) {
        return;
    }
    var children = [];
    for (var c = node.firstChild; c; c = c.nextSibling) children.push(c);
    for (var j = 0; j < children.length; j++) {
        _chrome_parse_selection_markers(children[j], state);
    }
}

function _chrome_selection_boundary_from_marker(marker) {
    var parent = marker.parentNode;
    var previous = marker.previousSibling;
    var next = marker.nextSibling;
    if (previous && previous.nodeType === 3) {
        return { node: previous, offset: (previous.nodeValue || "").length };
    }
    if (next && next.nodeType === 3) {
        return { node: next, offset: 0 };
    }
    var offset = 0;
    for (var child = parent.firstChild; child && child !== marker;
         child = child.nextSibling) {
        offset++;
    }
    return { node: parent, offset: offset };
}

function _chrome_remove_marker(marker) {
    if (marker && marker.parentNode) marker.parentNode.removeChild(marker);
}

function _chrome_set_selection_from_markup_legacy(markup) {
    var html = String(markup)
        .replace(/\^/g, '<span id="__chrome_anchor"></span>')
        .replace(/\|/g, '<span id="__chrome_focus"></span>');
    document.body.innerHTML = html;

    var anchorMarker = document.getElementById("__chrome_anchor");
    var focusMarker = document.getElementById("__chrome_focus");
    if (!focusMarker && anchorMarker) focusMarker = anchorMarker;
    if (!focusMarker) throw new Error("missing selection focus marker");

    var focus = _chrome_selection_boundary_from_marker(focusMarker);
    var anchor = anchorMarker
        ? _chrome_selection_boundary_from_marker(anchorMarker)
        : focus;
    _chrome_remove_marker(focusMarker);
    if (anchorMarker && anchorMarker !== focusMarker) {
        _chrome_remove_marker(anchorMarker);
    }

    _chrome_focus_editing_host(focus.node);
    var selection = getSelection();
    selection.removeAllRanges();
    if (selection.setBaseAndExtent) {
        selection.setBaseAndExtent(anchor.node, anchor.offset,
            focus.node, focus.offset);
        return;
    }
    var range = document.createRange();
    range.setStart(anchor.node, anchor.offset);
    range.setEnd(focus.node, focus.offset);
    selection.addRange(range);
}

function _chrome_should_use_legacy_marker_setup() {
    return typeof _chrome_editing_test_path === "string" &&
        _chrome_editing_test_path.indexOf("deleting/") === 0;
}

function _chrome_set_selection_from_markup(markup) {
    if (_chrome_should_use_legacy_marker_setup()) {
        return _chrome_set_selection_from_markup_legacy(markup);
    }
    if (!document.body) {
        document.documentElement.innerHTML = "<head></head><body></body>";
    }
    document.body.innerHTML = String(markup);

    var state = {
        anchorNode: null,
        anchorOffset: 0,
        focusNode: null,
        focusOffset: 0
    };
    _chrome_parse_selection_markers(document.body, state);

    var selection = getSelection();
    selection.removeAllRanges();
    if (!state.focusNode && !state.anchorNode) {
        _chrome_focus_editing_host(document.body);
        return;
    }
    if (!state.focusNode) throw new Error("missing selection focus marker");
    var anchorNode = state.anchorNode || state.focusNode;
    var anchorOffset = state.anchorNode ? state.anchorOffset : state.focusOffset;

    _chrome_focus_editing_host(state.focusNode);
    if (selection.setBaseAndExtent) {
        try {
            selection.setBaseAndExtent(anchorNode, anchorOffset,
                state.focusNode, state.focusOffset);
            return;
        } catch (e) {
            selection.removeAllRanges();
        }
    }
    if (selection.collapse && selection.extend) {
        selection.collapse(anchorNode, anchorOffset);
        selection.extend(state.focusNode, state.focusOffset);
        return;
    }
    var range = document.createRange();
    range.setStart(anchorNode, anchorOffset);
    range.setEnd(state.focusNode, state.focusOffset);
    selection.addRange(range);
}

function _chrome_focus_editing_host(node) {
    var current = node && node.nodeType === 1 ? node : node ? node.parentNode : null;
    while (current && current !== document.body) {
        if (current.nodeType === 1 &&
            current.hasAttribute && current.hasAttribute("contenteditable")) {
            if (current.focus) current.focus();
            return;
        }
        current = current.parentNode;
    }
    if (document.body && document.body.focus) document.body.focus();
}

function _chrome_escape_text(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function _chrome_escape_attr(value) {
    return _chrome_escape_text(value).replace(/"/g, "&quot;");
}

function _chrome_is_void_element(tag) {
    return tag === "area" || tag === "base" || tag === "br" ||
        tag === "col" || tag === "command" || tag === "embed" ||
        tag === "hr" || tag === "img" || tag === "input" ||
        tag === "keygen" || tag === "link" || tag === "meta" ||
        tag === "param" || tag === "source" || tag === "track" ||
        tag === "wbr";
}

function _chrome_selection_collapsed(selection) {
    return selection && selection.anchorNode === selection.focusNode &&
        selection.anchorOffset === selection.focusOffset;
}

function _chrome_emit_selection_for_parent(parent, childIndex, selection) {
    var out = "";
    if (selection && parent === selection.focusNode &&
        childIndex === selection.focusOffset) {
        out += "|";
    }
    if (!_chrome_selection_collapsed(selection) &&
        selection && parent === selection.anchorNode &&
        childIndex === selection.anchorOffset) {
        out += "^";
    }
    return out;
}

function _chrome_serialize_node_with_selection(node, selection) {
    if (node.nodeType === 3 || node.nodeType === 8) {
        var text = node.nodeValue || "";
        var out = "";
        for (var i = 0; i <= text.length; i++) {
            if (selection && node === selection.focusNode &&
                i === selection.focusOffset) {
                out += "|";
            }
            if (!_chrome_selection_collapsed(selection) &&
                selection && node === selection.anchorNode &&
                i === selection.anchorOffset) {
                out += "^";
            }
            if (i < text.length) out += _chrome_escape_text(text.charAt(i));
        }
        return out;
    }
    if (node.nodeType !== 1) return "";

    var tag = node.nodeName.toLowerCase();
    var markup = "<" + tag;
    var emittedAttrs = {};
    if (node.attributes) {
        for (var a = 0; a < node.attributes.length; a++) {
            var attr = node.attributes[a];
            emittedAttrs[attr.name] = true;
            markup += " " + attr.name;
            if (attr.value !== "") {
                markup += '="' + _chrome_escape_attr(attr.value) + '"';
            }
        }
    }
    if (!emittedAttrs.contenteditable &&
        node.hasAttribute && node.hasAttribute("contenteditable")) {
        markup += " contenteditable";
    }
    markup += ">";
    if (_chrome_is_void_element(tag)) return markup;

    var index = 0;
    for (var child = node.firstChild; child; child = child.nextSibling) {
        markup += _chrome_emit_selection_for_parent(node, index, selection);
        markup += _chrome_serialize_node_with_selection(child, selection);
        index++;
    }
    markup += _chrome_emit_selection_for_parent(node, index, selection);
    markup += "</" + tag + ">";
    return markup;
}

function _chrome_markup_with_selection() {
    var selection = getSelection();
    var out = "";
    var index = 0;
    if (!document.body) {
        return _chrome_serialize_node_with_selection(document.documentElement,
            selection);
    }
    for (var child = document.body.firstChild; child; child = child.nextSibling) {
        out += _chrome_emit_selection_for_parent(document.body, index, selection);
        out += _chrome_serialize_node_with_selection(child, selection);
        index++;
    }
    out += _chrome_emit_selection_for_parent(document.body, index, selection);
    while (out.indexOf("||") >= 0) out = out.replace("||", "|");
    return out;
}

function _chrome_selection_api() {
    var nativeSelection = getSelection();
    var documentApi = Object.create(document);
    documentApi.execCommand = _chrome_exec_command_for_sample;
    return {
        document: documentApi,
        window: window,
        selection: nativeSelection,
        get anchorNode() { return nativeSelection.anchorNode; },
        get anchorOffset() { return nativeSelection.anchorOffset; },
        get focusNode() { return nativeSelection.focusNode; },
        get focusOffset() { return nativeSelection.focusOffset; },
        get rangeCount() { return nativeSelection.rangeCount; },
        get isCollapsed() { return nativeSelection.isCollapsed; },
        addRange: function(range) { return nativeSelection.addRange(range); },
        collapse: function(node, offset) { return nativeSelection.collapse(node, offset); },
        collapseToEnd: function() { return nativeSelection.collapseToEnd(); },
        collapseToStart: function() { return nativeSelection.collapseToStart(); },
        containsNode: function(node, allowPartial) {
            return nativeSelection.containsNode(node, allowPartial);
        },
        deleteFromDocument: function() { return nativeSelection.deleteFromDocument(); },
        extend: function(node, offset) { return nativeSelection.extend(node, offset); },
        getRangeAt: function(index) { return nativeSelection.getRangeAt(index); },
        modify: function(alter, direction, granularity) {
            return nativeSelection.modify(alter, direction, granularity);
        },
        removeAllRanges: function() { return nativeSelection.removeAllRanges(); },
        removeRange: function(range) { return nativeSelection.removeRange(range); },
        selectAllChildren: function(node) { return nativeSelection.selectAllChildren(node); },
        setBaseAndExtent: function(anchorNode, anchorOffset, focusNode, focusOffset) {
            return nativeSelection.setBaseAndExtent(anchorNode, anchorOffset,
                focusNode, focusOffset);
        },
        setClipboardData: function(html, text) {
            var plain = text;
            if (plain === undefined) {
                var scratch = document.createElement("div");
                scratch.innerHTML = html || "";
                plain = scratch.textContent || "";
            }
            _chrome_clipboard_html = String(html || "");
            _chrome_clipboard_text = String(plain || "");
            if (typeof __lambda_clipboard_write_records === "function") {
                __lambda_clipboard_write_records([{
                    "text/html": String(html || ""),
                    "text/plain": String(plain || "")
                }]);
            }
        },
        computeLeft: function(element) {
            var left = 0;
            for (var node = element; node; node = node.offsetParent) {
                left += node.offsetLeft || 0;
            }
            return left;
        },
        computeTop: function(element) {
            var top = 0;
            for (var node = element; node; node = node.offsetParent) {
                top += node.offsetTop || 0;
            }
            return top;
        },
        toString: function() { return nativeSelection.toString(); }
    };
}

function _chrome_execute_selection_command(command) {
    if (!command || command === "noop") return true;
    var name = String(command);
    var value = null;
    var space = name.search(/\s/);
    if (space >= 0) {
        value = name.slice(space + 1).replace(/^\s+/, "");
        name = name.slice(0, space);
    }
    if (name === "type") name = "insertText";
    if (!_chrome_should_use_legacy_marker_setup() &&
        name.toLowerCase() === "delete") {
        return _chrome_delete_text_before_selection();
    }
    if (!_chrome_should_use_legacy_marker_setup() &&
        name.toLowerCase() === "forwarddelete") {
        return _chrome_delete_text_after_selection();
    }
    return document.execCommand(name, false, value);
}

function _chrome_delete_text_before_selection() {
    var selection = getSelection();
    var node = selection.focusNode;
    var offset = selection.focusOffset || 0;
    if (node && node.nodeType === 3 && offset > 0) {
        var text = node.nodeValue || "";
        node.data = text.slice(0, offset - 1) + text.slice(offset);
        selection.collapse(node, offset - 1);
        return true;
    }
    return false;
}

function _chrome_delete_text_after_selection() {
    var selection = getSelection();
    var node = selection.focusNode;
    var offset = selection.focusOffset || 0;
    if (node && node.nodeType === 3) {
        var text = node.nodeValue || "";
        if (offset < text.length) {
            node.data = text.slice(0, offset) + text.slice(offset + 1);
            selection.collapse(node, offset);
            return true;
        }
    }
    return false;
}

function _chrome_insert_html_at_selection(html) {
    var source = String(html || "");
    var bold = /^<b>([\s\S]*)<\/b>$/.exec(source);
    if (bold) {
        var selection = getSelection();
        var b = document.createElement("b");
        var text = document.createTextNode(bold[1]);
        b.appendChild(text);
        var parent = selection.focusNode;
        var offset = selection.focusOffset || 0;
        if (parent && parent.nodeType === 1) {
            parent.insertBefore(b, parent.childNodes[offset] || null);
            selection.collapse(text, text.nodeValue.length);
            return true;
        }
    }
    return _chrome_insert_text_at_selection(source.replace(/<[^>]*>/g, ""));
}

function _chrome_insert_text_at_selection(text) {
    var value = String(text || "");
    var selection = getSelection();
    var node = selection.focusNode;
    var offset = selection.focusOffset || 0;
    if (node && node.nodeType === 3) {
        var current = node.nodeValue || "";
        node.data = current.slice(0, offset) + value + current.slice(offset);
        selection.collapse(node, offset + value.length);
        return true;
    }
    if (node && node.nodeType === 1) {
        var textNode = document.createTextNode(value);
        node.insertBefore(textNode, node.childNodes[offset] || null);
        selection.collapse(textNode, value.length);
        return true;
    }
    return false;
}

function _chrome_exec_command_for_sample(command, showUI, value) {
    var cmd = String(command || "").toLowerCase();
    if (cmd === "paste") {
        return _chrome_insert_html_at_selection(_chrome_clipboard_html ||
            _chrome_clipboard_text);
    }
    if (cmd === "pasteandmatchstyle") {
        return _chrome_insert_text_at_selection(_chrome_clipboard_text);
    }
    if (!_chrome_should_use_legacy_marker_setup() && cmd === "delete")
        return _chrome_delete_text_before_selection();
    if (!_chrome_should_use_legacy_marker_setup() && cmd === "forwarddelete")
        return _chrome_delete_text_after_selection();
    return document.execCommand(command, showUI || false, value);
}

function assertSelection(markup, expected, name) {
    var host = document.getElementById("test") || document.body;
    host.innerHTML = markup;
    _chrome_editing_record(
        host.innerHTML === expected,
        name || "assertSelection",
        "got " + _chrome_stringify(host.innerHTML) +
            ", expected " + _chrome_stringify(expected)
    );
}

function assert_selection(markup, command, expected, options) {
    _chrome_set_selection_from_markup(markup);
    if (typeof command === "function") {
        command(_chrome_selection_api(), testRunner);
    } else {
        var ok = _chrome_execute_selection_command(command);
        if (!ok && command && command !== "noop") {
            throw new Error("execCommand failed: " + command);
        }
    }
    var actual = _chrome_markup_with_selection();
    if (actual !== expected) {
        var description = "";
        if (typeof options === "string") description = options + ": ";
        else if (options && options.description) description = options.description + ": ";
        throw new Error(description + "got " + _chrome_stringify(actual) +
            ", expected " + _chrome_stringify(expected));
    }
    return document.body;
}

function assert_selection_and_return_sample(markup, command, expected, options) {
    assert_selection(markup, command, expected, options);
    return document.body;
}

function _chrome_dump_text_node(node, out) {
    if (!node) return;
    if (node.nodeType === 3) {
        out.push(node.nodeValue || "");
        return;
    }
    if (node.nodeType !== 1 && node.nodeType !== 9 && node.nodeType !== 11) {
        return;
    }
    var tag = node.nodeName ? node.nodeName.toLowerCase() : "";
    if (tag === "script" || tag === "style" || tag === "noscript") return;
    var block = tag === "p" || tag === "div" || tag === "li" ||
        tag === "br" || tag === "section" || tag === "article" ||
        tag === "header" || tag === "footer" || tag === "h1" ||
        tag === "h2" || tag === "h3" || tag === "h4" ||
        tag === "h5" || tag === "h6";
    if (tag === "br") {
        out.push("\n");
        return;
    }
    for (var child = node.firstChild; child; child = child.nextSibling) {
        _chrome_dump_text_node(child, out);
    }
    if (block) out.push("\n");
}

function _chrome_dump_as_text() {
    var out = [];
    _chrome_dump_text_node(document.body, out);
    return out.join("").replace(/\n{3,}/g, "\n\n");
}

function _chrome_dump_as_markup() {
    var out = "";
    for (var child = document.body.firstChild; child; child = child.nextSibling) {
        out += _chrome_serialize_node_with_selection(child, null);
    }
    return out;
}

function _chrome_compare_expected_dump() {
    if (!_chrome_editing_expected_path || _chrome_editing_expected_text === null) {
        return;
    }
    if (_chrome_editing_dump_mode !== "text" &&
        _chrome_editing_dump_mode !== "markup") {
        return;
    }
    var actual = _chrome_editing_dump_mode === "markup"
        ? _chrome_dump_as_markup()
        : _chrome_dump_as_text();
    var expected = _chrome_editing_expected_text;
    _chrome_editing_record(
        _chrome_normalize_dump(actual) === _chrome_normalize_dump(expected),
        _chrome_editing_dump_mode + " dump " + _chrome_editing_expected_path,
        "got " + _chrome_stringify(_chrome_normalize_dump(actual)) +
            ", expected " + _chrome_stringify(_chrome_normalize_dump(expected))
    );
}

function _chrome_modifier_state(modifiers) {
    var state = { shift: false, ctrl: false, alt: false, meta: false };
    if (!modifiers) return state;
    if (typeof modifiers === "string") modifiers = [modifiers];
    for (var i = 0; i < modifiers.length; i++) {
        var mod = String(modifiers[i]).toLowerCase();
        if (mod === "shift" || mod === "shiftkey") state.shift = true;
        else if (mod === "ctrl" || mod === "control" || mod === "ctrlkey") state.ctrl = true;
        else if (mod === "alt" || mod === "altkey") state.alt = true;
        else if (mod === "meta" || mod === "cmd" || mod === "command" ||
                 mod === "metakey") state.meta = true;
    }
    return state;
}

function _chrome_key_code(key) {
    if (key === "backspace" || key === "Backspace") return 0xE003;
    if (key === "delete" || key === "Delete" || key === "forwardDelete") return 0xE017;
    if (key === "leftArrow" || key === "ArrowLeft") return 0xE012;
    if (key === "rightArrow" || key === "ArrowRight") return 0xE014;
    if (key === "upArrow" || key === "ArrowUp") return 0xE013;
    if (key === "downArrow" || key === "ArrowDown") return 0xE015;
    if (key === "home" || key === "Home") return 0xE011;
    if (key === "end" || key === "End") return 0xE010;
    if (key && key.length === 1) return key.charCodeAt(0);
    return 0;
}

var testRunner = {
    dumpAsText: function() { _chrome_editing_dump_mode = "text"; },
    dumpAsMarkup: function() { _chrome_editing_dump_mode = "markup"; },
    dumpAsLayout: function() { _chrome_editing_dump_mode = "markup"; },
    dumpAsLayoutWithPixelResults: function() { _chrome_editing_dump_mode = "markup"; },
    dumpChildFramesAsText: function() {},
    dumpEditingCallbacks: function() {},
    dumpSelectionRect: function() {},
    waitUntilDone: function() { _chrome_editing_waiting = true; },
    notifyDone: function() {
        _chrome_editing_waiting = false;
        _chrome_editing_print_summary();
    },
    execCommand: function(command, value) {
        return document.execCommand(command, false, value || null);
    },
    findString: function(text, options) {
        var haystack = document.body ? document.body.textContent || "" : "";
        var needle = String(text);
        var start = testRunner._findOffset || 0;
        var found = haystack.indexOf(needle, start);
        if (found < 0 && options && String(options).indexOf("WrapAround") >= 0) {
            found = haystack.indexOf(needle, 0);
        }
        if (found < 0) return false;
        testRunner._findOffset = found + needle.length;
        return true;
    },
    setBackingScaleFactor: function() {},
    setCanOpenWindows: function() {},
    setCaretBrowsingEnabled: function() {},
    setSpellCheckerLoggingEnabled: function() {},
    setTextDirection: function() {},
    setWindowIsKey: function() {},
    selectionBounds: function() { return { x: 0, y: 0, width: 0, height: 0 }; },
    isCommandEnabled: function(command) {
        if (document.queryCommandEnabled) return document.queryCommandEnabled(command);
        return true;
    },
    _findOffset: 0
};

var eventSender = {
    dragMode: true,
    keyDown: function(key, modifiers) {
        var mods = _chrome_modifier_state(modifiers);
        var code = _chrome_key_code(key);
        if (code && typeof __lambda_testdriver_key === "function") {
            try {
                if (__lambda_testdriver_key(code, mods.shift, mods.ctrl,
                    mods.alt, mods.meta)) {
                    return true;
                }
            } catch (e) {}
        }
        if (key === "Enter" || key === "Return" || key === "\r") {
            return document.execCommand("insertParagraph", false, null);
        }
        if (key === "Escape") return true;
        if (key === "\t" || (key && key.length === 1)) {
            return document.execCommand("insertText", false, key);
        }
        return false;
    },
    mouseMoveTo: function(x, y) {
        _chrome_event_sender_x = x || 0;
        _chrome_event_sender_y = y || 0;
        return true;
    },
    mouseDown: function(button) {
        _chrome_event_sender_button = button || 0;
        return true;
    },
    mouseUp: function(button) {
        _chrome_event_sender_button = button || 0;
        return true;
    },
    contextClick: function() {
        return [];
    },
    leapForward: function() { return true; },
    beginDragWithFiles: function() { return true; },
    scheduleAsynchronousClick: function() { return true; },
    textZoomIn: function() {},
    textZoomOut: function() {},
    zoomPageIn: function() {},
    zoomPageOut: function() {}
};
if (typeof window !== "undefined") {
    window.eventSender = eventSender;
    window.testRunner = testRunner;
}

function _chrome_editing_print_summary() {
    if (_chrome_editing_summary_printed) return;
    _chrome_compare_expected_dump();
    if (_chrome_editing_total === 0) {
        var consoleElement = document.getElementById("console");
        var text = "";
        if (consoleElement) {
            text = consoleElement.textContent || "";
        }
        if (text.indexOf("Test Failed") >= 0 ||
            text.indexOf("FAIL") >= 0) {
            _chrome_editing_record(false, "console", text);
        } else if (text.indexOf("Success.") >= 0 ||
                   text.indexOf("PASS") >= 0) {
            _chrome_editing_record(true, "console", "");
        } else if (_chrome_editing_dump_mode &&
                   _chrome_editing_expected_path) {
            // the dump comparison above recorded the result
        }
    }
    _chrome_editing_summary_printed = true;
    console.log("CHROME_EDITING_RESULT: " +
        _chrome_editing_pass + "/" + _chrome_editing_total + " passed");
}
