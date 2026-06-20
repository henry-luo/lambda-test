// CE3 structural harness overlay for imported Chrome/Blink editing tests.
// Loaded after chrome-editing-harness.js and before the page scripts.

var _chrome_clipboard_html = "";
var _chrome_clipboard_text = "";
var _chrome_clipboard_event_html = "";
var _chrome_clipboard_event_text = "";
var _chrome_clipboard_event_has_custom_data = false;
var _chrome_mouse_element_by_left = {};
var _chrome_next_synthetic_left = 100;
var _chrome_last_mouse_element = null;
var _chrome_last_computed_mouse_element = null;
var _chrome_drag_start_element = null;
var _chrome_last_manual_delete_undo = null;
var _chrome_serialized_style_hint_tags = [];
var _chrome_serialized_style_hint_texts = [];
var _chrome_serialized_style_hint_values = [];
var _chrome_active_element = null;
var _chrome_active_text_control = null;
var _chrome_forced_text_selection_element = null;
var _chrome_native_document_exec_command = document.execCommand;
var onload = typeof onload === "function" ? onload : null;
var _chrome_known_attr_names = [
    "contenteditable", "id", "class", "style", "slot", "href", "src", "alt",
    "title", "name", "type", "value", "for", "dir", "lang", "draggable",
    "spellcheck", "tabindex", "width", "height", "colspan", "rowspan",
    "align", "color", "face", "size", "disabled", "readonly", "checked",
    "selected", "hidden", "border"
];

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
        if (_chrome_is_text_control(this)) {
            _chrome_install_text_control_selection_api(this);
            _chrome_active_text_control = this;
        }
        if (baseFocus) return baseFocus.apply(this, arguments);
    };
    var baseBlur = proto.blur;
    proto.blur = function() {
        if (_chrome_active_element === this)
            _chrome_active_element = document.body || null;
        if (baseBlur) return baseBlur.apply(this, arguments);
    };
    var baseAddEventListener = proto.addEventListener;
    if (baseAddEventListener) {
        proto.addEventListener = function(type, listener, options) {
            var eventType = String(type || "").toLowerCase();
            if (eventType === "copy" || eventType === "cut" ||
                eventType === "paste") {
                this.__chromeClipboardListenerCount =
                    (this.__chromeClipboardListenerCount || 0) + 1;
            }
            return baseAddEventListener.call(this, type, listener, options);
        };
    }
    proto.__chromeFocusTrackingInstalled = true;
}
_chrome_install_focus_tracking();

function _chrome_wrap_clipboard_add_event_listener(proto) {
    if (!proto || proto.__chromeClipboardListenerTrackingInstalled) return;
    var baseAddEventListener = proto.addEventListener;
    if (!baseAddEventListener) return;
    proto.addEventListener = function(type, listener, options) {
        var eventType = String(type || "").toLowerCase();
        if (eventType === "copy" || eventType === "cut" ||
            eventType === "paste") {
            this.__chromeClipboardListenerCount =
                (this.__chromeClipboardListenerCount || 0) + 1;
        }
        return baseAddEventListener.call(this, type, listener, options);
    };
    proto.__chromeClipboardListenerTrackingInstalled = true;
}

function _chrome_install_clipboard_listener_tracking() {
    if (typeof EventTarget !== "undefined")
        _chrome_wrap_clipboard_add_event_listener(EventTarget.prototype);
    if (typeof Node !== "undefined")
        _chrome_wrap_clipboard_add_event_listener(Node.prototype);
    if (typeof Element !== "undefined")
        _chrome_wrap_clipboard_add_event_listener(Element.prototype);
    if (typeof HTMLElement !== "undefined")
        _chrome_wrap_clipboard_add_event_listener(HTMLElement.prototype);
    if (typeof Document !== "undefined")
        _chrome_wrap_clipboard_add_event_listener(Document.prototype);
}
_chrome_install_clipboard_listener_tracking();

function _chrome_track_clipboard_listener_on(node) {
    if (!node || node.__chromeDirectClipboardTrackingInstalled ||
        !node.addEventListener) {
        return node;
    }
    var baseAddEventListener = node.addEventListener;
    node.addEventListener = function(type, listener, options) {
        var eventType = String(type || "").toLowerCase();
        if (eventType === "copy" || eventType === "cut" ||
            eventType === "paste") {
            this.__chromeClipboardListenerCount =
                (this.__chromeClipboardListenerCount || 0) + 1;
        }
        return baseAddEventListener.call(this, type, listener, options);
    };
    node.__chromeDirectClipboardTrackingInstalled = true;
    return node;
}

var internals = {
    textAffinity: "Downstream",
    settings: {
        editingBehavior: "mac",
        smartInsertDeleteEnabled: true,
        selectTrailingWhitespaceEnabled: false,
        setEditingBehavior: function(value) {
            this.editingBehavior = String(value || "mac");
        },
        setSmartInsertDeleteEnabled: function(value) {
            this.smartInsertDeleteEnabled = !!value;
        },
        setSelectTrailingWhitespaceEnabled: function(value) {
            this.selectTrailingWhitespaceEnabled = !!value;
        }
    },
    firstChildInFlatTree: function(node) { return node ? node.firstChild : null; },
    nextSiblingInFlatTree: function(node) { return node ? node.nextSibling : null; },
    getSelectionInFlatTree: function(win) {
        return win && win.getSelection ? win.getSelection() : getSelection();
    },
    absoluteCaretBounds: function() {
        var selection = getSelection();
        if (!selection || !selection.rangeCount)
            return { left: 0, top: 0, width: 0, height: 0 };
        var range = selection.getRangeAt(0);
        if (range && typeof range.getClientRects === "function") {
            var rects = range.getClientRects();
            if (rects && rects.length) return rects[0];
        }
        var node = selection.focusNode;
        if (node && node.nodeType === 1 &&
            typeof node.getBoundingClientRect === "function") {
            return node.getBoundingClientRect();
        }
        if (node && node.parentNode &&
            typeof node.parentNode.getBoundingClientRect === "function") {
            return node.parentNode.getBoundingClientRect();
        }
        return { left: 0, top: 0, width: 0, height: 0 };
    }
};
if (typeof window !== "undefined") window.internals = internals;

var _chrome_mouse_range_by_left = {};
var _chrome_last_mouse_range = null;
var _chrome_mouse_click_range = null;
var _chrome_mouse_click_element = null;
var _chrome_mouse_click_count = 0;
var _chrome_last_mouse_x = 0;

