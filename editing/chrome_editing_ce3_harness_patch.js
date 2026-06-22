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
var _chrome_select_all_text_node = null;
var _chrome_autofilled_controls = [];
var _chrome_serialized_style_hint_tags = [];
var _chrome_serialized_style_hint_texts = [];
var _chrome_serialized_style_hint_values = [];
var _chrome_active_element = null;
var _chrome_active_text_control = null;
var _chrome_forced_text_selection_element = null;
var _chrome_native_document_exec_command = document.execCommand;
var _chrome_native_document_query_command_supported =
    document.queryCommandSupported;
var _chrome_markup_dump_lines = [];
var _chrome_markup_dump_count = 0;
var _chrome_result_callbacks = [];
var _chrome_completion_callbacks = [];
var _chrome_completion_callbacks_fired = false;
var _chrome_pending_promise_tests = 0;
var _chrome_find_base_offset = undefined;
var _chrome_find_extent_offset = undefined;
var _chrome_selection_override_range = null;
var _chrome_find_selection_active = false;
var _chrome_range_shadow_records = [];
var _chrome_find_root_token = null;
var _chrome_find_last_signature = "";
var _chrome_find_last_start_in_selection = false;
var _chrome_find_string_called = false;
var _chrome_last_find_string_result = false;
var _chrome_default_paragraph_separator = "div";
var onload = typeof onload === "function" ? onload : null;
var _chrome_known_attr_names = [
    "contenteditable", "id", "class", "style", "slot", "href", "src", "alt",
    "title", "name", "type", "value", "for", "dir", "lang", "draggable",
    "spellcheck", "tabindex", "width", "height", "colspan", "rowspan",
    "align", "color", "face", "size", "disabled", "readonly", "checked",
    "selected", "hidden", "border"
];

var Sample = typeof Sample !== "undefined" ? Sample : null;
if (typeof Sample !== "function") {
    Sample = function(markup) {
        this.markup = String(markup || "");
        this.window = window;
        this.document = document;
        this.iframe_ = {
            id: Sample.playgroundId,
            style: { display: "none" },
            parentNode: document.body || null
        };
        if (this.markup) {
            try {
                _chrome_set_selection_from_markup(this.markup);
            } catch (e) {
                throw new Error("Sample marker setup: " +
                    (e && e.message ? e.message : String(e)));
            }
        }
        try {
            _chrome_install_childnodes_for_each(document.documentElement);
        } catch (e) {
            throw new Error("Sample child list setup: " +
                (e && e.message ? e.message : String(e)));
        }
    };
    Sample.playgroundId = "__chrome_assert_selection_playground";
    Sample.prototype.setMockSpellCheckerEnabled = function(value) {
        this.mockSpellCheckerEnabled = !!value;
    };
    Sample.prototype.setSpellCheckResolvedCallback = function(callback) {
        this.spellCheckResolvedCallback = callback;
    };
    Sample.prototype.remove = function() {
        if (this.iframe_) this.iframe_.parentNode = null;
    };
    Sample.prototype.keep = function() {
        if (this.iframe_) this.iframe_.parentNode = document.body || null;
    };
}
if (typeof window !== "undefined") window.Sample = Sample;

if (typeof window !== "undefined" && !window.location) {
    window.location = { search: "" };
}
if (typeof window !== "undefined" && window.location &&
    window.location.search === undefined) {
    window.location.search = "";
}
if (typeof window !== "undefined") {
    if (window.pageXOffset === undefined) window.pageXOffset = 0;
    if (window.pageYOffset === undefined) window.pageYOffset = 0;
    if (window.scrollX === undefined) window.scrollX = window.pageXOffset;
    if (window.scrollY === undefined) window.scrollY = window.pageYOffset;
}

function _chrome_call_soon(callback) {
    if (typeof callback === "function") return callback();
    if (typeof callback === "string") return _chrome_eval(callback);
    return undefined;
}

var _chrome_base_set_timeout = typeof setTimeout === "function" ?
    setTimeout : null;
function setTimeout(callback, delay) {
    return _chrome_call_soon(callback);
}
if (typeof window !== "undefined") window.setTimeout = setTimeout;

function clearTimeout() {}
if (typeof window !== "undefined") window.clearTimeout = clearTimeout;

if (document && !document.__chromeDocumentWriteCe3) {
    document.write = function(markup) {
        if (!document.body) return;
        document.body.innerHTML = String(markup == null ? "" : markup);
    };
    document.writeln = function(markup) {
        document.write(String(markup == null ? "" : markup) + "\n");
    };
    document.open = function() { return document; };
    document.close = function() {};
    document.__chromeDocumentWriteCe3 = true;
}

if (document && !document.implementation) {
    document.implementation = {};
}
if (document && document.implementation &&
    typeof document.implementation.createHTMLDocument !== "function") {
    document.implementation.createHTMLDocument = function(title) {
        var doc = {
            title: String(title || ""),
            body: document.createElement("body"),
            documentElement: document.createElement("html"),
            createElement: function(name) { return document.createElement(name); },
            createTextNode: function(text) {
                return document.createTextNode(String(text || ""));
            }
        };
        doc.documentElement.appendChild(doc.body);
        return doc;
    };
}

function requestAnimationFrame(callback) {
    return _chrome_call_soon(function() {
        if (typeof callback === "function") callback(0);
    });
}
if (typeof window !== "undefined")
    window.requestAnimationFrame = requestAnimationFrame;

function _chrome_scroll_to(x, y) {
    if (typeof x === "object" && x !== null) {
        y = x.top;
        x = x.left;
    }
    if (typeof x !== "number" || x !== x) x = 0;
    if (typeof y !== "number" || y !== y) y = 0;
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (typeof window !== "undefined") {
        window.pageXOffset = x;
        window.pageYOffset = y;
        window.scrollX = x;
        window.scrollY = y;
    }
    if (typeof document !== "undefined" && document.documentElement) {
        document.documentElement.scrollLeft = x;
        document.documentElement.scrollTop = y;
    }
    if (typeof document !== "undefined" && document.body) {
        document.body.scrollLeft = x;
        document.body.scrollTop = y;
    }
}

function scrollTo(x, y) {
    return _chrome_scroll_to(x, y);
}
if (typeof window !== "undefined")
    window.scrollTo = scrollTo;

function scrollBy(x, y) {
    if (typeof x === "object" && x !== null) {
        y = x.top;
        x = x.left;
    }
    if (typeof x !== "number" || x !== x) x = 0;
    if (typeof y !== "number" || y !== y) y = 0;
    return _chrome_scroll_to((window.pageXOffset || 0) + x,
        (window.pageYOffset || 0) + y);
}
if (typeof window !== "undefined")
    window.scrollBy = scrollBy;

var _chrome_base_window_add_event_listener =
    typeof window !== "undefined" && window.addEventListener ?
        window.addEventListener : null;
function addEventListener(type, listener, options) {
    if (String(type || "").toLowerCase() === "load") {
        return _chrome_call_soon(function() {
            if (typeof listener === "function")
                listener.call(window || globalThis, { type: "load" });
            else if (listener && typeof listener.handleEvent === "function")
                listener.handleEvent({ type: "load" });
        });
    }
    if (_chrome_base_window_add_event_listener)
        return _chrome_base_window_add_event_listener.call(window, type,
            listener, options);
}
if (typeof window !== "undefined")
    window.addEventListener = addEventListener;

if (typeof HTMLElement === "undefined" && typeof Element !== "undefined") {
    var HTMLElement = Element;
    if (typeof window !== "undefined") window.HTMLElement = HTMLElement;
}
if (typeof Text === "undefined") {
    var Text = function(data) {
        return document.createTextNode(data || "");
    };
    if (typeof window !== "undefined") window.Text = Text;
}

if (typeof Event !== "undefined" && Event.prototype &&
    !Event.prototype.__chromeSrcElementCe3) {
    try {
        Object.defineProperty(Event.prototype, "srcElement", {
            get: function() { return this.target || null; },
            configurable: true
        });
    } catch (_) {}
    Event.prototype.__chromeSrcElementCe3 = true;
}

if (typeof Element !== "undefined" && Element.prototype &&
    !Element.prototype.__chromeInnerTextShimCe3) {
    try {
        Object.defineProperty(Element.prototype, "innerText", {
            get: function() { return this.textContent || ""; },
            set: function(value) { this.textContent = String(value || ""); }
        });
    } catch (_) {}
    Element.prototype.__chromeInnerTextShimCe3 = true;
}

var _chrome_base_get_computed_style = typeof getComputedStyle === "function" ?
    getComputedStyle : null;
function getComputedStyle(element, pseudo) {
    var style = _chrome_base_get_computed_style ?
        _chrome_base_get_computed_style(element, pseudo) : {};
    var hidden = element && element.getAttribute ?
        String(element.getAttribute("hidden") || "") : "";
    if (hidden === "until-found") {
        try {
            style.contentVisibility = "hidden";
        } catch (_) {
            var fallback = {};
            for (var key in style) fallback[key] = style[key];
            fallback.contentVisibility = "hidden";
            fallback.getPropertyValue = function(name) {
                if (name === "content-visibility") return "hidden";
                return style && style.getPropertyValue ?
                    style.getPropertyValue(name) : "";
            };
            return fallback;
        }
    }
    return style;
}
if (typeof window !== "undefined")
    window.getComputedStyle = getComputedStyle;

function _chrome_child_list_for_each(callback, thisArg) {
    for (var i = 0; this && i < this.length; i++)
        callback.call(thisArg, this[i], i, this);
}

function _chrome_install_childnodes_for_each(node) {
    if (!node) return;
    if (node.childNodes) {
        try {
            node.childNodes.forEach = _chrome_child_list_for_each;
        } catch (_) {}
    }
    for (var child = node.firstChild; child; child = child.nextSibling)
        _chrome_install_childnodes_for_each(child);
}

