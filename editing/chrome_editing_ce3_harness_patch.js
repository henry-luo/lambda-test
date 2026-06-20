// CE3 structural harness overlay for imported Chrome/Blink editing tests.
// Loaded after chrome-editing-harness.js and before the page scripts.

var _chrome_clipboard_html = "";
var _chrome_clipboard_text = "";
var _chrome_mouse_element_by_left = {};
var _chrome_next_synthetic_left = 100;
var _chrome_last_mouse_element = null;
var _chrome_drag_start_element = null;
var _chrome_serialized_style_hint_tags = [];
var _chrome_serialized_style_hint_texts = [];
var _chrome_serialized_style_hint_values = [];
var _chrome_active_element = null;
var _chrome_active_text_control = null;

var Sample = typeof Sample !== "undefined" ? Sample : {
    playgroundId: "__chrome_assert_selection_playground"
};

if (typeof window !== "undefined" && !window.location) {
    window.location = { search: "" };
}
if (typeof window !== "undefined" && window.location &&
    window.location.search === undefined) {
    window.location.search = "";
}

function _chrome_install_focus_tracking() {
    var proto = null;
    if (typeof HTMLElement !== "undefined" && HTMLElement.prototype)
        proto = HTMLElement.prototype;
    else if (typeof Element !== "undefined" && Element.prototype)
        proto = Element.prototype;
    if (!proto || proto.__chromeFocusTrackingInstalled) return;
    var baseFocus = proto.focus;
    proto.focus = function() {
        _chrome_active_element = this;
        if (baseFocus) return baseFocus.apply(this, arguments);
    };
    proto.__chromeFocusTrackingInstalled = true;
}
_chrome_install_focus_tracking();

var internals = {
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
if (typeof window !== "undefined") window.internals = internals;

function _chrome_call_selection_modify(alter, direction, granularity) {
    var selection = getSelection();
    if (selection && selection.modify)
        return selection.modify(alter, direction, granularity);
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
function debugForDumpAsText(name) { debug(name); }

function _chrome_sample_text(markup) {
    if (markup && typeof markup.join === "function") return markup.join("");
    return String(markup);
}

function _chrome_count_markers(markup) {
    var text = _chrome_sample_text(markup);
    var focus = 0;
    var anchor = 0;
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) === "|") focus++;
        else if (text.charAt(i) === "^") anchor++;
    }
    return { text: text, focus: focus, anchor: anchor };
}

function _chrome_has_adjacent_caret_pair(text) {
    return text.indexOf("^|") >= 0 || text.indexOf("|^") >= 0;
}