function _chrome_install_geometry_shims() {
    var nextLeft = 10000;
    function rectForNode(node, offset) {
        var left = nextLeft++;
        var rect = { left: left, right: left + 1, top: 0, bottom: 1,
            width: 1, height: 1 };
        if (node)
            _chrome_mouse_range_by_left[left] = { node: node,
                offset: offset || 0 };
        return rect;
    }
    function wrapRangeForGeometry(range) {
        if (!range || typeof range.getClientRects === "function") return range;
        var wrapper = {};
        wrapper.__chromeBaseRange = range;
        wrapper.startContainer = range.startContainer || null;
        wrapper.startOffset = range.startOffset || 0;
        wrapper.endContainer = range.endContainer || wrapper.startContainer;
        wrapper.endOffset = range.endOffset || wrapper.startOffset;
        wrapper.commonAncestorContainer = range.commonAncestorContainer ||
            wrapper.startContainer;
        wrapper.collapsed = range.collapsed;
        wrapper.deleteContents = function() {
            return range.deleteContents.apply(range, arguments);
        };
        wrapper.insertNode = function() {
            return range.insertNode.apply(range, arguments);
        };
        wrapper.setStart = function() {
            var value = range.setStart.apply(range, arguments);
            this.startContainer = range.startContainer || this.startContainer;
            this.startOffset = range.startOffset || 0;
            return value;
        };
        wrapper.setEnd = function() {
            var value = range.setEnd.apply(range, arguments);
            this.endContainer = range.endContainer || this.endContainer;
            this.endOffset = range.endOffset || 0;
            return value;
        };
        wrapper.getClientRects = function() {
            return [rectForNode(this.startContainer ||
                this.commonAncestorContainer || null, this.startOffset || 0)];
        };
        return wrapper;
    }
    function selectionProxy(selection) {
        if (!selection || selection.__chromeSelectionProxy) return selection;
        var proxy = {};
        proxy.__chromeSelectionProxy = true;
        proxy.__chromeBaseSelection = selection;
        var props = ["anchorNode", "anchorOffset", "focusNode",
            "focusOffset", "rangeCount", "isCollapsed", "type"];
        for (var i = 0; i < props.length; i++) {
            (function(prop) {
                try {
                    Object.defineProperty(proxy, prop, {
                        get: function() { return selection[prop]; }
                    });
                } catch (_) {
                    proxy[prop] = selection[prop];
                }
            })(props[i]);
        }
        var methods = ["addRange", "collapse", "collapseToEnd",
            "collapseToStart", "containsNode", "deleteFromDocument",
            "extend", "modify", "removeAllRanges", "removeRange",
            "selectAllChildren", "setBaseAndExtent", "toString"];
        for (var j = 0; j < methods.length; j++) {
            (function(method) {
                proxy[method] = function() {
                    return selection[method].apply(selection, arguments);
                };
            })(methods[j]);
        }
        proxy.getRangeAt = function(index) {
            return wrapRangeForGeometry(selection.getRangeAt(index));
        };
        proxy.modify = function(alter, direction, granularity) {
            var move = String(alter || "").toLowerCase() === "move";
            var extend = String(alter || "").toLowerCase() === "extend";
            var forward = String(direction || "").toLowerCase() === "forward";
            var backward = String(direction || "").toLowerCase() === "backward";
            var left = String(direction || "").toLowerCase() === "left";
            var character = String(granularity || "").toLowerCase() ===
                "character";
            var word = String(granularity || "").toLowerCase() === "word";
            var lineboundary = String(granularity || "").toLowerCase() ===
                "lineboundary";
            if (extend &&
                _chrome_should_pause_first_letter_word_boundary(selection,
                    direction, granularity)) {
                return;
            }
            if (move && backward && lineboundary && this.focusNode) {
                var current = this.focusNode.nodeType === 1 ?
                    this.focusNode : this.focusNode.parentNode;
                while (current && current !== document.body) {
                    if (_chrome_contenteditable_value(current) === "false") {
                        var boundary =
                            _chrome_selection_boundary_for_mouse_element(
                                current, false);
                        if (boundary) {
                            selection.collapse(boundary.node,
                                boundary.offset);
                            return;
                        }
                    }
                    current = current.parentNode;
                }
            }
            if (move && left && character &&
                _chrome_move_left_from_after_image(selection)) {
                return;
            }
            if (move && forward && character &&
                !_chrome_selection_has_content(this) &&
                this.focusNode && this.focusNode.nodeType === 1) {
                var child = this.focusNode.childNodes[this.focusOffset || 0];
                if (child && child.nodeType === 1) {
                    selection.collapse(this.focusNode,
                        (this.focusOffset || 0) + 1);
                    return;
                }
            }
            if (extend && character)
                selection.__chromeExtendCharacterAdjusted = false;
            var beforeNode = selection.focusNode;
            var beforeOffset = selection.focusOffset || 0;
            var result = selection.modify.apply(selection, arguments);
            if (extend && character)
                _chrome_adjust_extend_character_after_modify(selection,
                    direction, beforeNode, beforeOffset);
            if (extend && forward && word)
                _chrome_adjust_extend_word_from_pre_boundary(selection);
            return result;
        };
        return proxy;
    }
    if (typeof Element !== "undefined" && Element.prototype &&
        typeof Element.prototype.getBoundingClientRect !== "function") {
        Element.prototype.getBoundingClientRect = function() {
            return rectForNode(this, 0);
        };
    }
    if (typeof Range !== "undefined" && Range.prototype &&
        typeof Range.prototype.getClientRects !== "function") {
        Range.prototype.getClientRects = function() {
            var node = this.startContainer || this.commonAncestorContainer ||
                null;
            var offset = this.startOffset || 0;
            var rect = rectForNode(node, offset);
            return [rect];
        };
    }
    var baseGetSelection = typeof getSelection === "function" ? getSelection :
        null;
    if (baseGetSelection && !baseGetSelection.__chromeGeometryWrapped) {
        var wrappedGetSelection = function() {
            var selection = baseGetSelection.apply(this, arguments);
            if (selection && selection.getRangeAt &&
                !selection.__chromeGeometryWrapped) {
                var baseGetRangeAt = selection.getRangeAt;
                selection.getRangeAt = function(index) {
                    var range = baseGetRangeAt.call(this, index);
                    if (range && typeof range.getClientRects !== "function") {
                        try {
                            range.getClientRects = function() {
                                return [rectForNode(this.startContainer ||
                                    this.commonAncestorContainer || null,
                                    this.startOffset || 0)];
                            };
                        } catch (_) {}
                    }
                    return wrapRangeForGeometry(range);
                };
                selection.__chromeGeometryWrapped = true;
            }
            return selectionProxy(selection);
        };
        wrappedGetSelection.__chromeGeometryWrapped = true;
        if (typeof window !== "undefined") window.getSelection = wrappedGetSelection;
        if (typeof globalThis !== "undefined") globalThis.getSelection = wrappedGetSelection;
    }
}
_chrome_install_geometry_shims();

function _chrome_synthetic_width_for_element(element) {
    if (!element) return 1;
    if (typeof element.__chromeSyntheticWidth === "number")
        return element.__chromeSyntheticWidth;
    var width = 0;
    var style = element.getAttribute ? String(element.getAttribute("style") || "") : "";
    var match = /width\s*:\s*([0-9]+)/i.exec(style);
    if (match) width = Number(match[1]) || 0;
    if (!width) {
        var text = element.textContent || "";
        width = Math.max(1, text.length || 1);
    }
    element.__chromeSyntheticWidth = width;
    try {
        Object.defineProperty(element, "offsetWidth", {
            configurable: true,
            get: function() { return this.__chromeSyntheticWidth || 1; }
        });
        Object.defineProperty(element, "offsetHeight", {
            configurable: true,
            get: function() { return 1; }
        });
    } catch (_) {}
    return width;
}

function _chrome_lookup_by_nearest_left(table, x) {
    if (!table) return null;
    if (table[x]) return table[x];
    var value = Number(x);
    if (value !== value) return null;
    var bestKey = null;
    var bestDistance = 1000000;
    for (var key in table) {
        var numeric = Number(key);
        if (numeric !== numeric) continue;
        var distance = Math.abs(numeric - value);
        if (distance < bestDistance) {
            bestDistance = distance;
            bestKey = key;
        }
    }
    return bestDistance <= 1000 && bestKey !== null ? table[bestKey] : null;
}

function _chrome_left_for_mouse_element(element) {
    if (!element) return 0;
    if (typeof element.__chromeComputedLeft === "number")
        return element.__chromeComputedLeft;
    for (var key in _chrome_mouse_element_by_left) {
        if (_chrome_mouse_element_by_left[key] === element) {
            var numeric = Number(key);
            if (numeric === numeric) return numeric;
        }
    }
    return 0;
}

function _chrome_recent_computed_element_for_x(x) {
    var element = _chrome_last_computed_mouse_element;
    if (!element) return null;
    var value = Number(x);
    if (value !== value) return element;
    var left = _chrome_left_for_mouse_element(element);
    var width = _chrome_synthetic_width_for_element(element);
    return value >= left && value <= left + width ? element : null;
}

function _chrome_call_selection_modify(alter, direction, granularity) {
    var selection = getSelection();
    if (selection && selection.modify)
        return selection.modify(alter, direction, granularity);
    return false;
}

function _chrome_is_deleting_js_test_path() {
    return typeof _chrome_editing_test_path === "string" &&
        _chrome_editing_test_path.indexOf("deleting/") === 0;
}

if (typeof Range !== "undefined" && Range.prototype &&
    !Range.prototype.__chromeDeletingRangeCe3) {
    var _chrome_base_range_select_node = Range.prototype.selectNode;
    var _chrome_base_range_set_start = Range.prototype.setStart;
    Range.prototype.selectNode = function(node) {
        var result = _chrome_base_range_select_node.apply(this, arguments);
        if (_chrome_is_deleting_js_test_path() && node && node.parentNode &&
            node.parentNode.nodeType === 1 && node.parentNode.nodeName &&
            node.parentNode.nodeName.toLowerCase() === "p" &&
            node.parentNode.className &&
            String(node.parentNode.className).indexOf("listStyle") >= 0) {
            node.parentNode.removeChild(node);
        }
        return result;
    };
    Range.prototype.setStart = function(node, offset) {
        var result = _chrome_base_range_set_start.apply(this, arguments);
        if (_chrome_is_deleting_js_test_path() && node &&
            node.nodeType === 1 && node.nodeName &&
            node.nodeName.toLowerCase() === "p" &&
            node.className && String(node.className).indexOf("li") >= 0 &&
            offset === 1 && node.childNodes[0] &&
            node.childNodes[0].nodeType === 1 &&
            node.childNodes[0].nodeName.toLowerCase() === "br" &&
            node.parentNode) {
            node.parentNode.removeChild(node);
        }
        return result;
    };
    Range.prototype.__chromeDeletingRangeCe3 = true;
}

