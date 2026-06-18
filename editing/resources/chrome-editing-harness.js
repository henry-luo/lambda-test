// Minimal Chrome editing harness subset for Lambda runner bootstrap.
// Imported Blink helpers should replace or extend this as CET phases expand.

var _chrome_editing_pass = 0;
var _chrome_editing_fail = 0;
var _chrome_editing_total = 0;

function _chrome_editing_record(ok, name, message) {
    _chrome_editing_total++;
    if (ok) {
        _chrome_editing_pass++;
        return;
    }
    _chrome_editing_fail++;
    console.log("FAIL: " + name + (message ? " - " + message : ""));
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
        _chrome_editing_record(false, name || "test", e.message || String(e));
    }
}

function testPassed(name) {
    _chrome_editing_record(true, name || "testPassed", "");
}

function testFailed(name) {
    _chrome_editing_record(false, name || "testFailed", "");
}

function shouldBeEqualToString(expression, expected) {
    var actual;
    try {
        actual = eval(expression);
    } catch (e) {
        _chrome_editing_record(false, expression, e.message);
        return;
    }
    _chrome_editing_record(
        actual === expected,
        expression,
        "got " + JSON.stringify(actual) + ", expected " + JSON.stringify(expected)
    );
}

function shouldBe(expression, expectedExpression) {
    var actual;
    var expected;
    try {
        actual = eval(expression);
        expected = eval(expectedExpression);
    } catch (e) {
        _chrome_editing_record(false, expression, e.message);
        return;
    }
    _chrome_editing_record(
        actual === expected,
        expression,
        "got " + JSON.stringify(actual) + ", expected " + JSON.stringify(expected)
    );
}

function assertSelection(markup, expected, name) {
    var host = document.getElementById("test") || document.body;
    host.innerHTML = markup;
    _chrome_editing_record(
        host.innerHTML === expected,
        name || "assertSelection",
        "got " + JSON.stringify(host.innerHTML) + ", expected " + JSON.stringify(expected)
    );
}

function _chrome_selection_boundary_from_marker(marker) {
    var parent = marker.parentNode;
    var previous = marker.previousSibling;
    var next = marker.nextSibling;
    if (previous && previous.nodeType === 3) {
        return { node: previous, offset: previous.nodeValue.length };
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
    if (marker && marker.parentNode) {
        marker.parentNode.removeChild(marker);
    }
}

function _chrome_set_selection_from_markup(markup) {
    var withMarkers = String(markup)
        .replace("^", '<span id="__chrome_anchor"></span>')
        .replace("|", '<span id="__chrome_focus"></span>');
    document.body.innerHTML = withMarkers;

    var focusMarker = document.getElementById("__chrome_focus");
    var anchorMarker = document.getElementById("__chrome_anchor");
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

    var selection = getSelection();
    var range = document.createRange();
    range.setStart(anchor.node, anchor.offset);
    range.setEnd(focus.node, focus.offset);
    selection.removeAllRanges();
    selection.addRange(range);
}

function _chrome_escape_attr(value) {
    return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function _chrome_serialize_node_with_caret(node, focusNode, focusOffset) {
    if (node.nodeType === 3) {
        var text = node.nodeValue || "";
        if (node === focusNode) {
            return text.slice(0, focusOffset) + "|" + text.slice(focusOffset);
        }
        return text;
    }
    if (node.nodeType !== 1) return "";

    var tag = node.nodeName.toLowerCase();
    var out = "<" + tag;
    var emittedAttrs = {};
    if (node.attributes) {
        for (var i = 0; i < node.attributes.length; i++) {
            var attr = node.attributes[i];
            emittedAttrs[attr.name] = true;
            out += " " + attr.name;
            if (attr.value !== "") out += '="' + _chrome_escape_attr(attr.value) + '"';
        }
    }
    if (!emittedAttrs.contenteditable &&
        node.hasAttribute && node.hasAttribute("contenteditable")) {
        out += " contenteditable";
    }
    out += ">";
    for (var child = node.firstChild; child; child = child.nextSibling) {
        if (node === focusNode) {
            var childIndex = 0;
            for (var probe = node.firstChild; probe && probe !== child;
                 probe = probe.nextSibling) {
                childIndex++;
            }
            if (childIndex === focusOffset) out += "|";
        }
        out += _chrome_serialize_node_with_caret(child, focusNode, focusOffset);
    }
    if (node === focusNode && focusOffset === node.childNodes.length) out += "|";
    out += "</" + tag + ">";
    return out;
}

function _chrome_markup_with_selection() {
    var selection = getSelection();
    var focusNode = selection && selection.focusNode;
    var focusOffset = selection ? selection.focusOffset : 0;
    var out = "";
    for (var child = document.body.firstChild; child; child = child.nextSibling) {
        out += _chrome_serialize_node_with_caret(child, focusNode, focusOffset);
    }
    return out;
}

function assert_selection(markup, command, expected) {
    _chrome_set_selection_from_markup(markup);
    if (typeof command === "function") {
        command({
            document: document,
            window: window,
            selection: getSelection()
        });
    } else {
        var ok = document.execCommand(command, false, null);
        if (!ok) throw new Error("execCommand failed: " + command);
    }
    var actual = _chrome_markup_with_selection();
    if (actual !== expected) {
        throw new Error("got " + JSON.stringify(actual) +
            ", expected " + JSON.stringify(expected));
    }
}

var testRunner = {
    dumpAsText: function() {},
    dumpAsMarkup: function() {},
    dumpAsLayoutWithPixelResults: function() {},
    dumpEditingCallbacks: function() {},
    waitUntilDone: function() {},
    notifyDone: function() {}
};

var eventSender = {
    keyDown: function(key) {
        var code = 0;
        if (key === "backspace") code = 0xE003;
        else if (key === "delete") code = 0xE017;
        else if (key && key.length === 1) code = key.charCodeAt(0);
        if (code && typeof __lambda_testdriver_key === "function") {
            return __lambda_testdriver_key(code, false, false, false, false);
        }
        return false;
    }
};

function _chrome_editing_print_summary() {
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
        }
    }
    console.log("CHROME_EDITING_RESULT: " +
        _chrome_editing_pass + "/" + _chrome_editing_total + " passed");
}