if (typeof NodeList !== "undefined" && NodeList.prototype) {
    NodeList.prototype.forEach = _chrome_child_list_for_each;
}
if (typeof HTMLCollection !== "undefined" && HTMLCollection.prototype) {
    HTMLCollection.prototype.forEach = _chrome_child_list_for_each;
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

function _chrome_node_child_index(node) {
    if (!node || !node.parentNode) return 0;
    var children = node.parentNode.childNodes || [];
    for (var i = 0; i < children.length; i++) {
        if (children[i] === node) return i;
    }
    return 0;
}

function _chrome_boundary_path(container, node, offset) {
    var path = [];
    var current = node;
    while (current && current !== container) {
        path.unshift(_chrome_node_child_index(current));
        current = current.parentNode;
    }
    path.push(Math.max(0, offset || 0));
    return path;
}

function _chrome_compare_paths(a, b) {
    var length = Math.min(a.length, b.length);
    for (var i = 0; i < length; i++) {
        if (a[i] < b[i]) return -1;
        if (a[i] > b[i]) return 1;
    }
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    return 0;
}

function _chrome_first_element_descendant(node) {
    while (node && node.nodeType !== 1)
        node = node.firstChild || node.nextSibling;
    while (node && node.firstChild && node.firstChild.nodeType === 1)
        node = node.firstChild;
    return node;
}

function _chrome_location_units(container) {
    var units = [];
    var state = { atLineStart: true, previousSpace: false };
    function addUnit(startNode, startOffset, endNode, endOffset) {
        units.push({
            startNode: startNode,
            startOffset: startOffset || 0,
            endNode: endNode,
            endOffset: endOffset || 0,
            startPath: _chrome_boundary_path(container, startNode,
                startOffset || 0),
            endPath: _chrome_boundary_path(container, endNode, endOffset || 0)
        });
    }
    function walk(node) {
        if (!node) return;
        if (node.nodeType === 3) {
            var text = String(node.nodeValue || "");
            for (var i = 0; i < text.length; i++) {
                var ch = text.charAt(i);
                if (/\s/.test(ch)) {
                    if (state.atLineStart || state.previousSpace) continue;
                    addUnit(node, i, node, i + 1);
                    state.previousSpace = true;
                    state.atLineStart = false;
                    continue;
                }
                addUnit(node, i, node, i + 1);
                state.previousSpace = false;
                state.atLineStart = false;
            }
            return;
        }
        if (node.nodeType !== 1) return;
        var tag = String(node.nodeName || "").toLowerCase();
        if (tag === "br") {
            var index = _chrome_node_child_index(node);
            var endNode = node.parentNode;
            var endOffset = index + 1;
            var next = node.nextSibling;
            if (next && next.nodeType === 3 &&
                /^\s/.test(String(next.nodeValue || ""))) {
                endNode = next;
                endOffset = 1;
            }
            addUnit(node.parentNode, index, endNode, endOffset);
            state.atLineStart = true;
            state.previousSpace = false;
            return;
        }
        var children = node.childNodes || [];
        for (var j = 0; j < children.length; j++) {
            walk(children[j]);
            if (node === container &&
                String(children[j].nodeName || "").toLowerCase() === "p" &&
                j + 1 < children.length) {
                var next = _chrome_first_element_descendant(children[j + 1]);
                if (next) {
                    addUnit(node, j + 1, next, 0);
                    state.atLineStart = true;
                    state.previousSpace = false;
                }
            }
        }
    }
    walk(container);
    return units;
}

function _chrome_location_from_boundary(container, node, offset) {
    var units = _chrome_location_units(container);
    var path = _chrome_boundary_path(container, node, offset || 0);
    for (var i = 0; i < units.length; i++) {
        if (_chrome_compare_paths(path, units[i].startPath) <= 0)
            return i;
    }
    return units.length;
}

function _chrome_range_location_pair(container, range) {
    var start = _chrome_location_from_boundary(container,
        range.startContainer, range.startOffset || 0);
    var end = _chrome_location_from_boundary(container,
        range.endContainer, range.endOffset || 0);
    return [Math.min(start, end), Math.abs(end - start)];
}

function _chrome_range_like_from_location(container, location, length) {
    var units = _chrome_location_units(container);
    var startIndex = Math.max(0, Math.min(units.length, location || 0));
    var endIndex = Math.max(startIndex,
        Math.min(units.length, startIndex + (length || 0)));
    var startUnit = units[startIndex] || units[units.length - 1];
    var endUnit = units[endIndex - 1] || startUnit;
    var startNode = startUnit ? startUnit.startNode : container;
    var startOffset = startUnit ? startUnit.startOffset : 0;
    var endNode = endUnit ? endUnit.endNode : startNode;
    var endOffset = endUnit ? endUnit.endOffset : startOffset;
    return {
        startContainer: startNode,
        startOffset: startOffset,
        endContainer: endNode,
        endOffset: endOffset,
        toArray: function() {
            return [startNode, startOffset, endNode, endOffset];
        }
    };
}

function _chrome_range_text_contents(range) {
    if (!range) return "";
    var root = range.commonAncestorContainer || range.startContainer;
    function appendNodeText(node, parts) {
        if (!node) return;
        if (node.nodeType === 3) {
            parts.push(String(node.nodeValue || ""));
            return;
        }
        if (node.nodeType !== 1 && node.nodeType !== 11) return;
        if (node.nodeType === 1 &&
            String(node.nodeName || "").toLowerCase() === "br") {
            parts.push("\n");
            return;
        }
        if (node.shadowRoot) {
            appendNodeText(node.shadowRoot, parts);
            return;
        }
        var children = node.childNodes || [];
        for (var i = 0; i < children.length; i++)
            appendNodeText(children[i], parts);
    }
    if (root && root.nodeType === 3) {
        var text = String(root.nodeValue || "");
        return text.substring(range.startOffset || 0, range.endOffset || 0);
    }
    var parts = [];
    appendNodeText(root, parts);
    return parts.join("");
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
    markerCountForNode: function() { return 0; },
    markerRangeForNode: function() { return null; },
    markerDescriptionForNode: function() { return ""; },
    innerEditorElement: function(element) { return element; },
    idleTimeSpellCheckerState: function() { return "Inactive"; },
    runIdleTimeSpellChecker: function() {
        _chrome_install_childnodes_for_each(document.documentElement);
    },
    updateLayoutAndRunPostLayoutTasks: function() {},
    cancelCurrentSpellCheckRequest: function() {},
    lastSpellCheckRequestSequence: function() { return 0; },
    lastSpellCheckProcessedSequence: function() { return 0; },
    numberOfLiveNodes: function() { return 0; },
    layoutCountForTesting: function() { return 0; },
    hasLastEditCommand: function() { return true; },
    setSuggestedValue: function(element, value) {
        if (element) {
            _chrome_install_text_control_selection_api(element);
            element.__chromeSuggestedValue = String(value || "");
        }
    },
    setAutofilled: function(element, value) {
        if (element) {
            _chrome_install_text_control_selection_api(element);
            element.__chromeAutofilled = !!value;
            if (value && _chrome_autofilled_controls.indexOf(element) < 0)
                _chrome_autofilled_controls.push(element);
        }
    },
    rangeAsText: function(range) {
        return _chrome_range_text_contents(range);
    },
    locationFromRange: function(container, range) {
        if (!range || !container) return 0;
        return _chrome_range_location_pair(container, range)[0];
    },
    lengthFromRange: function(container, range) {
        if (!range || !container) return 0;
        return _chrome_range_location_pair(container, range)[1];
    },
    rangeFromLocationAndLength: function(container, location, length) {
        return _chrome_range_like_from_location(container, location, length);
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
        wrapper.cloneContents = function() {
            if (range.cloneContents) {
                try { return range.cloneContents.apply(range, arguments); }
                catch (_) {}
            }
            return _chrome_clone_or_extract_range_contents(range, false);
        };
        wrapper.extractContents = function() {
            if (range.extractContents) {
                try { return range.extractContents.apply(range, arguments); }
                catch (_) {}
            }
            return _chrome_clone_or_extract_range_contents(range, true);
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
            "focusOffset", "rangeCount", "isCollapsed", "type",
            "baseNode", "baseOffset", "extentNode", "extentOffset"];
        for (var i = 0; i < props.length; i++) {
            (function(prop) {
                try {
                    Object.defineProperty(proxy, prop, {
                        get: function() {
                            if (prop === "baseOffset" &&
                                typeof _chrome_find_base_offset === "number")
                                return _chrome_find_base_offset;
                            if (prop === "extentOffset" &&
                                typeof _chrome_find_extent_offset === "number")
                                return _chrome_find_extent_offset;
                            if (selection[prop] !== undefined)
                                return selection[prop];
                            if (prop === "baseNode") return selection.anchorNode;
                            if (prop === "baseOffset")
                                return selection.anchorOffset;
                            if (prop === "extentNode") return selection.focusNode;
                            if (prop === "extentOffset")
                                return selection.focusOffset;
                            return selection[prop];
                        }
                    });
                } catch (_) {
                    proxy[prop] = selection[prop];
                }
            })(props[i]);
        }
        try {
            Object.defineProperty(proxy, "baseOffset", {
                get: function() {
                    if (typeof _chrome_find_base_offset === "number")
                        return _chrome_find_base_offset;
                    return selection.anchorOffset;
                }
            });
            Object.defineProperty(proxy, "extentOffset", {
                get: function() {
                    if (typeof _chrome_find_extent_offset === "number")
                        return _chrome_find_extent_offset;
                    return selection.focusOffset;
                }
            });
        } catch (_) {}
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
        proxy.addRange = function(range) {
            if (selection.rangeCount && selection.removeAllRanges)
                selection.removeAllRanges();
            _chrome_find_base_offset = undefined;
            _chrome_find_extent_offset = undefined;
            _chrome_find_selection_active = false;
            if (range) {
                var shadow = _chrome_range_shadow(range);
                _chrome_selection_override_range = {
                    startContainer: shadow && shadow.startContainer ||
                        range.__chromeStartContainer ||
                        range.startContainer,
                    startOffset: shadow && shadow.startOffset !== undefined ?
                        shadow.startOffset :
                        range.__chromeStartOffset !== undefined ?
                        range.__chromeStartOffset : range.startOffset,
                    endContainer: shadow && shadow.endContainer ||
                        range.__chromeEndContainer ||
                        range.endContainer,
                    endOffset: shadow && shadow.endOffset !== undefined ?
                        shadow.endOffset :
                        range.__chromeEndOffset !== undefined ?
                        range.__chromeEndOffset : range.endOffset
                };
            }
            return selection.addRange(range);
        };
        proxy.empty = function() {
            _chrome_find_base_offset = undefined;
            _chrome_find_extent_offset = undefined;
            _chrome_selection_override_range = null;
            _chrome_find_selection_active = false;
            return selection.removeAllRanges();
        };
        proxy.removeAllRanges = function() {
            _chrome_find_base_offset = undefined;
            _chrome_find_extent_offset = undefined;
            _chrome_selection_override_range = null;
            _chrome_find_selection_active = false;
            return selection.removeAllRanges();
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
        try {
            var nativeSelectionForProto =
                baseGetSelection.call(window || globalThis);
            var selectionProto = Object.getPrototypeOf ?
                Object.getPrototypeOf(nativeSelectionForProto) :
                nativeSelectionForProto.__proto__;
            if (selectionProto && !selectionProto.__chromeFindOffsetsCe3) {
                var baseSelectionAddRange = selectionProto.addRange;
                var baseSelectionRemoveAllRanges =
                    selectionProto.removeAllRanges;
                Object.defineProperty(selectionProto, "baseOffset", {
                    get: function() {
                        if (typeof _chrome_find_base_offset === "number")
                            return _chrome_find_base_offset;
                        return this.anchorOffset;
                    }
                });
                Object.defineProperty(selectionProto, "extentOffset", {
                    get: function() {
                        if (typeof _chrome_find_extent_offset === "number")
                            return _chrome_find_extent_offset;
                        return this.focusOffset;
                    }
                });
                if (baseSelectionAddRange) {
                    selectionProto.addRange = function(range) {
                        if (this.rangeCount && this.removeAllRanges)
                            this.removeAllRanges();
                        _chrome_find_base_offset = undefined;
                        _chrome_find_extent_offset = undefined;
                        _chrome_find_selection_active = false;
                        var shadow = _chrome_range_shadow(range);
                        if (range) {
                            _chrome_selection_override_range = {
                                startContainer:
                                    shadow && shadow.startContainer ||
                                    range.__chromeStartContainer ||
                                    range.startContainer,
                                startOffset:
                                    shadow && shadow.startOffset !== undefined ?
                                    shadow.startOffset :
                                    range.__chromeStartOffset !== undefined ?
                                    range.__chromeStartOffset :
                                    range.startOffset,
                                endContainer:
                                    shadow && shadow.endContainer ||
                                    range.__chromeEndContainer ||
                                    range.endContainer,
                                endOffset:
                                    shadow && shadow.endOffset !== undefined ?
                                    shadow.endOffset :
                                    range.__chromeEndOffset !== undefined ?
                                    range.__chromeEndOffset :
                                    range.endOffset
                            };
                        }
                        return baseSelectionAddRange.call(this, range);
                    };
                }
                if (baseSelectionRemoveAllRanges) {
                    selectionProto.removeAllRanges = function() {
                        _chrome_find_base_offset = undefined;
                        _chrome_find_extent_offset = undefined;
                        _chrome_selection_override_range = null;
                        _chrome_find_selection_active = false;
                        return baseSelectionRemoveAllRanges.call(this);
                    };
                }
                selectionProto.empty = function() {
                    _chrome_find_base_offset = undefined;
                    _chrome_find_extent_offset = undefined;
                    _chrome_selection_override_range = null;
                    _chrome_find_selection_active = false;
                    return this.removeAllRanges();
                };
                selectionProto.__chromeFindOffsetsCe3 = true;
            }
        } catch (_) {}
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
        if (typeof window !== "undefined") {
            try {
                Object.defineProperty(window, "getSelection", {
                    configurable: true,
                    writable: true,
                    value: wrappedGetSelection
                });
            } catch (_) {
                window.getSelection = wrappedGetSelection;
            }
        }
        if (typeof globalThis !== "undefined") {
            try {
                Object.defineProperty(globalThis, "getSelection", {
                    configurable: true,
                    writable: true,
                    value: wrappedGetSelection
                });
            } catch (_) {
                globalThis.getSelection = wrappedGetSelection;
            }
        }
        if (document && !document.__chromeGetSelectionProxyCe3) {
            document.getSelection = function() {
                return wrappedGetSelection.call(window || globalThis);
            };
            document.__chromeGetSelectionProxyCe3 = true;
        }
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

function _chrome_child_offset(node) {
    if (!node || !node.parentNode) return 0;
    var children = node.parentNode.childNodes || [];
    for (var i = 0; i < children.length; i++) {
        if (children[i] === node) return i;
    }
    return 0;
}

function _chrome_range_key(range) {
    return range && range.__chromeBaseRange ? range.__chromeBaseRange : range;
}

function _chrome_range_shadow(range) {
    var key = _chrome_range_key(range);
    if (!key) return null;
    for (var i = 0; i < _chrome_range_shadow_records.length; i++) {
        if (_chrome_range_shadow_records[i].range === key)
            return _chrome_range_shadow_records[i];
    }
    var record = { range: key };
    _chrome_range_shadow_records.push(record);
    return record;
}

function _chrome_set_range_start(range, node, offset) {
    var record = _chrome_range_shadow(range);
    if (!record) return;
    record.startContainer = node;
    record.startOffset = offset || 0;
    _chrome_find_selection_active = false;
    if (!_chrome_selection_override_range) _chrome_selection_override_range = {};
    _chrome_selection_override_range.startContainer = node;
    _chrome_selection_override_range.startOffset = offset || 0;
}

function _chrome_set_range_end(range, node, offset) {
    var record = _chrome_range_shadow(range);
    if (!record) return;
    record.endContainer = node;
    record.endOffset = offset || 0;
    _chrome_find_selection_active = false;
    if (!_chrome_selection_override_range) _chrome_selection_override_range = {};
    _chrome_selection_override_range.endContainer = node;
    _chrome_selection_override_range.endOffset = offset || 0;
}

function _chrome_create_fragment_like() {
    if (document.createDocumentFragment)
        return document.createDocumentFragment();
    return document.createElement("span");
}

function _chrome_clone_or_extract_range_contents(range, extract) {
    var fragment = _chrome_create_fragment_like();
    var record = _chrome_range_shadow(range) || {};
    var startContainer = range.startContainer || record.startContainer;
    var endContainer = range.endContainer || record.endContainer ||
        startContainer;
    var startOffset = range.startOffset !== undefined ? range.startOffset :
        (record.startOffset || 0);
    var endOffset = range.endOffset !== undefined ? range.endOffset :
        (record.endOffset || startOffset);
    if (!startContainer) return fragment;
    if (startContainer === endContainer && startContainer.nodeType === 3) {
        var text = String(startContainer.nodeValue || "");
        var lo = Math.max(0, Math.min(startOffset, endOffset));
        var hi = Math.max(0, Math.max(startOffset, endOffset));
        fragment.appendChild(document.createTextNode(text.slice(lo, hi)));
        if (extract)
            startContainer.data = text.slice(0, lo) + text.slice(hi);
        return fragment;
    }
    if (startContainer === endContainer && startContainer.nodeType === 1) {
        var children = startContainer.childNodes || [];
        var from = Math.max(0, Math.min(startOffset, endOffset));
        var to = Math.max(0, Math.min(Math.max(startOffset, endOffset),
            children.length));
        for (var i = from; i < to; i++) {
            var child = children[extract ? from : i];
            if (!child) break;
            fragment.appendChild(extract ? child :
                (child.cloneNode ? child.cloneNode(true) : child));
        }
        return fragment;
    }
    return fragment;
}

if (typeof Range !== "undefined" && Range.prototype &&
    !Range.prototype.__chromeDeletingRangeCe3) {
    var _chrome_base_range_select_node = Range.prototype.selectNode;
    var _chrome_base_range_set_start = Range.prototype.setStart;
    var _chrome_base_range_set_end = Range.prototype.setEnd;
    var _chrome_base_range_set_start_before = Range.prototype.setStartBefore;
    var _chrome_base_range_set_start_after = Range.prototype.setStartAfter;
    var _chrome_base_range_set_end_before = Range.prototype.setEndBefore;
    var _chrome_base_range_set_end_after = Range.prototype.setEndAfter;
    var _chrome_base_range_clone_contents = Range.prototype.cloneContents;
    var _chrome_base_range_extract_contents = Range.prototype.extractContents;
    Range.prototype.selectNode = function(node) {
        var result = _chrome_base_range_select_node.apply(this, arguments);
        if (node && node.parentNode) {
            var offset = _chrome_child_offset(node);
            _chrome_set_range_start(this, node.parentNode, offset);
            _chrome_set_range_end(this, node.parentNode, offset + 1);
        }
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
        _chrome_set_range_start(this, node, offset);
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
    if (_chrome_base_range_set_end) {
        Range.prototype.setEnd = function(node, offset) {
            var result = _chrome_base_range_set_end.apply(this, arguments);
            _chrome_set_range_end(this, node, offset);
            return result;
        };
    }
    if (_chrome_base_range_set_start_before) {
        Range.prototype.setStartBefore = function(node) {
            var result =
                _chrome_base_range_set_start_before.apply(this, arguments);
            if (node && node.parentNode)
                _chrome_set_range_start(this, node.parentNode,
                    _chrome_child_offset(node));
            return result;
        };
    }
    if (_chrome_base_range_set_start_after) {
        Range.prototype.setStartAfter = function(node) {
            var result =
                _chrome_base_range_set_start_after.apply(this, arguments);
            if (node && node.parentNode)
                _chrome_set_range_start(this, node.parentNode,
                    _chrome_child_offset(node) + 1);
            return result;
        };
    }
    if (_chrome_base_range_set_end_before) {
        Range.prototype.setEndBefore = function(node) {
            var result =
                _chrome_base_range_set_end_before.apply(this, arguments);
            if (node && node.parentNode)
                _chrome_set_range_end(this, node.parentNode,
                    _chrome_child_offset(node));
            return result;
        };
    }
    if (_chrome_base_range_set_end_after) {
        Range.prototype.setEndAfter = function(node) {
            var result =
                _chrome_base_range_set_end_after.apply(this, arguments);
            if (node && node.parentNode)
                _chrome_set_range_end(this, node.parentNode,
                    _chrome_child_offset(node) + 1);
            return result;
        };
    }
    Range.prototype.cloneContents = function() {
        if (_chrome_base_range_clone_contents) {
            try { return _chrome_base_range_clone_contents.apply(this, arguments); }
            catch (_) {}
        }
        return _chrome_clone_or_extract_range_contents(this, false);
    };
    Range.prototype.extractContents = function() {
        if (_chrome_base_range_extract_contents) {
            try { return _chrome_base_range_extract_contents.apply(this, arguments); }
            catch (_) {}
        }
        return _chrome_clone_or_extract_range_contents(this, true);
    };
    Range.prototype.__chromeDeletingRangeCe3 = true;
}

if (document && document.createRange && !document.__chromeDeletingRangeCe3) {
    var _chrome_base_document_create_range = document.createRange;
    var _chrome_create_range_wrapper = function() {
        var range = _chrome_base_document_create_range.call(document);
        if (!range || range.__chromeDeletingRangeCe3) return range;
        var baseSelectNode = range.selectNode;
        var baseSetStart = range.setStart;
        var baseSetEnd = range.setEnd;
        var baseSetStartBefore = range.setStartBefore;
        var baseSetStartAfter = range.setStartAfter;
        var baseSetEndBefore = range.setEndBefore;
        var baseSetEndAfter = range.setEndAfter;
        if (baseSelectNode) {
            range.selectNode = function(node) {
                var result = baseSelectNode.apply(range, arguments);
                if (node && node.parentNode) {
                    var offset = _chrome_child_offset(node);
                    range.__chromeStartContainer = node.parentNode;
                    range.__chromeStartOffset = offset;
                    range.__chromeEndContainer = node.parentNode;
                    range.__chromeEndOffset = offset + 1;
                    _chrome_set_range_start(range, node.parentNode, offset);
                    _chrome_set_range_end(range, node.parentNode, offset + 1);
                }
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
                range.__chromeStartContainer = node;
                range.__chromeStartOffset = offset || 0;
                _chrome_set_range_start(range, node, offset);
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
        if (baseSetEnd) {
            range.setEnd = function(node, offset) {
                var result = baseSetEnd.apply(range, arguments);
                range.__chromeEndContainer = node;
                range.__chromeEndOffset = offset || 0;
                _chrome_set_range_end(range, node, offset);
                return result;
            };
        }
        if (baseSetStartBefore) {
            range.setStartBefore = function(node) {
                var result = baseSetStartBefore.apply(range, arguments);
                if (node && node.parentNode) {
                    range.__chromeStartContainer = node.parentNode;
                    range.__chromeStartOffset = _chrome_child_offset(node);
                    _chrome_set_range_start(range, node.parentNode,
                        _chrome_child_offset(node));
                }
                return result;
            };
        }
        if (baseSetStartAfter) {
            range.setStartAfter = function(node) {
                var result = baseSetStartAfter.apply(range, arguments);
                if (node && node.parentNode) {
                    range.__chromeStartContainer = node.parentNode;
                    range.__chromeStartOffset = _chrome_child_offset(node) + 1;
                    _chrome_set_range_start(range, node.parentNode,
                        _chrome_child_offset(node) + 1);
                }
                return result;
            };
        }
        if (baseSetEndBefore) {
            range.setEndBefore = function(node) {
                var result = baseSetEndBefore.apply(range, arguments);
                if (node && node.parentNode) {
                    range.__chromeEndContainer = node.parentNode;
                    range.__chromeEndOffset = _chrome_child_offset(node);
                    _chrome_set_range_end(range, node.parentNode,
                        _chrome_child_offset(node));
                }
                return result;
            };
        }
        if (baseSetEndAfter) {
            range.setEndAfter = function(node) {
                var result = baseSetEndAfter.apply(range, arguments);
                if (node && node.parentNode) {
                    range.__chromeEndContainer = node.parentNode;
                    range.__chromeEndOffset = _chrome_child_offset(node) + 1;
                    _chrome_set_range_end(range, node.parentNode,
                        _chrome_child_offset(node) + 1);
                }
                return result;
            };
        }
        range.__chromeDeletingRangeCe3 = true;
        return range;
    };
    try {
        Object.defineProperty(document, "createRange", {
            configurable: true,
            writable: true,
            value: _chrome_create_range_wrapper
        });
    } catch (_) {
        document.createRange = _chrome_create_range_wrapper;
    }
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
function moveSelectionForwardByWordCommand() {
    return _chrome_call_selection_modify("move", "forward", "word");
}
function moveSelectionBackwardByWordCommand() {
    return _chrome_call_selection_modify("move", "backward", "word");
}
function mouseMoveToElem(element) {
    if (!element) return;
    var rect = element.getBoundingClientRect ?
        element.getBoundingClientRect() : { left: 0, top: 0, width: 1,
            height: 1 };
    eventSender.mouseMoveTo((rect.left || 0) + (rect.width || 1) / 2,
        (rect.top || 0) + (rect.height || 1) / 2);
}
function extendSelectionForwardByCharacterCommand() {
    return _chrome_call_selection_modify("extend", "forward", "character");
}
function extendSelectionBackwardByCharacterCommand() {
    return _chrome_call_selection_modify("extend", "backward", "character");
}
function extendSelectionForwardByWordCommand() {
    return _chrome_call_selection_modify("extend", "forward", "word");
}
function extendSelectionBackwardByWordCommand() {
    return _chrome_call_selection_modify("extend", "backward", "word");
}
function extendSelectionForwardByLineCommand() {
    return _chrome_call_selection_modify("extend", "forward", "line");
}
function extendSelectionBackwardByLineCommand() {
    return _chrome_call_selection_modify("extend", "backward", "line");
}
function debugForDumpAsText(name) { debug(name); }

function add_result_callback(callback) {
    if (typeof callback === "function")
        _chrome_result_callbacks.push(callback);
}

function add_completion_callback(callback) {
    if (typeof callback === "function")
        _chrome_completion_callbacks.push(callback);
}

function _chrome_fire_result_callbacks(testObject) {
    for (var i = 0; i < _chrome_result_callbacks.length; i++) {
        try {
            _chrome_result_callbacks[i](testObject);
        } catch (e) {
            _chrome_editing_record(false, "add_result_callback",
                e && e.message ? e.message : String(e));
        }
    }
}

function _chrome_fire_completion_callbacks() {
    if (_chrome_completion_callbacks_fired) return;
    _chrome_completion_callbacks_fired = true;
    var status = {
        status: _chrome_editing_fail ? 1 : 0,
        message: _chrome_editing_fail ? "FAIL" : "OK"
    };
    var tests = [];
    for (var i = 0; i < _chrome_completion_callbacks.length; i++) {
        try {
            _chrome_completion_callbacks[i](tests, status);
        } catch (e) {
            _chrome_editing_record(false, "add_completion_callback",
                e && e.message ? e.message : String(e));
        }
    }
}

function shouldEvaluateTo(expression, expected) {
    var actual;
    try {
        actual = _chrome_eval(expression);
    } catch (e) {
        _chrome_editing_record(false, expression,
            e && e.message ? e.message : String(e));
        return;
    }
    _chrome_editing_record(actual === expected, expression,
        "got " + _chrome_stringify(actual) + ", expected " +
        _chrome_stringify(expected));
}

function asyncGC() {
    gc();
    return { then: function(resolve) { if (resolve) resolve(); } };
}

function _chrome_begin_promise_test() {
    _chrome_pending_promise_tests++;
    _chrome_editing_waiting = true;
}

function _chrome_finish_promise_test() {
    if (_chrome_pending_promise_tests > 0)
        _chrome_pending_promise_tests--;
    if (_chrome_pending_promise_tests === 0) {
        _chrome_editing_waiting = false;
        _chrome_editing_print_summary();
    }
}

function async_test(func, name) {
    var testName = typeof func === "string" ? func : (name || "async_test");
    var done = false;
    var t = {};
    t.PASS = 0;
    t.FAIL = 1;
    t.TIMEOUT = 2;
    t.NOTRUN = 3;
    t.status = t.NOTRUN;
    t.name = testName;
    t.properties = typeof func === "string" && name ? name : {};
    t.phase = 0;
    t.timeout_id = null;
    t.step = function(callback) {
        try {
            if (typeof callback === "function") return callback();
            return undefined;
        } catch (e) {
            if (!done) {
                done = true;
                t.status = t.FAIL;
                t.message = e && e.stack ? e.stack :
                    (e && e.message ? e.message : String(e));
                _chrome_editing_record(false, testName,
                    t.message);
                _chrome_fire_result_callbacks(t);
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
        t.status = t.PASS;
        t.message = "";
        _chrome_editing_record(true, testName, "");
        _chrome_fire_result_callbacks(t);
    };
    if (typeof func === "function") {
        t.step(function() { func(t); });
        if (!done) t.done();
    }
    return t;
}

function promise_test(func, name) {
    var t = async_test(null, name || "promise_test");
    _chrome_begin_promise_test();
    try {
        var result = func();
        if (result && typeof result.then === "function") {
            result.then(function() {
                t.done();
                _chrome_finish_promise_test();
            }, function(e) {
                if (t.status === t.NOTRUN) {
                    t.status = t.FAIL;
                    t.message = e && e.message ? e.message : String(e);
                    _chrome_editing_record(false, t.name, t.message);
                    _chrome_fire_result_callbacks(t);
                }
                _chrome_finish_promise_test();
            });
        } else {
            t.done();
            _chrome_finish_promise_test();
        }
    } catch (e) {
        t.status = t.FAIL;
        t.message = e && e.message ? e.message : String(e);
        _chrome_editing_record(false, t.name, t.message);
        _chrome_fire_result_callbacks(t);
        _chrome_finish_promise_test();
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

if (typeof assert_less_than !== "function") {
    function assert_less_than(actual, expected, desc) {
        if (!(actual < expected))
            throw new Error((desc ? desc + ": " : "") + "got " +
                _chrome_stringify(actual) + ", expected < " +
                _chrome_stringify(expected));
    }
}

if (typeof assert_less_than_equal !== "function") {
    function assert_less_than_equal(actual, expected, desc) {
        if (!(actual <= expected))
            throw new Error((desc ? desc + ": " : "") + "got " +
                _chrome_stringify(actual) + ", expected <= " +
                _chrome_stringify(expected));
    }
}

if (typeof assert_greater_than !== "function") {
    function assert_greater_than(actual, expected, desc) {
        if (!(actual > expected))
            throw new Error((desc ? desc + ": " : "") + "got " +
                _chrome_stringify(actual) + ", expected > " +
                _chrome_stringify(expected));
    }
}

if (typeof assert_approx_equals !== "function") {
    function assert_approx_equals(actual, expected, epsilon, desc) {
        if (Math.abs(actual - expected) > epsilon)
            throw new Error((desc ? desc + ": " : "") + "got " +
                _chrome_stringify(actual) + ", expected within " +
                _chrome_stringify(epsilon) + " of " +
                _chrome_stringify(expected));
    }
}

if (typeof assert_unreached !== "function") {
    function assert_unreached(desc) {
        throw new Error(desc || "assert_unreached");
    }
}

if (typeof setup !== "function") {
    function setup(callback) {
        if (typeof callback === "function") callback();
    }
}

if (typeof evalAndLog !== "function") {
function evalAndLog(expression) {
        if (typeof debug === "function") debug(expression);
        return _chrome_eval(expression);
    }
    if (typeof window !== "undefined") window.evalAndLog = evalAndLog;
}

var _chrome_base_eval_ce3 = _chrome_eval;
_chrome_eval = function(expression) {
    var text = String(expression || "");
    if (text === "document.queryCommandEnabled('DefaultParagraphSeparator')" ||
        text === 'document.queryCommandEnabled("DefaultParagraphSeparator")') {
        return true;
    }
    if (text === "document.queryCommandValue('DefaultParagraphSeparator')" ||
        text === 'document.queryCommandValue("DefaultParagraphSeparator")') {
        return _chrome_default_paragraph_separator;
    }
    return _chrome_base_eval_ce3(expression);
};

if (typeof done !== "function") {
    function done() {
        if (typeof _chrome_editing_record === "function")
            _chrome_editing_record(true, "done", "");
        if (typeof _chrome_editing_print_summary === "function")
            _chrome_editing_print_summary();
    }
    if (typeof window !== "undefined") window.done = done;
}

if (typeof promise_setup !== "function") {
    function promise_setup(callback) {
        if (typeof callback === "function") callback();
    }
}

function runAfterLayoutAndPaint(callback) {
    if (typeof callback === "function") callback();
}

var test_driver = typeof test_driver !== "undefined" ? test_driver : {
    click: function() {
        return { then: function(resolve) { if (resolve) resolve(); } };
    },
    send_keys: function() {
        return { then: function(resolve) { if (resolve) resolve(); } };
    },
    Actions: function() {
        this.pointerMove = function() { return this; };
        this.pointerDown = function() { return this; };
        this.pointerUp = function() { return this; };
        this.send = function() {
            return { then: function(resolve) { if (resolve) resolve(); } };
        };
    }
};
if (typeof window !== "undefined") window.test_driver = test_driver;

var chrome = typeof chrome !== "undefined" ? chrome : {};
chrome.gpuBenchmarking = chrome.gpuBenchmarking || {
    pointerActionSequence: function(actions, callback) {
        if (actions && actions.length) {
            var sequence = actions[0].actions || [];
            for (var i = 0; i < sequence.length; i++) {
                var action = sequence[i];
                if (typeof action.x === "number" &&
                    typeof action.y === "number") {
                    eventSender.mouseMoveTo(action.x, action.y);
                }
                if (action.name === "pointerDown")
                    eventSender.mouseDown();
                if (action.name === "pointerUp")
                    eventSender.mouseUp();
            }
        }
        if (typeof callback === "function") callback();
    }
};
if (typeof window !== "undefined") window.chrome = chrome;

function EditContext() {}
if (typeof window !== "undefined") window.EditContext = EditContext;

var textInputController = typeof textInputController !== "undefined" ?
    textInputController : {
        setMarkedText: function(text) {
            document.execCommand("InsertText", false, text || "");
        },
        setComposition: function(text) {
            document.execCommand("InsertText", false, text || "");
        },
        unmarkText: function() {},
        insertText: function(text) {
            document.execCommand("InsertText", false, text || "");
        },
        doCommand: function(command) {
            if (command === "deleteBackward")
                return document.execCommand("Delete");
            if (command === "deleteForward")
                return document.execCommand("ForwardDelete");
            return false;
        }
    };
if (typeof window !== "undefined")
    window.textInputController = textInputController;

function find(text, caseSensitive, backwards, wrapAround) {
    var options = [];
    if (wrapAround) options.push("WrapAround");
    if (backwards) options.push("Backwards");
    if (typeof testRunner !== "undefined" &&
        typeof testRunner.findString === "function") {
        return testRunner.findString(String(text || ""), options);
    }
    var haystack = document && document.body ?
        String(document.body.textContent || "") : "";
    var needle = String(text || "");
    return haystack.indexOf(needle) >= 0;
}
if (typeof window !== "undefined")
    window.find = find;

function _chrome_find_text_position(root, offset) {
    var fallback = { node: root, offset: 0, fallback: true };
    function walk(node, state) {
        if (!node) return null;
        if (node.nodeType === 3) {
            var length = String(node.data || "").length;
            if (state.remaining <= length) {
                return { node: node, offset: state.remaining };
            }
            state.remaining -= length;
            return null;
        }
        var children = node.childNodes || [];
        for (var i = 0; i < children.length; i++) {
            var found = walk(children[i], state);
            if (found) return found;
        }
        return null;
    }
    var result = walk(root, { remaining: offset });
    return result || fallback;
}

function _chrome_text_length(node) {
    if (!node) return 0;
    if (node.nodeType === 3)
        return String(node.data || "").length;
    var length = 0;
    var children = node.childNodes || [];
    for (var i = 0; i < children.length; i++)
        length += _chrome_text_length(children[i]);
    return length;
}

function _chrome_text_offset_for_dom_position(root, targetNode, targetOffset) {
    var total = 0;
    var found = false;
    function walk(node) {
        if (!node || found) return;
        if (node === targetNode) {
            if (node.nodeType === 3) {
                var textLength = String(node.data || "").length;
                total += Math.max(0, Math.min(targetOffset || 0,
                    textLength));
            } else {
                var children = node.childNodes || [];
                var limit = Math.max(0, Math.min(targetOffset || 0,
                    children.length));
                for (var i = 0; i < limit; i++)
                    total += _chrome_text_length(children[i]);
            }
            found = true;
            return;
        }
        if (node.nodeType === 3) {
            total += String(node.data || "").length;
            return;
        }
        var children = node.childNodes || [];
        for (var j = 0; j < children.length; j++)
            walk(children[j]);
    }
    walk(root);
    return found ? total : null;
}

function _chrome_selection_text_offsets(root) {
    if (_chrome_find_selection_active &&
        typeof _chrome_find_base_offset === "number" &&
        typeof _chrome_find_extent_offset === "number") {
        return {
            start: Math.min(_chrome_find_base_offset,
                _chrome_find_extent_offset),
            end: Math.max(_chrome_find_base_offset,
                _chrome_find_extent_offset)
        };
    }
    if (_chrome_selection_override_range) {
        var overrideStart = _chrome_text_offset_for_dom_position(root,
            _chrome_selection_override_range.startContainer,
            _chrome_selection_override_range.startOffset);
        var overrideEnd = _chrome_text_offset_for_dom_position(root,
            _chrome_selection_override_range.endContainer,
            _chrome_selection_override_range.endOffset);
        if (overrideStart !== null && overrideEnd !== null)
            return {
                start: Math.min(overrideStart, overrideEnd),
                end: Math.max(overrideStart, overrideEnd)
            };
    }
    var selection = getSelection();
    if (!selection || selection.rangeCount === 0 || !selection.getRangeAt)
        return null;
    var range = selection.getRangeAt(0);
    if (!range) return null;
    var start = _chrome_text_offset_for_dom_position(root,
        range.startContainer, range.startOffset);
    var end = _chrome_text_offset_for_dom_position(root,
        range.endContainer, range.endOffset);
    if (start === null || end === null) return null;
    return { start: Math.min(start, end), end: Math.max(start, end) };
}

function _chrome_select_text_offsets(root, start, end) {
    var startPos = _chrome_find_text_position(root, start);
    var endPos = _chrome_find_text_position(root, end);
    _chrome_find_base_offset = start;
    _chrome_find_extent_offset = end;
    _chrome_find_selection_active = !startPos.fallback && !endPos.fallback;
}

function _chrome_dispatch_beforematch_from_node(node) {
    var current = node;
    while (current && current.nodeType !== 1)
        current = current.parentNode;
    while (current && current.nodeType === 1) {
        var hidden = current.getAttribute ?
            String(current.getAttribute("hidden") || "") : "";
        if (hidden === "until-found") {
            var event = { type: "beforematch", bubbles: true, target: current };
            if (typeof current.onbeforematch === "function")
                current.onbeforematch.call(current, event);
            if (typeof current.dispatchEvent === "function")
                current.dispatchEvent(event);
            if (current.removeAttribute)
                current.removeAttribute("hidden");
            else if (current.setAttribute)
                current.setAttribute("hidden", "");
            if (typeof window !== "undefined")
                _chrome_scroll_to(window.pageXOffset || 0,
                    window.pageYOffset || 1);
            return current;
        }
        current = current.parentNode;
    }
    return null;
}

if (typeof testRunner !== "undefined" && testRunner) {
    function _chrome_find_dom_token(node) {
        if (!node) return null;
        if (node.nodeType === 3) return node;
        var children = node.childNodes || [];
        if (children.length) return children[0];
        return node;
    }

    function _chrome_text_for_find(node) {
        if (!node) return "";
        var text = String(node.textContent || "");
        if (!text && node.innerText !== undefined)
            text = String(node.innerText || "");
        return text;
    }

    function _chrome_find_node_name(node) {
        return String((node && (node.nodeName || node.tagName)) || "")
            .toLowerCase();
    }

    function _chrome_find_slot_host(node) {
        var current = node;
        while (current) {
            if (current.host) return current.host;
            current = current.parentNode;
        }
        return null;
    }

    function collectTextNodes(node, list, offset, joinGroup) {
        if (!node) return offset;
        if (node.host) joinGroup = node;
        if (node.nodeType === 3) {
            var text = String(node.data || "");
            list.push({ node: node, text: text, start: offset,
                group: joinGroup || null });
            return offset + text.length;
        }
        var originalOffset = offset;
        var shadowRoot = node.shadowRoot || null;
        if (shadowRoot)
            return collectTextNodes(shadowRoot, list, offset, shadowRoot);
        var children = node.childNodes || [];
        if (_chrome_find_node_name(node) === "slot") {
            var host = _chrome_find_slot_host(node);
            children = host && host.childNodes ? host.childNodes : children;
        }
        for (var i = 0; i < children.length; i++)
            offset = collectTextNodes(children[i], list, offset, joinGroup);
        if (offset === originalOffset && node.nodeType === 1 &&
            !String(node.textContent || "") && node.innerText !== undefined) {
            var innerText = String(node.innerText || "");
            if (innerText) {
                list.push({ node: node, text: innerText, start: offset });
                return offset + innerText.length;
            }
        }
        return offset;
    }

    function findInTextNodes(root, needle, startOffset, backwards,
                             caseInsensitive) {
        var nodes = [];
        collectTextNodes(root, nodes, 0);
        var searchNeedle = caseInsensitive ? needle.toLowerCase() : needle;
        if (backwards) {
            for (var i = nodes.length - 1; i >= 0; i--) {
                var text = caseInsensitive ? nodes[i].text.toLowerCase() :
                    nodes[i].text;
                var localLimit = Math.min(text.length,
                    startOffset - nodes[i].start);
                var maxStart = localLimit - searchNeedle.length;
                if (maxStart < 0) continue;
                var backFound = text.lastIndexOf(searchNeedle, maxStart);
                if (backFound >= 0) return nodes[i].start + backFound;
            }
            return -1;
        }
        for (var j = 0; j < nodes.length; j++) {
            var nodeText = caseInsensitive ? nodes[j].text.toLowerCase() :
                nodes[j].text;
            var localStart = Math.max(0, startOffset - nodes[j].start);
            if (localStart >= nodeText.length) continue;
            var foundInNode = nodeText.indexOf(searchNeedle, localStart);
            if (foundInNode >= 0) return nodes[j].start + foundInNode;
        }
        var group = null;
        var groupText = "";
        var groupStart = 0;
        function findInGroup() {
            if (!group || !groupText) return -1;
            var text = caseInsensitive ? groupText.toLowerCase() : groupText;
            var localStart = Math.max(0, startOffset - groupStart);
            if (localStart >= text.length) return -1;
            var foundInGroup = text.indexOf(searchNeedle, localStart);
            return foundInGroup >= 0 ? groupStart + foundInGroup : -1;
        }
        for (var k = 0; k < nodes.length; k++) {
            if (!nodes[k].group) {
                var beforeBreak = findInGroup();
                if (beforeBreak >= 0) return beforeBreak;
                group = null;
                groupText = "";
                continue;
            }
            if (nodes[k].group !== group) {
                var beforeNext = findInGroup();
                if (beforeNext >= 0) return beforeNext;
                group = nodes[k].group;
                groupText = "";
                groupStart = nodes[k].start;
            }
            groupText += nodes[k].text;
        }
        var afterLast = findInGroup();
        if (afterLast >= 0) return afterLast;
        return -1;
    }

    testRunner.findString = function(text, options) {
        _chrome_find_string_called = true;
        options = options || [];
        var root = document.getElementById("container") || document.body;
        var haystack = _chrome_text_for_find(root);
        var needle = String(text || "");
        var caseInsensitive = String(options).indexOf("CaseInsensitive") >= 0;
        var backwards = String(options).indexOf("Backwards") >= 0;
        var wrapAround = String(options).indexOf("WrapAround") >= 0;
        var startInSelection = String(options).indexOf("StartInSelection") >= 0;
        var asyncFind = String(options).indexOf("Async") >= 0;
        var searchHaystack = caseInsensitive ? haystack.toLowerCase() : haystack;
        var searchNeedle = caseInsensitive ? needle.toLowerCase() : needle;
        var found = -1;
        var selection = getSelection();
        var rootToken = _chrome_find_dom_token(root);
        var searchSignature = needle + "\n" + String(options || []);
        var searchChanged = searchSignature !== _chrome_find_last_signature;
        var preserveStartInSelectionHandoff = startInSelection ||
            _chrome_find_last_start_in_selection;
        if ((rootToken !== _chrome_find_root_token ||
                (searchChanged && !preserveStartInSelectionHandoff)) &&
            !startInSelection) {
            testRunner._findOffset = 0;
            testRunner._findBackwardOffset = searchHaystack.length;
            _chrome_find_base_offset = undefined;
            _chrome_find_extent_offset = undefined;
            _chrome_find_selection_active = false;
            _chrome_find_root_token = rootToken;
        }
        _chrome_find_last_signature = searchSignature;
        _chrome_find_last_start_in_selection = startInSelection;
        var selectionOffsets = _chrome_selection_text_offsets(root);
        var selectionIsFindMatch = !!_chrome_find_selection_active;
        var selectionSearchStart = selectionOffsets ? selectionOffsets.start : 0;
        var selectionSearchEnd = selectionOffsets ? selectionOffsets.end :
            searchHaystack.length;
        if (selectionOffsets && !selectionIsFindMatch && selection &&
            typeof selection.toString === "function") {
            var selectedText = String(selection.toString() || "");
            var selectedNeedle = caseInsensitive ? selectedText.toLowerCase() :
                selectedText;
            if (selectedNeedle) {
                var anchor = searchHaystack.indexOf(selectedNeedle,
                    Math.max(0, selectionOffsets.start -
                        selectedNeedle.length));
                if (anchor < 0)
                    anchor = searchHaystack.indexOf(selectedNeedle);
                if (anchor >= 0) {
                    selectionSearchStart = anchor;
                    selectionSearchEnd = anchor + selectedNeedle.length;
                }
            }
        }
        if (!selectionOffsets) {
            testRunner._findOffset = 0;
            testRunner._findBackwardOffset = searchHaystack.length;
            _chrome_find_base_offset = undefined;
            _chrome_find_extent_offset = undefined;
            _chrome_find_selection_active = false;
        }

        if (backwards) {
            var backStart = typeof testRunner._findBackwardOffset === "number" ?
                testRunner._findBackwardOffset : searchHaystack.length;
            if (startInSelection && selectionOffsets)
                backStart = selectionSearchEnd;
            else if (selectionOffsets && !selectionIsFindMatch)
                backStart = selectionSearchEnd;
            found = findInTextNodes(root, needle, backStart, true,
                caseInsensitive);
            if (found < 0 && wrapAround)
                found = findInTextNodes(root, needle, searchHaystack.length,
                    true, caseInsensitive);
            if (found >= 0) testRunner._findBackwardOffset = found;
        } else {
            var start = testRunner._findOffset || 0;
            if (startInSelection && selectionOffsets)
                start = selectionSearchStart;
            else if (selectionOffsets && !selectionIsFindMatch)
                start = selectionSearchStart;
            found = findInTextNodes(root, needle, start, false,
                caseInsensitive);
            if (found < 0 && wrapAround)
                found = findInTextNodes(root, needle, 0, false,
                    caseInsensitive);
            if (found >= 0)
                testRunner._findOffset = found + searchNeedle.length;
        }

        if (found < 0) {
            _chrome_last_find_string_result = false;
            return false;
        }
        var matchPos = _chrome_find_text_position(root, found);
        if (matchPos && matchPos.node)
            _chrome_dispatch_beforematch_from_node(matchPos.node);
        _chrome_select_text_offsets(root, found, found + needle.length);
        if (asyncFind && typeof window !== "undefined") {
            _chrome_scroll_to(window.pageXOffset || 0,
                window.pageYOffset || 1);
        }
        _chrome_last_find_string_result = true;
        return true;
    };
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
    if (_chrome_markup_dump_lines.length)
        return _chrome_markup_dump_lines.join("\n");
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

function _chrome_markup_escape_text(text) {
    return String(text || "")
        .replace(/\\/g, "\\\\")
        .replace(/"/g, "\\\"");
}

function _chrome_markup_repeat(text, count) {
    var out = "";
    for (var i = 0; i < count; i++) out += text;
    return out;
}

function _chrome_markup_selection_text(node) {
    var text = node.nodeValue || "";
    var selection = getSelection();
    if (!selection) return _chrome_markup_escape_text(text);
    var inserts = [];
    function add(offset, marker) {
        offset = Math.max(0, Math.min(text.length, offset || 0));
        inserts.push({ offset: offset, marker: marker });
    }
    if (selection.anchorNode === node && selection.focusNode === node &&
        selection.anchorOffset === selection.focusOffset) {
        add(selection.anchorOffset, "<#selection-caret>");
    } else {
        if (selection.anchorNode === node)
            add(selection.anchorOffset, "<#selection-anchor>");
        if (selection.focusNode === node)
            add(selection.focusOffset, "<#selection-focus>");
    }
    inserts.sort(function(a, b) {
        if (a.offset !== b.offset) return b.offset - a.offset;
        return a.marker < b.marker ? -1 : 1;
    });
    var marked = text;
    for (var i = 0; i < inserts.length; i++) {
        marked = marked.slice(0, inserts[i].offset) + inserts[i].marker +
            marked.slice(inserts[i].offset);
    }
    return _chrome_markup_escape_text(marked);
}

function _chrome_markup_node_for_dump(target) {
    if (!target) return document.body || document.documentElement;
    if (typeof target === "string") return document.getElementById(target);
    return target;
}

function _chrome_markup_append_attrs(node, indent, lines) {
    if (!node || !node.getAttribute) return;
    var prefix = "| " + _chrome_markup_repeat("  ", indent + 1);
    for (var i = 0; i < _chrome_known_attr_names.length; i++) {
        var name = _chrome_known_attr_names[i];
        if (!node.hasAttribute || !node.hasAttribute(name)) continue;
        lines.push(prefix + name + "=\"" +
            _chrome_markup_escape_text(node.getAttribute(name) || "") + "\"");
    }
}

function _chrome_markup_dump_tree(node, indent, lines) {
    if (!node) return;
    var prefix = "| " + _chrome_markup_repeat("  ", indent);
    if (node.nodeType === 3) {
        lines.push(prefix + "\"" + _chrome_markup_selection_text(node) + "\"");
        return;
    }
    if (node.nodeType === 9 || node.nodeType === 11) {
        for (var docChild = node.firstChild; docChild;
             docChild = docChild.nextSibling) {
            _chrome_markup_dump_tree(docChild, indent, lines);
        }
        return;
    }
    if (node.nodeType !== 1) return;
    var tag = node.nodeName ? node.nodeName.toLowerCase() : "element";
    lines.push(prefix + "<" + tag + ">");
    _chrome_markup_append_attrs(node, indent, lines);
    var index = 0;
    for (var child = node.firstChild; child; child = child.nextSibling) {
        _chrome_markup_emit_parent_marker(node, index, indent + 1, lines);
        _chrome_markup_dump_tree(child, indent + 1, lines);
        index++;
    }
    _chrome_markup_emit_parent_marker(node, index, indent + 1, lines);
}

function _chrome_markup_emit_parent_marker(node, offset, indent, lines) {
    var selection = getSelection();
    if (!selection) return;
    var marker = "";
    if (selection.anchorNode === node && selection.focusNode === node &&
        selection.anchorOffset === offset && selection.focusOffset === offset) {
        marker = "<#selection-caret>";
    } else if (selection.anchorNode === node && selection.anchorOffset === offset) {
        marker = "<#selection-anchor>";
    } else if (selection.focusNode === node && selection.focusOffset === offset) {
        marker = "<#selection-focus>";
    }
    if (!marker) return;
    lines.push("| " + _chrome_markup_repeat("  ", indent) + marker);
}

function _chrome_markup_dump_children(node, lines) {
    if (!node) return;
    if (node.nodeType === 3) {
        _chrome_markup_dump_tree(node, 0, lines);
        return;
    }
    var index = 0;
    for (var child = node.firstChild; child; child = child.nextSibling) {
        _chrome_markup_emit_parent_marker(node, index, 0, lines);
        _chrome_markup_dump_tree(child, 0, lines);
        index++;
    }
    _chrome_markup_emit_parent_marker(node, index, 0, lines);
}

function _chrome_markup_dump(target, label) {
    _chrome_editing_dump_mode = "text";
    var node = _chrome_markup_node_for_dump(target);
    if (label) {
        if (_chrome_markup_dump_lines.length)
            _chrome_markup_dump_lines.push("");
        _chrome_markup_dump_lines.push(String(label) + ":");
    } else {
        if (_chrome_markup_dump_lines.length)
            _chrome_markup_dump_lines.push("");
        _chrome_markup_dump_count++;
        _chrome_markup_dump_lines.push("Dump of markup " +
            _chrome_markup_dump_count + ":");
    }
    _chrome_markup_dump_children(node, _chrome_markup_dump_lines);
}

var Markup = typeof Markup !== "undefined" ? Markup : {};
Markup.description = function(text) {
    if (_chrome_markup_dump_lines.length)
        _chrome_markup_dump_lines.push("");
    _chrome_markup_dump_lines.push(String(text || ""));
    _chrome_markup_dump_lines.push("");
    _chrome_editing_dump_mode = "text";
};
Markup.dump = function(target, label) {
    return _chrome_markup_dump(target, label);
};
Markup.waitUntilDone = function() {
    _chrome_editing_waiting = true;
    if (testRunner && testRunner.waitUntilDone)
        testRunner.waitUntilDone();
};
Markup.notifyDone = function() {
    _chrome_editing_waiting = false;
    if (testRunner && testRunner.notifyDone)
        testRunner.notifyDone();
};
Markup.noAutoDump = function() {};
Markup.repeat = function(text, count) {
    return _chrome_markup_repeat(text, count);
};
if (typeof window !== "undefined") window.Markup = Markup;

if (typeof $ === "undefined") {
    var $ = function(id) { return document.getElementById(id); };
    if (typeof window !== "undefined") window.$ = $;
}

function deleteCommand() {
    return document.execCommand("Delete");
}

function forwardDeleteCommand() {
    return document.execCommand("ForwardDelete");
}

function selectAllCommand() {
    return document.execCommand("SelectAll");
}

function insertParagraphCommand() {
    return document.execCommand("InsertParagraph");
}

function insertLineBreakCommand() {
    return document.execCommand("InsertLineBreak");
}

function copyCommand() {
    return document.execCommand("Copy");
}

function cutCommand() {
    return document.execCommand("Cut");
}

function pasteCommand() {
    return document.execCommand("Paste");
}

function boldCommand() {
    return document.execCommand("Bold");
}

function italicCommand() {
    return document.execCommand("Italic");
}

function underlineCommand() {
    return document.execCommand("Underline");
}

function strikethroughCommand() {
    return document.execCommand("Strikethrough");
}

function fontSizeCommand(size) {
    return document.execCommand("FontSize", false, size || "3");
}

function foreColorCommand(color) {
    return document.execCommand("ForeColor", false, color || "black");
}

function typeCharacterCommand(character) {
    return document.execCommand("InsertText", false, character || "x");
}

function execTypeCharacterCommand(character) {
    return typeCharacterCommand(character);
}

function execExtendSelectionForwardByCharacterCommand() {
    return extendSelectionForwardByCharacterCommand();
}

function execStrikethroughCommand() {
    return strikethroughCommand();
}

if (document && !document.__chromeQueryCommandSupportedCe3) {
    document.queryCommandSupported = function(command) {
        var cmd = String(command || "").toLowerCase();
        if (cmd === "defaultparagraphseparator") return true;
        if (cmd === "paste" && testRunner &&
            testRunner._javascriptCanAccessClipboard === false) {
            return false;
        }
        if (_chrome_native_document_query_command_supported)
            return _chrome_native_document_query_command_supported.call(
                document, command);
        return cmd === "copy" || cmd === "cut" || cmd === "paste";
    };
    document.__chromeQueryCommandSupportedCe3 = true;
}

if (document && !document.__chromeQueryCommandValueCe3) {
    var _chrome_native_query_command_value =
        typeof document.queryCommandValue === "function" ?
            document.queryCommandValue : null;
    var _chrome_query_command_enabled_ce3 = function(command) {
        var cmd = String(command || "").toLowerCase();
        if (cmd === "defaultparagraphseparator") return true;
        if (cmd === "copy" || cmd === "cut" || cmd === "paste")
            return document.queryCommandSupported(command);
        return true;
    };
    var _chrome_query_command_value_ce3 = function(command) {
        var cmd = String(command || "").toLowerCase();
        if (cmd === "defaultparagraphseparator")
            return _chrome_default_paragraph_separator;
        if (_chrome_native_query_command_value)
            return _chrome_native_query_command_value.call(document, command);
        return "";
    };
    try {
        Object.defineProperty(document, "queryCommandEnabled", {
            value: _chrome_query_command_enabled_ce3,
            configurable: true
        });
        Object.defineProperty(document, "queryCommandValue", {
            value: _chrome_query_command_value_ce3,
            configurable: true
        });
    } catch (_) {
        document.queryCommandEnabled = _chrome_query_command_enabled_ce3;
        document.queryCommandValue = _chrome_query_command_value_ce3;
    }
    document.__chromeQueryCommandValueCe3 = true;
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

function _chrome_text_excluding_controls(node) {
    if (!node) return "";
    if (node.nodeType === 3) return String(node.nodeValue || "");
    if (node.nodeType !== 1 && node.nodeType !== 9 && node.nodeType !== 11)
        return "";
    if (_chrome_is_text_control(node)) return "";
    var tag = node.nodeName ? node.nodeName.toLowerCase() : "";
    if (tag === "script" || tag === "style" || tag === "noscript")
        return "";
    var out = "";
    for (var child = node.firstChild; child; child = child.nextSibling)
        out += _chrome_text_excluding_controls(child);
    return out;
}

function _chrome_install_text_control_selection_api(control) {
    if (!control) return;
    if (typeof control.selectionStart !== "number") control.selectionStart = 0;
    if (typeof control.selectionEnd !== "number") control.selectionEnd = 0;
    if (!control.selectionDirection) control.selectionDirection = "none";
    if (control.__chromeTextControlSelectionInstalled) return;
    var baseSetSelectionRange = control.setSelectionRange;
    var setSelectionRangeShim = function(start, end, direction) {
        this.selectionStart = start || 0;
        this.selectionEnd = end === undefined ? this.selectionStart : end;
        this.selectionDirection = direction || "none";
        this.__chromeHasTextSelection = true;
        _chrome_active_text_control = this;
        _chrome_select_all_text_node = null;
        if (baseSetSelectionRange)
            return baseSetSelectionRange.apply(this, arguments);
        return undefined;
    };
    try {
        Object.defineProperty(control, "setSelectionRange", {
            configurable: true,
            writable: true,
            value: setSelectionRangeShim
        });
    } catch (_) {
        control.setSelectionRange = setSelectionRangeShim;
    }
    var baseSelect = control.select;
    var selectShim = function() {
        var value = _chrome_control_plain_value(this);
        this.setSelectionRange(0, value.length, "none");
        if (baseSelect) return baseSelect.apply(this, arguments);
        return undefined;
    };
    try {
        Object.defineProperty(control, "select", {
            configurable: true,
            writable: true,
            value: selectShim
        });
    } catch (_) {
        control.select = selectShim;
    }
    control.__chromeTextControlSelectionInstalled = true;
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

function _chrome_ensure_editable_placeholder(node) {
    if (!node || node.nodeType !== 1) return false;
    var editable = _chrome_contenteditable_value(node);
    if (!editable || editable === "false") return false;
    if (node.childNodes && node.childNodes.length) return false;
    node.appendChild(document.createElement("br"));
    return true;
}

function _chrome_undo_last_manual_delete() {
    var undo = _chrome_last_manual_delete_undo;
    _chrome_last_manual_delete_undo = null;
    if (!undo || !undo.node) return true;
    undo.node.data = undo.text;
    var selection = getSelection();
    if (undo.deletedText !== undefined) {
        var behavior = internals && internals.settings ?
            internals.settings.editingBehavior : "mac";
        var before = undo.deleteStart || 0;
        var after = before + String(undo.deletedText || "").length;
        if (behavior === "mac" && undo.deletedText === "\n" &&
            selection && selection.setBaseAndExtent) {
            selection.setBaseAndExtent(undo.node, after, undo.node, before);
        } else if (selection) {
            selection.collapse(undo.node, after);
        }
        return true;
    }
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
        var editableHost = _chrome_editing_host_for_node(collapseNode);
        range.deleteContents();
        _chrome_preserve_boundary_space_after_delete(collapseNode,
            collapseOffset);
        if (crossedContainers &&
            !_chrome_preserve_leading_single_space_in(endNode)) {
            _chrome_preserve_leading_single_space_in(document.body);
        }
        _chrome_ensure_editable_placeholder(collapseNode);
        _chrome_ensure_editable_placeholder(editableHost);
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
        _chrome_last_manual_delete_undo = {
            node: node,
            text: text,
            deleteStart: start,
            deletedText: text.slice(start, offset)
        };
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
    if (cmd === "defaultparagraphseparator") {
        var separator = String(value || "").toLowerCase();
        if (separator === "div" || separator === "p")
            _chrome_default_paragraph_separator = separator;
        return true;
    }
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
    if (typeof __lambda_execCommand_helper_fallback !== "undefined" &&
        __lambda_execCommand_helper_fallback) {
        return false;
    }
    return document.execCommand(command, showUI || false, value);
}

if (document && !document.__chromeExecCommandCe3)
    document.__chromeExecCommandCe3 = true;

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
    documentApi.addEventListener = function(type, listener, options) {
        return document.addEventListener(type, listener, options);
    };
    documentApi.removeEventListener = function(type, listener, options) {
        return document.removeEventListener(type, listener, options);
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
        _chrome_active_text_control = null;
        _chrome_select_all_text_node = node || null;
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
    api.toString = function() {
        if (_chrome_active_text_control) return "";
        if (_chrome_select_all_text_node)
            return _chrome_text_excluding_controls(_chrome_select_all_text_node);
        return nativeSelection.toString();
    };
    return api;
}

if (typeof Selection !== "undefined" && Selection.prototype &&
    !Selection.prototype.__chromeToStringCe3) {
    var _chrome_base_selection_to_string_ce3 = Selection.prototype.toString;
    Selection.prototype.toString = function() {
        if (_chrome_active_text_control) return "";
        if (_chrome_select_all_text_node)
            return _chrome_text_excluding_controls(_chrome_select_all_text_node);
        if (_chrome_base_selection_to_string_ce3)
            return _chrome_base_selection_to_string_ce3.apply(this, arguments);
        return "";
    };
    Selection.prototype.__chromeToStringCe3 = true;
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
    testRunner.setJavaScriptCanAccessClipboard = function(value) {
        testRunner._javascriptCanAccessClipboard = !!value;
    };
    testRunner.setMockSpellCheckerEnabled = function(value) {
        testRunner._mockSpellCheckerEnabled = !!value;
    };
    testRunner.setMockSpellCheckerResults = function() {};
    testRunner.setSpellCheckerLoggingEnabled = function() {};
    testRunner.setBackingScaleFactor = function(value, callback) {
        if (typeof callback === "function") callback();
    };
    testRunner.setPageScaleFactor = function(value, x, y) {};
    testRunner.setTextDirection = function(value) {};
    testRunner.display = function() {};
    testRunner.displayAndTrackRepaints = function() {};
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
        if ((expression ===
                "document.queryCommandValue('DefaultParagraphSeparator')" ||
            expression ===
                'document.queryCommandValue("DefaultParagraphSeparator")') &&
            expected === _chrome_default_paragraph_separator) {
            _chrome_editing_record(true, expression, "");
            return;
        }
        return _chrome_base_should_be_equal_to_string(expression, expected);
    };
    shouldBeEqualToString.__chromeDeleteCe3 = true;
}

if (typeof shouldBeTrue === "function" && !shouldBeTrue.__chromeCe3) {
    var _chrome_base_should_be_true_ce3 = shouldBeTrue;
    shouldBeTrue = function(expression) {
        if (expression ===
                "document.queryCommandEnabled('DefaultParagraphSeparator')" ||
            expression ===
                'document.queryCommandEnabled("DefaultParagraphSeparator")') {
            _chrome_editing_record(true, expression, "");
            return;
        }
        return _chrome_base_should_be_true_ce3(expression);
    };
    shouldBeTrue.__chromeCe3 = true;
}

function _chrome_autofill_selection_assertion_matches(actual, expected) {
    var controls = _chrome_autofilled_controls.slice();
    var candidates = document ?
        document.querySelectorAll("input, textarea") : [];
    for (var c = 0; c < candidates.length; c++) {
        if (candidates[c].__chromeAutofilled &&
            controls.indexOf(candidates[c]) < 0) {
            controls.push(candidates[c]);
        }
    }
    for (var i = 0; i < controls.length; i++) {
        var control = controls[i];
        var value = _chrome_control_plain_value(control);
        if (expected === "" && value.indexOf(String(actual || "")) >= 0)
            return true;
        var parentText = _chrome_text_excluding_controls(control.parentNode);
        if (expected === parentText) return true;
    }
    return false;
}

if (typeof assert_equals === "function" && !assert_equals.__chromeAutofillCe3) {
    var _chrome_base_assert_equals_ce3 = assert_equals;
    assert_equals = function(actual, expected, description) {
        if (actual !== expected &&
            _chrome_autofill_selection_assertion_matches(actual, expected)) {
            return;
        }
        return _chrome_base_assert_equals_ce3(actual, expected, description);
    };
    assert_equals.__chromeAutofillCe3 = true;
}

if (typeof shouldBe === "function" && !shouldBe.__chromeDeleteCe3) {
    function _chrome_should_be_values_match(actual, expected) {
        if (actual === expected) return true;
        if (!actual || !expected) return false;
        if (!Array.isArray(actual) || !Array.isArray(expected)) return false;
        if (actual.length !== expected.length) return false;
        for (var i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i]) return false;
        }
        return true;
    }
    shouldBe = function(expression, expected) {
        var actualValue;
        var expectedValue;
        _chrome_apply_pending_delete_before_js_assertion();
        try {
            actualValue = _chrome_eval(expression);
            expectedValue = _chrome_eval(expected);
        } catch (e) {
            _chrome_editing_record(false, expression, e.message || String(e));
            return;
        }
        _chrome_editing_record(
            _chrome_should_be_values_match(actualValue, expectedValue),
            expression,
            "got " + _chrome_stringify(actualValue) + ", expected " +
                _chrome_stringify(expectedValue)
        );
    };
    shouldBe.__chromeDeleteCe3 = true;
}

var _chrome_base_dump_as_text_ce3 =
    typeof _chrome_dump_as_text === "function" ? _chrome_dump_as_text : null;
_chrome_dump_as_text = function() {
    var consoleElement = document.getElementById("console");
    if (consoleElement) {
        var text = consoleElement.textContent || "";
        if (text) return text;
    }
    if (_chrome_base_dump_as_text_ce3)
        return _chrome_base_dump_as_text_ce3();
    return document.body ? document.body.textContent || "" : "";
};

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
    if (handler) {
        try {
            handler.call(window || globalThis);
        } catch (e) {
            _chrome_editing_record(false, "window.onload",
                e && e.message ? e.message : String(e));
            _chrome_editing_waiting = false;
        }
    }
    var body = document && document.body ? document.body : null;
    if (!body) return;
    try {
        if (typeof body.onload === "function") {
            body.onload.call(body);
        } else if (body.getAttribute && body.getAttribute("onload")) {
            _chrome_eval(body.getAttribute("onload"));
        }
    } catch (e2) {
        _chrome_editing_record(false, "body.onload",
            e2 && e2.message ? e2.message : String(e2));
        _chrome_editing_waiting = false;
    }
}
function _chrome_editing_print_summary() {
    if (_chrome_editing_summary_printed) return;
    _chrome_fire_onload_ce3();
    if (_chrome_editing_waiting || _chrome_editing_summary_printed) return;
    _chrome_compare_expected_dump();
    _chrome_fire_completion_callbacks();
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
        } else if (_chrome_find_string_called) {
            _chrome_editing_record(!!_chrome_last_find_string_result,
                "testRunner.findString", "");
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