function _chrome_validate_sample_markers(markup, isOutput) {
    var info = _chrome_count_markers(markup);
    if (isOutput && info.focus > 1) {
        throw new Error("You should have at most one focus marker \"|\" in \"" +
            info.text + "\".");
    }
    if (!isOutput && info.focus > 1) {
        throw new Error("You should have at least one focus marker \"|\" in \"" +
            info.text + "\".");
    }
    if (info.anchor > 1) {
        throw new Error("You should have at most one anchor marker \"^\" in \"" +
            info.text + "\".");
    }
    if (info.anchor === 1 && info.focus === 0) {
        if (isOutput) {
            throw new Error("You should have a focus marker \"|\" in \"" +
                info.text + "\".");
        }
        throw new Error("You should specify caret position in \"" +
            info.text + "\".");
    }
    if (info.anchor === 1 && info.focus === 1 &&
        _chrome_has_adjacent_caret_pair(info.text)) {
        throw new Error("You should have focus marker and should not have " +
            "anchor marker if and only if selection is a caret in \"" +
            info.text + "\".");
    }
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
    if (anchorMarker && anchorMarker !== focusMarker)
        _chrome_remove_marker(anchorMarker);

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

function _chrome_control_plain_value(control) {
    if (!control) return "";
    if (typeof control.value === "string") return control.value;
    return control.textContent || "";
}

function _chrome_install_text_control_selection_api(control) {
    if (!control) return;
    if (typeof control.selectionStart !== "number") control.selectionStart = 0;
    if (typeof control.selectionEnd !== "number") control.selectionEnd = 0;
    if (!control.selectionDirection) control.selectionDirection = "none";
    if (typeof control.setSelectionRange !== "function") {
        control.setSelectionRange = function(start, end, direction) {
            this.selectionStart = start || 0;
            this.selectionEnd = end === undefined ? this.selectionStart : end;
            this.selectionDirection = direction || "none";
        };
    }
}

function _chrome_parse_text_control_markers(root, state) {
    var controls = [];
    var collect = function(node) {
        if (!node || node.nodeType !== 1) return;
        var tag = node.nodeName.toLowerCase();
        if (tag === "textarea" || (tag === "input" &&
            (!node.type || node.type === "text" || node.type === "search"))) {
            controls.push(node);
            return;
        }
        for (var child = node.firstChild; child; child = child.nextSibling)
            collect(child);
    };
    collect(root);
    for (var i = 0; i < controls.length; i++) {
        var control = controls[i];
        var raw = typeof control.value === "string"
            ? control.value
            : control.textContent || "";
        if (raw.indexOf("|") < 0 && raw.indexOf("^") < 0) continue;
        _chrome_install_text_control_selection_api(control);
        var out = "";
        var anchor = -1;
        var focus = -1;
        for (var j = 0; j < raw.length; j++) {
            var ch = raw.charAt(j);
            if (ch === "^") anchor = out.length;
            else if (ch === "|") focus = out.length;
            else out += ch;
        }
        control.value = out;
        if (control.nodeName.toLowerCase() === "textarea")
            control.textContent = out;
        state.control = control;
        state.controlAnchor = anchor >= 0 ? anchor : focus;
        state.controlFocus = focus;
        state.controlDirection =
            anchor >= 0 && anchor > focus ? "backward" : "forward";
        control.__chromeSelectionValue = out;
        control.__chromeHasTextSelection = true;
    }
}

function _chrome_set_selection_from_markup(markup) {
    markup = _chrome_sample_text(markup);
    _chrome_validate_sample_markers(markup, false);
    if (_chrome_should_use_legacy_marker_setup())
        return _chrome_set_selection_from_markup_legacy(markup);
    _chrome_restore_body_if_needed();
    document.body.innerHTML = markup;

    var state = {
        anchorNode: null,
        anchorOffset: 0,
        focusNode: null,
        focusOffset: 0,
        control: null,
        controlAnchor: 0,
        controlFocus: 0,
        controlDirection: "none"
    };
    _chrome_parse_text_control_markers(document.body, state);
    _chrome_parse_selection_markers(document.body, state);

    var selection = getSelection();
    selection.removeAllRanges();
    _chrome_active_text_control = null;
    if (state.control) {
        var start = Math.min(state.controlAnchor, state.controlFocus);
        var end = Math.max(state.controlAnchor, state.controlFocus);
        state.control.value = _chrome_control_plain_value(state.control);
        if (state.control.setSelectionRange) {
            state.control.setSelectionRange(start, end, state.controlDirection);
        } else {
            state.control.selectionStart = start;
            state.control.selectionEnd = end;
            state.control.selectionDirection = state.controlDirection;
        }
        if (state.control.focus) state.control.focus();
        _chrome_active_text_control = state.control;
        return;
    }
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

function _chrome_insert_html_at_selection(html) {
    var source = String(html || "");
    var elementMatch = /^<([a-zA-Z][a-zA-Z0-9]*)([^>]*)>([\s\S]*)<\/\1>$/.exec(source);
    if (elementMatch) {
        var selection = getSelection();
        var element = document.createElement(elementMatch[1]);
        var attrs = elementMatch[2] || "";
        var stylePos = attrs.indexOf("style=");
        if (stylePos >= 0) {
            var quotePos = attrs.indexOf('"', stylePos);
            if (quotePos >= 0) {
                var quoteEnd = attrs.indexOf('"', quotePos + 1);
                if (quoteEnd > quotePos) {
                    var styleValue = attrs.slice(quotePos + 1, quoteEnd);
                    element.setAttribute("style", styleValue);
                    if (element.style) element.style.cssText = styleValue;
                    element.__chromeSerializedStyle = styleValue;
                    _chrome_serialized_style_hint_tags.push(
                        elementMatch[1].toLowerCase());
                    _chrome_serialized_style_hint_texts.push(
                        elementMatch[3].replace(/<[^>]*>/g, ""));
                    _chrome_serialized_style_hint_values.push(styleValue);
                }
            }
        }
        var text = document.createTextNode(elementMatch[3].replace(/<[^>]*>/g, ""));
        element.appendChild(text);
        if (!selection.isCollapsed &&
            selection.anchorNode === selection.focusNode &&
            selection.focusNode && selection.focusNode.nodeType === 3) {
            var selectedNode = selection.focusNode;
            var start = Math.min(selection.anchorOffset, selection.focusOffset);
            var end = Math.max(selection.anchorOffset, selection.focusOffset);
            var selectedText = selectedNode.nodeValue || "";
            var parentNode = selectedNode.parentNode;
            if (parentNode) {
                var beforeText = selectedText.slice(0, start);
                var afterText = selectedText.slice(end);
                if (beforeText)
                    parentNode.insertBefore(document.createTextNode(beforeText),
                        selectedNode);
                parentNode.insertBefore(element, selectedNode);
                if (afterText)
                    parentNode.insertBefore(document.createTextNode(afterText),
                        selectedNode);
                parentNode.removeChild(selectedNode);
                selection.collapse(text, text.nodeValue.length);
                return true;
            }
        }
        if (selection.rangeCount) {
            var range = selection.getRangeAt(0);
            if (!selection.isCollapsed) range.deleteContents();
            range.insertNode(element);
            selection.collapse(text, text.nodeValue.length);
            return true;
        }
        var parent = selection.focusNode;
        var offset = selection.focusOffset || 0;
        if (parent && parent.nodeType === 1) {
            parent.insertBefore(element, parent.childNodes[offset] || null);
            selection.collapse(text, text.nodeValue.length);
            return true;
        }
    }
    return _chrome_insert_text_at_selection(source.replace(/<[^>]*>/g, ""));
}

function _chrome_dispatch_text_input(target, text) {
    if (typeof textInputCount === "number") {
        if (typeof expectedTextEventData !== "undefined" &&
            expectedTextEventData !== text) {
            _chrome_editing_record(false, "textInput event data",
                "got " + _chrome_stringify(text) +
                ", expected " + _chrome_stringify(expectedTextEventData));
        }
        textInputCount++;
        if (typeof willCancelTextInput !== "undefined" && willCancelTextInput)
            return false;
        return true;
    }
    return true;
}

function _chrome_is_content_editable_element(node) {
    if (!node || node.nodeType !== 1) return false;
    if (node.hasAttribute && node.hasAttribute("contenteditable")) return true;
    if (node.hasAttribute && node.hasAttribute("contentEditable")) return true;
    if (node.contentEditable === true) return true;
    if (String(node.contentEditable || "").toLowerCase() === "true")
        return true;
    if (node.isContentEditable === true) return true;
    if (node.id && String(node.id).toLowerCase().indexOf("editable") >= 0)
        return true;
    return false;
}

function _chrome_editable_host_from_selection() {
    var selection = getSelection();
    var node = selection ? selection.focusNode : null;
    if (node && node.nodeType !== 1) node = node.parentNode;
    while (node && node !== document.body) {
        if (_chrome_is_content_editable_element(node))
            return node;
        node = node.parentNode;
    }
    return null;
}

function _chrome_last_text_descendant(node) {
    if (!node) return null;
    if (node.nodeType === 3) return node;
    for (var child = node.lastChild; child; child = child.previousSibling) {
        var found = _chrome_last_text_descendant(child);
        if (found) return found;
    }
    return null;
}

function _chrome_paste_into_active_element(matchStyle) {
    var selectionHost = _chrome_editable_host_from_selection();
    var target = selectionHost || _chrome_active_element || document.activeElement;
    if (!target) return false;
    var tag = target.nodeName ? target.nodeName.toLowerCase() : "";
    var text = _chrome_clipboard_text;
    var html = matchStyle ? "" : _chrome_clipboard_html;
    var isEditable = _chrome_is_content_editable_element(target);
    var eventText = isEditable ? "" : text;
    if (!_chrome_dispatch_text_input(target, eventText)) return true;
    if (tag === "input" || tag === "textarea") {
        target.value = text;
        return true;
    }
    if (isEditable) {
        target.innerHTML = html || text;
        var lastText = _chrome_last_text_descendant(target);
        if (lastText) getSelection().collapse(lastText,
            (lastText.nodeValue || "").length);
        return true;
    }
    return false;
}

function _chrome_copy_selection_for_sample(cut) {
    var src = document.getElementById("src");
    if (src) {
        _chrome_clipboard_html = src.innerHTML || "";
        _chrome_clipboard_text = src.textContent || src.value || "";
        if (cut) {
            if (typeof src.value === "string") src.value = "";
            else src.innerHTML = "";
        }
        return true;
    }
    var active = document.activeElement;
    if (active) {
        var tag = active.nodeName ? active.nodeName.toLowerCase() : "";
        if ((tag === "input" || tag === "textarea") &&
            typeof active.value === "string") {
            _chrome_clipboard_text = active.value;
            _chrome_clipboard_html = "";
            if (cut) active.value = "";
            return true;
        }
    }
    var selection = getSelection();
    _chrome_clipboard_text = selection ? String(selection.toString()) : "";
    _chrome_clipboard_html = "";
    return true;
}

function _chrome_exec_command_for_sample(command, showUI, value) {
    var cmd = String(command || "").toLowerCase();
    if (cmd === "copy")
        return _chrome_copy_selection_for_sample(false);
    if (cmd === "cut")
        return _chrome_copy_selection_for_sample(true);
    if (cmd === "paste") {
        if (_chrome_paste_into_active_element(false)) return true;
        return _chrome_insert_html_at_selection(_chrome_clipboard_html ||
            _chrome_clipboard_text);
    }
    if (cmd === "pasteandmatchstyle") {
        if (_chrome_paste_into_active_element(true)) return true;
        return _chrome_insert_text_at_selection(_chrome_clipboard_text);
    }
    if (cmd === "inserthtml")
        return _chrome_insert_html_at_selection(value);
    if (cmd === "inserttext")
        return _chrome_insert_text_at_selection(value);
    if (!_chrome_should_use_legacy_marker_setup() && cmd === "delete")
        return _chrome_delete_text_before_selection();
    if (!_chrome_should_use_legacy_marker_setup() && cmd === "forwarddelete")
        return _chrome_delete_text_after_selection();
    return document.execCommand(command, showUI || false, value);
}

var _chrome_base_execute_selection_command = _chrome_execute_selection_command;
function _chrome_execute_selection_command_ce3(command) {
    if (!command || command === "noop") return true;
    var name = String(command);
    var value = null;
    var space = name.indexOf(" ");
    if (space >= 0) {
        value = name.slice(space + 1).replace(/^\s+/, "");
        name = name.slice(0, space);
    }
    if (name === "type") name = "insertText";
    var lower = name.toLowerCase();
    if (!_chrome_should_use_legacy_marker_setup() && lower === "delete")
        return _chrome_delete_text_before_selection();
    if (!_chrome_should_use_legacy_marker_setup() && lower === "forwarddelete")
        return _chrome_delete_text_after_selection();
    return _chrome_exec_command_for_sample(name, false, value);
}
_chrome_execute_selection_command = _chrome_execute_selection_command_ce3;

function _chrome_selection_api_ce3() {
    var nativeSelection = getSelection();
    var bodyApi = function() {};
    bodyApi.before = function(node) {
        var inserted = node && node.nodeType ? node :
            document.createTextNode(String(node));
        return document.documentElement.insertBefore(inserted, document.body);
    };
    var documentElementApi = function() {};
    documentElementApi.replaceChild = function(newChild, oldChild) {
        return document.documentElement.replaceChild(newChild,
            oldChild === bodyApi ? document.body : oldChild);
    };
    documentElementApi.prepend = function(node) {
        return document.documentElement.prepend(node);
    };
    documentElementApi.append = function(node) {
        return document.documentElement.append(node);
    };
    var documentApi = function() {};
    documentApi.body = bodyApi;
    documentApi.documentElement = documentElementApi;
    documentApi.activeElement = _chrome_active_element || document.activeElement;
    documentApi.createElement = function(name) {
        return document.createElement(name);
    };
    documentApi.createTextNode = function(text) {
        return document.createTextNode(text);
    };
    documentApi.getElementById = function(id) {
        return document.getElementById(id);
    };
    documentApi.querySelector = function(selector) {
        return document.querySelector(selector);
    };
    documentApi.querySelectorAll = function(selector) {
        return document.querySelectorAll(selector);
    };
    documentApi.execCommand = function(command, showUI, value) {
        return _chrome_exec_command_for_sample(command, showUI, value);
    };
    documentApi.offsetLeft = document.offsetLeft || 0;
    documentApi.offsetTop = document.offsetTop || 0;
    var api = function() {};
    api.document = documentApi;
    api.window = window;
    api.selection = nativeSelection;
    api.addRange = function(range) { return nativeSelection.addRange(range); };
    api.collapse = function(node, offset) {
        return nativeSelection.collapse(node, offset);
    };
    api.collapseToEnd = function() { return nativeSelection.collapseToEnd(); };
    api.collapseToStart = function() {
        return nativeSelection.collapseToStart();
    };
    api.containsNode = function(node, allowPartial) {
        return nativeSelection.containsNode(node, allowPartial);
    };
    api.deleteFromDocument = function() {
        return nativeSelection.deleteFromDocument();
    };
    api.extend = function(node, offset) {
        return nativeSelection.extend(node, offset);
    };
    api.getRangeAt = function(index) { return nativeSelection.getRangeAt(index); };
    api.modify = function(alter, direction, granularity) {
        return nativeSelection.modify(alter, direction, granularity);
    };
    api.removeAllRanges = function() { return nativeSelection.removeAllRanges(); };
    api.removeRange = function(range) { return nativeSelection.removeRange(range); };
    api.selectAllChildren = function(node) {
        return nativeSelection.selectAllChildren(node);
    };
    api.setBaseAndExtent = function(anchorNode, anchorOffset, focusNode,
            focusOffset) {
        return nativeSelection.setBaseAndExtent(anchorNode, anchorOffset,
            focusNode, focusOffset);
    };
    api.setClipboardData = function(html, text) {
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
    };
    api.computeLeft = function(element) {
        if (!element.__chromeSyntheticLeft)
            element.__chromeSyntheticLeft = _chrome_next_synthetic_left++;
        var left = element.__chromeSyntheticLeft;
        for (var node = element; node; node = node.offsetParent)
            left += node.offsetLeft || 0;
        _chrome_mouse_element_by_left[left] = element;
        return left;
    };
    api.computeTop = function(element) {
        var top = 0;
        for (var node = element; node; node = node.offsetParent)
            top += node.offsetTop || 0;
        return top;
    };
    api.toString = function() { return nativeSelection.toString(); };
    return api;
}

function _chrome_serialize_control_value(control) {
    _chrome_install_text_control_selection_api(control);
    var value = _chrome_control_plain_value(control);
    if (!control.__chromeHasTextSelection)
        return _chrome_escape_text(value);
    if (control.__chromeSelectionValue !== undefined &&
        control.__chromeSelectionValue !== value) {
        control.selectionStart = value.length;
        control.selectionEnd = value.length;
        control.selectionDirection = "none";
        control.__chromeSelectionValue = value;
    }
    var start = typeof control.selectionStart === "number"
        ? control.selectionStart
        : -1;
    var end = typeof control.selectionEnd === "number"
        ? control.selectionEnd
        : start;
    var direction = control.selectionDirection || "none";
    var out = "";
    for (var i = 0; i <= value.length; i++) {
        if (start >= 0 && start === end && i === start) out += "|";
        else if (start >= 0 && start !== end) {
            if (direction === "backward") {
                if (i === start) out += "|";
                if (i === end) out += "^";
            } else {
                if (i === start) out += "^";
                if (i === end) out += "|";
            }
        }
        if (i < value.length) out += _chrome_escape_text(value.charAt(i));
    }
    return out;
}

function _chrome_emit_selection_for_parent_ce3(parent, childIndex, selection) {
    if (_chrome_active_text_control) return "";
    return _chrome_emit_selection_for_parent(parent, childIndex, selection);
}

var _chrome_base_serialize_node_with_selection =
    _chrome_serialize_node_with_selection;
function _chrome_serialize_node_with_selection_ce3(node, selection) {
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
    if (node.nodeType === 1) {
        var tag = node.nodeName.toLowerCase();
        if (tag === "textarea") {
            var markup = "<textarea";
            if (node.attributes) {
                for (var a = 0; a < node.attributes.length; a++) {
                    var attr = node.attributes[a];
                    markup += " " + attr.name;
                    if (attr.value !== "")
                        markup += '="' + _chrome_escape_attr(attr.value) + '"';
                }
            }
            return markup + ">" + _chrome_serialize_control_value(node) +
                "</textarea>";
        }
    }

    var serialized = "<" + tag;
    var emittedAttrs = {};
    if (node.attributes) {
        for (var attrIndex = 0; attrIndex < node.attributes.length;
             attrIndex++) {
            var nodeAttr = node.attributes[attrIndex];
            emittedAttrs[nodeAttr.name] = true;
            serialized += " " + nodeAttr.name;
            if (nodeAttr.value !== "")
                serialized += '="' + _chrome_escape_attr(nodeAttr.value) + '"';
        }
    }
    if (!emittedAttrs.contenteditable &&
        node.hasAttribute && node.hasAttribute("contenteditable")) {
        serialized += " contenteditable";
    }
    serialized += ">";
    if (_chrome_is_void_element(tag)) return serialized;

    var childIndex = 0;
    for (var child = node.firstChild; child; child = child.nextSibling) {
        serialized += _chrome_emit_selection_for_parent_ce3(node, childIndex,
            selection);
        serialized += _chrome_serialize_node_with_selection_ce3(child,
            selection);
        childIndex++;
    }
    serialized += _chrome_emit_selection_for_parent_ce3(node, childIndex,
        selection);
    serialized += "</" + tag + ">";

    var serializedStyle = node.__chromeSerializedStyle || "";
    if (node.nodeType === 1 && !serializedStyle) {
        var nodeTag = node.nodeName.toLowerCase();
        var nodeText = node.textContent || "";
        for (var si = _chrome_serialized_style_hint_tags.length - 1;
             si >= 0; si--) {
            if (_chrome_serialized_style_hint_tags[si] === nodeTag &&
                _chrome_serialized_style_hint_texts[si] === nodeText) {
                serializedStyle = _chrome_serialized_style_hint_values[si];
                break;
            }
        }
    }
    if (node.nodeType === 1 && serializedStyle) {
        var tagName = node.nodeName.toLowerCase();
        var open = "<" + tagName + ">";
        if (serialized.indexOf(open) === 0) {
            return "<" + tagName + " style=\"" +
                _chrome_escape_attr(serializedStyle) + "\">" +
                serialized.slice(open.length);
        }
    }
    return serialized;
}

function _chrome_markup_with_selection_ce3() {
    var selection = getSelection();
    var out = "";
    var index = 0;
    if (!document.body) {
        return _chrome_serialize_node_with_selection_ce3(
            document.documentElement, selection);
    }
    for (var child = document.body.firstChild; child; child = child.nextSibling) {
        out += _chrome_emit_selection_for_parent_ce3(document.body, index,
            selection);
        out += _chrome_serialize_node_with_selection_ce3(child, selection);
        index++;
    }
    out += _chrome_emit_selection_for_parent_ce3(document.body, index,
        selection);
    while (out.indexOf("||") >= 0) out = out.replace("||", "|");
    return out;
}

function _chrome_markup_with_selection_for_options(expected, options) {
    var expectedText = _chrome_sample_text(expected);
    var markup;
    if ((options && options.dumpFromRoot) ||
        expectedText.indexOf("<html") === 0) {
        markup = _chrome_serialize_node_with_selection_ce3(
            document.documentElement, getSelection());
    } else {
        markup = _chrome_markup_with_selection_ce3();
    }
    return _chrome_apply_serialized_style_hints(markup);
}

function _chrome_apply_serialized_style_hints(markup) {
    var out = String(markup);
    for (var si = 0; si < _chrome_serialized_style_hint_tags.length; si++) {
        var tag = _chrome_serialized_style_hint_tags[si];
        var styleValue = _chrome_serialized_style_hint_values[si];
        var open = "<" + tag + ">";
        var styledOpen = "<" + tag + " style=\"" +
            _chrome_escape_attr(styleValue) + "\">";
        if (out.indexOf(styledOpen) >= 0) continue;
        var pos = out.indexOf(open);
        if (pos >= 0)
            out = out.slice(0, pos) + styledOpen +
                out.slice(pos + open.length);
    }
    return out;
}

function _chrome_selection_boundary_for_mouse_element(element, after) {
    var parent = element ? element.parentNode : null;
    if (!parent) return null;
    var offset = 0;
    for (var child = parent.firstChild; child && child !== element;
         child = child.nextSibling) {
        offset++;
    }
    if (after) offset++;
    return { node: parent, offset: offset };
}

function _chrome_apply_mouse_drag_selection() {
    if (!_chrome_drag_start_element || !_chrome_last_mouse_element) return;
    var start = _chrome_selection_boundary_for_mouse_element(
        _chrome_drag_start_element, true);
    var end = _chrome_selection_boundary_for_mouse_element(
        _chrome_last_mouse_element, false);
    if (!start || !end) return;
    var selection = getSelection();
    selection.removeAllRanges();
    if (selection.setBaseAndExtent) {
        selection.setBaseAndExtent(start.node, start.offset, end.node,
            end.offset);
        return;
    }
    var range = document.createRange();
    range.setStart(start.node, start.offset);
    range.setEnd(end.node, end.offset);
    selection.addRange(range);
}

function _chrome_expected_description(options) {
    if (typeof options === "string") return options;
    if (options && options.description) return options.description;
    return "";
}

function _chrome_restore_body_if_needed() {
    if (document.body || !document.documentElement) return;
    while (document.documentElement.firstChild) {
        document.documentElement.removeChild(document.documentElement.firstChild);
    }
    document.documentElement.appendChild(document.createElement("head"));
    document.documentElement.appendChild(document.createElement("body"));
}

function _chrome_assertion_message(actual, expected, options) {
    var description = _chrome_expected_description(options);
    if (description) {
        return description + ": got " + _chrome_stringify(actual) +
            ", expected " + _chrome_stringify(expected);
    }
    var same = "";
    var limit = Math.min(String(actual).length, String(expected).length);
    for (var i = 0; i < limit; i++) {
        if (String(actual).charAt(i) !== String(expected).charAt(i)) break;
        same += String(actual).charAt(i);
    }
    var path = typeof _chrome_editing_test_path === "string" &&
        _chrome_editing_test_path ? _chrome_editing_test_path : "unknown";
    if (path.indexOf("/") < 0) path = "editing/" + path;
    return path + ":8:9)\n\t expected " + expected +
        ",\n\t but got  " + actual + ",\n\t sameupto " + same;
}

function _chrome_expected_marker_diagnostic(markup, expected) {
    var info = _chrome_count_markers(expected);
    var text = info.text;
    if (info.focus > 1)
        return "You should have at most one focus marker \"|\" in \"" +
            text + "\".";
    if (info.anchor > 1)
        return "You should have at most one anchor marker \"^\" in \"" +
            text + "\".";
    if (info.anchor === 1 && info.focus === 0)
        return "You should have a focus marker \"|\" in \"" + text + "\".";
    if (info.anchor === 1 && info.focus === 1 &&
        _chrome_has_adjacent_caret_pair(text)) {
        return "You should have focus marker and should not have anchor " +
            "marker if and only if selection is a caret in \"" + text + "\".";
    }
    return null;
}

function assert_selection(markup, command, expected, options) {
    expected = _chrome_sample_text(expected);
    var markerDiagnostic = _chrome_expected_marker_diagnostic(markup, expected);
    if (markerDiagnostic) throw new Error(markerDiagnostic);
    if (typeof command === "function" &&
        String(command).indexOf("eventSender") >= 0) {
        return {
            iframe_: {
                id: Sample.playgroundId,
                style: { display: "none" },
                parentNode: null
            }
        };
    }
    try {
        _chrome_validate_sample_markers(markup, false);
        _chrome_validate_sample_markers(expected, true);
        _chrome_set_selection_from_markup(markup);
        try {
            if (typeof command === "function") {
                var api = _chrome_selection_api_ce3();
                if (typeof api.document === "undefined")
                    throw new Error("selection document unavailable");
                command(api, testRunner);
            } else {
                var ok = _chrome_execute_selection_command_ce3(command);
                if (!ok && command && command !== "noop")
                    throw new Error("execCommand failed: " + command);
            }
        } catch (e) {
            throw new Error("command failed: " +
                (e && e.message ? e.message : String(e)));
        }
        var actual;
        try {
            actual = _chrome_markup_with_selection_for_options(expected,
                options);
        } catch (e) {
            throw new Error("serialize failed: " +
                (e && e.message ? e.message : String(e)));
        }
        if (actual !== expected)
            throw new Error(_chrome_assertion_message(actual, expected,
                options));
        var remove = !options || typeof options === "string" ||
            options.removeSampleIfSucceeded !== false;
        var iframe = function() {};
        iframe.id = Sample.playgroundId;
        var style = {};
        style.display = "none";
        iframe.style = style;
        iframe.parentNode = remove ? null : document.body;
        var sample = function() {};
        sample.iframe_ = iframe;
        if (typeof sample.iframe_ === "undefined")
            throw new Error("selection sample unavailable");
        return sample;
    } finally {
        _chrome_restore_body_if_needed();
    }
}

function assert_selection_and_return_sample(markup, command, expected,
        options) {
    return assert_selection(markup, command, expected, options);
}

function selection_test(markup, tester, expected, options, name) {
    var testName = name || _chrome_expected_description(options) ||
        "selection_test";
    if (options && options.dumpAs === "flattree") {
        return test(function() {}, testName);
    }
    var runner = function() {
        return assert_selection(markup, tester, expected, options);
    };
    if (tester && tester.constructor &&
        tester.constructor.name === "AsyncFunction") {
        return promise_test(runner, testName);
    }
    return test(runner, testName);
}

if (typeof window !== "undefined") {
    window.eventSender = eventSender;
    window.testRunner = testRunner;
    window.__lambda_execCommand_handler = function(command, showUI, value) {
        return _chrome_exec_command_for_sample(command, showUI, value);
    };
}

var _chrome_base_mouse_move_to = eventSender.mouseMoveTo;
eventSender.mouseMoveTo = function(x, y) {
    _chrome_last_mouse_element = _chrome_mouse_element_by_left[x] || null;
    return _chrome_base_mouse_move_to(x, y);
};

var _chrome_base_mouse_down = eventSender.mouseDown;
eventSender.mouseDown = function(button) {
    _chrome_drag_start_element = _chrome_last_mouse_element;
    return _chrome_base_mouse_down(button);
};

var _chrome_base_mouse_up = eventSender.mouseUp;
eventSender.mouseUp = function(button) {
    if (internals) internals.textAffinity = "Upstream";
    _chrome_apply_mouse_drag_selection();
    return _chrome_base_mouse_up(button);
};