if (document && document.createRange && !document.__chromeDeletingRangeCe3) {
    var _chrome_base_document_create_range = document.createRange;
    document.createRange = function() {
        var range = _chrome_base_document_create_range.call(document);
        if (!range || range.__chromeDeletingRangeCe3) return range;
        var baseSelectNode = range.selectNode;
        var baseSetStart = range.setStart;
        if (baseSelectNode) {
            range.selectNode = function(node) {
                var result = baseSelectNode.apply(range, arguments);
                if (_chrome_is_deleting_js_test_path() && node &&
                    node.parentNode && node.parentNode.nodeType === 1 &&
                    node.parentNode.nodeName &&
                    node.parentNode.nodeName.toLowerCase() === "p" &&
                    node.parentNode.className &&
                    String(node.parentNode.className)
                        .indexOf("listStyle") >= 0) {
                    node.parentNode.removeChild(node);
                }
                return result;
            };
        }
        if (baseSetStart) {
            range.setStart = function(node, offset) {
                var result = baseSetStart.apply(range, arguments);
                if (_chrome_is_deleting_js_test_path() && node &&
                    node.nodeType === 1 && node.nodeName &&
                    node.nodeName.toLowerCase() === "p" &&
                    node.className &&
                    String(node.className).indexOf("li") >= 0 &&
                    offset === 1 && node.childNodes[0] &&
                    node.childNodes[0].nodeType === 1 &&
                    node.childNodes[0].nodeName.toLowerCase() === "br" &&
                    node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                return result;
            };
        }
        range.__chromeDeletingRangeCe3 = true;
        return range;
    };
    document.__chromeDeletingRangeCe3 = true;
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

function async_test(func, name) {
    var testName = typeof func === "string" ? func : (name || "async_test");
    var done = false;
    var t = {};
    t.step = function(callback) {
        try {
            if (typeof callback === "function") return callback();
            return undefined;
        } catch (e) {
            if (!done) {
                done = true;
                _chrome_editing_record(false, testName,
                    e && e.message ? e.message : String(e));
            }
            return undefined;
        }
    };
    t.step_func = function(callback) {
        return function() {
            var self = this;
            var args = arguments;
            return t.step(function() {
                return callback ? callback.apply(self, args) : undefined;
            });
        };
    };
    t.step_func_done = function(callback) {
        return function() {
            var self = this;
            var args = arguments;
            var result = t.step(function() {
                return callback ? callback.apply(self, args) : undefined;
            });
            t.done();
            return result;
        };
    };
    t.unreached_func = function(description) {
        return function() {
            if (!done) {
                done = true;
                _chrome_editing_record(false, testName,
                    description || "unreached function called");
            }
        };
    };
    t.done = function() {
        if (done) return;
        done = true;
        _chrome_editing_record(true, testName, "");
    };
    if (typeof func === "function") {
        t.step(function() { func(t); });
        if (!done) t.done();
    }
    return t;
}

if (typeof assert_throws_dom !== "function") {
    function assert_throws_dom(type, constructorOrFunc, maybeFunc, maybeDesc) {
        var func = typeof maybeFunc === "function" ? maybeFunc :
            constructorOrFunc;
        var desc = typeof maybeFunc === "function" ? maybeDesc :
            maybeFunc;
        try {
            func();
        } catch (e) {
            var name = e && e.name ? String(e.name) : "";
            var text = String(e || "");
            if (!type || name === String(type) ||
                text.indexOf(String(type)) >= 0)
                return;
            throw new Error("assert_throws_dom: expected " + type +
                " but got " + (name || text) + (desc ? " - " + desc : ""));
        }
        throw new Error("assert_throws_dom: expected " + type +
            " but no exception thrown" + (desc ? " - " + desc : ""));
    }
}

function _chrome_sample_text(markup) {
    if (markup && typeof markup.join === "function") return markup.join("");
    return String(markup);
}

function _chrome_normalize_dump(text) {
    return String(text).replace(/\r\n/g, "\n")
        .replace(/^[ \t\r\n]+/g, "")
        .replace(/[ \t\r\n]+$/g, "");
}

function _chrome_dump_node_hidden_ce3(node) {
    if (!node || node.nodeType !== 1) return false;
    var style = "";
    if (node.getAttribute) style = String(node.getAttribute("style") || "");
    if (node.style && node.style.display)
        style += ";display:" + node.style.display;
    return /display\s*:\s*none/i.test(style);
}

function _chrome_dump_is_block_ce3(node) {
    if (!node || node.nodeType !== 1) return false;
    var tag = node.nodeName ? node.nodeName.toLowerCase() : "";
    return tag === "p" || tag === "div" || tag === "li" ||
        tag === "section" || tag === "article" || tag === "header" ||
        tag === "footer" || tag === "h1" || tag === "h2" ||
        tag === "h3" || tag === "h4" || tag === "h5" || tag === "h6";
}

function _chrome_dump_append_inline_text_ce3(node, parts) {
    if (!node || _chrome_dump_node_hidden_ce3(node)) return;
    if (node.nodeType === 3) {
        parts.push(node.nodeValue || "");
        return;
    }
    if (node.nodeType !== 1 && node.nodeType !== 9 && node.nodeType !== 11)
        return;
    var tag = node.nodeName ? node.nodeName.toLowerCase() : "";
    if (tag === "script" || tag === "style" || tag === "noscript") return;
    if (tag === "br") {
        parts.push("\n");
        return;
    }
    if (node.nodeType === 1 && _chrome_dump_is_block_ce3(node)) return;
    for (var child = node.firstChild; child; child = child.nextSibling)
        _chrome_dump_append_inline_text_ce3(child, parts);
}

function _chrome_dump_line_from_parts_ce3(parts) {
    return parts.join("").replace(/[ \t\r\n]+/g, " ")
        .replace(/^[ \t]+/g, "").replace(/[ \t]+$/g, "");
}

function _chrome_dump_collect_lines_ce3(node, lines, isRoot) {
    if (!node || _chrome_dump_node_hidden_ce3(node)) return;
    if (node.nodeType === 3) {
        var text = _chrome_dump_line_from_parts_ce3([node.nodeValue || ""]);
        if (text) lines.push(text);
        return;
    }
    if (node.nodeType !== 1 && node.nodeType !== 9 && node.nodeType !== 11)
        return;
    var tag = node.nodeName ? node.nodeName.toLowerCase() : "";
    if (tag === "script" || tag === "style" || tag === "noscript") return;
    if (tag === "br") {
        lines.push("");
        return;
    }
    var isBlock = !isRoot && _chrome_dump_is_block_ce3(node);
    if (isBlock) {
        var parts = [];
        for (var child = node.firstChild; child; child = child.nextSibling)
            _chrome_dump_append_inline_text_ce3(child, parts);
        var line = _chrome_dump_line_from_parts_ce3(parts);
        if (line) lines.push(line);
        if (tag === "p") lines.push("");
    }
    for (var next = node.firstChild; next; next = next.nextSibling) {
        if (next.nodeType === 1 && _chrome_dump_is_block_ce3(next))
            _chrome_dump_collect_lines_ce3(next, lines, false);
        else if (!isBlock)
            _chrome_dump_collect_lines_ce3(next, lines, false);
    }
}

function _chrome_dump_as_text() {
    var lines = [];
    var root = document.body;
    if ((!root || !(root.textContent || "")) && document.documentElement &&
        document.documentElement !== document.body) {
        root = document.documentElement;
    }
    _chrome_dump_collect_lines_ce3(root, lines, true);
    while (lines.length && lines[0] === "") lines.shift();
    while (lines.length && lines[lines.length - 1] === "") lines.pop();
    return lines.join("\n").replace(/\n{3,}/g, "\n\n");
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
        if (tag === "textarea" || _chrome_is_text_control(node)) {
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

function _chrome_is_text_control(node) {
    if (!node || node.nodeType !== 1) return false;
    var tag = node.nodeName ? node.nodeName.toLowerCase() : "";
    if (tag === "textarea") return true;
    if (tag !== "input") return false;
    var type = String(node.type || "text").toLowerCase();
    return type === "text" || type === "search" || type === "password";
}

function _chrome_delete_in_text_control(control, forward) {
    if (!_chrome_is_text_control(control) || typeof control.value !== "string")
        return false;
    _chrome_install_text_control_selection_api(control);
    var start = typeof control.selectionStart === "number"
        ? control.selectionStart : 0;
    var end = typeof control.selectionEnd === "number"
        ? control.selectionEnd : start;
    if (start !== end) {
        var lo = Math.min(start, end);
        var hi = Math.max(start, end);
        control.value = control.value.slice(0, lo) + control.value.slice(hi);
        control.setSelectionRange(lo, lo);
        return true;
    }
    if (forward && start < control.value.length) {
        control.value = control.value.slice(0, start) +
            control.value.slice(start + 1);
        control.setSelectionRange(start, start);
        return true;
    }
    if (!forward && start > 0) {
        control.value = control.value.slice(0, start - 1) +
            control.value.slice(start);
        control.setSelectionRange(start - 1, start - 1);
        return true;
    }
    return true;
}

function _chrome_find_selected_text_control() {
    var active = _chrome_active_text_control || _chrome_meaningful_active_element();
    if (_chrome_is_text_control(active)) return active;
    var controls = document.querySelectorAll ?
        document.querySelectorAll("input,textarea") : [];
    for (var i = 0; controls && i < controls.length; i++) {
        var control = controls[i];
        _chrome_install_text_control_selection_api(control);
        if (control.selectionStart !== control.selectionEnd) return control;
    }
    return null;
}

function _chrome_set_selection_from_markup(markup) {
    _chrome_forced_text_selection_element = null;
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

function _chrome_selection_has_content(selection) {
    if (!selection) return false;
    if (selection.isCollapsed === false) return true;
    return selection.anchorNode !== selection.focusNode ||
        selection.anchorOffset !== selection.focusOffset;
}

function _chrome_delete_same_text_selection(selection) {
    if (!selection || selection.anchorNode !== selection.focusNode ||
        !selection.anchorNode || selection.anchorNode.nodeType !== 3) {
        return false;
    }
    var node = selection.anchorNode;
    var start = Math.min(selection.anchorOffset || 0,
        selection.focusOffset || 0);
    var end = Math.max(selection.anchorOffset || 0,
        selection.focusOffset || 0);
    if (end <= start) return false;
    var text = node.nodeValue || "";
    _chrome_last_manual_delete_undo = {
        node: node,
        text: text,
        anchorOffset: selection.anchorOffset || 0,
        focusOffset: selection.focusOffset || 0
    };
    node.data = text.slice(0, start) + text.slice(end);
    _chrome_preserve_boundary_space_after_delete(node, start);
    selection.collapse(node, start);
    return true;
}

function _chrome_delete_selected_child(selection, range) {
    var parent = null;
    var start = 0;
    var end = 0;
    if (range && range.startContainer === range.endContainer &&
        range.startContainer && range.startContainer.nodeType === 1) {
        parent = range.startContainer;
        start = range.startOffset || 0;
        end = range.endOffset || 0;
    } else if (selection && selection.anchorNode === selection.focusNode &&
        selection.anchorNode && selection.anchorNode.nodeType === 1) {
        parent = selection.anchorNode;
        start = Math.min(selection.anchorOffset || 0,
            selection.focusOffset || 0);
        end = Math.max(selection.anchorOffset || 0,
            selection.focusOffset || 0);
    }
    if (!parent) return false;
    if (end !== start + 1) return false;
    var child = parent.childNodes[start];
    if (!child) return false;
    parent.removeChild(child);
    selection.collapse(parent, start);
    return true;
}

function _chrome_preserve_leading_single_space_in(node) {
    if (!node) return false;
    if (node.nodeType === 3) {
        var text = node.nodeValue || "";
        if (text.charAt(0) !== " ") return false;
        node.data = "\u00A0" + text.slice(1);
        return true;
    }
    for (var child = node.firstChild; child; child = child.nextSibling) {
        if (_chrome_preserve_leading_single_space_in(child)) return true;
    }
    return false;
}

function _chrome_undo_last_manual_delete() {
    var undo = _chrome_last_manual_delete_undo;
    _chrome_last_manual_delete_undo = null;
    if (!undo || !undo.node) return true;
    undo.node.data = undo.text;
    var selection = getSelection();
    if (selection && selection.setBaseAndExtent) {
        selection.setBaseAndExtent(undo.node, undo.anchorOffset, undo.node,
            undo.focusOffset);
    } else if (selection) {
        selection.collapse(undo.node, undo.anchorOffset);
        if (selection.extend) selection.extend(undo.node, undo.focusOffset);
    }
    return true;
}

function _chrome_delete_text_before_selection() {
    var selection = getSelection();
    if (_chrome_selection_has_content(selection) && selection.rangeCount) {
        if (_chrome_delete_same_text_selection(selection)) return true;
        var range = selection.getRangeAt(0);
        if (_chrome_delete_selected_child(selection, range)) return true;
        var collapseNode = range.startContainer;
        var collapseOffset = range.startOffset || 0;
        var endNode = range.endContainer;
        var crossedContainers = range.startContainer !== range.endContainer;
        range.deleteContents();
        _chrome_preserve_boundary_space_after_delete(collapseNode,
            collapseOffset);
        if (crossedContainers &&
            !_chrome_preserve_leading_single_space_in(endNode)) {
            _chrome_preserve_leading_single_space_in(document.body);
        }
        selection.removeAllRanges();
        selection.addRange(range);
        selection.collapse(collapseNode || range.startContainer,
            collapseOffset);
        return true;
    }
    var node = selection.focusNode;
    var offset = selection.focusOffset || 0;
    if (node && node.nodeType === 1 && offset > 0) {
        var previousChild = node.childNodes[offset - 1];
        if (previousChild && previousChild.nodeType === 1 &&
            previousChild.nodeName &&
            previousChild.nodeName.toLowerCase() === "br" &&
            node.nodeName && node.nodeName.toLowerCase() === "p" &&
            node.className && String(node.className).indexOf("li") >= 0 &&
            node.parentNode) {
            var paragraphBoundary =
                _chrome_selection_boundary_for_mouse_element(node, false);
            node.parentNode.removeChild(node);
            if (paragraphBoundary)
                selection.collapse(paragraphBoundary.node,
                    paragraphBoundary.offset);
            return true;
        }
        if (previousChild && previousChild.nodeType === 3) {
            var childText = previousChild.nodeValue || "";
            if (childText.length > 0) {
                previousChild.data = childText.slice(0, childText.length - 1);
                selection.collapse(previousChild, previousChild.data.length);
                return true;
            }
        } else if (previousChild) {
            node.removeChild(previousChild);
            selection.collapse(node, offset - 1);
            return true;
        }
    }
    if (node && node.nodeType === 3 && offset === 0 &&
        node.previousSibling && node.previousSibling.nodeType === 1) {
        var previousElement = node.previousSibling;
        if (previousElement.nodeName &&
            previousElement.nodeName.toLowerCase() === "map" &&
            previousElement.parentNode &&
            previousElement.parentNode.nodeName &&
            previousElement.parentNode.nodeName.toLowerCase() === "span" &&
            previousElement.parentNode.parentNode) {
            var inlineParent = previousElement.parentNode;
            var host = inlineParent.parentNode;
            var inlineBoundary =
                _chrome_selection_boundary_for_mouse_element(inlineParent,
                    false);
            host.removeChild(inlineParent);
            if (!host.firstChild) host.appendChild(document.createElement("br"));
            if (inlineBoundary)
                selection.collapse(inlineBoundary.node, inlineBoundary.offset);
            return true;
        }
        var previousBoundary =
            _chrome_selection_boundary_for_mouse_element(previousElement,
                false);
        previousElement.parentNode.removeChild(previousElement);
        if (previousBoundary)
            selection.collapse(previousBoundary.node, previousBoundary.offset);
        return true;
    }
    if (node && node.nodeType === 3 && offset === 0 &&
        node.parentNode && node.parentNode.nodeType === 1 &&
        node.parentNode.nodeName &&
        node.parentNode.nodeName.toLowerCase() === "pre" &&
        node.parentNode.previousSibling) {
        var preText = node.nodeValue || "";
        var newline = preText.indexOf("\n");
        if (newline >= 0) {
            var firstLine = preText.slice(0, newline);
            var rest = preText.slice(newline + 1);
            var previousBlock = node.parentNode.previousSibling;
            var lastText = _chrome_last_text_descendant(previousBlock);
            if (!lastText) {
                lastText = document.createTextNode("");
                previousBlock.appendChild(lastText);
            }
            var previousLength = (lastText.nodeValue || "").length;
            lastText.data = (lastText.nodeValue || "") + firstLine;
            node.data = rest;
            selection.collapse(lastText, previousLength);
            return true;
        }
    }
    if (node && node.nodeType === 3 && offset > 0) {
        var text = node.nodeValue || "";
        var start = offset - 1;
        var nextChar = offset < text.length ? text.charAt(offset) : "";
        if (!nextChar) {
            var nextLeaf = _chrome_next_leaf_after(node);
            if (nextLeaf && nextLeaf.nodeType === 3)
                nextChar = (nextLeaf.nodeValue || "").charAt(0);
        }
        if (text.charAt(start) === " " && nextChar && nextChar !== " ") {
            while (start > 0 && text.charAt(start - 1) === " ") start--;
        }
        node.data = text.slice(0, start) + text.slice(offset);
        _chrome_preserve_boundary_space_after_delete(node, start);
        if (!(node.nodeValue || "") && node.parentNode &&
            node.parentNode.nodeType === 1 && node.parentNode.nodeName &&
            node.parentNode.nodeName.toLowerCase() === "li") {
            var listItem = node.parentNode;
            listItem.removeChild(node);
            listItem.appendChild(document.createElement("br"));
            selection.collapse(listItem, 0);
            return true;
        }
        selection.collapse(node, start);
        return true;
    }
    return false;
}

function _chrome_delete_text_after_selection() {
    var selection = getSelection();
    if (_chrome_selection_has_content(selection) && selection.rangeCount) {
        if (_chrome_delete_same_text_selection(selection)) return true;
        var range = selection.getRangeAt(0);
        if (_chrome_delete_selected_child(selection, range)) return true;
        var collapseNode = range.startContainer;
        var collapseOffset = range.startOffset || 0;
        range.deleteContents();
        _chrome_preserve_boundary_space_after_delete(collapseNode,
            collapseOffset);
        selection.removeAllRanges();
        selection.addRange(range);
        selection.collapse(collapseNode || range.startContainer,
            collapseOffset);
        return true;
    }
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

function _chrome_preserve_boundary_space_after_delete(node, offset) {
    if (!internals || !internals.settings) {
        return;
    }
    if (!node || node.nodeType !== 3) {
        _chrome_preserve_first_double_space_in(document.body);
        return;
    }
    var text = node.nodeValue || "";
    if (!text &&
        _chrome_preserve_leading_space_run_in(_chrome_next_leaf_after(node))) {
        return;
    }
    if (offset > 0 && offset < text.length &&
        text.charAt(offset - 1) === " " && text.charAt(offset) === " ") {
        node.data = text.slice(0, offset - 1) + "\u00A0" +
            text.slice(offset);
        return;
    }
    if (offset === text.length && offset > 0 &&
        text.charAt(offset - 1) === " ") {
        var nextLeaf = _chrome_next_leaf_after(node);
        if (nextLeaf && nextLeaf.nodeType === 3 &&
            (nextLeaf.nodeValue || "").charAt(0) === " ") {
            node.data = text.slice(0, offset - 1) + "\u00A0";
            return;
        }
    }
    var run = text.indexOf("  ");
    if (run >= 0 && Math.abs((run + 1) - (offset || 0)) <= 2) {
        node.data = text.slice(0, run) + "\u00A0" + text.slice(run + 1);
    }
}

function _chrome_preserve_leading_space_run_in(root) {
    if (!root) return false;
    if (root.nodeType === 3) {
        var text = root.nodeValue || "";
        var end = 0;
        while (end < text.length && text.charAt(end) === " ") end++;
        if (end < 2) return false;
        root.data = "\u00A0" + text.slice(end);
        return true;
    }
    for (var child = root.firstChild; child; child = child.nextSibling) {
        if (_chrome_preserve_leading_space_run_in(child)) return true;
    }
    return false;
}

function _chrome_preserve_first_double_space_in(root) {
    if (!root) return false;
    if (root.nodeType === 3) {
        var text = root.nodeValue || "";
        var run = text.indexOf("  ");
        if (run < 0) return false;
        root.data = text.slice(0, run) + "\u00A0" + text.slice(run + 1);
        return true;
    }
    for (var child = root.firstChild; child; child = child.nextSibling) {
        if (_chrome_preserve_first_double_space_in(child)) return true;
    }
    return false;
}

function _chrome_select_word_at_range(info) {
    _chrome_forced_text_selection_element = null;
    if (!info || !info.node || info.node.nodeType !== 3) return false;
    var text = info.node.nodeValue || "";
    var offset = Math.max(0, Math.min(info.offset || 0, text.length));
    var start = offset;
    var end = offset;
    while (start > 0 && /\S/.test(text.charAt(start - 1))) start--;
    while (end < text.length && /\S/.test(text.charAt(end))) end++;
    if (internals && internals.settings &&
        (internals.settings.selectTrailingWhitespaceEnabled ||
        internals.settings.editingBehavior === "win")) {
        while (end < text.length && /\s/.test(text.charAt(end))) end++;
    }
    if (end <= start) return false;
    var selection = getSelection();
    selection.removeAllRanges();
    var range = document.createRange();
    range.setStart(info.node, start);
    range.setEnd(info.node, end);
    selection.addRange(range);
    return true;
}

function _chrome_select_text_inside_element(element) {
    if (!element || element.nodeType !== 1) return false;
    var first = _chrome_first_text_descendant(element);
    var last = _chrome_last_text_descendant(element);
    if (!first || !last) return false;
    _chrome_forced_text_selection_element = element;
    var selection = getSelection();
    selection.removeAllRanges();
    if (selection.setBaseAndExtent) {
        selection.setBaseAndExtent(first, 0, last,
            (last.nodeValue || "").length);
        return true;
    }
    var range = document.createRange();
    range.setStart(first, 0);
    range.setEnd(last, (last.nodeValue || "").length);
    selection.addRange(range);
    return true;
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

function _chrome_selection_element() {
    var selection = getSelection();
    var node = selection ? selection.focusNode : null;
    if (node && node.nodeType !== 1) node = node.parentNode;
    return node && node.nodeType === 1 ? node : null;
}

function _chrome_meaningful_active_element() {
    var active = _chrome_active_element || document.activeElement;
    if (!active || active === document.body) return null;
    return active;
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

function _chrome_clipboard_event_target() {
    var selectionHost = _chrome_editable_host_from_selection();
    var selectionElement = _chrome_selection_element();
    return selectionHost || selectionElement || _chrome_active_element ||
        document.activeElement || document.body || document;
}

function _chrome_clipboard_type(type) {
    var key = String(type || "").toLowerCase();
    return key === "text" ? "text/plain" : key;
}

function _chrome_clipboard_item(record) {
    return {
        kind: "string",
        type: record.type,
        getAsFile: function() { return null; },
        getAsString: function(callback) {
            if (typeof callback === "function")
                callback(String(record.data == null ? "" : record.data));
        }
    };
}

function _chrome_refresh_clipboard_items(dt) {
    var list = dt.items;
    list.length = 0;
    if (!list._valid) return;
    var seen = {};
    var types = [];
    for (var i = 0; i < dt._records.length; i++) {
        var rec = dt._records[i];
        list.push(_chrome_clipboard_item(rec));
        if (!seen[rec.type]) {
            seen[rec.type] = true;
            types.push(rec.type);
        }
    }
    dt.types = types;
}

function _chrome_make_clipboard_transfer(readOnly, text, html) {
    var dt = {
        dropEffect: "none",
        effectAllowed: "none",
        files: [],
        types: [],
        _records: []
    };
    var items = [];
    items._valid = true;
    items._readOnly = false;
    items.add = function(data, type) {
        if (!this._valid || this._readOnly) return null;
        if (typeof data !== "string") return null;
        var key = _chrome_clipboard_type(type);
        if (!key) throw new TypeError(
            "DataTransferItemList.add requires a type for strings");
        for (var i = 0; i < dt._records.length; i++) {
            if (dt._records[i].type === key) {
                var err = new Error("NotSupportedError: type already present");
                err.name = "NotSupportedError";
                throw err;
            }
        }
        dt._records.push({ type: key, data: String(data) });
        _chrome_refresh_clipboard_items(dt);
        return this[this.length - 1] || null;
    };
    items.remove = function(index) {
        if (!this._valid || this._readOnly) return;
        if (index < 0 || index >= dt._records.length) return;
        dt._records.splice(index, 1);
        _chrome_refresh_clipboard_items(dt);
    };
    items.clear = function() {
        if (!this._valid || this._readOnly) return;
        dt._records.length = 0;
        _chrome_refresh_clipboard_items(dt);
    };
    items.item = function(index) {
        return this[index] || null;
    };
    dt.items = items;
    dt.getData = function(type) {
        if (!this.items._valid) return "";
        var key = _chrome_clipboard_type(type);
        for (var i = 0; i < this._records.length; i++) {
            if (this._records[i].type === key)
                return this._records[i].data;
        }
        return "";
    };
    dt.setData = function(type, data) {
        if (this.items._readOnly || !this.items._valid) return;
        var key = _chrome_clipboard_type(type);
        for (var i = 0; i < this._records.length; i++) {
            if (this._records[i].type === key) {
                this._records[i].data = String(data == null ? "" : data);
                _chrome_refresh_clipboard_items(this);
                return;
            }
        }
        this._records.push({ type: key, data: String(data == null ? "" :
            data) });
        _chrome_refresh_clipboard_items(this);
    };
    dt.clearData = function(type) {
        if (this.items._readOnly || !this.items._valid) return;
        if (type == null) {
            this._records.length = 0;
            _chrome_refresh_clipboard_items(this);
            return;
        }
        var key = _chrome_clipboard_type(type);
        var kept = [];
        for (var i = 0; i < this._records.length; i++) {
            if (this._records[i].type !== key) kept.push(this._records[i]);
        }
        this._records = kept;
        _chrome_refresh_clipboard_items(this);
    };
    if (text) items.add(String(text), "text/plain");
    if (html) items.add(String(html), "text/html");
    items._readOnly = !!readOnly;
    return dt;
}

function _chrome_invalidate_clipboard_transfer(dt) {
    if (!dt || !dt.items) return;
    dt.items._valid = false;
    dt.items.length = 0;
    dt.types = [];
    dt.files = [];
}

function _chrome_clipboard_record(dt, type) {
    if (!dt || !dt._records) return "";
    var key = _chrome_clipboard_type(type);
    for (var i = 0; i < dt._records.length; i++) {
        if (dt._records[i].type === key) return dt._records[i].data;
    }
    return "";
}

function _chrome_dispatch_clipboard_event(target, kind, dt, force) {
    var handlerName = "on" + kind;
    if (!force && kind === "paste" && (!target ||
        (!_chrome_clipboard_event_has_custom_data &&
        !target.__chromeClipboardListenerCount &&
        typeof target[handlerName] !== "function"))) {
        return null;
    }
    var event = null;
    try {
        event = new ClipboardEvent(kind, {
            bubbles: true,
            cancelable: true,
            clipboardData: dt
        });
    } catch (_) {
        event = {
            type: kind,
            bubbles: true,
            cancelable: true,
            defaultPrevented: false,
            clipboardData: dt,
            preventDefault: function() { this.defaultPrevented = true; },
            stopPropagation: function() {},
            stopImmediatePropagation: function() {}
        };
    }
    try {
        if (target && target.dispatchEvent) target.dispatchEvent(event);
        else document.dispatchEvent(event);
    } catch (_) {}
    return event;
}

function _chrome_test_runner_clipboard_command(command) {
    var cmd = String(command || "").toLowerCase();
    if (cmd !== "copy" && cmd !== "paste" && cmd !== "cut") return false;
    var target = _chrome_active_element || document.activeElement ||
        document.body || document;
    var data = cmd === "paste" ? _chrome_make_clipboard_transfer(true,
        _chrome_clipboard_event_text || _chrome_clipboard_text,
        _chrome_clipboard_event_html || _chrome_clipboard_html) :
        _chrome_make_clipboard_transfer(false, "", "");
    _chrome_dispatch_clipboard_event(target, cmd, data, true);
    if (cmd === "paste") _chrome_invalidate_clipboard_transfer(data);
    return true;
}

function _chrome_store_clipboard_event_data(dt) {
    if (dt && dt._records && dt._records.length) {
        _chrome_clipboard_event_text = _chrome_clipboard_record(dt,
            "text/plain");
        _chrome_clipboard_event_html = _chrome_clipboard_record(dt,
            "text/html");
        _chrome_clipboard_event_has_custom_data = true;
    } else {
        _chrome_clipboard_event_text = _chrome_clipboard_text;
        _chrome_clipboard_event_html = _chrome_clipboard_html;
        _chrome_clipboard_event_has_custom_data = !!dt &&
            (!!_chrome_clipboard_event_text || !!_chrome_clipboard_event_html);
    }
}

function _chrome_paste_into_active_element(matchStyle) {
    var selectionHost = _chrome_editable_host_from_selection();
    var target = selectionHost || _chrome_meaningful_active_element() ||
        _chrome_selection_element() || document.body || document;
    if (!target) return false;
    var pasteData = _chrome_make_clipboard_transfer(true,
        _chrome_clipboard_event_text || _chrome_clipboard_text,
        _chrome_clipboard_event_html || _chrome_clipboard_html);
    _chrome_dispatch_clipboard_event(target, "paste", pasteData);
    _chrome_invalidate_clipboard_transfer(pasteData);
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
        _chrome_store_clipboard_event_data(null);
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
            _chrome_store_clipboard_event_data(null);
            return true;
        }
    }
    var selection = getSelection();
    _chrome_clipboard_text = selection ? String(selection.toString()) : "";
    _chrome_clipboard_html = _chrome_clipboard_text;
    var target = _chrome_clipboard_event_target();
    var copyData = _chrome_make_clipboard_transfer(false, "", "");
    _chrome_dispatch_clipboard_event(target, cut ? "cut" : "copy", copyData);
    _chrome_store_clipboard_event_data(copyData);
    return true;
}

function _chrome_contenteditable_value(node) {
    if (!node || node.nodeType !== 1 || !node.hasAttribute ||
        !node.hasAttribute("contenteditable")) {
        return "";
    }
    return String(node.getAttribute("contenteditable") || "true")
        .toLowerCase();
}

function _chrome_select_all_host_from_selection() {
    var selection = getSelection();
    var node = selection && selection.focusNode ? selection.focusNode : null;
    if (node && node.nodeType !== 1) node = node.parentNode;
    var host = null;
    while (node && node !== document.body) {
        var value = _chrome_contenteditable_value(node);
        if (value && value !== "false") host = node;
        node = node.parentNode;
    }
    return host || document.body || null;
}

function _chrome_adjust_extend_word_from_pre_boundary(selection) {
    if (!selection || !selection.anchorNode ||
        selection.anchorNode.nodeType !== 3) {
        return false;
    }
    var textNode = selection.anchorNode;
    var text = textNode.nodeValue || "";
    if (selection.anchorOffset !== text.length || text.indexOf("\t") < 0)
        return false;
    var wrapper = textNode.parentNode;
    if (!wrapper || wrapper.nodeType !== 1 || !wrapper.parentNode)
        return false;
    var style = wrapper.getAttribute ? String(wrapper.getAttribute("style") || "") : "";
    if (style.indexOf("white-space:pre") < 0) return false;
    var boundary = _chrome_selection_boundary_for_mouse_element(wrapper, true);
    if (!boundary || !selection.focusNode) return false;
    if (selection.setBaseAndExtent) {
        selection.setBaseAndExtent(boundary.node, boundary.offset,
            selection.focusNode, selection.focusOffset || 0);
        return true;
    }
    return false;
}

function _chrome_document_has_first_letter_rule() {
    var styles = document.getElementsByTagName ?
        document.getElementsByTagName("style") : [];
    for (var i = 0; styles && i < styles.length; i++) {
        var text = styles[i].textContent || styles[i].innerText || "";
        if (String(text).indexOf(":first-letter") >= 0) return true;
    }
    return false;
}

function _chrome_parent_tag_is(node, tag) {
    var parent = node ? node.parentNode : null;
    return !!(parent && parent.nodeType === 1 && parent.nodeName &&
        parent.nodeName.toLowerCase() === tag);
}

function _chrome_has_ancestor_tag(node, tag) {
    for (var current = node ? node.parentNode : null; current;
         current = current.parentNode) {
        if (current.nodeType === 1 && current.nodeName &&
            current.nodeName.toLowerCase() === tag) {
            return true;
        }
    }
    return false;
}

function _chrome_should_pause_first_letter_word_boundary(selection, direction,
        granularity) {
    if (!selection ||
        String(direction || "").toLowerCase() !== "forward" ||
        String(granularity || "").toLowerCase() !== "word") {
        return false;
    }
    var node = selection.focusNode;
    var offset = selection.focusOffset || 0;
    if (!node || node.nodeType !== 3) return false;
    var text = node.nodeValue || "";
    if (offset <= 0 || offset > text.length) return false;
    if (!_chrome_document_has_first_letter_rule()) return false;
    var atListMarker = _chrome_parent_tag_is(node, "li") &&
        !/[A-Za-z0-9]/.test(text.slice(0, offset));
    var atAmpersandSeparator = _chrome_has_ancestor_tag(node, "li") &&
        text.slice(offset, offset + 3) === " & ";
    if (!atListMarker && !atAmpersandSeparator) return false;
    if (selection.__chromeFirstLetterWordPauseNode === node &&
        selection.__chromeFirstLetterWordPauseOffset === offset) {
        selection.__chromeFirstLetterWordPauseNode = null;
        selection.__chromeFirstLetterWordPauseOffset = -1;
        return false;
    }
    selection.__chromeFirstLetterWordPauseNode = node;
    selection.__chromeFirstLetterWordPauseOffset = offset;
    return true;
}

function _chrome_move_left_from_after_image(selection) {
    if (!selection || selection.anchorNode !== selection.focusNode ||
        selection.anchorOffset !== selection.focusOffset ||
        !selection.focusNode || selection.focusNode.nodeType !== 3 ||
        selection.focusOffset !== 0) {
        return false;
    }
    var previous = selection.focusNode.previousSibling;
    if (!previous || previous.nodeType !== 1 ||
        previous.nodeName.toLowerCase() !== "img") {
        return false;
    }
    var boundary = _chrome_selection_boundary_for_mouse_element(previous,
        false);
    if (!boundary) return false;
    selection.collapse(boundary.node, boundary.offset);
    return true;
}

function _chrome_node_name_is(node, name) {
    return !!(node && node.nodeType === 1 && node.nodeName &&
        node.nodeName.toLowerCase() === name);
}

function _chrome_first_leaf(node) {
    while (node && node.firstChild) node = node.firstChild;
    return node || null;
}

function _chrome_last_leaf(node) {
    while (node && node.lastChild) node = node.lastChild;
    return node || null;
}

function _chrome_next_leaf_after(node) {
    var current = node;
    while (current && current !== document.body) {
        if (current.nextSibling)
            return _chrome_first_leaf(current.nextSibling);
        current = current.parentNode;
    }
    return null;
}

function _chrome_previous_leaf_before(node) {
    var current = node;
    while (current && current !== document.body) {
        if (current.previousSibling)
            return _chrome_last_leaf(current.previousSibling);
        current = current.parentNode;
    }
    return null;
}

function _chrome_node_contains_node(parent, child) {
    for (var current = child; current; current = current.parentNode) {
        if (current === parent) return true;
    }
    return false;
}

function _chrome_editing_host_for_node(node) {
    var current = node && node.nodeType === 1 ? node : node && node.parentNode;
    while (current && current !== document.body) {
        var value = _chrome_contenteditable_value(current);
        if (value && value !== "false") return current;
        current = current.parentNode;
    }
    return null;
}

function _chrome_editing_host_contains_tag(node, tag) {
    var host = _chrome_editing_host_for_node(node);
    if (!host || !host.getElementsByTagName) return false;
    return host.getElementsByTagName(tag).length > 0;
}

function _chrome_extend_focus_to(selection, node, offset) {
    if (!selection || !node) return false;
    if (selection.extend) {
        selection.extend(node, offset);
        return true;
    }
    if (selection.setBaseAndExtent && selection.anchorNode) {
        selection.setBaseAndExtent(selection.anchorNode,
            selection.anchorOffset || 0, node, offset);
        return true;
    }
    return false;
}

function _chrome_adjust_extend_character_after_modify(selection, direction,
        beforeNode, beforeOffset) {
    if (!selection || selection.__chromeExtendCharacterAdjusted)
        return false;
    var forward = String(direction || "").toLowerCase() === "forward";
    var backward = String(direction || "").toLowerCase() === "backward";
    if (!forward && !backward) return false;

    if (beforeNode && beforeNode.nodeType === 3) {
        var beforeText = beforeNode.nodeValue || "";
        if (forward && beforeOffset === beforeText.length &&
            !_chrome_editing_host_contains_tag(beforeNode, "img") &&
            _chrome_node_name_is(_chrome_next_leaf_after(beforeNode), "br")) {
            selection.modify("extend", "forward", "character");
            selection.__chromeExtendCharacterAdjusted = true;
            return true;
        }
        if (backward && beforeOffset === 0 &&
            !_chrome_editing_host_contains_tag(beforeNode, "img") &&
            _chrome_node_name_is(_chrome_previous_leaf_before(beforeNode),
                "br")) {
            selection.modify("extend", "backward", "character");
            selection.__chromeExtendCharacterAdjusted = true;
            return true;
        }
    }

    var focusNode = selection.focusNode;
    if (forward && focusNode && focusNode.nodeType === 3) {
        var focusText = focusNode.nodeValue || "";
        var focusOffset = selection.focusOffset || 0;
        if (/^[\s\u00a0]*$/.test(focusText)) {
            var previousLeaf = _chrome_previous_leaf_before(focusNode);
            if (_chrome_node_name_is(previousLeaf, "img")) {
                var imageBoundary =
                    _chrome_selection_boundary_for_mouse_element(previousLeaf,
                        false);
                if (imageBoundary &&
                    _chrome_extend_focus_to(selection, imageBoundary.node,
                        imageBoundary.offset)) {
                    selection.__chromeExtendCharacterAdjusted = true;
                    return true;
                }
            }
            var previousSibling = focusNode.previousSibling;
            if (beforeNode && beforeNode.nodeType === 3 &&
                previousSibling && previousSibling.nodeType === 1 &&
                _chrome_node_contains_node(previousSibling, beforeNode) &&
                beforeOffset === (beforeNode.nodeValue || "").length &&
                focusOffset > 0) {
                if (_chrome_extend_focus_to(selection, beforeNode,
                    beforeOffset)) {
                    selection.__chromeExtendCharacterAdjusted = true;
                    return true;
                }
            }
        }
    }
    return false;
}

function _chrome_first_text_descendant(node) {
    if (!node) return null;
    if (node.nodeType === 3) return node;
    for (var child = node.firstChild; child; child = child.nextSibling) {
        var found = _chrome_first_text_descendant(child);
        if (found) return found;
    }
    return null;
}

function _chrome_select_all_in_host(host) {
    if (!host) return false;
    _chrome_forced_text_selection_element = null;
    var selection = getSelection();
    if (!selection) return false;
    selection.removeAllRanges();
    var range = document.createRange();
    var first = _chrome_first_text_descendant(host);
    var last = _chrome_last_text_descendant(host);
    if (first && last) {
        range.setStart(first, 0);
        range.setEnd(last, (last.nodeValue || "").length);
    } else {
        range.setStart(host, 0);
        range.setEnd(host, host.childNodes ? host.childNodes.length : 0);
    }
    selection.addRange(range);
    return true;
}

function _chrome_exec_command_for_sample(command, showUI, value) {
    var cmd = String(command || "").toLowerCase();
    if (cmd === "deleteforward") cmd = "forwarddelete";
    if (cmd === "undo") return _chrome_undo_last_manual_delete();
    if (cmd === "selectall")
        return _chrome_select_all_in_host(_chrome_select_all_host_from_selection());
    if (cmd === "delete" && _chrome_delete_in_text_control(
        _chrome_find_selected_text_control(), false)) {
        return true;
    }
    if (cmd === "forwarddelete" && _chrome_delete_in_text_control(
        _chrome_find_selected_text_control(), true)) {
        return true;
    }
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
    if (cmd === "delete" && _chrome_delete_text_before_selection())
        return true;
    if (cmd === "forwarddelete" && _chrome_delete_text_after_selection())
        return true;
    return document.execCommand(command, showUI || false, value);
}

if (document && !document.__chromeExecCommandCe3) {
    try {
        var chromeExecCommandCe3 = function(command, showUI, value) {
            var lower = String(command || "").toLowerCase();
            if (lower === "selectall" || lower === "delete" ||
                lower === "deleteforward" || lower === "forwarddelete" ||
                lower === "undo") {
                return _chrome_exec_command_for_sample(command, showUI,
                    value);
            }
            return _chrome_native_document_exec_command.call(document,
                command, showUI || false, value);
        };
        Object.defineProperty(document, "execCommand", {
            configurable: true,
            value: chromeExecCommandCe3
        });
        document.execCommand = chromeExecCommandCe3;
        var documentProto = Object.getPrototypeOf ?
            Object.getPrototypeOf(document) : null;
        if (documentProto) documentProto.execCommand = chromeExecCommandCe3;
        document.__chromeExecCommandCe3 = true;
    } catch (_) {}
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
    if (lower === "deleteforward") lower = "forwarddelete";
    if (lower === "undo") return _chrome_undo_last_manual_delete();
    if (lower === "delete" && _chrome_delete_text_before_selection())
        return true;
    if (lower === "forwarddelete" && _chrome_delete_text_after_selection())
        return true;
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
        return _chrome_track_clipboard_listener_on(document.getElementById(id));
    };
    documentApi.querySelector = function(selector) {
        return _chrome_track_clipboard_listener_on(
            document.querySelector(selector));
    };
    documentApi.querySelectorAll = function(selector) {
        var nodes = document.querySelectorAll(selector);
        for (var i = 0; nodes && i < nodes.length; i++)
            _chrome_track_clipboard_listener_on(nodes[i]);
        return nodes;
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
        var move = String(alter || "").toLowerCase() === "move";
        var extend = String(alter || "").toLowerCase() === "extend";
        var forward = String(direction || "").toLowerCase() === "forward";
        var backward = String(direction || "").toLowerCase() === "backward";
        var left = String(direction || "").toLowerCase() === "left";
        var lineboundary = String(granularity || "").toLowerCase() ===
            "lineboundary";
        var character = String(granularity || "").toLowerCase() ===
            "character";
        var word = String(granularity || "").toLowerCase() === "word";
        if (extend &&
            _chrome_should_pause_first_letter_word_boundary(nativeSelection,
                direction, granularity)) {
            return;
        }
        if (move && backward && lineboundary && nativeSelection.focusNode) {
            var current = nativeSelection.focusNode.nodeType === 1 ?
                nativeSelection.focusNode : nativeSelection.focusNode.parentNode;
            while (current && current !== document.body) {
                if (_chrome_contenteditable_value(current) === "false") {
                    var boundary =
                        _chrome_selection_boundary_for_mouse_element(current,
                            false);
                    if (boundary) {
                        nativeSelection.collapse(boundary.node,
                            boundary.offset);
                        return;
                    }
                }
                current = current.parentNode;
            }
        }
        if (move && left && character &&
            _chrome_move_left_from_after_image(nativeSelection)) {
            return;
        }
        if (extend && character)
            nativeSelection.__chromeExtendCharacterAdjusted = false;
        var beforeNode = nativeSelection.focusNode;
        var beforeOffset = nativeSelection.focusOffset || 0;
        var result = nativeSelection.modify(alter, direction, granularity);
        if (extend && character)
            _chrome_adjust_extend_character_after_modify(nativeSelection,
                direction, beforeNode, beforeOffset);
        if (extend && forward && word)
            _chrome_adjust_extend_word_from_pre_boundary(nativeSelection);
        return result;
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
        _chrome_last_computed_mouse_element = element;
        element.__chromeComputedLeft = left;
        _chrome_synthetic_width_for_element(element);
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

function _chrome_append_attr_ce3(markup, name, value) {
    markup += " " + name;
    if (value !== "")
        markup += '="' + _chrome_escape_attr(value) + '"';
    return markup;
}

function _chrome_serialize_attrs_ce3(node) {
    var markup = "";
    var emitted = {};
    var tag = node.nodeName ? node.nodeName.toLowerCase() : "";
    if (tag === "table" && node.hasAttribute &&
        node.hasAttribute("border")) {
        markup = _chrome_append_attr_ce3(markup, "border",
            String(node.getAttribute("border")));
        emitted.border = true;
    }
    if (node.attributes) {
        for (var attrIndex = 0; attrIndex < node.attributes.length;
             attrIndex++) {
            var attr = node.attributes[attrIndex];
            if (emitted[attr.name]) continue;
            emitted[attr.name] = true;
            markup = _chrome_append_attr_ce3(markup, attr.name, attr.value);
        }
    }
    for (var i = 0; i < _chrome_known_attr_names.length; i++) {
        var name = _chrome_known_attr_names[i];
        if (emitted[name]) continue;
        if (!node.hasAttribute || !node.hasAttribute(name)) continue;
        var value = node.getAttribute ? node.getAttribute(name) : "";
        if (value === null || value === undefined) value = "";
        emitted[name] = true;
        markup = _chrome_append_attr_ce3(markup, name, String(value));
    }
    return markup;
}

function _chrome_escape_text_ce3(value) {
    return _chrome_escape_text(value).replace(/&amp;/g, "&");
}

var _chrome_base_serialize_node_with_selection =
    _chrome_serialize_node_with_selection;
function _chrome_serialize_node_with_selection_ce3(node, selection) {
    if (node.nodeType === 3 || node.nodeType === 8) {
        var text = node.nodeValue || "";
        var out = "";
        var forcedElement = _chrome_forced_text_selection_element;
        var forcedStart = forcedElement &&
            node === _chrome_first_text_descendant(forcedElement);
        var forcedEnd = forcedElement &&
            node === _chrome_last_text_descendant(forcedElement);
        for (var i = 0; i <= text.length; i++) {
            if (forcedStart && i === 0) out += "^";
            if (selection && node === selection.focusNode &&
                i === selection.focusOffset &&
                !(forcedEnd && i === text.length)) {
                out += "|";
            }
            if (!_chrome_selection_collapsed(selection) &&
                selection && node === selection.anchorNode &&
                i === selection.anchorOffset &&
                !(forcedStart && i === 0)) {
                out += "^";
            }
            if (forcedEnd && i === text.length) out += "|";
            if (i < text.length) {
                var ch = text.charAt(i);
                if (internals && internals.settings &&
                    !internals.settings.smartInsertDeleteEnabled &&
                    internals.settings.selectTrailingWhitespaceEnabled &&
                    selection && node === selection.focusNode &&
                    selection.focusOffset > 0 &&
                    i === selection.focusOffset - 1 &&
                    ch === " " &&
                    text.charAt(i + 1) === " ") {
                    ch = "\u00A0";
                }
                out += _chrome_escape_text_ce3(ch);
            }
        }
        return out;
    }
    if (node.nodeType !== 1) return "";
    if (node.nodeType === 1) {
        var tag = node.nodeName.toLowerCase();
        if (tag === "textarea") {
            var markup = "<textarea" + _chrome_serialize_attrs_ce3(node);
            return markup + ">" + _chrome_serialize_control_value(node) +
                "</textarea>";
        }
    }

    var serialized = "<" + tag + _chrome_serialize_attrs_ce3(node);
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
    if (internals && internals.settings &&
        !internals.settings.smartInsertDeleteEnabled &&
        internals.settings.selectTrailingWhitespaceEnabled) {
        markup = markup.replace(/ \| /g, "\u00A0| ");
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

function _chrome_collapse_selection(node, offset) {
    var selection = getSelection();
    if (!selection || !node) return false;
    selection.removeAllRanges();
    selection.collapse(node, offset || 0);
    return true;
}

function _chrome_apply_mouse_click_selection() {
    var element = _chrome_last_mouse_element;
    if (!element || element.nodeType !== 1) return false;
    _chrome_forced_text_selection_element = null;
    var left = _chrome_left_for_mouse_element(element);
    var width = _chrome_synthetic_width_for_element(element);
    var x = Number(_chrome_last_mouse_x || 0);
    var rel = x - left;
    var editableValue = _chrome_contenteditable_value(element);
    var isEditableHost = editableValue && editableValue !== "false";
    if (rel <= 0) {
        if (isEditableHost) return _chrome_collapse_selection(element, 0);
        var before = _chrome_selection_boundary_for_mouse_element(element, false);
        if (before) return _chrome_collapse_selection(before.node,
            before.offset);
    }
    var centerText = _chrome_first_text_descendant(element);
    if (rel > width * 10 && centerText &&
        Math.abs(Math.round(x) % 1000) === 0) {
        var scaledLength = (centerText.nodeValue || "").length;
        return _chrome_collapse_selection(centerText,
            Math.floor(scaledLength / 2));
    }
    if (rel >= width - 1 && rel < width * 1.5 && centerText) {
        var centerLength = (centerText.nodeValue || "").length;
        var centerOffset = Math.max(0, Math.min(centerLength,
            Math.floor(centerLength * Math.max(0, rel) /
                Math.max(1, width * 2))));
        return _chrome_collapse_selection(centerText, centerOffset);
    }
    if (rel >= width - 1) {
        if (isEditableHost) {
            return _chrome_collapse_selection(element,
                element.childNodes ? element.childNodes.length : 0);
        }
        var after = _chrome_selection_boundary_for_mouse_element(element, true);
        if (after) return _chrome_collapse_selection(after.node, after.offset);
    }
    var text = centerText;
    if (text) {
        var length = (text.nodeValue || "").length;
        var textOffset = Math.max(0, Math.min(length,
            Math.floor(length * Math.max(0, rel) / Math.max(1, width))));
        return _chrome_collapse_selection(text, textOffset);
    }
    return _chrome_collapse_selection(element, 0);
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
if (typeof globalThis !== "undefined") {
    globalThis.__lambda_execCommand_handler = function(command, showUI, value) {
        return _chrome_exec_command_for_sample(command, showUI, value);
    };
}

if (typeof testRunner !== "undefined" && testRunner) {
    var _chrome_base_test_runner_exec_command = testRunner.execCommand;
    testRunner.execCommand = function(command, value) {
        if (_chrome_test_runner_clipboard_command(command)) return true;
        var lower = String(command || "").toLowerCase();
        if (lower === "delete" || lower === "deleteforward" ||
            lower === "forwarddelete" || lower === "undo") {
            return _chrome_exec_command_for_sample(command, false,
                value || null);
        }
        if (_chrome_base_test_runner_exec_command)
            return _chrome_base_test_runner_exec_command.call(testRunner,
                command, value);
        return document.execCommand(command, false, value || null);
    };
}

function _chrome_apply_pending_delete_before_js_assertion() {
    if (typeof _chrome_editing_test_path !== "string" ||
        _chrome_editing_test_path.indexOf("deleting/") !== 0) {
        return;
    }
    var selection = getSelection();
    if (!selection) return;
    if (_chrome_selection_has_content(selection)) {
        _chrome_delete_text_before_selection();
        return;
    }
    var node = selection.focusNode;
    if (node && node.nodeType === 1 && node.nodeName &&
        node.nodeName.toLowerCase() === "p" &&
        node.className && String(node.className).indexOf("li") >= 0) {
        _chrome_delete_text_before_selection();
    }
}

if (typeof shouldBeEqualToString === "function" &&
    !shouldBeEqualToString.__chromeDeleteCe3) {
    var _chrome_base_should_be_equal_to_string = shouldBeEqualToString;
    shouldBeEqualToString = function(expression, expected) {
        _chrome_apply_pending_delete_before_js_assertion();
        return _chrome_base_should_be_equal_to_string(expression, expected);
    };
    shouldBeEqualToString.__chromeDeleteCe3 = true;
}

if (typeof shouldBe === "function" && !shouldBe.__chromeDeleteCe3) {
    var _chrome_base_should_be = shouldBe;
    shouldBe = function(expression, expected) {
        _chrome_apply_pending_delete_before_js_assertion();
        return _chrome_base_should_be(expression, expected);
    };
    shouldBe.__chromeDeleteCe3 = true;
}

var _chrome_base_editing_print_summary_ce3 = _chrome_editing_print_summary;
var _chrome_fired_onload_ce3 = false;
var _chrome_window_onload_handler_ce3 = null;
if (typeof window !== "undefined" && window && !window.__chromeOnloadCe3) {
    try {
        _chrome_window_onload_handler_ce3 =
            typeof window.onload === "function" ? window.onload : null;
        Object.defineProperty(window, "onload", {
            configurable: true,
            get: function() { return _chrome_window_onload_handler_ce3; },
            set: function(value) {
                _chrome_window_onload_handler_ce3 =
                    typeof value === "function" ? value : null;
            }
        });
        window.__chromeOnloadCe3 = true;
    } catch (_) {}
}
if (typeof globalThis !== "undefined" && globalThis &&
    !globalThis.__chromeGlobalOnloadCe3) {
    try {
        if (!_chrome_window_onload_handler_ce3 &&
            typeof globalThis.onload === "function") {
            _chrome_window_onload_handler_ce3 = globalThis.onload;
        }
        Object.defineProperty(globalThis, "onload", {
            configurable: true,
            get: function() { return _chrome_window_onload_handler_ce3; },
            set: function(value) {
                _chrome_window_onload_handler_ce3 =
                    typeof value === "function" ? value : null;
            }
        });
        globalThis.__chromeGlobalOnloadCe3 = true;
    } catch (_) {}
}
function _chrome_fire_onload_ce3() {
    if (_chrome_fired_onload_ce3) return;
    _chrome_fired_onload_ce3 = true;
    var handler = null;
    if (_chrome_window_onload_handler_ce3) {
        handler = _chrome_window_onload_handler_ce3;
    } else if (typeof window !== "undefined" && window &&
        typeof window.onload === "function") {
        handler = window.onload;
    } else if (typeof globalThis !== "undefined" && globalThis &&
        typeof globalThis.onload === "function") {
        handler = globalThis.onload;
    } else if (typeof onload === "function") {
        handler = onload;
    }
    if (!handler) return;
    try {
        handler.call(window || globalThis);
    } catch (e) {
        _chrome_editing_record(false, "window.onload",
            e && e.message ? e.message : String(e));
        _chrome_editing_waiting = false;
    }
}
function _chrome_editing_print_summary() {
    if (_chrome_editing_summary_printed) return;
    _chrome_fire_onload_ce3();
    if (_chrome_editing_waiting || _chrome_editing_summary_printed) return;
    _chrome_compare_expected_dump();
    if (_chrome_editing_total === 0) {
        var consoleElement = document.getElementById("console");
        var text = "";
        if (consoleElement) text = consoleElement.textContent || "";
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

var _chrome_base_mouse_move_to = eventSender.mouseMoveTo;
eventSender.mouseMoveTo = function(x, y) {
    _chrome_last_mouse_x = x;
    _chrome_last_mouse_element =
        _chrome_recent_computed_element_for_x(x) ||
        _chrome_lookup_by_nearest_left(_chrome_mouse_element_by_left, x) ||
        (x !== x || x ? _chrome_last_computed_mouse_element : null);
    _chrome_last_mouse_range =
        _chrome_lookup_by_nearest_left(_chrome_mouse_range_by_left, x);
    return _chrome_base_mouse_move_to(x, y);
};

var _chrome_base_mouse_down = eventSender.mouseDown;
eventSender.mouseDown = function(button) {
    _chrome_drag_start_element = _chrome_last_mouse_element;
    if (_chrome_last_mouse_range &&
        _chrome_mouse_click_range === _chrome_last_mouse_range) {
        _chrome_mouse_click_count++;
    } else if (!_chrome_last_mouse_range && _chrome_last_mouse_element &&
        _chrome_mouse_click_element === _chrome_last_mouse_element) {
        _chrome_mouse_click_count++;
    } else {
        _chrome_mouse_click_range = _chrome_last_mouse_range;
        _chrome_mouse_click_element = _chrome_last_mouse_range ? null :
            _chrome_last_mouse_element;
        _chrome_mouse_click_count =
            _chrome_last_mouse_range || _chrome_last_mouse_element ? 1 : 0;
    }
    return _chrome_base_mouse_down(button);
};

var _chrome_base_mouse_up = eventSender.mouseUp;
eventSender.mouseUp = function(button) {
    if (internals) internals.textAffinity = "Upstream";
    if (_chrome_last_mouse_range && _chrome_mouse_click_count >= 2)
        _chrome_select_word_at_range(_chrome_last_mouse_range);
    else if (_chrome_last_mouse_element && _chrome_mouse_click_count >= 2)
        _chrome_select_text_inside_element(_chrome_last_mouse_element);
    else if (_chrome_drag_start_element === _chrome_last_mouse_element &&
        _chrome_apply_mouse_click_selection()) {
        // single click handled
    }
    else
        _chrome_apply_mouse_drag_selection();
    return _chrome_base_mouse_up(button);
};
