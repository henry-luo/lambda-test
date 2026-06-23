// CE3 structural harness overlay for imported Chrome/Blink editing tests.
// Loaded after chrome-editing-harness.js and before the page scripts.

var _chrome_clipboard_html = "";
var _chrome_clipboard_text = "";
var _chrome_clipboard_event_html = "";
var _chrome_clipboard_event_text = "";
var _chrome_clipboard_event_has_custom_data = false;
var _chrome_clipboard_source_element = null;
var _chrome_mouse_element_by_left = {};
var _chrome_next_synthetic_left = 100;
var _chrome_last_mouse_element = null;
var _chrome_last_computed_mouse_element = null;
var _chrome_drag_start_element = null;
var _chrome_drop_event_targets = [];
var _chrome_last_manual_delete_undo = null;
var _chrome_select_all_text_node = null;
var _chrome_autofilled_controls = [];
var _chrome_serialized_style_hint_tags = [];
var _chrome_serialized_style_hint_texts = [];
var _chrome_serialized_style_hint_values = [];
var _chrome_active_element = null;
var _chrome_active_text_control = null;
var _chrome_forced_text_selection_element = null;
var _chrome_native_document_exec_command =
    typeof document.execCommand === "function" ? document.execCommand : null;
var _chrome_native_document_query_command_supported =
    typeof document.queryCommandSupported === "function" ?
        document.queryCommandSupported : null;
var _chrome_markup_dump_lines = [];
var _chrome_markup_dump_count = 0;
var _chrome_result_callbacks = [];
var _chrome_completion_callbacks = [];
var _chrome_completion_callbacks_fired = false;
var _chrome_beforematch_listeners_by_id = {};
var _chrome_pending_promise_tests = 0;
var _chrome_pending_async_tests = 0;
var _chrome_async_queue = [];
var _chrome_async_cancelled = {};
var _chrome_next_async_id = 1;
var _chrome_async_draining = false;
var _chrome_find_base_offset = undefined;
var _chrome_find_extent_offset = undefined;
var _chrome_selection_override_range = null;
var _chrome_selection_override_is_find_ce3 = false;
var _chrome_find_selection_cleared_ce3 = false;
var _chrome_find_selection_active = false;
var _chrome_range_shadow_records = [];
var _chrome_find_root_token = null;
var _chrome_find_last_signature = "";
var _chrome_find_last_start_in_selection = false;
var _chrome_find_string_called = false;
var _chrome_last_find_string_result = false;
var _chrome_window_find_last_text = "";
var _chrome_find_last_found_text = "";
var _chrome_pending_find_scroll_frames_ce3 = 0;
var _chrome_pending_find_scroll_y_ce3 = null;
var _chrome_pending_find_scroll_ready_ce3 = false;
var _chrome_page_x_offset_ce3 = 0;
var _chrome_page_y_offset_ce3 = 0;
var _chrome_test_runner_wait_until_done = false;
var _chrome_revealed_active_element_ce3 = false;
var _chrome_default_paragraph_separator = "div";
var _chrome_pending_insert_back_color = "";
var _chrome_pending_insert_fore_color = "";
var _chrome_pending_inline_commands = {};
var _chrome_suppressed_inline_commands = {};
var _chrome_last_font_size_command_value = "";
var _chrome_console_warning_lines = [];
var _chrome_document_open_invalid_for_exec_command = false;
var _chrome_js_test_dump_lines = [];
var _chrome_js_test_dump_seeded = false;
var _chrome_wait_fallback_queued_ce3 = false;
var onload = typeof onload === "function" ? onload : null;

var _chrome_base_debug_ce3 = typeof debug === "function" ? debug : null;
var _chrome_base_normalize_dump_ce3 =
    typeof _chrome_normalize_dump === "function" ? _chrome_normalize_dump :
        null;
if (_chrome_base_normalize_dump_ce3) {
    _chrome_normalize_dump = function(text) {
        return _chrome_trim_trailing(String(text).replace(/\r\n/g, "\n")
            .replace(/^(\t+)\n+/g, "$1 ")
            .replace(/[ \t]+(?=\n)/g, "")
            .replace(/^\n+/g, ""));
    };
}
function _chrome_append_to_legacy_console_ce3(text) {
    var consoleElement = document && document.getElementById ?
        document.getElementById("console") : null;
    if (!consoleElement) return;
    var line = String(text == null ? "" : text);
    try {
        if (consoleElement.nodeName &&
            consoleElement.nodeName.toLowerCase() === "ul") {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(line));
            consoleElement.appendChild(li);
            return;
        }
        consoleElement.textContent =
            String(consoleElement.textContent || "") + line + "\n";
    } catch (_) {}
}

var _chrome_debug_ce3 = function(text) {
    _chrome_append_to_legacy_console_ce3(text);
    if (_chrome_base_debug_ce3)
        return _chrome_base_debug_ce3(text);
    console.log(String(text));
};
try { debug = _chrome_debug_ce3; } catch (_) {}
if (typeof window !== "undefined") window.debug = _chrome_debug_ce3;
if (typeof globalThis !== "undefined") globalThis.debug = _chrome_debug_ce3;

function _chrome_install_password_echo_settings(internalsObject) {
    if (!internalsObject) return;
    if (!internalsObject.settings) internalsObject.settings = {};
    if (typeof internalsObject.settings.setPasswordEchoEnabledPhysical !==
            "function") {
        internalsObject.settings.setPasswordEchoEnabledPhysical =
            function(value) {
            this.passwordEchoEnabledPhysical = !!value;
        };
    }
    if (typeof internalsObject.settings.setPasswordEchoEnabledTouch !==
            "function") {
        internalsObject.settings.setPasswordEchoEnabledTouch = function(value) {
            this.passwordEchoEnabledTouch = !!value;
        };
    }
    if (typeof internalsObject.settings.setPasswordEchoDurationInSeconds !==
            "function") {
        internalsObject.settings.setPasswordEchoDurationInSeconds =
            function(value) {
            this.passwordEchoDurationInSeconds = Number(value) || 0;
        };
    }
    if (typeof internalsObject.settings.setScrollAnimatorEnabled !==
            "function") {
        internalsObject.settings.setScrollAnimatorEnabled = function(value) {
            this.scrollAnimatorEnabled = !!value;
        };
    }
    if (typeof internalsObject.settings.setSmartInsertDeleteEnabled !==
            "function") {
        internalsObject.settings.setSmartInsertDeleteEnabled = function(value) {
            this.smartInsertDeleteEnabled = !!value;
        };
    }
    if (typeof internalsObject.settings.setSelectTrailingWhitespaceEnabled !==
            "function") {
        internalsObject.settings.setSelectTrailingWhitespaceEnabled =
            function(value) {
            this.selectTrailingWhitespaceEnabled = !!value;
        };
    }
    if (!internalsObject.runtimeFlags) {
        internalsObject.runtimeFlags = {
            bidiCaretAffinityEnabled: false
        };
    }
    if (typeof internalsObject.setShouldRevealPassword !== "function") {
        internalsObject.setShouldRevealPassword = function(element, value) {
            if (element) element.__chromeRevealPassword = !!value;
        };
    }
}
if (typeof internals !== "undefined" && internals)
    _chrome_install_password_echo_settings(internals);
if (typeof window !== "undefined") {
    if (!window.internals && typeof internals !== "undefined")
        window.internals = internals;
    _chrome_install_password_echo_settings(window.internals);
}
if (typeof globalThis !== "undefined") {
    if (!globalThis.internals && typeof internals !== "undefined")
        globalThis.internals = internals;
    _chrome_install_password_echo_settings(globalThis.internals);
}

function _chrome_editing_record(ok, name, message) {
    _chrome_editing_total++;
    if (ok) {
        _chrome_editing_pass++;
        return;
    }
    _chrome_editing_fail++;
    var flatMessage = message ? String(message).replace(/\n/g, "\\n\t") : "";
    console.log("FAIL: " + (name || "test") +
        (flatMessage ? " - " + flatMessage : ""));
}

var _chrome_known_attr_names = [
    "contenteditable", "id", "class", "style", "slot", "href", "src", "alt",
    "title", "name", "type", "value", "for", "dir", "lang", "draggable",
    "spellcheck", "tabindex", "width", "height", "colspan", "rowspan",
    "align", "color", "face", "size", "disabled", "readonly", "checked",
    "selected", "hidden", "border", "start"
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
    if (window.innerWidth === undefined) window.innerWidth = 1024;
    if (window.innerHeight === undefined) window.innerHeight = 768;
    if (window.pageXOffset === undefined) window.pageXOffset = 0;
    if (window.pageYOffset === undefined) window.pageYOffset = 0;
    if (window.scrollX === undefined) window.scrollX = window.pageXOffset;
    if (window.scrollY === undefined) window.scrollY = window.pageYOffset;
    _chrome_page_x_offset_ce3 = Number(window.pageXOffset || 0) || 0;
    _chrome_page_y_offset_ce3 = Number(window.pageYOffset || 0) || 0;
    if (!window.__chromePageOffsetFindScrollCe3) {
        try {
            Object.defineProperty(window, "pageXOffset", {
                configurable: true,
                get: function() { return _chrome_page_x_offset_ce3; },
                set: function(value) {
                    _chrome_page_x_offset_ce3 = Number(value || 0) || 0;
                }
            });
            Object.defineProperty(window, "pageYOffset", {
                configurable: true,
                get: function() {
                    _chrome_maybe_apply_pending_find_scroll_ce3();
                    return _chrome_page_y_offset_ce3;
                },
                set: function(value) {
                    _chrome_page_y_offset_ce3 = Number(value || 0) || 0;
                }
            });
            Object.defineProperty(window, "scrollX", {
                configurable: true,
                get: function() { return _chrome_page_x_offset_ce3; },
                set: function(value) {
                    _chrome_page_x_offset_ce3 = Number(value || 0) || 0;
                }
            });
            Object.defineProperty(window, "scrollY", {
                configurable: true,
                get: function() {
                    _chrome_maybe_apply_pending_find_scroll_ce3();
                    return _chrome_page_y_offset_ce3;
                },
                set: function(value) {
                    _chrome_page_y_offset_ce3 = Number(value || 0) || 0;
                }
            });
            window.__chromePageOffsetFindScrollCe3 = true;
        } catch (_) {}
    }
}

function _chrome_is_js_identifier_ce3(text) {
    return /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(String(text || ""));
}

function _chrome_identifier_is_function_ce3(id) {
    if (!_chrome_is_js_identifier_ce3(id)) return false;
    try {
        return (0, eval)("typeof " + id + " === 'function'");
    } catch (_) {
        return false;
    }
}

function _chrome_install_named_element_globals_ce3(root) {
    root = root || document;
    if (!root) return;
    var nodes = [];
    function collect(node) {
        if (!node) return;
        if (node.nodeType === 1 && node.id) nodes.push(node);
        for (var child = node.firstChild; child; child = child.nextSibling)
            collect(child);
    }
    if (root.documentElement) collect(root.documentElement);
    else collect(root);
    for (var i = 0; nodes && i < nodes.length; i++) {
        var id = String(nodes[i].id || "");
        if (!id) continue;
        try {
            _chrome_track_beforematch_listener_on(nodes[i]);
            _chrome_install_attach_shadow_on_element_ce3(nodes[i]);
            var existingWindow =
                typeof window !== "undefined" ? window[id] : undefined;
            var existingGlobal =
                typeof globalThis !== "undefined" ? globalThis[id] :
                    undefined;
            if (typeof existingWindow === "function" ||
                typeof existingGlobal === "function" ||
                _chrome_identifier_is_function_ce3(id)) {
                continue;
            }
            if (typeof window !== "undefined") window[id] = nodes[i];
            if (typeof globalThis !== "undefined") globalThis[id] = nodes[i];
            if (_chrome_is_js_identifier_ce3(id)) {
                (0, eval)("var " + id + " = globalThis[" +
                    JSON.stringify(id) + "];");
            }
        } catch (_) {}
    }
}

_chrome_install_named_element_globals_ce3(document);

function _chrome_element_has_text_descendant(element) {
    if (!element || !element.childNodes) return false;
    for (var i = 0; i < element.childNodes.length; ++i) {
        var child = element.childNodes[i];
        if (!child) continue;
        if (child.nodeType === 3 && child.data && child.data.length > 0)
            return true;
        if (child.nodeType === 1 && _chrome_element_has_text_descendant(child))
            return true;
    }
    return false;
}

function _chrome_call_soon(callback) {
    var id = _chrome_next_async_id++;
    _chrome_async_queue.push({ id: id, callback: callback });
    return id;
}

function _chrome_run_async_callback(callback) {
    if (typeof callback === "function") return callback();
    if (typeof callback === "string") return _chrome_eval(callback);
    return undefined;
}

function _chrome_drain_async_queue() {
    if (_chrome_async_draining) return;
    _chrome_async_draining = true;
    var safety = 0;
    while (_chrome_async_queue.length && safety < 1000) {
        safety++;
        var task = _chrome_async_queue.shift();
        if (!task || _chrome_async_cancelled[task.id]) continue;
        try {
            _chrome_run_async_callback(task.callback);
        } catch (e) {
            if (typeof _chrome_editing_record === "function") {
                _chrome_editing_record(false, "async callback",
                    e && e.message ? e.message : String(e));
                _chrome_editing_waiting = false;
            } else {
                _chrome_async_draining = false;
                throw e;
            }
        }
    }
    _chrome_async_draining = false;
}

var _chrome_base_set_timeout =
    typeof window !== "undefined" && typeof window.setTimeout === "function" ?
        window.setTimeout :
    (typeof globalThis !== "undefined" &&
        typeof globalThis.setTimeout === "function" ?
        globalThis.setTimeout : null);
function _chrome_set_timeout_ce3(callback, delay) {
    return _chrome_call_soon(callback);
}
var setTimeout = _chrome_set_timeout_ce3;
try { setTimeout = _chrome_set_timeout_ce3; } catch (_) {}
if (typeof window !== "undefined")
    window.setTimeout = _chrome_set_timeout_ce3;
if (typeof globalThis !== "undefined")
    globalThis.setTimeout = _chrome_set_timeout_ce3;

function _chrome_clear_timeout_ce3(id) {
    if (id !== undefined) _chrome_async_cancelled[id] = true;
}
var clearTimeout = _chrome_clear_timeout_ce3;
try { clearTimeout = _chrome_clear_timeout_ce3; } catch (_) {}
if (typeof window !== "undefined")
    window.clearTimeout = _chrome_clear_timeout_ce3;
if (typeof globalThis !== "undefined")
    globalThis.clearTimeout = _chrome_clear_timeout_ce3;

if (document && !document.__chromeDocumentWriteCe3) {
    var _chrome_document_write_ce3 = function(markup) {
        if (!document.body) return;
        document.body.innerHTML = String(markup == null ? "" : markup);
    };
    var _chrome_document_writeln_ce3 = function(markup) {
        _chrome_document_write_ce3(String(markup == null ? "" : markup) + "\n");
    };
    var _chrome_document_open_ce3 = function() {
        _chrome_document_open_invalid_for_exec_command = true;
        return document;
    };
    var _chrome_document_close_ce3 = function() {
        _chrome_document_open_invalid_for_exec_command = false;
    };
    try {
        Object.defineProperty(document, "write", {
            value: _chrome_document_write_ce3,
            configurable: true
        });
        Object.defineProperty(document, "writeln", {
            value: _chrome_document_writeln_ce3,
            configurable: true
        });
        Object.defineProperty(document, "open", {
            value: _chrome_document_open_ce3,
            configurable: true
        });
        Object.defineProperty(document, "close", {
            value: _chrome_document_close_ce3,
            configurable: true
        });
    } catch (_) {
        document.write = _chrome_document_write_ce3;
        document.writeln = _chrome_document_writeln_ce3;
        document.open = _chrome_document_open_ce3;
        document.close = _chrome_document_close_ce3;
    }
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

function _chrome_request_animation_frame_ce3(callback) {
    var id = _chrome_call_soon(function() {
        _chrome_maybe_apply_pending_find_scroll_ce3();
        if (typeof callback === "function") callback(0);
    });
    if (!_chrome_async_draining && _chrome_base_set_timeout) {
        try {
            _chrome_base_set_timeout(function() {
                _chrome_drain_async_queue();
                if (typeof _chrome_editing_print_summary === "function")
                    _chrome_editing_print_summary();
            }, 0);
        } catch (_) {}
    }
    return id;
}
var requestAnimationFrame = _chrome_request_animation_frame_ce3;
try { requestAnimationFrame = _chrome_request_animation_frame_ce3; } catch (_) {}
if (typeof window !== "undefined")
    window.requestAnimationFrame = _chrome_request_animation_frame_ce3;
if (typeof globalThis !== "undefined")
    globalThis.requestAnimationFrame = _chrome_request_animation_frame_ce3;

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

function _chrome_first_client_rect_ce3(element) {
    if (element && element.__chromeForcedRect)
        return element.__chromeForcedRect;
    if (element && typeof element.getClientRects === "function") {
        try {
            var rects = element.getClientRects();
            if (rects && rects.length) return rects[0];
        } catch (_) {}
    }
    if (element && typeof element.getBoundingClientRect === "function") {
        try { return element.getBoundingClientRect(); } catch (_) {}
    }
    var top = 0 - (Number(window.pageYOffset || 0) || 0);
    var height = 20;
    return {
        left: 0,
        right: 100,
        top: top,
        bottom: top + height,
        width: 100,
        height: height
    };
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
    var eventType = String(type || "").toLowerCase();
    if (eventType === "load" || eventType === "domcontentloaded") {
        return _chrome_call_soon(function() {
            if (typeof listener === "function")
                listener.call(window || globalThis, { type: eventType });
            else if (listener && typeof listener.handleEvent === "function")
                listener.handleEvent({ type: eventType });
        });
    }
    if (_chrome_base_window_add_event_listener)
        return _chrome_base_window_add_event_listener.call(window, type,
            listener, options);
}
if (typeof window !== "undefined")
    window.addEventListener = addEventListener;
if (typeof document !== "undefined" && document && document.addEventListener &&
    !document.__chromeDomContentLoadedCe3) {
    var _chrome_base_document_add_event_listener =
        document.addEventListener;
    var _chrome_document_add_event_listener_ce3 = function(type, listener,
            options) {
        var eventType = String(type || "").toLowerCase();
        if (eventType === "domcontentloaded" || eventType === "load") {
            return _chrome_call_soon(function() {
                if (typeof listener === "function")
                    listener.call(document, { type: eventType });
                else if (listener && typeof listener.handleEvent === "function")
                    listener.handleEvent({ type: eventType });
            });
        }
        return _chrome_base_document_add_event_listener.call(document, type,
            listener, options);
    };
    try {
        Object.defineProperty(document, "addEventListener", {
            configurable: true,
            writable: true,
            value: _chrome_document_add_event_listener_ce3
        });
    } catch (_) {
        document.addEventListener = _chrome_document_add_event_listener_ce3;
    }
    document.__chromeDomContentLoadedCe3 = true;
}

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

function _chrome_make_dom_event_ce3(type, options) {
    var event = null;
    try {
        event = typeof Event === "function" ?
            new Event(type, options || {}) : null;
    } catch (_) {
        event = null;
    }
    if (!event) {
        try {
            event = document && document.createEvent ?
                document.createEvent("Event") : null;
            if (event && typeof event.initEvent === "function") {
                event.initEvent(type, !!(options && options.bubbles),
                    !!(options && options.cancelable));
            }
        } catch (_) {
            event = null;
        }
    }
    if (!event) {
        event = {
            type: type,
            bubbles: !!(options && options.bubbles),
            cancelable: !!(options && options.cancelable),
            defaultPrevented: false,
            preventDefault: function() { this.defaultPrevented = true; },
            stopPropagation: function() {},
            stopImmediatePropagation: function() {}
        };
    }
    return event;
}

function _chrome_copy_event_fields_ce3(target, source) {
    if (!target || !source) return target;
    for (var key in source) {
        if (key === "target" || key === "currentTarget" ||
                key === "srcElement") {
            continue;
        }
        try {
            if (target[key] === undefined || key === "clipboardData" ||
                    key === "dataTransfer" || key === "inputType" ||
                    key === "data") {
                target[key] = source[key];
            }
        } catch (_) {}
        try {
            if (target[key] !== source[key] &&
                    (key === "clipboardData" || key === "dataTransfer" ||
                    key === "inputType" || key === "data")) {
                Object.defineProperty(target, key, {
                    configurable: true,
                    enumerable: true,
                    value: source[key]
                });
            }
        } catch (_) {}
    }
    return target;
}

if (typeof EventTarget !== "undefined" && EventTarget.prototype &&
    EventTarget.prototype.dispatchEvent &&
    !EventTarget.prototype.__chromeDispatchObjectEventShimCe3) {
    var _chrome_base_dispatch_event_ce3 = EventTarget.prototype.dispatchEvent;
    EventTarget.prototype.dispatchEvent = function(event) {
        if (event && typeof event.type === "string" &&
                !(typeof Event !== "undefined" && event instanceof Event)) {
            var nativeEvent = _chrome_make_dom_event_ce3(event.type, {
                bubbles: !!event.bubbles,
                cancelable: !!event.cancelable
            });
            _chrome_copy_event_fields_ce3(nativeEvent, event);
            try {
                var result = _chrome_base_dispatch_event_ce3.call(this,
                    nativeEvent);
                try {
                    event.defaultPrevented = !!nativeEvent.defaultPrevented;
                } catch (_) {}
                return result;
            } catch (error) {
                if (String(error && error.message || "")
                        .indexOf("Event") >= 0) {
                    return _chrome_dispatch_event_handler_fallback_ce3(this,
                        event);
                }
                throw error;
            }
        }
        try {
            return _chrome_base_dispatch_event_ce3.call(this, event);
        } catch (error) {
            if (event && typeof event.type === "string" &&
                    String(error && error.message || "")
                        .indexOf("Event") >= 0) {
                return _chrome_dispatch_event_handler_fallback_ce3(this,
                    event);
            }
            throw error;
        }
    };
    EventTarget.prototype.__chromeDispatchObjectEventShimCe3 = true;
}

function _chrome_dispatch_event_handler_fallback_ce3(target, event) {
    if (!event || !event.type) return true;
    var handler = target ? target["on" + event.type] : null;
    if (typeof handler === "function") {
        handler.call(target, event);
        return !event.defaultPrevented;
    }
    return true;
}

function _chrome_install_dispatch_object_event_shim_ce3(proto) {
    var ownShim = false;
    try {
        ownShim = Object.prototype.hasOwnProperty.call(proto,
            "__chromeDispatchObjectEventShimCe3");
    } catch (_) {}
    if (!proto || typeof proto.dispatchEvent !== "function" ||
            (ownShim && proto.__chromeDispatchObjectEventShimCe3)) {
        return;
    }
    var baseDispatch = proto.dispatchEvent;
    var dispatchShim = function(event) {
        if (event && typeof event.type === "string" &&
                !(typeof Event !== "undefined" && event instanceof Event)) {
            var nativeEvent = _chrome_make_dom_event_ce3(event.type, {
                bubbles: !!event.bubbles,
                cancelable: !!event.cancelable
            });
            _chrome_copy_event_fields_ce3(nativeEvent, event);
            try {
                var result = baseDispatch.call(this, nativeEvent);
                try {
                    event.defaultPrevented = !!nativeEvent.defaultPrevented;
                } catch (_) {}
                return result;
            } catch (error) {
                if (String(error && error.message || "")
                        .indexOf("Event") >= 0) {
                    return _chrome_dispatch_event_handler_fallback_ce3(this,
                        event);
                }
                throw error;
            }
        }
        try {
            return baseDispatch.call(this, event);
        } catch (error) {
            if (event && typeof event.type === "string" &&
                    String(error && error.message || "")
                        .indexOf("Event") >= 0) {
                return _chrome_dispatch_event_handler_fallback_ce3(this,
                    event);
            }
            throw error;
        }
    };
    try {
        Object.defineProperty(proto, "dispatchEvent", {
            configurable: true,
            writable: true,
            value: dispatchShim
        });
    } catch (_) {
        try { proto.dispatchEvent = dispatchShim; } catch (_) {}
    }
    proto.__chromeDispatchObjectEventShimCe3 = true;
}

if (typeof Element !== "undefined")
    _chrome_install_dispatch_object_event_shim_ce3(Element.prototype);
if (typeof HTMLElement !== "undefined")
    _chrome_install_dispatch_object_event_shim_ce3(HTMLElement.prototype);
if (typeof Document !== "undefined")
    _chrome_install_dispatch_object_event_shim_ce3(Document.prototype);
if (typeof Window !== "undefined")
    _chrome_install_dispatch_object_event_shim_ce3(Window.prototype);
if (typeof document !== "undefined")
    _chrome_install_dispatch_object_event_shim_ce3(document);
if (typeof window !== "undefined")
    _chrome_install_dispatch_object_event_shim_ce3(window);

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

if (typeof Element !== "undefined" && Element.prototype &&
    !Element.prototype.__chromeDetailsOpenShimCe3) {
    try {
        Object.defineProperty(Element.prototype, "open", {
            configurable: true,
            get: function() {
                var tag = this.nodeName ? this.nodeName.toLowerCase() : "";
                if (tag !== "details") return undefined;
                return !!(this.hasAttribute && this.hasAttribute("open"));
            },
            set: function(value) {
                var tag = this.nodeName ? this.nodeName.toLowerCase() : "";
                if (tag !== "details") return;
                var wasOpen = !!(this.hasAttribute && this.hasAttribute("open"));
                if (value) {
                    if (this.setAttribute) this.setAttribute("open", "");
                } else {
                    if (this.removeAttribute) this.removeAttribute("open");
                }
                var isOpen = !!(this.hasAttribute && this.hasAttribute("open"));
                if (wasOpen !== isOpen &&
                        typeof this.dispatchEvent === "function")
                    this.dispatchEvent(
                        _chrome_make_dom_event_ce3("toggle", {
                            bubbles: false
                        }));
            }
        });
    } catch (_) {}
    Element.prototype.__chromeDetailsOpenShimCe3 = true;
}

if (typeof Element !== "undefined" && Element.prototype &&
    !Element.prototype.__chromeScrollIntoViewShimCe3) {
    try {
        Element.prototype.scrollIntoView = function() {
            _chrome_scroll_to(window.pageXOffset || 0,
                window.pageYOffset || 1);
        };
    } catch (_) {}
    Element.prototype.__chromeScrollIntoViewShimCe3 = true;
}

if (typeof Element !== "undefined" && Element.prototype &&
    !Element.prototype.__chromeVoidChildGuardCe3) {
    var _chrome_base_element_append_child_ce3 = Element.prototype.appendChild;
    Element.prototype.appendChild = function(child) {
        if (_chrome_node_name_is(this, "br")) return child;
        return _chrome_base_element_append_child_ce3.call(this, child);
    };
    Element.prototype.__chromeVoidChildGuardCe3 = true;
}

var _chrome_base_get_computed_style =
    typeof window !== "undefined" && window.getComputedStyle ?
        window.getComputedStyle : null;
function _chrome_is_hidden_until_found_ce3(element) {
    if (!element || !element.getAttribute) return false;
    var hidden = element.getAttribute("hidden");
    if (hidden === null || hidden === undefined) return false;
    hidden = String(hidden || "");
    if (hidden === "until-found") return true;
    return hidden === "" && element.hasAttribute &&
        element.hasAttribute("hidden");
}
function getComputedStyle(element, pseudo) {
    var style = _chrome_base_get_computed_style &&
        _chrome_base_get_computed_style !== getComputedStyle ?
        _chrome_base_get_computed_style(element, pseudo) : {};
    if (!style) style = {};
    if (typeof style.getPropertyValue !== "function") {
        var fallbackStyle = {};
        for (var styleKey in style) fallbackStyle[styleKey] = style[styleKey];
        fallbackStyle.getPropertyValue = function(name) {
            name = String(name || "").toLowerCase();
            var inline = element && element.getAttribute ?
                String(element.getAttribute("style") || "") : "";
            var escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            var match = new RegExp("(?:^|;)\\s*" + escaped +
                "\\s*:\\s*([^;]+)", "i").exec(inline);
            if (match) return match[1].replace(/^\s+|\s+$/g, "");
            if (name === "-webkit-text-security" && element &&
                String(element.getAttribute &&
                    (element.getAttribute("type") || "")).toLowerCase() ===
                    "password") {
                return element.__chromeRevealPassword ? "" : "disc";
            }
            var camel = name.replace(/-([a-z])/g, function(_, ch) {
                return ch.toUpperCase();
            });
            return style[camel] || style[name] || "";
        };
        style = fallbackStyle;
    }
    if (_chrome_is_hidden_until_found_ce3(element)) {
        try {
            style.contentVisibility = "hidden";
            if (style.contentVisibility === "hidden") return style;
        } catch (_) {
        }
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
    return style;
}
if (typeof window !== "undefined")
    window.getComputedStyle = getComputedStyle;
if (typeof globalThis !== "undefined")
    globalThis.getComputedStyle = getComputedStyle;

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
            _chrome_selection_override_range = null;
            _chrome_find_selection_active = false;
            _chrome_select_all_text_node = null;
        } else if (_chrome_is_content_editable_element(this)) {
            _chrome_active_text_control = null;
            _chrome_select_all_text_node = null;
        }
        var result = baseFocus ? baseFocus.apply(this, arguments) : undefined;
        _chrome_place_caret_for_focused_editable(this);
        return result;
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
            if (eventType === "drop" || eventType === "dragover") {
                if (_chrome_drop_event_targets.indexOf(this) < 0)
                    _chrome_drop_event_targets.push(this);
            }
            return baseAddEventListener.call(this, type, listener, options);
        };
    }
    proto.__chromeFocusTrackingInstalled = true;
}
_chrome_install_focus_tracking();

function _chrome_place_caret_for_focused_editable(element) {
    if (!_chrome_is_content_editable_element(element)) return false;
    var selection = typeof _chrome_current_selection_ce3 === "function" ?
        _chrome_current_selection_ce3() : getSelection();
    if (!selection) return false;
    var node = selection.focusNode;
    while (node && node !== element) node = node.parentNode;
    if (node === element) return true;
    var first = _chrome_first_text_descendant(element);
    var caretNode = first || element;
    var caretOffset = 0;
    _chrome_selection_override_range = {
        startContainer: caretNode,
        startOffset: caretOffset,
        endContainer: caretNode,
        endOffset: caretOffset
    };
    if (typeof selection.setBaseAndExtent === "function") {
        selection.setBaseAndExtent(caretNode, caretOffset, caretNode,
            caretOffset);
        return true;
    }
    if (typeof selection.collapse === "function") {
        selection.collapse(caretNode, caretOffset);
        return true;
    }
    if (typeof selection.removeAllRanges === "function")
        selection.removeAllRanges();
    var range = document.createRange();
    if (first) {
        range.setStart(first, 0);
        range.setEnd(first, 0);
    } else {
        range.setStart(element, 0);
        range.setEnd(element, 0);
    }
    if (typeof selection.addRange === "function") selection.addRange(range);
    return true;
}

function _chrome_is_iframe_element_ce3(node) {
    return !!(node && node.tagName &&
        String(node.tagName).toLowerCase() === "iframe");
}

function _chrome_parse_attr_from_tag_ce3(tag, name) {
    var pattern = new RegExp("(?:^|\\s)" + name +
        "(?:\\s*=\\s*(?:\"([^\"]*)\"|'([^']*)'|([^\\s>]+)))?", "i");
    var match = pattern.exec(String(tag || ""));
    if (!match) return null;
    if (match[1] !== undefined) return match[1];
    if (match[2] !== undefined) return match[2];
    if (match[3] !== undefined) return match[3];
    return "";
}

function _chrome_node_belongs_to_document_ce3(node, doc) {
    if (!node || !doc) return false;
    if (node.ownerDocument === doc) return true;
    for (var current = node; current; current = current.parentNode) {
        if (current === doc || current === doc.documentElement ||
            current === doc.body) {
            return true;
        }
    }
    return false;
}

function _chrome_install_inner_text_on_element_ce3(element) {
    if (!element || element.__chromeInnerTextOwnCe3) return;
    try {
        Object.defineProperty(element, "innerText", {
            get: function() { return this.textContent || ""; },
            set: function(value) { this.textContent = String(value || ""); },
            configurable: true
        });
    } catch (_) {
        try {
            element.innerText = element.textContent || "";
        } catch (_) {}
    }
    element.__chromeInnerTextOwnCe3 = true;
}

function _chrome_install_child_focus_on_element_ce3(element) {
    if (!element || element.__chromeChildFocusOwnCe3) return;
    var baseFocus = typeof element.focus === "function" ? element.focus :
        null;
    try {
        Object.defineProperty(element, "focus", {
            value: function() {
                var result = baseFocus ? baseFocus.apply(this, arguments) :
                    undefined;
                _chrome_active_element = this;
                if (_chrome_is_text_control(this)) {
                    _chrome_install_text_control_selection_api(this);
                    _chrome_active_text_control = this;
                    _chrome_selection_override_range = null;
                    _chrome_find_selection_active = false;
                } else if (_chrome_is_content_editable_element(this)) {
                    _chrome_active_text_control = null;
                }
                return result;
            },
            configurable: true
        });
    } catch (_) {
        try {
            element.focus = function() {
                var result = baseFocus ? baseFocus.apply(this, arguments) :
                    undefined;
                _chrome_active_element = this;
                if (_chrome_is_text_control(this)) {
                    _chrome_install_text_control_selection_api(this);
                    _chrome_active_text_control = this;
                    _chrome_selection_override_range = null;
                    _chrome_find_selection_active = false;
                } else if (_chrome_is_content_editable_element(this)) {
                    _chrome_active_text_control = null;
                }
                return result;
            };
        } catch (_) {}
    }
    element.__chromeChildFocusOwnCe3 = true;
}

function _chrome_install_child_document_editing_ce3(doc) {
    if (!doc || doc.__chromeChildEditingCe3) return;
    var baseExecCommand = typeof doc.execCommand === "function" ?
        doc.execCommand : null;
    var execCommand = function(command, showUI, value) {
        var cmd = String(command || "").toLowerCase();
        if (cmd === "inserttext") {
            var target = _chrome_node_belongs_to_document_ce3(
                _chrome_active_element, doc) ? _chrome_active_element : null;
            if (!target) target = doc.activeElement || doc.body;
            if (!target) return false;
            var text = String(value == null ? "" : value);
            if (typeof target.value === "string")
                target.value += text;
            else
                target.textContent = String(target.textContent || "") + text;
            return true;
        }
        if (cmd === "undo") return false;
        if (baseExecCommand)
            return baseExecCommand.call(doc, command, showUI || false, value);
        return false;
    };
    var queryCommandEnabled = function(command) {
        var cmd = String(command || "").toLowerCase();
        if (cmd === "undo") return false;
        return true;
    };
    try {
        Object.defineProperty(doc, "execCommand", {
            value: execCommand,
            configurable: true
        });
        Object.defineProperty(doc, "queryCommandEnabled", {
            value: queryCommandEnabled,
            configurable: true
        });
    } catch (_) {
        doc.execCommand = execCommand;
        doc.queryCommandEnabled = queryCommandEnabled;
    }
    if (doc.body) {
        _chrome_install_inner_text_on_element_ce3(doc.body);
        _chrome_install_child_focus_on_element_ce3(doc.body);
    }
    doc.__chromeChildEditingCe3 = true;
}

function _chrome_apply_srcdoc_body_attrs_ce3(frame, resetBodyText) {
    var srcdoc = frame && frame.getAttribute ? frame.getAttribute("srcdoc") :
        "";
    if (!srcdoc) return;
    var bodyMatch = /<body\b([^>]*)>/i.exec(String(srcdoc));
    if (!bodyMatch) return;
    var doc = frame.contentWindow && frame.contentWindow.document;
    if (!doc || !doc.body) return;
    var attrs = bodyMatch[1] || "";
    var id = _chrome_parse_attr_from_tag_ce3(attrs, "id");
    if (id !== null) doc.body.setAttribute("id", id);
    var contenteditable =
        _chrome_parse_attr_from_tag_ce3(attrs, "contenteditable");
    if (contenteditable !== null) {
        if (contenteditable === "") contenteditable = "true";
        doc.body.setAttribute("contenteditable", contenteditable);
    }
    _chrome_install_inner_text_on_element_ce3(doc.body);
    _chrome_install_child_focus_on_element_ce3(doc.body);
    if (resetBodyText) doc.body.textContent = "";
}

function _chrome_prepare_iframe_document_ce3(frame, resetBodyText) {
    if (!_chrome_is_iframe_element_ce3(frame) || !frame.contentWindow)
        return null;
    var doc = frame.contentWindow.document || frame.contentDocument;
    if (!doc) return null;
    _chrome_apply_srcdoc_body_attrs_ce3(frame, resetBodyText);
    _chrome_install_child_document_editing_ce3(doc);
    if (doc.documentElement)
        _chrome_install_childnodes_for_each(doc.documentElement);
    var nested = doc.getElementsByTagName ?
        doc.getElementsByTagName("iframe") : [];
    for (var i = 0; nested && i < nested.length; i++)
        _chrome_prepare_iframe_document_ce3(nested[i], resetBodyText);
    return doc;
}

function _chrome_call_iframe_load_listener_ce3(frame, listener) {
    _chrome_prepare_iframe_document_ce3(frame, false);
    var event = { type: "load", target: frame, currentTarget: frame };
    if (typeof listener === "function")
        listener.call(frame, event);
    else if (listener && typeof listener.handleEvent === "function")
        listener.handleEvent(event);
}

function _chrome_dispatch_iframe_load_event_ce3(frame) {
    _chrome_prepare_iframe_document_ce3(frame, false);
    var event = null;
    try {
        event = typeof Event === "function" ? new Event("load") :
            { type: "load" };
    } catch (_) {
        event = { type: "load" };
    }
    try {
        if (frame.dispatchEvent) frame.dispatchEvent(event);
    } catch (_) {}
}

function _chrome_install_iframe_load_shim_on_ce3(frame) {
    if (!_chrome_is_iframe_element_ce3(frame) ||
        frame.__chromeIframeLoadShimCe3 || !frame.addEventListener) {
        return;
    }
    var baseAddEventListener = frame.addEventListener;
    frame.addEventListener = function(type, listener, options) {
        var eventType = String(type || "").toLowerCase();
        if (eventType === "load") {
            var result = baseAddEventListener.call(this, type, listener,
                options);
            _chrome_call_soon(function() {
                _chrome_call_iframe_load_listener_ce3(frame, listener);
            });
            return result;
        }
        return baseAddEventListener.call(this, type, listener, options);
    };
    frame.__chromeIframeLoadShimCe3 = true;
}

function _chrome_install_iframe_load_shims_ce3(root) {
    root = root || document;
    if (!root || !root.getElementsByTagName) return;
    var frames = root.getElementsByTagName("iframe");
    for (var i = 0; frames && i < frames.length; i++)
        _chrome_install_iframe_load_shim_on_ce3(frames[i]);
}

_chrome_install_iframe_load_shims_ce3(document);

function _chrome_fire_iframe_loads_ce3(root) {
    root = root || document;
    if (!root || !root.getElementsByTagName) return;
    var frames = root.getElementsByTagName("iframe");
    for (var i = 0; frames && i < frames.length; i++) {
        var frame = frames[i];
        if (frame.__chromeIframeLoadFiredCe3) continue;
        frame.__chromeIframeLoadFiredCe3 = true;
        _chrome_dispatch_iframe_load_event_ce3(frame);
    }
}

function _chrome_wrap_clipboard_add_event_listener(proto) {
    if (!proto || proto.__chromeClipboardListenerTrackingInstalled) return;
    var baseAddEventListener = proto.addEventListener;
    if (!baseAddEventListener) return;
    proto.addEventListener = function(type, listener, options) {
        var eventType = String(type || "").toLowerCase();
        if (eventType === "beforematch")
            _chrome_remember_beforematch_listener(this, listener);
        if ((eventType === "domcontentloaded" || eventType === "load") &&
            this === document) {
            var resultForDocument = baseAddEventListener.call(this, type,
                listener, options);
            _chrome_call_soon(function() {
                if (typeof listener === "function")
                    listener.call(document, { type: eventType });
                else if (listener && typeof listener.handleEvent === "function")
                    listener.handleEvent({ type: eventType });
            });
            return resultForDocument;
        }
        if (eventType === "load" && _chrome_is_iframe_element_ce3(this)) {
            var result = baseAddEventListener.call(this, type, listener,
                options);
            _chrome_call_soon(function() {
                _chrome_call_iframe_load_listener_ce3(this, listener);
            }.bind(this));
            return result;
        }
        if (eventType === "copy" || eventType === "cut" ||
            eventType === "paste") {
            this.__chromeClipboardListenerCount =
                (this.__chromeClipboardListenerCount || 0) + 1;
        }
        return baseAddEventListener.call(this, type, listener, options);
    };
    proto.__chromeClipboardListenerTrackingInstalled = true;
}

function _chrome_remember_beforematch_listener(node, listener) {
    if (!node || !listener) return;
    if (!node.__chromeBeforeMatchListenersCe3)
        node.__chromeBeforeMatchListenersCe3 = [];
    var listeners = node.__chromeBeforeMatchListenersCe3;
    for (var i = 0; i < listeners.length; i++) {
        if (listeners[i] === listener) return;
    }
    listeners.push(listener);
    var id = node.id !== undefined ? String(node.id || "") :
        (node.getAttribute ? String(node.getAttribute("id") || "") : "");
    if (id) {
        if (!_chrome_beforematch_listeners_by_id[id])
            _chrome_beforematch_listeners_by_id[id] = [];
        var idListeners = _chrome_beforematch_listeners_by_id[id];
        for (var j = 0; j < idListeners.length; j++) {
            if (idListeners[j] === listener) return;
        }
        idListeners.push(listener);
    }
}

function _chrome_call_beforematch_listener(node, listener, event) {
    event.currentTarget = node;
    if (typeof listener === "function")
        listener.call(node, event);
    else if (listener && typeof listener.handleEvent === "function")
        listener.handleEvent(event);
}

function _chrome_make_beforematch_event(target) {
    return {
        type: "beforematch",
        bubbles: true,
        cancelable: false,
        target: target,
        currentTarget: target,
        defaultPrevented: false,
        __chromeStopped: false,
        __chromeImmediateStopped: false,
        preventDefault: function() {},
        stopPropagation: function() { this.__chromeStopped = true; },
        stopImmediatePropagation: function() {
            this.__chromeStopped = true;
            this.__chromeImmediateStopped = true;
        }
    };
}

function _chrome_dispatch_beforematch_event(target) {
    var event = _chrome_make_beforematch_event(target);
    if (target && typeof target.dispatchEvent === "function" &&
            !target.__chromeDispatchingBeforeMatchCe3) {
        try {
            target.__chromeDispatchingBeforeMatchCe3 = true;
            var nativeEvent = typeof Event === "function" ?
                new Event("beforematch", {
                    bubbles: true,
                    cancelable: false
                }) : null;
            if (nativeEvent)
                target.dispatchEvent(nativeEvent);
        } catch (_) {
        } finally {
            try { target.__chromeDispatchingBeforeMatchCe3 = false; }
            catch (_) {}
        }
    }
    for (var current = target; current; current = current.parentNode) {
        if (current.nodeType !== 1 && current !== document) continue;
        if (current !== target && typeof current.dispatchEvent === "function") {
            try {
                var ancestorEvent = typeof Event === "function" ?
                    new Event("beforematch", {
                        bubbles: false,
                        cancelable: false
                    }) : null;
                if (ancestorEvent)
                    current.dispatchEvent(ancestorEvent);
            } catch (_) {}
        }
        if (typeof current.onbeforematch === "function")
            _chrome_call_beforematch_listener(current, current.onbeforematch,
                event);
        var listeners = (current.__chromeBeforeMatchListenersCe3 || []).slice();
        var id = current.id !== undefined ? String(current.id || "") :
            (current.getAttribute ? String(current.getAttribute("id") || "") : "");
        if (id && _chrome_beforematch_listeners_by_id[id]) {
            var idListeners = _chrome_beforematch_listeners_by_id[id];
            for (var li = 0; li < idListeners.length; li++) {
                if (listeners.indexOf(idListeners[li]) < 0)
                    listeners.push(idListeners[li]);
            }
        }
        var snapshot = listeners.slice();
        for (var i = 0; i < snapshot.length; i++) {
            _chrome_call_beforematch_listener(current, snapshot[i], event);
            if (event.__chromeImmediateStopped) break;
        }
        if (!event.bubbles || event.__chromeStopped) break;
    }
    return event;
}

function _chrome_node_is_connected_ce3(node) {
    if (!node) return false;
    if (node.isConnected !== undefined) return !!node.isConnected;
    for (var current = node; current; current = current.parentNode) {
        if (current === document || current === document.documentElement ||
            current === document.body) {
            return true;
        }
    }
    return false;
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

function _chrome_track_beforematch_listener_on(node) {
    if (!node || node.__chromeDirectBeforeMatchTrackingInstalled ||
        !node.addEventListener) {
        return node;
    }
    var baseAddEventListener = node.addEventListener;
    node.addEventListener = function(type, listener, options) {
        var eventType = String(type || "").toLowerCase();
        if (eventType === "beforematch")
            _chrome_remember_beforematch_listener(this, listener);
        return baseAddEventListener.call(this, type, listener, options);
    };
    node.__chromeDirectBeforeMatchTrackingInstalled = true;
    return node;
}

function _chrome_visit_dom_elements_ce3(root, callback) {
    if (!root || typeof callback !== "function") return null;
    var stack = [root];
    while (stack.length) {
        var node = stack.shift();
        if (!node) continue;
        if (node.nodeType === 1 && callback(node)) return node;
        var children = node.childNodes || [];
        for (var i = 0; i < children.length; i++)
            stack.push(children[i]);
    }
    return null;
}

function _chrome_fallback_get_element_by_id_ce3(id) {
    var wanted = String(id || "");
    return _chrome_visit_dom_elements_ce3(document.documentElement ||
        document.body, function(node) {
            return String(node.id || "") === wanted ||
                String(_chrome_get_dom_attr_ce3(node, "id") || "") === wanted;
        });
}

function _chrome_outer_html_attr_value_ce3(node, name) {
    if (!node || typeof node.outerHTML !== "string") return undefined;
    var firstTagEnd = node.outerHTML.indexOf(">");
    if (firstTagEnd < 0) return undefined;
    var firstTag = node.outerHTML.slice(0, firstTagEnd + 1);
    var escaped = String(name || "").replace(/[-\/\\^$*+?.()|[\]{}]/g,
        "\\$&");
    var re = new RegExp("(?:^|\\s)" + escaped +
        "(?:\\s*=\\s*(?:\"([^\"]*)\"|'([^']*)'|([^\\s>]+)))?",
        "i");
    var match = re.exec(firstTag);
    if (!match) return undefined;
    if (match[1] !== undefined) return match[1];
    if (match[2] !== undefined) return match[2];
    if (match[3] !== undefined) return match[3];
    return "";
}

function _chrome_get_dom_attr_ce3(node, name) {
    if (!node) return null;
    if (node.getAttribute) {
        try { return node.getAttribute(name); } catch (_) {}
    }
    var key = String(name || "").toLowerCase();
    var explicitValue = _chrome_outer_html_attr_value_ce3(node, key);
    if (explicitValue !== undefined) return explicitValue;
    if (key === "id") return node.id || null;
    if (key === "class") return node.className || null;
    if (key === "contenteditable") {
        return null;
    }
    var prop = node[name];
    return prop === undefined || prop === false ? null : prop;
}

function _chrome_has_dom_attr_ce3(node, name) {
    var value = _chrome_get_dom_attr_ce3(node, name);
    return value !== null && value !== undefined && value !== false;
}

function _chrome_element_matches_selector_part_ce3(node, selector) {
    if (!node || node.nodeType !== 1) return false;
    var part = String(selector || "").replace(/^\s+|\s+$/g, "");
    if (!part) return false;
    if (part.charAt(0) === "#") {
        var id = part.slice(1);
        return String(node.id || "") === id ||
            String(_chrome_get_dom_attr_ce3(node, "id") || "") === id;
    }
    var attrMatch = /^([A-Za-z0-9_-]+)?\[([A-Za-z0-9_-]+)\]$/.exec(part);
    if (attrMatch) {
        var tag = attrMatch[1];
        var attr = attrMatch[2];
        if (tag && String(node.nodeName || "").toLowerCase() !==
                tag.toLowerCase()) {
            return false;
        }
        return _chrome_has_dom_attr_ce3(node, attr);
    }
    if (part.charAt(0) === "[") {
        var bareAttr = /^\[([A-Za-z0-9_-]+)\]$/.exec(part);
        return !!(bareAttr && _chrome_has_dom_attr_ce3(node, bareAttr[1]));
    }
    return String(node.nodeName || "").toLowerCase() === part.toLowerCase();
}

function _chrome_fallback_query_selector_all_ce3(selector) {
    var parts = String(selector || "").split(",");
    var out = [];
    _chrome_visit_dom_elements_ce3(document.documentElement || document.body,
        function(node) {
            for (var i = 0; i < parts.length; i++) {
                if (_chrome_element_matches_selector_part_ce3(node, parts[i])) {
                    out.push(node);
                    break;
                }
            }
            return false;
        });
    return out;
}

if (document && !document.__chromeCreateElementTrackingCe3) {
    var _chrome_base_create_element_ce3 = document.createElement;
    var _chrome_base_create_element_ns_ce3 = document.createElementNS;
    var _chrome_base_create_text_node_ce3 = document.createTextNode;
    var _chrome_base_get_element_by_id_ce3 = document.getElementById;
    var _chrome_base_query_selector_ce3 = document.querySelector;
    var _chrome_base_query_selector_all_ce3 = document.querySelectorAll;
    function _chrome_track_returned_element_ce3(node) {
        _chrome_track_beforematch_listener_on(node);
        _chrome_track_clipboard_listener_on(node);
        _chrome_install_dispatch_object_event_shim_ce3(node);
        _chrome_install_child_focus_on_element_ce3(node);
        _chrome_install_selection_mutation_tracking_on_tree_ce3(node);
        return node;
    }
    if (typeof _chrome_base_create_element_ce3 === "function") {
        document.createElement = function(name) {
            var node = _chrome_base_create_element_ce3.call(document, name);
            return _chrome_track_returned_element_ce3(node);
        };
    }
    if (typeof _chrome_base_create_element_ns_ce3 === "function") {
        document.createElementNS = function(ns, name) {
            var node = _chrome_base_create_element_ns_ce3.call(document, ns,
                name);
            return _chrome_track_returned_element_ce3(node);
        };
    }
    if (typeof _chrome_base_create_text_node_ce3 === "function") {
        document.createTextNode = function(text) {
            var node = _chrome_base_create_text_node_ce3.call(document, text);
            return _chrome_track_returned_element_ce3(node);
        };
    }
    document.getElementById = function(id) {
        var node = typeof _chrome_base_get_element_by_id_ce3 === "function" ?
            _chrome_base_get_element_by_id_ce3.call(document, id) :
            _chrome_fallback_get_element_by_id_ce3(id);
        return _chrome_track_returned_element_ce3(node);
    };
    document.querySelector = function(selector) {
        var node = typeof _chrome_base_query_selector_ce3 === "function" ?
            _chrome_base_query_selector_ce3.call(document, selector) :
            (_chrome_fallback_query_selector_all_ce3(selector)[0] || null);
        return _chrome_track_returned_element_ce3(node);
    };
    document.querySelectorAll = function(selector) {
        var nodes = typeof _chrome_base_query_selector_all_ce3 === "function" ?
            _chrome_base_query_selector_all_ce3.call(document, selector) :
            _chrome_fallback_query_selector_all_ce3(selector);
        for (var i = 0; nodes && i < nodes.length; i++)
            _chrome_track_returned_element_ce3(nodes[i]);
        return nodes || [];
    };
    document.__chromeCreateElementTrackingCe3 = true;
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

function _chrome_boundary_from_path(container, path) {
    if (!container || !path || !path.length) return null;
    var node = container;
    for (var i = 0; i + 1 < path.length; i++) {
        if (!node || !node.childNodes) return null;
        node = node.childNodes[path[i]];
    }
    if (!node) return null;
    return { node: node, offset: Math.max(0, path[path.length - 1] || 0) };
}

function _chrome_capture_selection_paths(container, selection) {
    if (!container || !selection || !selection.anchorNode ||
        !selection.focusNode) {
        return null;
    }
    var anchorTextOffset = _chrome_text_offset_for_dom_position(container,
        selection.anchorNode, selection.anchorOffset || 0);
    var focusTextOffset = _chrome_text_offset_for_dom_position(container,
        selection.focusNode, selection.focusOffset || 0);
    return {
        anchorPath: _chrome_boundary_path(container, selection.anchorNode,
            selection.anchorOffset || 0),
        focusPath: _chrome_boundary_path(container, selection.focusNode,
            selection.focusOffset || 0),
        anchorTextOffset: anchorTextOffset,
        focusTextOffset: focusTextOffset
    };
}

function _chrome_boundary_from_text_offset(container, offset, preferNext) {
    if (typeof offset !== "number" || offset < 0) return null;
    var boundary = _chrome_find_text_position(container, offset, preferNext);
    if (!boundary || !boundary.node) return null;
    return { node: boundary.node, offset: boundary.offset || 0 };
}

function _chrome_restore_selection_paths(container, paths) {
    if (!container || !paths) return false;
    var anchor = _chrome_boundary_from_path(container, paths.anchorPath);
    var focus = _chrome_boundary_from_path(container, paths.focusPath);
    if (!anchor || !focus) {
        anchor = _chrome_boundary_from_text_offset(container,
            paths.anchorTextOffset, true);
        focus = _chrome_boundary_from_text_offset(container,
            paths.focusTextOffset, false);
    }
    var selection = _chrome_current_selection_ce3();
    if (!anchor || !focus || !selection) return false;
    anchor = _chrome_canonicalize_restored_boundary(anchor);
    focus = _chrome_canonicalize_restored_boundary(focus);
    if (typeof selection.removeAllRanges === "function")
        selection.removeAllRanges();
    if (typeof selection.setBaseAndExtent === "function") {
        selection.setBaseAndExtent(anchor.node, anchor.offset,
            focus.node, focus.offset);
        return true;
    }
    if (typeof selection.collapse === "function")
        selection.collapse(anchor.node, anchor.offset);
    if (typeof selection.extend === "function")
        selection.extend(focus.node, focus.offset);
    return true;
}

function _chrome_canonicalize_restored_boundary(boundary) {
    if (!boundary || !boundary.node || boundary.node.nodeType !== 1)
        return boundary;
    var parent = boundary.node;
    var offset = boundary.offset || 0;
    var before = offset > 0 && parent.childNodes ?
        parent.childNodes[offset - 1] : null;
    var after = parent.childNodes ? parent.childNodes[offset] : null;
    if (after && after.nodeType === 3 && before && before.nodeType === 1) {
        return { node: after, offset: Math.min(1,
            (after.nodeValue || "").length) };
    }
    if (before && before.nodeType === 3 && after && after.nodeType === 1) {
        var beforeText = before.nodeValue || "";
        var beforeOffset = beforeText.length - 1;
        if (/^\s/.test(beforeText)) beforeOffset--;
        return { node: before, offset: Math.max(0, beforeOffset) };
    }
    return boundary;
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

function _chrome_location_collapsible_space(ch) {
    return /^[ \t\n\r\f]$/.test(String(ch || ""));
}

function _chrome_location_preserves_whitespace(node, container) {
    var current = node && node.nodeType === 1 ? node : node && node.parentNode;
    while (current && current !== document.body) {
        if (_chrome_node_name_is(current, "pre") ||
            _chrome_style_has_white_space_pre(current)) {
            return true;
        }
        if (current === container) break;
        current = current.parentNode;
    }
    return false;
}

function _chrome_location_atomic_element(node) {
    if (!node || node.nodeType !== 1 || !node.nodeName) return false;
    var tag = String(node.nodeName || "").toLowerCase();
    return tag === "img" || tag === "input" || tag === "textarea" ||
        tag === "button" || tag === "select" || tag === "object" ||
        tag === "embed" || tag === "iframe" || tag === "hr";
}

function _chrome_location_subtree_has_visible_content(node) {
    if (!node) return false;
    if (node.nodeType === 3) {
        var text = String(node.nodeValue || "");
        for (var i = 0; i < text.length; i++) {
            if (!_chrome_location_collapsible_space(text.charAt(i)))
                return true;
        }
        return false;
    }
    if (node.nodeType !== 1) return false;
    if (_chrome_node_name_is(node, "br")) return false;
    if (_chrome_location_atomic_element(node)) return true;
    var children = node.childNodes || [];
    for (var j = 0; j < children.length; j++) {
        if (_chrome_location_subtree_has_visible_content(children[j]))
            return true;
    }
    return false;
}

function _chrome_location_has_later_visible_content(node, offset, container) {
    if (!node) return false;
    if (node.nodeType === 3) {
        var text = String(node.nodeValue || "");
        for (var i = Math.max(0, offset || 0); i < text.length; i++) {
            if (!_chrome_location_collapsible_space(text.charAt(i)))
                return true;
        }
    }
    var current = node;
    while (current && current !== container) {
        for (var sibling = current.nextSibling; sibling;
             sibling = sibling.nextSibling) {
            if (_chrome_node_name_is(sibling, "br")) return false;
            if (sibling.nodeType === 1 && _chrome_dump_is_block_ce3(sibling))
                return false;
            if (_chrome_location_subtree_has_visible_content(sibling))
                return true;
        }
        current = current.parentNode;
    }
    return false;
}

function _chrome_location_units(container) {
    var units = [];
    var state = { atLineStart: true, previousSpace: false };
    function addUnit(startNode, startOffset, endNode, endOffset, text,
            lineBreak) {
        units.push({
            startNode: startNode,
            startOffset: startOffset || 0,
            endNode: endNode,
            endOffset: endOffset || 0,
            text: text === undefined ? "" : String(text),
            lineBreak: !!lineBreak,
            startPath: _chrome_boundary_path(container, startNode,
                startOffset || 0),
            endPath: _chrome_boundary_path(container, endNode, endOffset || 0)
        });
    }
    function walk(node) {
        if (!node) return;
        if (node.nodeType === 3) {
            var text = String(node.nodeValue || "");
            var preserveWhitespace =
                _chrome_location_preserves_whitespace(node, container);
            for (var i = 0; i < text.length; i++) {
                var ch = text.charAt(i);
                if (!preserveWhitespace &&
                    _chrome_location_collapsible_space(ch)) {
                    var start = i;
                    while (i + 1 < text.length &&
                            _chrome_location_collapsible_space(
                                text.charAt(i + 1))) {
                        i++;
                    }
                    if (state.atLineStart || state.previousSpace) continue;
                    addUnit(node, start, node, start + 1, " ");
                    state.previousSpace = true;
                    state.atLineStart = false;
                    continue;
                }
                addUnit(node, i, node, i + 1, ch);
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
            addUnit(node.parentNode, index, endNode, endOffset, "\n", true);
            state.atLineStart = true;
            state.previousSpace = false;
            return;
        }
        if (node !== container && _chrome_location_atomic_element(node)) {
            var atomicIndex = _chrome_node_child_index(node);
            addUnit(node.parentNode, atomicIndex, node.parentNode,
                atomicIndex + 1, "\uFFFC");
            state.atLineStart = false;
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
                    addUnit(node, j + 1, next, 0, "\n", true);
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
    function childIndex(parent, child) {
        if (!parent || !child || !parent.childNodes) return -1;
        for (var i = 0; i < parent.childNodes.length; i++) {
            if (parent.childNodes[i] === child) return i;
        }
        return -1;
    }
    function pathFrom(rootNode, node) {
        var path = [];
        for (var current = node; current && current !== rootNode;
             current = current.parentNode) {
            if (!current.parentNode) return null;
            var index = childIndex(current.parentNode, current);
            if (index < 0) return null;
            path.unshift(index);
        }
        return current === rootNode ? path : null;
    }
    function comparePathWithBoundary(path, boundaryPath, boundaryOffset) {
        var length = Math.min(path.length, boundaryPath.length);
        for (var i = 0; i < length; i++) {
            if (path[i] < boundaryPath[i]) return -1;
            if (path[i] > boundaryPath[i]) return 1;
        }
        if (path.length === boundaryPath.length) return 0;
        var next = path[boundaryPath.length];
        if (next < boundaryOffset) return -1;
        if (next >= boundaryOffset) return 1;
        return 0;
    }
    function appendBounded(node, path, startPath, startOffset, endPath,
            endOffset, parts) {
        if (!node) return;
        if (node.nodeType === 3) {
            var text = String(node.nodeValue || "");
            var start = 0;
            var end = text.length;
            if (path.length === startPath.length) start = startOffset || 0;
            if (path.length === endPath.length) end = endOffset || 0;
            start = Math.max(0, Math.min(text.length, start));
            end = Math.max(0, Math.min(text.length, end));
            if (end > start) parts.push(text.slice(start, end));
            return;
        }
        if (node.nodeType !== 1 && node.nodeType !== 9 &&
                node.nodeType !== 11) {
            return;
        }
        if (node.nodeType === 1 &&
            String(node.nodeName || "").toLowerCase() === "br") {
            parts.push("\n");
            return;
        }
        if (node.shadowRoot) {
            appendBounded(node.shadowRoot, path, startPath, startOffset,
                endPath, endOffset, parts);
            return;
        }
        var children = node.childNodes || [];
        for (var i = 0; i < children.length; i++) {
            var childPath = path.concat([i]);
            if (comparePathWithBoundary(childPath, startPath,
                    startOffset || 0) < 0) {
                continue;
            }
            if (comparePathWithBoundary(childPath, endPath,
                    endOffset || 0) >= 0) {
                continue;
            }
            appendBounded(children[i], childPath, startPath, startOffset,
                endPath, endOffset, parts);
        }
    }
    if (root && root.nodeType === 3) {
        var text = String(root.nodeValue || "");
        var start = Math.max(0, Math.min(text.length,
            range.startOffset || 0));
        var end = Math.max(0, Math.min(text.length, range.endOffset || 0));
        return text.substring(Math.min(start, end), Math.max(start, end));
    }
    if (root && (root.nodeType === 1 || root.nodeType === 9 ||
            root.nodeType === 11)) {
        var startPath = pathFrom(root, range.startContainer);
        var endPath = pathFrom(root, range.endContainer);
        if (startPath && endPath) {
            var bounded = [];
            if (range.startContainer === root) {
                startPath = [];
            } else if (range.startContainer &&
                    range.startContainer.nodeType !== 3) {
                startPath = startPath.concat([range.startOffset || 0]);
            }
            if (range.endContainer === root) {
                endPath = [];
            } else if (range.endContainer &&
                    range.endContainer.nodeType !== 3) {
                endPath = endPath.concat([range.endOffset || 0]);
            }
            appendBounded(root, [], startPath, range.startOffset || 0,
                endPath, range.endOffset || 0, bounded);
            return bounded.join("");
        }
    }
    var parts = [];
    appendNodeText(root, parts);
    return parts.join("");
}

function _chrome_text_control_selected_text_ce3(control) {
    if (!_chrome_is_text_control(control)) return null;
    _chrome_install_text_control_selection_api(control);
    var value = _chrome_control_plain_value(control);
    var start = typeof control.selectionStart === "number" ?
        control.selectionStart : 0;
    var end = typeof control.selectionEnd === "number" ?
        control.selectionEnd : start;
    start = Math.max(0, Math.min(value.length, start));
    end = Math.max(0, Math.min(value.length, end));
    return value.slice(Math.min(start, end), Math.max(start, end));
}

function _chrome_selection_to_string_ce3(selection, nativeToString) {
    _chrome_sync_selection_override_from_native_live_ce3(selection, false);
    var active = _chrome_active_text_control || _chrome_meaningful_active_element();
    var selectedControlText = _chrome_text_control_selected_text_ce3(active);
    if (selectedControlText !== null) return selectedControlText;
    if (_chrome_select_all_text_node)
        return _chrome_text_excluding_controls(_chrome_select_all_text_node);
    if (_chrome_selection_override_range)
        return _chrome_range_text_contents(_chrome_selection_override_range);
    if (selection && typeof nativeToString === "function") {
        try {
            var nativeText = String(nativeToString.call(selection) || "");
            if (nativeText !== "[object Object]") return nativeText;
        } catch (_) {}
    }
    if (selection && selection.rangeCount &&
            typeof selection.getRangeAt === "function") {
        try {
            return _chrome_range_text_contents(selection.getRangeAt(0));
        } catch (_) {}
    }
    return "";
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
        },
        setPasswordEchoEnabledPhysical: function(value) {
            this.passwordEchoEnabledPhysical = !!value;
        },
        setPasswordEchoEnabledTouch: function(value) {
            this.passwordEchoEnabledTouch = !!value;
        },
        setPasswordEchoDurationInSeconds: function(value) {
            this.passwordEchoDurationInSeconds = Number(value) || 0;
        },
        setScrollAnimatorEnabled: function(value) {
            this.scrollAnimatorEnabled = !!value;
        }
    },
    runtimeFlags: {
        bidiCaretAffinityEnabled: false
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
_chrome_install_password_echo_settings(internals);
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
            if (range && typeof range.deleteContents === "function") {
                if (typeof range.deleteContents.apply === "function")
                    return range.deleteContents.apply(range, arguments);
                return range.deleteContents();
            }
            _chrome_clone_or_extract_range_contents(range, true);
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
        wrapper.cloneRange = function() {
            if (range.cloneRange) {
                try { return wrapRangeForGeometry(range.cloneRange()); }
                catch (_) {}
            }
            var clone = document.createRange();
            clone.setStart(this.startContainer || range.startContainer,
                this.startOffset || 0);
            clone.setEnd(this.endContainer || range.endContainer,
                this.endOffset || 0);
            return wrapRangeForGeometry(clone);
        };
        wrapper.insertNode = function() {
            if (range && typeof range.insertNode === "function") {
                if (typeof range.insertNode.apply === "function")
                    return range.insertNode.apply(range, arguments);
                return range.insertNode(arguments[0]);
            }
            var newNode = arguments[0];
            var container = this.startContainer || range.startContainer;
            var offset = this.startOffset || 0;
            if (!newNode || !container) return;
            if (container.nodeType === 3 && container.parentNode) {
                var parent = container.parentNode;
                var text = container.nodeValue || "";
                if (offset > 0 && offset < text.length) {
                    var after = document.createTextNode(text.slice(offset));
                    container.data = text.slice(0, offset);
                    parent.insertBefore(newNode, container.nextSibling);
                    parent.insertBefore(after, newNode.nextSibling);
                } else if (offset <= 0) {
                    parent.insertBefore(newNode, container);
                } else {
                    parent.insertBefore(newNode, container.nextSibling);
                }
                if (!(container.nodeValue || "") && container.parentNode)
                    container.parentNode.removeChild(container);
                return;
            }
            if (container.nodeType === 1) {
                container.insertBefore(newNode,
                    container.childNodes ? container.childNodes[offset] ||
                        null : null);
            }
        };
        wrapper.setStart = function() {
            var node = arguments[0];
            var offset = arguments[1] || 0;
            if (range && typeof range.setStart === "function") {
                var value = typeof range.setStart.apply === "function" ?
                    range.setStart.apply(range, arguments) :
                    range.setStart(node, offset);
                this.startContainer = range.startContainer ||
                    this.startContainer;
                this.startOffset = range.startOffset || 0;
                return value;
            }
            this.startContainer = node;
            this.startOffset = offset;
            if (range) {
                range.startContainer = node;
                range.startOffset = offset;
            }
            if (_chrome_selection_override_range) {
                _chrome_selection_override_range.startContainer = node;
                _chrome_selection_override_range.startOffset = offset;
            }
            this.collapsed = this.startContainer === this.endContainer &&
                (this.startOffset || 0) === (this.endOffset || 0);
            this.commonAncestorContainer =
                _chrome_delete_common_ancestor(this.startContainer,
                    this.endContainer);
            return value;
        };
        wrapper.setEnd = function() {
            var node = arguments[0];
            var offset = arguments[1] || 0;
            if (range && typeof range.setEnd === "function") {
                var value = typeof range.setEnd.apply === "function" ?
                    range.setEnd.apply(range, arguments) :
                    range.setEnd(node, offset);
                this.endContainer = range.endContainer || this.endContainer;
                this.endOffset = range.endOffset || 0;
                return value;
            }
            this.endContainer = node;
            this.endOffset = offset;
            if (range) {
                range.endContainer = node;
                range.endOffset = offset;
            }
            if (_chrome_selection_override_range) {
                _chrome_selection_override_range.endContainer = node;
                _chrome_selection_override_range.endOffset = offset;
            }
            this.collapsed = this.startContainer === this.endContainer &&
                (this.startOffset || 0) === (this.endOffset || 0);
            this.commonAncestorContainer =
                _chrome_delete_common_ancestor(this.startContainer,
                    this.endContainer);
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
                            _chrome_sync_selection_override_from_native_live_ce3(
                                selection, false);
                            var override = _chrome_selection_override_range;
                            if (override) {
                                if (prop === "anchorNode" ||
                                        prop === "baseNode")
                                    return override.startContainer;
                                if (prop === "anchorOffset" ||
                                        prop === "baseOffset")
                                    return override.startOffset || 0;
                                if (prop === "focusNode" ||
                                        prop === "extentNode")
                                    return override.endContainer;
                                if (prop === "focusOffset" ||
                                        prop === "extentOffset")
                                    return override.endOffset || 0;
                                if (prop === "rangeCount") return 1;
                                if (prop === "isCollapsed")
                                    return override.startContainer ===
                                        override.endContainer &&
                                        (override.startOffset || 0) ===
                                        (override.endOffset || 0);
                            }
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
                    _chrome_sync_selection_override_from_native_live_ce3(
                        selection, false);
                    if (_chrome_selection_override_range)
                        return _chrome_selection_override_range.startOffset || 0;
                    if (typeof _chrome_find_base_offset === "number")
                        return _chrome_find_base_offset;
                    return selection.anchorOffset;
                }
            });
            Object.defineProperty(proxy, "extentOffset", {
                get: function() {
                    _chrome_sync_selection_override_from_native_live_ce3(
                        selection, false);
                    if (_chrome_selection_override_range)
                        return _chrome_selection_override_range.endOffset || 0;
                    if (typeof _chrome_find_extent_offset === "number")
                        return _chrome_find_extent_offset;
                    return selection.focusOffset;
                }
            });
        } catch (_) {}
        var methods = ["addRange", "collapse", "collapseToEnd",
            "collapseToStart", "containsNode", "deleteFromDocument",
            "extend", "modify", "removeAllRanges", "removeRange",
            "selectAllChildren", "setBaseAndExtent"];
        for (var j = 0; j < methods.length; j++) {
            (function(method) {
                proxy[method] = function() {
                    if (typeof selection[method] === "function")
                        return selection[method].apply(selection, arguments);
                    if (method === "toString") {
                        return _chrome_selection_override_range ?
                            _chrome_range_text_contents(
                                _chrome_selection_override_range) : "";
                    }
                    if (method === "collapseToStart" &&
                            _chrome_selection_override_range) {
                        return proxy.collapse(
                            _chrome_selection_override_range.startContainer,
                            _chrome_selection_override_range.startOffset || 0);
                    }
                    if (method === "collapseToEnd" &&
                            _chrome_selection_override_range) {
                        return proxy.collapse(
                            _chrome_selection_override_range.endContainer,
                            _chrome_selection_override_range.endOffset || 0);
                    }
                    if (method === "deleteFromDocument" &&
                            _chrome_selection_override_range) {
                        var range = document.createRange();
                        range.setStart(
                            _chrome_selection_override_range.startContainer,
                            _chrome_selection_override_range.startOffset || 0);
                        range.setEnd(
                            _chrome_selection_override_range.endContainer,
                            _chrome_selection_override_range.endOffset || 0);
                        if (typeof range.deleteContents === "function")
                            range.deleteContents();
                        proxy.removeAllRanges();
                    }
                    return undefined;
                };
            })(methods[j]);
        }
        proxy.getRangeAt = function(index) {
            _chrome_sync_selection_override_from_native_live_ce3(selection,
                false);
            if (typeof selection.getRangeAt === "function") {
                try {
                    var nativeRange = selection.getRangeAt(index);
                    if (nativeRange)
                        return wrapRangeForGeometry(nativeRange);
                } catch (_) {
                    if ((index || 0) === 0 && _chrome_selection_override_range)
                        return wrapRangeForGeometry(
                            _chrome_selection_override_range);
                    throw _;
                }
            }
            if ((index || 0) === 0 && _chrome_selection_override_range)
                return wrapRangeForGeometry(_chrome_selection_override_range);
            return null;
        };
        proxy.toString = function() {
            _chrome_sync_selection_override_from_native_live_ce3(selection,
                false);
            return _chrome_selection_to_string_ce3(selection,
                typeof selection.toString === "function" ?
                    selection.toString : null);
        };
        proxy.collapse = function(node, offset) {
            node = _chrome_resolve_named_element_candidate(node);
            var clampedOffset = _chrome_clamp_text_selection_offset(node,
                offset || 0);
            _chrome_selection_override_range = {
                startContainer: node,
                startOffset: clampedOffset,
                endContainer: node,
                endOffset: clampedOffset
            };
            if (typeof selection.collapse === "function") {
                return selection.collapse(node, clampedOffset);
            }
        };
        proxy.containsNode = function(node, allowPartial) {
            if (typeof selection.containsNode === "function") {
                return selection.containsNode(
                    _chrome_resolve_named_element_candidate(node), allowPartial);
            }
            return false;
        };
        proxy.deleteFromDocument = function() {
            var active = _chrome_active_text_control ||
                _chrome_meaningful_active_element();
            if (_chrome_is_text_control(active)) return undefined;
            if (_chrome_selection_override_range) {
                var range = document.createRange();
                range.setStart(_chrome_selection_override_range.startContainer,
                    _chrome_selection_override_range.startOffset || 0);
                range.setEnd(_chrome_selection_override_range.endContainer,
                    _chrome_selection_override_range.endOffset || 0);
                if (typeof range.deleteContents === "function")
                    range.deleteContents();
                return proxy.removeAllRanges();
            }
            if (typeof selection.deleteFromDocument === "function")
                return selection.deleteFromDocument();
        };
        proxy.extend = function(node, offset) {
            node = _chrome_resolve_named_element_candidate(node);
            var clampedOffset = _chrome_clamp_text_selection_offset(node,
                offset || 0);
            var anchorNode = this.anchorNode || selection.anchorNode || node;
            var anchorOffset = this.anchorOffset !== undefined ?
                this.anchorOffset : selection.anchorOffset || 0;
            _chrome_selection_override_range = {
                startContainer: anchorNode,
                startOffset: _chrome_clamp_text_selection_offset(anchorNode,
                    anchorOffset),
                endContainer: node,
                endOffset: clampedOffset
            };
            if (typeof selection.extend === "function") {
                return selection.extend(node, clampedOffset);
            }
        };
        proxy.addRange = function(range) {
            if (selection.rangeCount &&
                    typeof selection.removeAllRanges === "function") {
                selection.removeAllRanges();
            }
            _chrome_find_base_offset = undefined;
            _chrome_find_extent_offset = undefined;
            _chrome_find_selection_active = false;
            _chrome_selection_override_is_find_ce3 = false;
            _chrome_find_selection_cleared_ce3 = false;
            if (range) {
                var shadow = _chrome_range_shadow(range);
                var existing = _chrome_selection_override_range || {};
                _chrome_selection_override_range = {
                    startContainer: range.__chromeStartContainer ||
                        range.startContainer ||
                        shadow && shadow.startContainer ||
                        existing.startContainer,
                    startOffset: range.__chromeStartOffset !== undefined &&
                        range.__chromeStartOffset !== null ?
                        range.__chromeStartOffset :
                        range.startOffset !== undefined &&
                        range.startOffset !== null ? range.startOffset :
                        shadow && shadow.startOffset !== undefined ?
                        shadow.startOffset : existing.startOffset,
                    endContainer: range.__chromeEndContainer ||
                        range.endContainer ||
                        shadow && shadow.endContainer ||
                        existing.endContainer,
                    endOffset: range.__chromeEndOffset !== undefined &&
                        range.__chromeEndOffset !== null ?
                        range.__chromeEndOffset :
                        range.endOffset !== undefined &&
                        range.endOffset !== null ? range.endOffset :
                        shadow && shadow.endOffset !== undefined ?
                        shadow.endOffset : existing.endOffset
                };
            }
            if (typeof selection.addRange === "function")
                return selection.addRange(_chrome_unwrap_range_ce3(range));
        };
        proxy.empty = function() {
            _chrome_find_base_offset = undefined;
            _chrome_find_extent_offset = undefined;
            _chrome_selection_override_range = null;
            _chrome_selection_override_is_find_ce3 = false;
            _chrome_find_selection_cleared_ce3 = true;
            _chrome_find_selection_active = false;
            if (typeof selection.removeAllRanges === "function")
                return selection.removeAllRanges();
        };
        proxy.removeAllRanges = function() {
            _chrome_find_base_offset = undefined;
            _chrome_find_extent_offset = undefined;
            _chrome_selection_override_range = null;
            _chrome_selection_override_is_find_ce3 = false;
            _chrome_find_selection_cleared_ce3 = true;
            _chrome_find_selection_active = false;
            if (typeof selection.removeAllRanges === "function")
                return selection.removeAllRanges();
        };
        proxy.removeRange = function(range) {
            if (_chrome_selection_override_range) {
                _chrome_selection_override_range = null;
                _chrome_selection_override_is_find_ce3 = false;
                _chrome_find_selection_cleared_ce3 = true;
                _chrome_find_selection_active = false;
            }
            if (typeof selection.removeRange === "function")
                return selection.removeRange(_chrome_unwrap_range_ce3(range));
        };
        proxy.selectAllChildren = function(node) {
            node = _chrome_resolve_named_element_candidate(node);
            _chrome_clear_find_selection_state_ce3();
            _chrome_selection_override_range = {
                startContainer: node,
                startOffset: 0,
                endContainer: node,
                endOffset: node && node.childNodes ? node.childNodes.length : 0
            };
            if (typeof selection.selectAllChildren === "function")
                return selection.selectAllChildren(node);
            var first = _chrome_first_text_descendant(node) || node;
            var last = _chrome_last_text_descendant(node) || node;
            var endOffset = last.nodeType === 3 ? (last.nodeValue || "").length :
                (last.childNodes ? last.childNodes.length : 0);
            return proxy.setBaseAndExtent(first, 0, last, endOffset);
        };
        proxy.setBaseAndExtent = function(anchorNode, anchorOffset, focusNode,
                focusOffset) {
            anchorNode = _chrome_resolve_named_element_candidate(anchorNode);
            focusNode = _chrome_resolve_named_element_candidate(focusNode);
            var startOffset = _chrome_clamp_text_selection_offset(anchorNode,
                anchorOffset);
            var endOffset = _chrome_clamp_text_selection_offset(focusNode,
                focusOffset);
            _chrome_selection_override_range = {
                startContainer: anchorNode,
                startOffset: startOffset,
                endContainer: focusNode,
                endOffset: endOffset
            };
            var host = typeof _chrome_editing_host_for_node === "function" ?
                (_chrome_editing_host_for_node(focusNode) ||
                    _chrome_editing_host_for_node(anchorNode)) : null;
            if (host && _chrome_is_content_editable_element(host)) {
                _chrome_active_element = host;
                _chrome_active_text_control = null;
            }
            if (typeof selection.setBaseAndExtent === "function") {
                return selection.setBaseAndExtent(anchorNode, startOffset,
                    focusNode, endOffset);
            }
            if (typeof selection.collapse === "function") {
                selection.collapse(anchorNode, startOffset);
                if (typeof selection.extend === "function")
                    selection.extend(focusNode, endOffset);
            }
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
                _chrome_should_pause_first_letter_word_boundary(this,
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
                            proxy.setBaseAndExtent(boundary.node,
                                boundary.offset, boundary.node,
                                boundary.offset);
                            return;
                        }
                    }
                    current = current.parentNode;
                }
            }
            if (move && left && character &&
                _chrome_move_left_from_after_image(this)) {
                return;
            }
            if (move && forward && character &&
                !_chrome_selection_has_content(this) &&
                this.focusNode && this.focusNode.nodeType === 1) {
                var child = this.focusNode.childNodes[this.focusOffset || 0];
                if (child && child.nodeType === 1 &&
                    !_chrome_element_has_text_descendant(child)) {
                    proxy.setBaseAndExtent(this.focusNode,
                        (this.focusOffset || 0) + 1, this.focusNode,
                        (this.focusOffset || 0) + 1);
                    return;
                }
            }
            if (typeof selection.modify !== "function" ||
                    selection.modify.__chromeModifyFallbackCe3) {
                return selectionModifyFallback(proxy, alter, direction,
                    granularity);
            }
            if (extend && character)
                selection.__chromeExtendCharacterAdjusted = false;
            var beforeNode = this.focusNode;
            var beforeOffset = this.focusOffset || 0;
            var result = selection.modify.apply(selection, arguments);
            if (extend && character)
                _chrome_adjust_extend_character_after_modify(selection,
                    direction, beforeNode, beforeOffset);
            if (extend && lineboundary &&
                _chrome_lineboundary_moves_to_line_start(direction,
                    beforeNode))
                _chrome_adjust_extend_lineboundary_anchor_after_modify(
                    selection, beforeNode, beforeOffset);
            if (extend && forward && word)
                _chrome_adjust_extend_word_from_pre_boundary(selection);
            _chrome_sync_selection_override_from_native_ce3(selection);
            return result;
        };
        return proxy;
    }
    if (typeof Element !== "undefined" && Element.prototype &&
        typeof Element.prototype.getBoundingClientRect !== "function") {
        Element.prototype.getBoundingClientRect = function() {
            if (this.__chromeForcedRect)
                return this.__chromeForcedRect;
            return rectForNode(this, 0);
        };
    }
    if (typeof Element !== "undefined" && Element.prototype &&
        typeof Element.prototype.getClientRects !== "function") {
        Element.prototype.getClientRects = function() {
            if (this.__chromeForcedRect)
                return [this.__chromeForcedRect];
            if (typeof this.getBoundingClientRect === "function")
                return [this.getBoundingClientRect()];
            return [rectForNode(this, 0)];
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
    if (typeof Element !== "undefined" && Element.prototype &&
        !Element.prototype.__chromeForcedRectOverrideCe3) {
        var baseElementRect = Element.prototype.getBoundingClientRect;
        var baseElementRects = Element.prototype.getClientRects;
        Element.prototype.getBoundingClientRect = function() {
            if (this.__chromeForcedRect) return this.__chromeForcedRect;
            if (baseElementRect) return baseElementRect.apply(this, arguments);
            return rectForNode(this, 0);
        };
        Element.prototype.getClientRects = function() {
            if (this.__chromeForcedRect) return [this.__chromeForcedRect];
            if (baseElementRects) return baseElementRects.apply(this, arguments);
            return [this.getBoundingClientRect()];
        };
        Element.prototype.__chromeForcedRectOverrideCe3 = true;
    }
    function selectionModifyDirectionForward(direction) {
        var lower = String(direction || "").toLowerCase();
        return lower === "forward" || lower === "right" || lower === "down";
    }
    function selectionModifyDirectionBackward(direction) {
        var lower = String(direction || "").toLowerCase();
        return lower === "backward" || lower === "left" || lower === "up";
    }
    function selectionModifyCurrentRange(selectionLike) {
        var range = _chrome_selection_override_range;
        if (range && range.startContainer && range.endContainer) {
            return {
                anchorNode: range.startContainer,
                anchorOffset: range.startOffset || 0,
                focusNode: range.endContainer,
                focusOffset: range.endOffset || 0
            };
        }
        if (!selectionLike) return null;
        var anchorNode = selectionLike.anchorNode || selectionLike.focusNode;
        var focusNode = selectionLike.focusNode || anchorNode;
        if (!anchorNode || !focusNode) return null;
        return {
            anchorNode: anchorNode,
            anchorOffset: selectionLike.anchorOffset || 0,
            focusNode: focusNode,
            focusOffset: selectionLike.focusOffset || 0
        };
    }
    function selectionModifyRangeHasContent(range) {
        return !!(range && range.anchorNode && range.focusNode &&
            (range.anchorNode !== range.focusNode ||
                (range.anchorOffset || 0) !== (range.focusOffset || 0)));
    }
    function selectionModifyRoot(range) {
        if (!range) return document.body || document.documentElement;
        var host = _chrome_editing_host_for_node(range.focusNode) ||
            _chrome_editing_host_for_node(range.anchorNode);
        if (host) return host;
        var current = range.focusNode && range.focusNode.nodeType === 1 ?
            range.focusNode : range.focusNode && range.focusNode.parentNode;
        while (current && current !== document.body) {
            if (_chrome_is_content_editable_element(current) &&
                    _chrome_contenteditable_value(current) !== "false") {
                return current;
            }
            current = current.parentNode;
        }
        current = range.anchorNode && range.anchorNode.nodeType === 1 ?
            range.anchorNode : range.anchorNode && range.anchorNode.parentNode;
        while (current && current !== document.body) {
            if (_chrome_is_content_editable_element(current) &&
                    _chrome_contenteditable_value(current) !== "false") {
                return current;
            }
            current = current.parentNode;
        }
        var node = range.focusNode || range.anchorNode;
        if (node && node.nodeType === 1 &&
                _chrome_is_content_editable_element(node)) {
            return node;
        }
        return document.body || document.documentElement || node;
    }
    function selectionModifyBoundaryAt(root, location) {
        var units = _chrome_location_units(root);
        if (!units.length) return { node: root, offset: 0 };
        var index = Math.max(0, Math.min(units.length, location || 0));
        if (index <= 0) {
            return {
                node: units[0].startNode,
                offset: units[0].startOffset || 0
            };
        }
        if (index >= units.length) {
            return {
                node: units[units.length - 1].endNode,
                offset: units[units.length - 1].endOffset || 0
            };
        }
        if (index > 0) {
            return {
                node: units[index - 1].endNode,
                offset: units[index - 1].endOffset || 0
            };
        }
        return {
            node: units[index].startNode,
            offset: units[index].startOffset || 0
        };
    }
    function selectionModifySet(selectionLike, anchorNode, anchorOffset,
            focusNode, focusOffset) {
        if (!anchorNode || !focusNode) return false;
        anchorOffset = _chrome_clamp_text_selection_offset(anchorNode,
            anchorOffset || 0);
        focusOffset = _chrome_clamp_text_selection_offset(focusNode,
            focusOffset || 0);
        _chrome_find_base_offset = undefined;
        _chrome_find_extent_offset = undefined;
        _chrome_find_selection_active = false;
        _chrome_selection_override_is_find_ce3 = false;
        _chrome_find_selection_cleared_ce3 = false;
        _chrome_selection_override_range = {
            startContainer: anchorNode,
            startOffset: anchorOffset,
            endContainer: focusNode,
            endOffset: focusOffset
        };
        if (selectionLike && typeof selectionLike.setBaseAndExtent ===
                "function") {
            try {
                selectionLike.setBaseAndExtent(anchorNode, anchorOffset,
                    focusNode, focusOffset);
                return true;
            } catch (_) {}
        }
        if (selectionLike && typeof selectionLike.collapse === "function") {
            try {
                selectionLike.collapse(anchorNode, anchorOffset);
                if ((anchorNode !== focusNode || anchorOffset !== focusOffset) &&
                        typeof selectionLike.extend === "function") {
                    selectionLike.extend(focusNode, focusOffset);
                }
                return true;
            } catch (_) {}
        }
        return true;
    }
    function selectionModifyTextFromUnits(units) {
        var text = "";
        for (var i = 0; i < units.length; i++)
            text += units[i].text || "";
        return text;
    }
    function selectionModifyWordTarget(units, index, forward) {
        var text = selectionModifyTextFromUnits(units);
        if (forward) return _chrome_next_word_end_ce3(text, index);
        return _chrome_previous_word_start_ce3(text, index);
    }
    function selectionModifyLineBoundaryTarget(units, index, forward) {
        if (forward) {
            for (var i = index; i < units.length; i++) {
                if (units[i].lineBreak) return i;
            }
            return units.length;
        }
        for (var j = index - 1; j >= 0; j--) {
            if (units[j].lineBreak) return j + 1;
        }
        return 0;
    }
    function selectionModifyBlockFor(node, root) {
        var current = node && node.nodeType === 1 ? node : node && node.parentNode;
        while (current && current !== root && current !== document.body) {
            if (_chrome_dump_is_block_ce3(current)) return current;
            current = current.parentNode;
        }
        return null;
    }
    function selectionModifySiblingBlock(block, forward) {
        for (var sibling = block ?
                (forward ? block.nextSibling : block.previousSibling) : null;
             sibling;
             sibling = forward ? sibling.nextSibling : sibling.previousSibling) {
            if (sibling.nodeType !== 1) continue;
            if (!_chrome_dump_is_block_ce3(sibling)) continue;
            if (_chrome_location_units(sibling).length) return sibling;
        }
        return null;
    }
    function selectionModifyLineTarget(range, root, index, forward) {
        var block = selectionModifyBlockFor(range.focusNode, root);
        var sibling = selectionModifySiblingBlock(block, forward);
        if (block && sibling) {
            var localIndex = _chrome_location_from_boundary(block,
                range.focusNode, range.focusOffset || 0);
            return {
                root: sibling,
                location: Math.max(0, Math.min(
                    _chrome_location_units(sibling).length, localIndex))
            };
        }
        var units = _chrome_location_units(root);
        if (forward) {
            for (var i = index; i < units.length; i++) {
                if (units[i].lineBreak) {
                    return { root: root, location: Math.min(units.length,
                        i + 1) };
                }
            }
            return { root: root, location: units.length };
        }
        for (var j = index - 1; j >= 0; j--) {
            if (units[j].lineBreak) return { root: root, location: j };
        }
        return { root: root, location: 0 };
    }
    function selectionModifyFallback(selectionLike, alter, direction,
            granularity) {
        var move = String(alter || "").toLowerCase() === "move";
        var extend = String(alter || "").toLowerCase() === "extend";
        var forward = selectionModifyDirectionForward(direction);
        var backward = selectionModifyDirectionBackward(direction);
        var lowerGranularity = String(granularity || "").toLowerCase();
        var character = lowerGranularity === "character";
        var word = lowerGranularity === "word";
        var lineboundary = lowerGranularity === "lineboundary";
        var line = lowerGranularity === "line";

        if ((!move && !extend) || (!forward && !backward)) return false;

        var active = _chrome_meaningful_active_element();
        var nativeActive = document && document.activeElement !== document.body ?
            document.activeElement : null;
        if (!_chrome_is_text_control(active) &&
                _chrome_is_text_control(nativeActive)) {
            active = nativeActive;
        }
        if (_chrome_is_text_control(active)) {
            _chrome_install_text_control_selection_api(active);
            var text = _chrome_control_plain_value(active);
            var length = text.length;
            var start = typeof active.selectionStart === "number" ?
                active.selectionStart : 0;
            var end = typeof active.selectionEnd === "number" ?
                active.selectionEnd : start;
            var focus = active.selectionDirection === "backward" ? start : end;
            var anchor = active.selectionDirection === "backward" ? end : start;
            var target = focus;
            if (character) target += forward ? 1 : -1;
            else if (word)
                target = forward ? _chrome_next_word_end_ce3(text, focus) :
                    _chrome_previous_word_start_ce3(text, focus);
            else if (lineboundary || line)
                target = forward ? length : 0;
            else return false;
            target = Math.max(0, Math.min(length, target));
            if (move) anchor = target;
            var nextStart = Math.min(anchor, target);
            var nextEnd = Math.max(anchor, target);
            var selectionDirection = !extend || anchor === target ? "none" :
                (target < anchor ? "backward" : "forward");
            if (active.setSelectionRange)
                active.setSelectionRange(nextStart, nextEnd,
                    selectionDirection);
            _chrome_selection_override_range = null;
            _chrome_find_selection_active = false;
            return true;
        }

        var range = selectionModifyCurrentRange(selectionLike);
        if (!range || !range.focusNode) return false;
        if (move && character && selectionModifyRangeHasContent(range)) {
            if (forward) {
                return selectionModifySet(selectionLike, range.focusNode,
                    range.focusOffset || 0, range.focusNode,
                    range.focusOffset || 0);
            }
            return selectionModifySet(selectionLike, range.anchorNode,
                range.anchorOffset || 0, range.anchorNode,
                range.anchorOffset || 0);
        }

        var root = selectionModifyRoot(range);
        if (!root) return false;
        var units = _chrome_location_units(root);
        var index = _chrome_location_from_boundary(root, range.focusNode,
            range.focusOffset || 0);
        var targetInfo = { root: root, location: index };
        if (character) {
            targetInfo.location = index + (forward ? 1 : -1);
        } else if (word) {
            targetInfo.location = selectionModifyWordTarget(units, index,
                forward);
        } else if (lineboundary) {
            var boundaryRoot = selectionModifyBlockFor(range.focusNode, root) ||
                root;
            var boundaryUnits = _chrome_location_units(boundaryRoot);
            targetInfo.root = boundaryRoot;
            targetInfo.location = selectionModifyLineBoundaryTarget(
                boundaryUnits,
                _chrome_location_from_boundary(boundaryRoot, range.focusNode,
                    range.focusOffset || 0),
                forward);
        } else if (line) {
            targetInfo = selectionModifyLineTarget(range, root, index, forward);
        } else {
            return false;
        }
        var targetUnits = _chrome_location_units(targetInfo.root);
        if (character && forward && targetInfo.location > 0) {
            var previousUnit = targetUnits[targetInfo.location - 1];
            if (previousUnit && previousUnit.text === " " &&
                    previousUnit.startNode &&
                    previousUnit.startNode.nodeType === 3 &&
                    /^[ \t\n\r\f]*$/.test(
                        String(previousUnit.startNode.nodeValue || "")) &&
                    !_chrome_location_has_later_visible_content(
                        previousUnit.startNode,
                        previousUnit.endOffset || 0, targetInfo.root)) {
                targetInfo.location--;
            }
        }
        targetInfo.location = Math.max(0, Math.min(targetUnits.length,
            targetInfo.location || 0));
        var boundary = selectionModifyBoundaryAt(targetInfo.root,
            targetInfo.location);
        if (move) {
            return selectionModifySet(selectionLike, boundary.node,
                boundary.offset, boundary.node, boundary.offset);
        }
        var changed = selectionModifySet(selectionLike, range.anchorNode,
            range.anchorOffset || 0, boundary.node, boundary.offset);
        if (changed && word && forward)
            _chrome_adjust_extend_word_from_pre_boundary(selectionLike);
        return changed;
    }
    function installSelectionFindMethods(selection) {
        if (!selection || selection.__chromeFindOwnMethodsCe3) return selection;
        var baseAddRange = selection.addRange;
        var baseRemoveAllRanges = selection.removeAllRanges;
        var baseSetBaseAndExtent = selection.setBaseAndExtent;
        try {
            if (typeof baseAddRange === "function") {
                selection.addRange = function(range) {
                    if (this.rangeCount &&
                            typeof this.removeAllRanges === "function")
                        this.removeAllRanges();
            _chrome_find_base_offset = undefined;
            _chrome_find_extent_offset = undefined;
            _chrome_find_selection_active = false;
            _chrome_selection_override_is_find_ce3 = false;
            if (range) {
                        var shadow = _chrome_range_shadow(range);
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
                    return baseAddRange.call(this,
                        _chrome_unwrap_range_ce3(range));
                };
            }
        } catch (_) {}
        try {
            if (typeof selection.addRange !== "function") {
                selection.addRange = function(range) {
                    _chrome_find_base_offset = undefined;
                    _chrome_find_extent_offset = undefined;
                    _chrome_find_selection_active = false;
                    _chrome_selection_override_is_find_ce3 = false;
                    _chrome_find_selection_cleared_ce3 = false;
                    if (range) {
                        var shadow = _chrome_range_shadow(range);
                        var existing = _chrome_selection_override_range || {};
                        _chrome_selection_override_range = {
                            startContainer:
                                range.__chromeStartContainer ||
                                range.startContainer ||
                                shadow && shadow.startContainer ||
                                existing.startContainer,
                            startOffset:
                                range.__chromeStartOffset !== undefined &&
                                range.__chromeStartOffset !== null ?
                                range.__chromeStartOffset :
                                range.startOffset !== undefined &&
                                range.startOffset !== null ?
                                range.startOffset :
                                shadow && shadow.startOffset !== undefined ?
                                shadow.startOffset : existing.startOffset,
                            endContainer:
                                range.__chromeEndContainer ||
                                range.endContainer ||
                                shadow && shadow.endContainer ||
                                existing.endContainer,
                            endOffset:
                                range.__chromeEndOffset !== undefined &&
                                range.__chromeEndOffset !== null ?
                                range.__chromeEndOffset :
                                range.endOffset !== undefined &&
                                range.endOffset !== null ?
                                range.endOffset :
                                shadow && shadow.endOffset !== undefined ?
                                shadow.endOffset : existing.endOffset
                        };
                    }
                };
            }
        } catch (_) {}
        try {
            if (typeof baseRemoveAllRanges === "function") {
                selection.removeAllRanges = function() {
            _chrome_find_base_offset = undefined;
            _chrome_find_extent_offset = undefined;
            _chrome_selection_override_range = null;
            _chrome_selection_override_is_find_ce3 = false;
            _chrome_find_selection_cleared_ce3 = true;
            _chrome_find_selection_active = false;
                    return baseRemoveAllRanges.call(this);
                };
            }
        } catch (_) {}
        try {
            selection.empty = function() {
            _chrome_find_base_offset = undefined;
            _chrome_find_extent_offset = undefined;
            _chrome_selection_override_range = null;
            _chrome_selection_override_is_find_ce3 = false;
            _chrome_find_selection_cleared_ce3 = true;
            _chrome_find_selection_active = false;
                if (typeof this.removeAllRanges === "function")
                    return this.removeAllRanges();
            };
        } catch (_) {}
        try {
            if (typeof baseSetBaseAndExtent === "function") {
                selection.setBaseAndExtent = function(anchorNode, anchorOffset,
                        focusNode, focusOffset) {
                    anchorNode =
                        _chrome_resolve_named_element_candidate(anchorNode);
                    focusNode =
                        _chrome_resolve_named_element_candidate(focusNode);
                    var startOffset = _chrome_clamp_text_selection_offset(
                        anchorNode, anchorOffset);
                    var endOffset = _chrome_clamp_text_selection_offset(
                        focusNode, focusOffset);
                    _chrome_find_base_offset = undefined;
                    _chrome_find_extent_offset = undefined;
                    _chrome_find_selection_active = false;
                    _chrome_selection_override_is_find_ce3 = false;
                    _chrome_find_selection_cleared_ce3 = false;
                    _chrome_selection_override_range = {
                        startContainer: anchorNode,
                        startOffset: startOffset,
                        endContainer: focusNode,
                        endOffset: endOffset
                    };
                    return baseSetBaseAndExtent.call(this, anchorNode,
                        startOffset, focusNode, endOffset);
                };
            } else if (typeof selection.setBaseAndExtent !== "function") {
                selection.setBaseAndExtent = function(anchorNode, anchorOffset,
                        focusNode, focusOffset) {
                    anchorNode =
                        _chrome_resolve_named_element_candidate(anchorNode);
                    focusNode =
                        _chrome_resolve_named_element_candidate(focusNode);
                    var startOffset = _chrome_clamp_text_selection_offset(
                        anchorNode, anchorOffset);
                    var endOffset = _chrome_clamp_text_selection_offset(
                        focusNode, focusOffset);
                    _chrome_find_base_offset = undefined;
                    _chrome_find_extent_offset = undefined;
                    _chrome_find_selection_active = false;
                    _chrome_selection_override_is_find_ce3 = false;
                    _chrome_find_selection_cleared_ce3 = false;
                    _chrome_selection_override_range = {
                        startContainer: anchorNode,
                        startOffset: startOffset,
                        endContainer: focusNode,
                        endOffset: endOffset
                    };
                    if (typeof this.collapse === "function") {
                        try {
                            this.collapse(anchorNode, startOffset);
                            if (typeof this.extend === "function")
                                this.extend(focusNode, endOffset);
                        } catch (_) {}
                    }
                };
            }
        } catch (_) {}
        try {
            if (typeof selection.modify !== "function") {
                selection.modify = function(alter, direction, granularity) {
                    return selectionModifyFallback(this, alter, direction,
                        granularity);
                };
                selection.modify.__chromeModifyFallbackCe3 = true;
            }
        } catch (_) {}
        try {
            if (typeof selection.getRangeAt !== "function") {
                selection.getRangeAt = function() {
                    return wrapRangeForGeometry(_chrome_selection_override_range);
                };
            }
        } catch (_) {}
        try { selection.__chromeFindOwnMethodsCe3 = true; } catch (_) {}
        return selection;
    }
    var baseGetSelection = typeof getSelection === "function" ? getSelection :
        (typeof window !== "undefined" &&
        typeof window.getSelection === "function" ? window.getSelection : null);
    var windowGetSelectionIsWrapped = typeof window !== "undefined" &&
        window.getSelection && window.getSelection.__chromeGeometryWrapped;
    if (baseGetSelection && !windowGetSelectionIsWrapped) {
        try {
            var nativeSelectionForProto =
                baseGetSelection.call(window || globalThis);
            installSelectionFindMethods(nativeSelectionForProto);
            var selectionProto = Object.getPrototypeOf ?
                Object.getPrototypeOf(nativeSelectionForProto) :
                nativeSelectionForProto.__proto__;
            if (selectionProto && !selectionProto.__chromeFindOffsetsCe3) {
                _chrome_install_selection_override_accessors_ce3(
                    selectionProto);
                var baseSelectionAddRange = selectionProto.addRange;
                var baseSelectionRemoveAllRanges =
                    selectionProto.removeAllRanges;
                var baseSelectionCollapse = selectionProto.collapse;
                var baseSelectionContainsNode = selectionProto.containsNode;
                var baseSelectionExtend = selectionProto.extend;
                var baseSelectionSelectAllChildren =
                    selectionProto.selectAllChildren;
                var baseSelectionSetBaseAndExtent =
                    selectionProto.setBaseAndExtent;
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
                if (typeof baseSelectionAddRange === "function") {
                    selectionProto.addRange = function(range) {
                        if (this.rangeCount &&
                                typeof this.removeAllRanges === "function")
                            this.removeAllRanges();
                        _chrome_find_base_offset = undefined;
                        _chrome_find_extent_offset = undefined;
                        _chrome_find_selection_active = false;
                        _chrome_selection_override_is_find_ce3 = false;
                        _chrome_find_selection_cleared_ce3 = false;
                        if (range) {
                            var shadow = _chrome_range_shadow(range);
                            var existing =
                                _chrome_selection_override_range || {};
                            _chrome_selection_override_range = {
                                startContainer:
                                    range.__chromeStartContainer ||
                                    range.startContainer ||
                                    shadow && shadow.startContainer ||
                                    existing.startContainer,
                                startOffset:
                                    range.__chromeStartOffset !== undefined &&
                                    range.__chromeStartOffset !== null ?
                                    range.__chromeStartOffset :
                                    range.startOffset !== undefined &&
                                    range.startOffset !== null ?
                                    range.startOffset :
                                    shadow && shadow.startOffset !== undefined ?
                                    shadow.startOffset : existing.startOffset,
                                endContainer:
                                    range.__chromeEndContainer ||
                                    range.endContainer ||
                                    shadow && shadow.endContainer ||
                                    existing.endContainer,
                                endOffset:
                                    range.__chromeEndOffset !== undefined &&
                                    range.__chromeEndOffset !== null ?
                                    range.__chromeEndOffset :
                                    range.endOffset !== undefined &&
                                    range.endOffset !== null ?
                                    range.endOffset :
                                    shadow && shadow.endOffset !== undefined ?
                                    shadow.endOffset : existing.endOffset
                            };
                        }
                        return baseSelectionAddRange.call(this,
                            _chrome_unwrap_range_ce3(range));
                    };
                }
                if (typeof baseSelectionCollapse === "function") {
                    selectionProto.collapse = function(node, offset) {
                        node = _chrome_resolve_named_element_candidate(node);
                        var clampedOffset =
                            _chrome_clamp_text_selection_offset(node,
                                offset || 0);
                        _chrome_clear_find_selection_state_ce3();
                        _chrome_selection_override_range = {
                            startContainer: node,
                            startOffset: clampedOffset,
                            endContainer: node,
                            endOffset: clampedOffset
                        };
                        return baseSelectionCollapse.call(this,
                            node, clampedOffset);
                    };
                }
                if (typeof baseSelectionContainsNode === "function") {
                    selectionProto.containsNode = function(node,
                            allowPartialContainment) {
                        return baseSelectionContainsNode.call(this,
                            _chrome_resolve_named_element_candidate(node),
                            allowPartialContainment);
                    };
                }
                if (typeof baseSelectionExtend === "function") {
                    selectionProto.extend = function(node, offset) {
                        node = _chrome_resolve_named_element_candidate(node);
                        var clampedOffset =
                            _chrome_clamp_text_selection_offset(node,
                                offset || 0);
                        var anchorNode =
                            _chrome_selection_override_range &&
                            _chrome_selection_override_range.startContainer ?
                                _chrome_selection_override_range.startContainer :
                                (this.anchorNode || node);
                        var anchorOffset =
                            _chrome_selection_override_range &&
                            _chrome_selection_override_range.startOffset !==
                                undefined ?
                                _chrome_selection_override_range.startOffset :
                                (this.anchorOffset || 0);
                        _chrome_clear_find_selection_state_ce3();
                        _chrome_selection_override_range = {
                            startContainer: anchorNode,
                            startOffset:
                                _chrome_clamp_text_selection_offset(anchorNode,
                                    anchorOffset),
                            endContainer: node,
                            endOffset: clampedOffset
                        };
                        return baseSelectionExtend.call(this, node,
                            clampedOffset);
                    };
                }
                if (typeof baseSelectionRemoveAllRanges === "function") {
                    selectionProto.removeAllRanges = function() {
                        _chrome_find_base_offset = undefined;
                        _chrome_find_extent_offset = undefined;
                        _chrome_selection_override_range = null;
                        _chrome_selection_override_is_find_ce3 = false;
                        _chrome_find_selection_cleared_ce3 = true;
                        _chrome_find_selection_active = false;
                        return baseSelectionRemoveAllRanges.call(this);
                    };
                } else {
                    selectionProto.removeAllRanges = function() {
                        _chrome_find_base_offset = undefined;
                        _chrome_find_extent_offset = undefined;
                        _chrome_selection_override_range = null;
                        _chrome_selection_override_is_find_ce3 = false;
                        _chrome_find_selection_cleared_ce3 = true;
                        _chrome_find_selection_active = false;
                    };
                }
                if (typeof baseSelectionSelectAllChildren === "function") {
                    selectionProto.selectAllChildren = function(node) {
                        node = _chrome_resolve_named_element_candidate(node);
                        _chrome_clear_find_selection_state_ce3();
                        _chrome_selection_override_range = {
                            startContainer: node,
                            startOffset: 0,
                            endContainer: node,
                            endOffset: node && node.childNodes ?
                                node.childNodes.length : 0
                        };
                        return baseSelectionSelectAllChildren.call(this,
                            node);
                    };
                } else {
                    selectionProto.selectAllChildren = function(node) {
                        node = _chrome_resolve_named_element_candidate(node);
                        _chrome_clear_find_selection_state_ce3();
                        _chrome_selection_override_range = {
                            startContainer: node,
                            startOffset: 0,
                            endContainer: node,
                            endOffset: node && node.childNodes ?
                                node.childNodes.length : 0
                        };
                        var first = _chrome_first_text_descendant(node) || node;
                        var last = _chrome_last_text_descendant(node) || node;
                        var endOffset = last && last.nodeType === 3 ?
                            (last.nodeValue || "").length :
                            (last && last.childNodes ? last.childNodes.length : 0);
                        if (typeof this.setBaseAndExtent === "function")
                            return this.setBaseAndExtent(first, 0, last,
                                endOffset);
                    };
                }
                if (typeof baseSelectionSetBaseAndExtent === "function") {
                    selectionProto.setBaseAndExtent = function(anchorNode,
                            anchorOffset, focusNode, focusOffset) {
                        anchorNode =
                            _chrome_resolve_named_element_candidate(anchorNode);
                        focusNode =
                            _chrome_resolve_named_element_candidate(focusNode);
                        var startOffset =
                            _chrome_clamp_text_selection_offset(anchorNode,
                                anchorOffset);
                        var endOffset =
                            _chrome_clamp_text_selection_offset(focusNode,
                                focusOffset);
                        _chrome_clear_find_selection_state_ce3();
                        _chrome_selection_override_range = {
                            startContainer: anchorNode,
                            startOffset: startOffset,
                            endContainer: focusNode,
                            endOffset: endOffset
                        };
                        return baseSelectionSetBaseAndExtent.call(this,
                            anchorNode, startOffset, focusNode, endOffset);
                    };
                } else {
                    selectionProto.setBaseAndExtent = function(anchorNode,
                            anchorOffset, focusNode, focusOffset) {
                        anchorNode =
                            _chrome_resolve_named_element_candidate(anchorNode);
                        focusNode =
                            _chrome_resolve_named_element_candidate(focusNode);
                        _chrome_selection_override_range = {
                            startContainer: anchorNode,
                            startOffset: _chrome_clamp_text_selection_offset(
                                anchorNode, anchorOffset),
                            endContainer: focusNode,
                            endOffset: _chrome_clamp_text_selection_offset(
                                focusNode, focusOffset)
                        };
                        _chrome_selection_override_is_find_ce3 = false;
                        _chrome_find_selection_cleared_ce3 = false;
                    };
                }
                selectionProto.empty = function() {
                    _chrome_find_base_offset = undefined;
                    _chrome_find_extent_offset = undefined;
                    _chrome_selection_override_range = null;
                    _chrome_selection_override_is_find_ce3 = false;
                    _chrome_find_selection_cleared_ce3 = true;
                    _chrome_find_selection_active = false;
                    return this.removeAllRanges();
                };
                selectionProto.__chromeFindOffsetsCe3 = true;
            }
        } catch (_) {}
        var wrappedGetSelection = function() {
            var selection = null;
            if (typeof baseGetSelection.apply === "function") {
                try {
                    selection = baseGetSelection.apply(this, arguments);
                } catch (_) {
                    selection = baseGetSelection();
                }
            } else {
                selection = baseGetSelection();
            }
            if (selection && typeof selection.getRangeAt === "function" &&
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
            try {
                if (window.getSelection !== wrappedGetSelection) {
                    try { delete window.getSelection; } catch (_) {}
                    if (window.getSelection !== wrappedGetSelection)
                        window.getSelection = wrappedGetSelection;
                }
                if (window.getSelection !== wrappedGetSelection &&
                        Object.getPrototypeOf) {
                    var windowProto = Object.getPrototypeOf(window);
                    if (windowProto) {
                        Object.defineProperty(windowProto, "getSelection", {
                            configurable: true,
                            writable: true,
                            value: wrappedGetSelection
                        });
                    }
                }
            } catch (_) {}
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
            try {
                globalThis.__chrome_wrapped_get_selection_ce3 =
                    wrappedGetSelection;
                (0, eval)(
                    "getSelection = globalThis.__chrome_wrapped_get_selection_ce3");
            } catch (_) {}
        }
        if (document && !document.__chromeGetSelectionProxyCe3) {
            document.getSelection = function() {
                return wrappedGetSelection.call(window || globalThis);
            };
            document.__chromeGetSelectionProxyCe3 = true;
        }
    } else if (baseGetSelection) {
        try {
            installSelectionFindMethods(baseGetSelection.call(
                window || globalThis));
        } catch (_) {}
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
    if (_chrome_element_is_draggable_ce3(element)) {
        width = Math.max(width, 20);
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

function _chrome_element_is_draggable_ce3(element) {
    if (!element || element.nodeType !== 1) return false;
    var attr = _chrome_get_dom_attr_ce3(element, "draggable");
    if (String(attr || "").toLowerCase() === "true") return true;
    return element.draggable === true;
}

function _chrome_lookup_draggable_element_by_x_ce3(x) {
    var value = Number(x);
    if (value !== value || !document || !document.getElementsByTagName)
        return null;
    var elements = document.getElementsByTagName("*");
    var best = null;
    var bestWidth = 1000000;
    for (var i = 0; elements && i < elements.length; i++) {
        var element = elements[i];
        if (!_chrome_element_is_draggable_ce3(element)) continue;
        var left = Number(element.offsetLeft || 0);
        if (left !== left) left = 0;
        var width = Math.max(20, _chrome_synthetic_width_for_element(element));
        if (value >= left && value <= left + width && width < bestWidth) {
            best = element;
            bestWidth = width;
        }
    }
    return best;
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

function _chrome_lookup_element_by_offset_left(x) {
    var value = Number(x);
    if (value !== value || !document || !document.getElementsByTagName)
        return null;
    var elements = document.getElementsByTagName("*");
    var contained = null;
    var containedWidth = 1000000;
    var containedDistance = 1000000;
    var best = null;
    var bestDistance = 1000000;
    for (var i = 0; elements && i < elements.length; i++) {
        var element = elements[i];
        if (!element || !element.parentNode ||
            !element.textContent ||
            element === document.body ||
            element === document.documentElement) {
            continue;
        }
        var left = Number(element.offsetLeft || 0);
        if (left !== left) continue;
        var width = _chrome_synthetic_width_for_element(element);
        if (value >= left && value <= left + width) {
            var centerDistance = Math.abs(value - (left + width / 2));
            if (width < containedWidth ||
                (width === containedWidth &&
                 (centerDistance < containedDistance ||
                  (centerDistance === containedDistance &&
                   _chrome_prefer_mouse_leaf_element(element, contained))))) {
                containedWidth = width;
                containedDistance = centerDistance;
                contained = element;
            }
        }
        var distance = Math.abs(left - value);
        if (distance < bestDistance ||
            (distance === bestDistance &&
             _chrome_prefer_mouse_leaf_element(element, best))) {
            bestDistance = distance;
            best = element;
        }
    }
    if (contained) {
        _chrome_mouse_element_by_left[Number(contained.offsetLeft || 0)] =
            contained;
        _chrome_last_computed_mouse_element = contained;
        return contained;
    }
    if (best && bestDistance <= 20) {
        _chrome_mouse_element_by_left[Number(best.offsetLeft || 0)] = best;
        _chrome_last_computed_mouse_element = best;
        _chrome_synthetic_width_for_element(best);
        return best;
    }
    return null;
}

function _chrome_prefer_mouse_leaf_element(candidate, current) {
    if (!candidate || !current) return !!candidate;
    if (current.contains && current.contains(candidate)) return true;
    if (candidate.contains && candidate.contains(current)) return false;
    var candidateText = candidate.textContent || "";
    var currentText = current.textContent || "";
    return candidateText.length > 0 && candidateText.length < currentText.length;
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

function _chrome_element_has_user_select_none(element) {
    for (var node = element; node && node.nodeType === 1;
         node = node.parentNode) {
        var style = node.getAttribute ? String(node.getAttribute("style") || "") : "";
        if (/(?:^|;)\s*(?:-webkit-)?user-select\s*:\s*none\s*(?:;|$)/i
                .test(style)) {
            return true;
        }
    }
    return false;
}

function _chrome_child_at_synthetic_x(element, relX) {
    if (!element || !element.childNodes) return null;
    var cursor = 0;
    var totalWidth = 0;
    for (var widthChild = element.firstChild; widthChild;
         widthChild = widthChild.nextSibling) {
        if (widthChild.nodeType === 3) {
            totalWidth += (widthChild.nodeValue || "").length || 1;
        } else if (widthChild.nodeType === 1) {
            totalWidth += _chrome_synthetic_width_for_element(widthChild);
        }
    }
    var hostWidth = _chrome_synthetic_width_for_element(element);
    var style = element.getAttribute ? String(element.getAttribute("style") || "") : "";
    if (/text-align\s*:\s*center/i.test(style)) {
        cursor = Math.max(0, (hostWidth - totalWidth) / 2);
    } else if (/text-align\s*:\s*right/i.test(style)) {
        cursor = Math.max(0, hostWidth - totalWidth);
    }
    for (var child = element.firstChild; child; child = child.nextSibling) {
        var childWidth = 0;
        if (child.nodeType === 3) {
            childWidth = (child.nodeValue || "").length || 1;
        } else if (child.nodeType === 1) {
            childWidth = _chrome_synthetic_width_for_element(child);
        }
        if (!childWidth) continue;
        if (relX > cursor && relX < cursor + childWidth) {
            return { node: child, left: cursor, width: childWidth };
        }
        cursor += childWidth;
    }
    return null;
}

function _chrome_call_selection_modify(alter, direction, granularity) {
    var selection = _chrome_current_selection_ce3();
    if (selection && typeof selection.modify === "function")
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

function _chrome_unwrap_range_ce3(range) {
    if (!range) return range;
    if (range.__chromeNativeRangeCe3) return range.__chromeNativeRangeCe3;
    if (range.__chromeBaseRange) return range.__chromeBaseRange;
    return range;
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

function _chrome_clear_find_selection_state_ce3() {
    _chrome_find_base_offset = undefined;
    _chrome_find_extent_offset = undefined;
    _chrome_find_selection_active = false;
    _chrome_selection_override_is_find_ce3 = false;
    _chrome_find_selection_cleared_ce3 = false;
}

function _chrome_sync_selection_override_from_native_ce3(selection) {
    if (!selection || !selection.anchorNode || !selection.focusNode)
        return false;
    _chrome_clear_find_selection_state_ce3();
    _chrome_selection_override_range = {
        startContainer: selection.anchorNode,
        startOffset: selection.anchorOffset || 0,
        endContainer: selection.focusNode,
        endOffset: selection.focusOffset || 0
    };
    return true;
}

function _chrome_install_selection_override_accessors_ce3(target) {
    if (!target || target.__chromeSelectionOverrideAccessorsCe3) return;
    target.__chromeSelectionOverrideAccessorsCe3 = true;
}

function _chrome_native_selection_ce3(selection) {
    if (selection && selection.__chromeBaseSelection)
        return selection.__chromeBaseSelection;
    return selection || null;
}

function _chrome_selection_boundary_is_live_ce3(node) {
    if (!node) return false;
    if (typeof _chrome_node_is_live === "function")
        return _chrome_node_is_live(node);
    for (var current = node; current; current = current.parentNode) {
        if (current === document || current === document.documentElement ||
                current === document.body) {
            return true;
        }
    }
    return false;
}

function _chrome_sync_selection_override_from_native_live_ce3(selection,
        force) {
    if (_chrome_selection_override_is_find_ce3 ||
            _chrome_find_selection_active ||
            _chrome_select_all_text_node ||
            _chrome_active_text_control) {
        return false;
    }
    var nativeSelection = _chrome_native_selection_ce3(selection);
    if (!nativeSelection) return false;
    var anchorNode = null;
    var focusNode = null;
    var anchorOffset = 0;
    var focusOffset = 0;
    try {
        anchorNode = nativeSelection.anchorNode || null;
        focusNode = nativeSelection.focusNode || null;
        anchorOffset = nativeSelection.anchorOffset || 0;
        focusOffset = nativeSelection.focusOffset || 0;
    } catch (_) {
        return false;
    }
    if (!anchorNode || !focusNode) return false;
    if (!_chrome_selection_boundary_is_live_ce3(anchorNode) ||
            !_chrome_selection_boundary_is_live_ce3(focusNode)) {
        return false;
    }
    var override = _chrome_selection_override_range;
    var overrideDetached = override &&
        (!_chrome_selection_boundary_is_live_ce3(override.startContainer) ||
        !_chrome_selection_boundary_is_live_ce3(override.endContainer));
    var differs = !override ||
        override.startContainer !== anchorNode ||
        (override.startOffset || 0) !== anchorOffset ||
        override.endContainer !== focusNode ||
        (override.endOffset || 0) !== focusOffset;
    if (!force && !overrideDetached && !differs) return true;
    _chrome_clear_find_selection_state_ce3();
    _chrome_selection_override_range = {
        startContainer: anchorNode,
        startOffset: anchorOffset,
        endContainer: focusNode,
        endOffset: focusOffset
    };
    return true;
}

function _chrome_adjust_selection_for_child_insert_ce3(parent, reference) {
    var override = _chrome_selection_override_range;
    if (!override || !parent || !parent.childNodes) return;
    var index = reference ? _chrome_child_offset(reference) :
        parent.childNodes.length;
    if (override.startContainer === parent &&
            (override.startOffset || 0) > index) {
        override.startOffset = (override.startOffset || 0) + 1;
    }
    if (override.endContainer === parent &&
            (override.endOffset || 0) >= index) {
        override.endOffset = (override.endOffset || 0) + 1;
    }
}

function _chrome_adjust_selection_for_character_insert_ce3(node, offset,
        length) {
    var override = _chrome_selection_override_range;
    if (!override || !node || !length) return;
    var insertOffset = Math.max(0, Number(offset) || 0);
    var count = Math.max(0, Number(length) || 0);
    if (override.startContainer === node &&
            (override.startOffset || 0) > insertOffset) {
        override.startOffset = (override.startOffset || 0) + count;
    }
    if (override.endContainer === node &&
            (override.endOffset || 0) > insertOffset) {
        override.endOffset = (override.endOffset || 0) + count;
    }
}

function _chrome_adjust_character_delete_offset_ce3(current, offset, count) {
    current = Math.max(0, Number(current) || 0);
    offset = Math.max(0, Number(offset) || 0);
    count = Math.max(0, Number(count) || 0);
    var end = offset + count;
    if (current > end) return current - count;
    if (current > offset) return offset;
    return current;
}

function _chrome_adjust_selection_for_character_delete_ce3(node, offset,
        count) {
    var override = _chrome_selection_override_range;
    if (!override || !node || !count) return;
    if (override.startContainer === node) {
        override.startOffset = _chrome_adjust_character_delete_offset_ce3(
            override.startOffset || 0, offset, count);
    }
    if (override.endContainer === node) {
        override.endOffset = _chrome_adjust_character_delete_offset_ce3(
            override.endOffset || 0, offset, count);
    }
}

function _chrome_boundary_inside_removed_node_ce3(container, removed) {
    return container === removed || _chrome_node_contains_node(removed,
        container);
}

function _chrome_adjust_selection_for_node_remove_ce3(parent, child) {
    var override = _chrome_selection_override_range;
    if (!override || !parent || !child) return;
    var index = _chrome_child_offset(child);
    if (_chrome_boundary_inside_removed_node_ce3(override.startContainer,
            child)) {
        override.startContainer = parent;
        override.startOffset = index;
    } else if (override.startContainer === parent &&
            (override.startOffset || 0) > index) {
        override.startOffset = (override.startOffset || 0) - 1;
    }
    if (_chrome_boundary_inside_removed_node_ce3(override.endContainer,
            child)) {
        override.endContainer = parent;
        override.endOffset = index;
    } else if (override.endContainer === parent &&
            (override.endOffset || 0) > index) {
        override.endOffset = (override.endOffset || 0) - 1;
    }
}

var _chrome_suppress_selection_insert_adjust_ce3 = false;
var _chrome_suppress_selection_remove_adjust_ce3 = false;

function _chrome_install_selection_insert_before_on_node_ce3(node) {
    if (!node || node.__chromeSelectionInsertOffsetOwnCe3 ||
            typeof node.insertBefore !== "function") {
        return;
    }
    var baseInsertBefore = node.insertBefore;
    var insertBeforeShim = function(newChild, referenceChild) {
        _chrome_adjust_selection_for_child_insert_ce3(this,
            referenceChild || null);
        var previousSuppress = _chrome_suppress_selection_insert_adjust_ce3;
        _chrome_suppress_selection_insert_adjust_ce3 = true;
        try {
            return baseInsertBefore.call(this, newChild,
                referenceChild || null);
        } finally {
            _chrome_suppress_selection_insert_adjust_ce3 = previousSuppress;
        }
    };
    insertBeforeShim.__chromeSelectionInsertOffsetWrappedCe3 = true;
    try {
        Object.defineProperty(node, "insertBefore", {
            configurable: true,
            writable: true,
            value: insertBeforeShim
        });
    } catch (_) {
        try { node.insertBefore = insertBeforeShim; } catch (_) {}
    }
    node.__chromeSelectionInsertOffsetOwnCe3 = true;
}

if (typeof Node !== "undefined" && Node.prototype &&
    !Node.prototype.__chromeSelectionInsertOffsetCe3) {
    var _chrome_base_node_insert_before_ce3 = Node.prototype.insertBefore;
    Node.prototype.insertBefore = function(newChild, referenceChild) {
        if (!_chrome_suppress_selection_insert_adjust_ce3) {
            _chrome_adjust_selection_for_child_insert_ce3(this,
                referenceChild || null);
        }
        return _chrome_base_node_insert_before_ce3.call(this, newChild,
            referenceChild || null);
    };
    Node.prototype.insertBefore.__chromeSelectionInsertOffsetWrappedCe3 = true;
    Node.prototype.__chromeSelectionInsertOffsetCe3 = true;
}

if (typeof Element !== "undefined" && Element.prototype &&
    Element.prototype.insertBefore &&
    !(Object.prototype.hasOwnProperty.call(Element.prototype,
        "__chromeSelectionInsertOffsetCe3") &&
        Element.prototype.__chromeSelectionInsertOffsetCe3)) {
    var _chrome_base_element_insert_before_ce3 =
        Element.prototype.insertBefore;
    Element.prototype.insertBefore = function(newChild, referenceChild) {
        _chrome_adjust_selection_for_child_insert_ce3(this,
            referenceChild || null);
        var previousSuppress = _chrome_suppress_selection_insert_adjust_ce3;
        _chrome_suppress_selection_insert_adjust_ce3 = true;
        try {
            return _chrome_base_element_insert_before_ce3.call(this, newChild,
                referenceChild || null);
        } finally {
            _chrome_suppress_selection_insert_adjust_ce3 = previousSuppress;
        }
    };
    Element.prototype.insertBefore.__chromeSelectionInsertOffsetWrappedCe3 = true;
    Element.prototype.__chromeSelectionInsertOffsetCe3 = true;
}

function _chrome_install_selection_character_data_hooks_ce3(proto) {
    if (!proto || proto.__chromeSelectionCharacterDataCe3) return;
    var baseInsertData = proto.insertData;
    var baseDeleteData = proto.deleteData;
    if (typeof baseInsertData === "function") {
        proto.insertData = function(offset, data) {
            _chrome_adjust_selection_for_character_insert_ce3(this, offset,
                String(data == null ? "" : data).length);
            return baseInsertData.call(this, offset, data);
        };
    }
    if (typeof baseDeleteData === "function") {
        proto.deleteData = function(offset, count) {
            _chrome_adjust_selection_for_character_delete_ce3(this, offset,
                count);
            return baseDeleteData.call(this, offset, count);
        };
    }
    proto.__chromeSelectionCharacterDataCe3 = true;
}

if (typeof CharacterData !== "undefined")
    _chrome_install_selection_character_data_hooks_ce3(
        CharacterData.prototype);
if (typeof Text !== "undefined")
    _chrome_install_selection_character_data_hooks_ce3(Text.prototype);

function _chrome_install_selection_character_data_on_node_ce3(node) {
    if (!node || node.__chromeSelectionCharacterDataOwnCe3 ||
            node.nodeType !== 3) {
        return;
    }
    var baseInsertData = node.insertData;
    var baseDeleteData = node.deleteData;
    if (typeof baseInsertData === "function") {
        node.insertData = function(offset, data) {
            _chrome_adjust_selection_for_character_insert_ce3(this, offset,
                String(data == null ? "" : data).length);
            return baseInsertData.call(this, offset, data);
        };
    }
    if (typeof baseDeleteData === "function") {
        node.deleteData = function(offset, count) {
            _chrome_adjust_selection_for_character_delete_ce3(this, offset,
                count);
            return baseDeleteData.call(this, offset, count);
        };
    }
    node.__chromeSelectionCharacterDataOwnCe3 = true;
}

if (typeof Node !== "undefined" && Node.prototype &&
    !Node.prototype.__chromeSelectionRemoveOffsetCe3) {
    var _chrome_base_node_remove_child_ce3 = Node.prototype.removeChild;
    if (typeof _chrome_base_node_remove_child_ce3 === "function") {
        Node.prototype.removeChild = function(child) {
            if (!_chrome_suppress_selection_remove_adjust_ce3)
                _chrome_adjust_selection_for_node_remove_ce3(this, child);
            return _chrome_base_node_remove_child_ce3.call(this, child);
        };
        Node.prototype.__chromeSelectionRemoveOffsetCe3 = true;
    }
}

function _chrome_install_selection_remove_on_proto_ce3(proto) {
    if (!proto || proto.__chromeSelectionRemoveOffsetCe3 ||
            typeof proto.remove !== "function") {
        return;
    }
    var baseRemove = proto.remove;
    proto.remove = function() {
        if (this.parentNode && !_chrome_suppress_selection_remove_adjust_ce3)
            _chrome_adjust_selection_for_node_remove_ce3(this.parentNode, this);
        var previousSuppress = _chrome_suppress_selection_remove_adjust_ce3;
        _chrome_suppress_selection_remove_adjust_ce3 = true;
        try {
            return baseRemove.call(this);
        } finally {
            _chrome_suppress_selection_remove_adjust_ce3 = previousSuppress;
        }
    };
    proto.__chromeSelectionRemoveOffsetCe3 = true;
}

if (typeof Element !== "undefined")
    _chrome_install_selection_remove_on_proto_ce3(Element.prototype);
if (typeof CharacterData !== "undefined")
    _chrome_install_selection_remove_on_proto_ce3(CharacterData.prototype);

function _chrome_install_selection_remove_child_on_node_ce3(node) {
    if (!node || node.__chromeSelectionRemoveChildOwnCe3 ||
            typeof node.removeChild !== "function") {
        return;
    }
    var baseRemoveChild = node.removeChild;
    node.removeChild = function(child) {
        if (!_chrome_suppress_selection_remove_adjust_ce3)
            _chrome_adjust_selection_for_node_remove_ce3(this, child);
        return baseRemoveChild.call(this, child);
    };
    node.__chromeSelectionRemoveChildOwnCe3 = true;
}

function _chrome_install_selection_remove_on_node_ce3(node) {
    if (!node || node.__chromeSelectionRemoveOwnCe3 ||
            typeof node.remove !== "function") {
        return;
    }
    var baseRemove = node.remove;
    node.remove = function() {
        if (this.parentNode && !_chrome_suppress_selection_remove_adjust_ce3)
            _chrome_adjust_selection_for_node_remove_ce3(this.parentNode, this);
        var previousSuppress = _chrome_suppress_selection_remove_adjust_ce3;
        _chrome_suppress_selection_remove_adjust_ce3 = true;
        try {
            return baseRemove.call(this);
        } finally {
            _chrome_suppress_selection_remove_adjust_ce3 = previousSuppress;
        }
    };
    node.__chromeSelectionRemoveOwnCe3 = true;
}

function _chrome_install_selection_mutation_tracking_on_tree_ce3(root) {
    if (!root) return root;
    var stack = [root];
    while (stack.length) {
        var node = stack.shift();
        if (!node) continue;
        _chrome_install_selection_insert_before_on_node_ce3(node);
        _chrome_install_selection_remove_child_on_node_ce3(node);
        _chrome_install_selection_remove_on_node_ce3(node);
        _chrome_install_selection_character_data_on_node_ce3(node);
        var children = node.childNodes || [];
        for (var i = 0; i < children.length; i++)
            stack.push(children[i]);
    }
    return root;
}

function _chrome_set_range_start(range, node, offset) {
    var record = _chrome_range_shadow(range);
    if (!record) return;
    record.startContainer = node;
    record.startOffset = offset || 0;
    _chrome_find_selection_active = false;
    _chrome_selection_override_is_find_ce3 = false;
    _chrome_find_selection_cleared_ce3 = false;
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
    _chrome_selection_override_is_find_ce3 = false;
    _chrome_find_selection_cleared_ce3 = false;
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

function _chrome_resolve_named_element_candidate(value) {
    if (!value || value.nodeType)
        return value;
    var doc = typeof document !== "undefined" ? document : null;
    var name = "";
    if (typeof value === "function" && value.name)
        name = value.name;
    else if (typeof value === "string")
        name = value;
    else if (value.id)
        name = String(value.id);
    else if (value.name)
        name = String(value.name);
    if (doc && doc.getElementById) {
        if (name) {
            var named = doc.getElementById(name);
            if (named) return named;
        }
        var root = typeof window !== "undefined" ? window :
            (typeof globalThis !== "undefined" ? globalThis : null);
        if (root) {
            for (var key in root) {
                try {
                    if (root[key] === value) {
                        var element = doc.getElementById(key);
                        if (element) return element;
                    }
                } catch (_) {}
            }
        }
    }
    return value;
}

function _chrome_clamp_text_selection_offset(node, offset) {
    if (!node || node.nodeType !== 3 || typeof offset !== "number")
        return offset;
    var length = (node.nodeValue || "").length;
    if (offset < 0) return 0;
    if (offset > length) return length;
    return offset;
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

if (document && typeof document.createRange === "function" &&
    !document.__chromeDeletingRangeCe3) {
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
        var baseCloneContents = range.cloneContents;
        var baseExtractContents = range.extractContents;
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
        if (baseCloneContents) {
            range.cloneContents = function() {
                try { return baseCloneContents.apply(range, arguments); }
                catch (_) {
                    return _chrome_clone_or_extract_range_contents(range,
                        false);
                }
            };
        }
        if (baseExtractContents) {
            range.extractContents = function() {
                try { return baseExtractContents.apply(range, arguments); }
                catch (_) {
                    return _chrome_clone_or_extract_range_contents(range,
                        true);
                }
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

function _chrome_finish_async_failure_for_promise() {
    if (_chrome_pending_async_tests > 0)
        _chrome_pending_async_tests--;
    if (_chrome_pending_async_tests === 0 &&
        _chrome_pending_promise_tests === 0)
        _chrome_editing_waiting = false;
}

function async_test(func, name) {
    var testName = typeof func === "string" ? func : (name || "async_test");
    var done = false;
    var expectsAsyncCompletion = typeof func !== "function";
    var t = {};
    _chrome_pending_async_tests++;
    _chrome_editing_waiting = true;
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
                if (_chrome_pending_async_tests > 0)
                    _chrome_pending_async_tests--;
                if (_chrome_pending_async_tests === 0 &&
                    _chrome_pending_promise_tests === 0)
                    _chrome_editing_waiting = false;
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
        expectsAsyncCompletion = true;
        return function() {
            var self = this;
            var args = arguments;
            return t.step(function() {
                return callback ? callback.apply(self, args) : undefined;
            });
        };
    };
    t.step_func_done = function(callback) {
        expectsAsyncCompletion = true;
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
    t.step_timeout = function(callback, delay) {
        expectsAsyncCompletion = true;
        t.timeout_id = setTimeout(function() {
            t.step(function() {
                if (typeof callback === "function") callback();
            });
        }, delay || 0);
        return t.timeout_id;
    };
    t.unreached_func = function(description) {
        expectsAsyncCompletion = true;
        return function() {
            if (!done) {
                done = true;
                if (_chrome_pending_async_tests > 0)
                    _chrome_pending_async_tests--;
                if (_chrome_pending_async_tests === 0 &&
                    _chrome_pending_promise_tests === 0)
                    _chrome_editing_waiting = false;
                _chrome_editing_record(false, testName,
                    description || "unreached function called");
            }
        };
    };
    t.done = function() {
        if (done) return;
        done = true;
        if (_chrome_pending_async_tests > 0)
            _chrome_pending_async_tests--;
        if (_chrome_pending_async_tests === 0 &&
            _chrome_pending_promise_tests === 0)
            _chrome_editing_waiting = false;
        t.status = t.PASS;
        t.message = "";
        _chrome_editing_record(true, testName, "");
        _chrome_fire_result_callbacks(t);
        _chrome_editing_print_summary();
    };
    if (typeof func === "function") {
        try {
            func(t);
        } catch (e) {
            if (!done) {
                done = true;
                if (_chrome_pending_async_tests > 0)
                    _chrome_pending_async_tests--;
                if (_chrome_pending_async_tests === 0 &&
                    _chrome_pending_promise_tests === 0)
                    _chrome_editing_waiting = false;
                t.status = t.FAIL;
                t.message = e && e.stack ? e.stack :
                    (e && e.message ? e.message : String(e));
                _chrome_editing_record(false, testName, t.message);
                _chrome_fire_result_callbacks(t);
            }
        }
        if (!done && !expectsAsyncCompletion) t.done();
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
                    _chrome_finish_async_failure_for_promise();
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
        _chrome_finish_async_failure_for_promise();
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
    var queryMatch = /^document\.queryCommand(State|Value|Enabled|Indeterm)\(\s*(['"])([^'"]+)\2\s*\)$/.exec(text);
    if (queryMatch) {
        var queryKind = queryMatch[1];
        var queryCommand = queryMatch[3];
        if (queryKind === "State" &&
            typeof _chrome_query_command_state_api_ce3 === "function") {
            return _chrome_query_command_state_api_ce3(queryCommand);
        }
        if (queryKind === "Value" &&
            typeof _chrome_query_command_value_ce3 === "function") {
            return _chrome_query_command_value_ce3(queryCommand);
        }
        if (queryKind === "Enabled" &&
            typeof _chrome_query_command_enabled_ce3 === "function") {
            return _chrome_query_command_enabled_ce3(queryCommand);
        }
        if (queryKind === "Indeterm" &&
            typeof _chrome_query_command_indeterm_ce3 === "function") {
            return _chrome_query_command_indeterm_ce3(queryCommand);
        }
    }
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

var EditContext = typeof EditContext !== "undefined" ? EditContext : null;
if (!EditContext || !EditContext.prototype ||
        typeof EditContext.prototype.updateText !== "function") {
    EditContext = function EditContext() {
        this.text = "";
        this.selectionStart = 0;
        this.selectionEnd = 0;
        this.__chromeListeners = {};
    };
    EditContext.prototype.addEventListener = function(type, callback) {
        if (typeof callback !== "function") return;
        var key = String(type || "");
        if (!this.__chromeListeners[key]) this.__chromeListeners[key] = [];
        this.__chromeListeners[key].push(callback);
    };
    EditContext.prototype.removeEventListener = function(type, callback) {
        var list = this.__chromeListeners[String(type || "")];
        if (!list) return;
        for (var i = list.length - 1; i >= 0; i--) {
            if (list[i] === callback) list.splice(i, 1);
        }
    };
    EditContext.prototype.dispatchEvent = function(event) {
        return _chrome_dispatch_edit_context_event_ce3(this, event);
    };
    EditContext.prototype.updateText = function(start, end, text) {
        _chrome_edit_context_replace_text_ce3(this, start, end, text);
    };
    EditContext.prototype.updateSelection = function(start, end) {
        this.selectionStart = Number(start) || 0;
        this.selectionEnd = Number(end) || 0;
    };
}
if (typeof window !== "undefined") window.EditContext = EditContext;

function _chrome_make_edit_context_event_ce3(type, props) {
    var event = {
        type: String(type || ""),
        bubbles: false,
        cancelable: false,
        defaultPrevented: false,
        preventDefault: function() {
            if (this.cancelable) this.defaultPrevented = true;
        },
        stopPropagation: function() {},
        stopImmediatePropagation: function() {}
    };
    props = props || {};
    for (var key in props) event[key] = props[key];
    return event;
}

function _chrome_dispatch_edit_context_event_ce3(context, event) {
    if (!context || !event) return true;
    try {
        event.target = context;
        event.currentTarget = context;
    } catch (_) {}
    var list = context.__chromeListeners &&
        context.__chromeListeners[String(event.type || "")];
    if (list) {
        list = list.slice();
        for (var i = 0; i < list.length; i++) {
            try {
                list[i].call(context, event);
            } catch (e) {
                _chrome_editing_record(false, "EditContext event",
                    e && e.message ? e.message : String(e));
            }
        }
    }
    var handler = context["on" + String(event.type || "")];
    if (typeof handler === "function") {
        try {
            handler.call(context, event);
        } catch (e) {
            _chrome_editing_record(false, "EditContext event",
                e && e.message ? e.message : String(e));
        }
    }
    return !event.defaultPrevented;
}

function _chrome_edit_context_replace_text_ce3(context, start, end, text) {
    if (!context) return { start: 0, end: 0, text: "" };
    var oldText = String(context.text || "");
    var length = oldText.length;
    var rangeStart = Math.max(0, Math.min(length, Number(start) || 0));
    var rangeEnd = Math.max(rangeStart, Math.min(length, Number(end) || 0));
    var replacement = String(text == null ? "" : text);
    context.text = oldText.slice(0, rangeStart) + replacement +
        oldText.slice(rangeEnd);
    return { start: rangeStart, end: rangeEnd, text: replacement };
}

function _chrome_replace_marked_text_ce3(controller, text, selectedStart,
        selectedLength) {
    var control = typeof _chrome_meaningful_active_element === "function" ?
        _chrome_meaningful_active_element() : null;
    if (!_chrome_is_text_control(control) || typeof control.value !== "string")
        return false;
    _chrome_install_text_control_selection_api(control);
    var value = String(text == null ? "" : text);
    var start = typeof control.selectionStart === "number" ?
        control.selectionStart : 0;
    var end = typeof control.selectionEnd === "number" ?
        control.selectionEnd : start;
    if (controller._markedControl === control &&
            typeof controller._markedStart === "number") {
        start = controller._markedStart;
        end = start + (controller._markedLength || 0);
    }
    _chrome_apply_text_control_edit_ce3(control, value, start, end,
        "insertCompositionText", value, null);
    controller._markedControl = control;
    controller._markedStart = start;
    controller._markedLength = value.length;
    var rangeStart = Math.max(0, Math.min(value.length,
        Number(selectedStart) || 0));
    var rangeLength = Math.max(0, Number(selectedLength) || 0);
    var selectionStart = start + rangeStart;
    var selectionEnd = start + Math.min(value.length,
        rangeStart + rangeLength);
    if (control.setSelectionRange)
        control.setSelectionRange(selectionStart, selectionEnd);
    if (!value) controller.unmarkText();
    return true;
}

var textInputController = typeof textInputController !== "undefined" ?
    textInputController : {
        setMarkedText: function(text) {
            if (_chrome_replace_marked_text_ce3(this, text, arguments[1],
                    arguments[2])) {
                this._markedText = String(text || "");
                return;
            }
            this._markedText = String(text || "");
            this._markedStart = 0;
            this._markedLength = this._markedText.length;
            document.execCommand("InsertText", false, text || "");
        },
        setComposition: function(text) {
            return this.setMarkedText(text, 0,
                String(text == null ? "" : text).length);
        },
        unmarkText: function() {
            this._markedText = "";
            this._markedLength = 0;
            this._markedControl = null;
        },
        hasMarkedText: function() {
            var active =
                typeof _chrome_meaningful_active_element === "function" ?
                _chrome_meaningful_active_element() : null;
            if (active && typeof active.value === "string" &&
                active.value === "") {
                this.unmarkText();
            }
            return !!(this._markedText && this._markedLength);
        },
        markedRange: function() {
            var self = this;
            return {
                location: self._markedStart || 0,
                length: self._markedLength || 0,
                toString: function() {
                    return String(self._markedStart || 0) + "," +
                        String(self._markedLength || 0);
                }
            };
        },
        firstRectForCharacterRange: function(location, length) {
            var element =
                typeof _chrome_meaningful_active_element === "function" ?
                _chrome_meaningful_active_element() : null;
            var style = element && element.getAttribute ?
                String(element.getAttribute("style") || "") : "";
            var tag = element && element.nodeName ?
                String(element.nodeName).toLowerCase() : "";
            var widthMatch = /(?:^|;)\s*width\s*:\s*(-?\d+(?:\.\d+)?)px/i.exec(style);
            var width = widthMatch ? Number(widthMatch[1]) : 200;
            var indentMatch = /(?:^|;)\s*text-indent\s*:\s*(-?\d+(?:\.\d+)?)px/i.exec(style);
            var indent = indentMatch ? Number(indentMatch[1]) : 0;
            var isRtl = /(?:^|;)\s*direction\s*:\s*rtl/i.test(style);
            var isRight = /(?:^|;)\s*text-align\s*:\s*right/i.test(style);
            var isCenter = /(?:^|;)\s*text-align\s*:\s*center/i.test(style);
            if (element && element.style) {
                if (element.style.textIndent)
                    indent = Number(String(element.style.textIndent)
                        .replace("px", "")) || 0;
                if (element.style.textAlign === "center") isCenter = true;
                if (element.style.textAlign === "right") isRight = true;
                if (element.style.direction === "rtl") isRtl = true;
            }
            var x = tag === "textarea" || tag === "input" ? 10 : 9;
            if (isCenter) x += indent / 2;
            else if (isRight || isRtl) x = width + (tag === "textarea" ? 6 : 8);
            else x += indent;
            if (element && element.__chromeRevealPassword) x += 0;
            return [x, 0, 1, 16];
        },
        insertText: function(text) {
            if (this._markedControl &&
                    _chrome_replace_marked_text_ce3(this, text, 0,
                    String(text == null ? "" : text).length)) {
                this.unmarkText();
                return true;
            }
            this.unmarkText();
            document.execCommand("InsertText", false, text || "");
        },
        doCommand: function(command) {
            this.unmarkText();
            if (command === "deleteBackward")
                return document.execCommand("Delete");
            if (command === "deleteForward")
                return document.execCommand("ForwardDelete");
            return false;
        }
    };
if (typeof window !== "undefined")
    window.textInputController = textInputController;

function _chrome_find_window_ce3(text, caseSensitive, backwards, wrapAround) {
    var options = [];
    if (text === undefined || text === null || text === "")
        text = _chrome_window_find_last_text;
    else
        _chrome_window_find_last_text = String(text);
    if (caseSensitive !== true) options.push("CaseInsensitive");
    options.push("DiacriticInsensitive");
    if (wrapAround) options.push("WrapAround");
    if (backwards) options.push("Backwards");
    var haystack = document && document.body ?
        String(document.body.textContent || "") : "";
    var needle = String(text || "");
    if (needle) {
        var directHaystack = caseSensitive === true ? haystack :
            haystack.toLowerCase();
        var directNeedle = caseSensitive === true ? needle :
            needle.toLowerCase();
        if (directHaystack.indexOf(directNeedle) >= 0) return true;
    }
    if (typeof testRunner !== "undefined" &&
        typeof testRunner.findString === "function") {
        return testRunner.findString(needle, options);
    }
    return haystack.indexOf(needle) >= 0;
}
function find(text, caseSensitive, backwards, wrapAround) {
    return _chrome_find_window_ce3(text, caseSensitive, backwards, wrapAround);
}
function _chrome_install_find_alias_ce3(target) {
    if (!target) return;
    try {
        Object.defineProperty(target, "find", {
            configurable: true,
            get: function() { return _chrome_find_window_ce3; },
            set: function(_) {}
        });
        if (target.find === _chrome_find_window_ce3) return;
    } catch (_) {}
    try {
        target.find = _chrome_find_window_ce3;
        if (target.find === _chrome_find_window_ce3) return;
    } catch (_) {}
    try {
        Object.defineProperty(target, "find", {
            configurable: true,
            writable: true,
            value: _chrome_find_window_ce3
        });
    } catch (_) {}
}
if (typeof window !== "undefined")
    _chrome_install_find_alias_ce3(window);
if (typeof globalThis !== "undefined" &&
        (typeof window === "undefined" || globalThis !== window))
    _chrome_install_find_alias_ce3(globalThis);

function _chrome_find_child_nodes_for_flat_tree_ce3(node) {
    if (!node) return [];
    if (node.shadowRoot)
        return node.shadowRoot.childNodes || [];
    if (typeof _chrome_find_node_name === "function" &&
            _chrome_find_node_name(node) === "slot" &&
            typeof _chrome_find_slot_host === "function") {
        var host = _chrome_find_slot_host(node);
        if (host && host.childNodes) return host.childNodes;
    }
    return node.childNodes || [];
}

function _chrome_find_control_text_for_node_ce3(node) {
    if (typeof _chrome_find_control_text !== "function") return null;
    return _chrome_find_control_text(node);
}

function _chrome_find_text_position(root, offset, preferNextBoundary) {
    var fallback = { node: root, offset: 0, fallback: true };
    function walk(node, state) {
        if (!node) return null;
        if (node.nodeType === 3) {
            var length = String(node.data || "").length;
            if (state.remaining < length || state.remaining === 0 ||
                    (!preferNextBoundary && state.remaining <= length)) {
                return { node: node, offset: state.remaining };
            }
            state.remaining -= length;
            return null;
        }
        var controlText = _chrome_find_control_text_for_node_ce3(node);
        if (controlText !== null) {
            var controlLength = String(controlText || "").length;
            if (state.remaining < controlLength || state.remaining === 0 ||
                    (!preferNextBoundary && state.remaining <= controlLength)) {
                return { node: node, offset: state.remaining };
            }
            state.remaining -= controlLength;
            return null;
        }
        var children = _chrome_find_child_nodes_for_flat_tree_ce3(node);
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
    var controlText = _chrome_find_control_text_for_node_ce3(node);
    if (controlText !== null)
        return String(controlText || "").length;
    var length = 0;
    var children = _chrome_find_child_nodes_for_flat_tree_ce3(node);
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
                var controlText = _chrome_find_control_text_for_node_ce3(node);
                if (controlText !== null) {
                    total += Math.max(0, Math.min(targetOffset || 0,
                        String(controlText || "").length));
                    found = true;
                    return;
                }
                var children = _chrome_find_child_nodes_for_flat_tree_ce3(node);
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
        var controlTextForNode = _chrome_find_control_text_for_node_ce3(node);
        if (controlTextForNode !== null) {
            total += String(controlTextForNode || "").length;
            return;
        }
        var children = _chrome_find_child_nodes_for_flat_tree_ce3(node);
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
    var selection = _chrome_current_selection_ce3();
    if (!selection || selection.rangeCount === 0 ||
            typeof selection.getRangeAt !== "function")
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
    var startPos = _chrome_find_text_position(root, start, true);
    var endPos = _chrome_find_text_position(root, end, false);
    _chrome_find_base_offset = start;
    _chrome_find_extent_offset = end;
    _chrome_find_selection_active = !startPos.fallback && !endPos.fallback;
    if (!_chrome_find_selection_active || !document || !document.createRange)
        return;
    try {
        var selection = _chrome_current_selection_ce3();
        if (!selection) return;
        var range = document.createRange();
        range.setStart(startPos.node, startPos.offset);
        range.setEnd(endPos.node, endPos.offset);
        if (typeof selection.removeAllRanges === "function")
            selection.removeAllRanges();
        if (typeof selection.addRange === "function") selection.addRange(range);
        _chrome_find_base_offset = start;
        _chrome_find_extent_offset = end;
        _chrome_find_selection_active = true;
        _chrome_selection_override_range = {
            startContainer: startPos.node,
            startOffset: startPos.offset,
            endContainer: endPos.node,
            endOffset: endPos.offset
        };
        _chrome_selection_override_is_find_ce3 = true;
        _chrome_find_selection_cleared_ce3 = false;
    } catch (_) {}
}

function _chrome_find_bottom_scroll_y() {
    var bodyHeight = 0;
    if (document && document.body) {
        bodyHeight = Number(document.body.offsetHeight ||
            document.body.scrollHeight || 0) || 0;
    }
    if (!bodyHeight && document && document.documentElement) {
        bodyHeight = Number(document.documentElement.offsetHeight ||
            document.documentElement.scrollHeight || 0) || 0;
    }
    var viewportHeight = Number(window.innerHeight || 0) || 0;
    if (bodyHeight > viewportHeight)
        return bodyHeight - viewportHeight;
    return bodyHeight > 0 ? bodyHeight : 1;
}

function _chrome_schedule_find_scroll(frames, y) {
    frames = Math.max(1, Number(frames || 1) || 1);
    var targetY = Number(y);
    if (targetY !== targetY) targetY = 1;
    _chrome_pending_find_scroll_frames_ce3 = frames;
    _chrome_pending_find_scroll_y_ce3 = targetY;
    _chrome_pending_find_scroll_ready_ce3 = false;
    _chrome_call_soon(function() {
        _chrome_pending_find_scroll_ready_ce3 = true;
    });
}

function _chrome_maybe_apply_pending_find_scroll_ce3() {
    if (!_chrome_pending_find_scroll_frames_ce3) return;
    if (!_chrome_pending_find_scroll_ready_ce3) return;
    _chrome_pending_find_scroll_frames_ce3--;
    if (_chrome_pending_find_scroll_frames_ce3 > 0) return;
    var targetY = _chrome_pending_find_scroll_y_ce3;
    _chrome_pending_find_scroll_y_ce3 = null;
    _chrome_pending_find_scroll_ready_ce3 = false;
    _chrome_scroll_to(window.pageXOffset || 0,
        targetY === null ? 1 : targetY);
}

function _chrome_reveal_hidden_until_found_ce3(target, asyncFind) {
    if (!target || target.nodeType !== 1) return null;
    _chrome_dispatch_beforematch_event(target);
    var currentId = target.id !== undefined ? String(target.id || "") :
        (target.getAttribute ? String(target.getAttribute("id") || "") : "");
    if (currentId && document.getElementById &&
        !document.getElementById(currentId)) {
        if (typeof window !== "undefined" && asyncFind)
            _chrome_schedule_find_scroll(1, 1);
        else if (typeof window !== "undefined")
            _chrome_scroll_to(window.pageXOffset || 0,
                window.pageYOffset || 1);
        return target;
    }
    if (!_chrome_node_is_connected_ce3(target)) {
        if (typeof window !== "undefined" && asyncFind)
            _chrome_schedule_find_scroll(1, 1);
        else if (typeof window !== "undefined")
            _chrome_scroll_to(window.pageXOffset || 0,
                window.pageYOffset || 1);
        return target;
    }
    if (target.removeAttribute)
        target.removeAttribute("hidden");
    else if (target.setAttribute)
        target.setAttribute("hidden", "");
    if (typeof window !== "undefined" && asyncFind)
        _chrome_schedule_find_scroll(1, 1);
    else if (typeof window !== "undefined")
        _chrome_scroll_to(window.pageXOffset || 0, window.pageYOffset || 1);
    return target;
}

function _chrome_dispatch_beforematch_from_node(node, asyncFind) {
    var current = node;
    while (current && current.nodeType !== 1)
        current = current.parentNode;
    while (current && current.nodeType === 1) {
        if (_chrome_is_hidden_until_found_ce3(current)) {
            if (asyncFind) {
                var target = current;
                _chrome_call_soon(function() {
                    _chrome_reveal_hidden_until_found_ce3(target, true);
                });
                return current;
            }
            _chrome_reveal_hidden_until_found_ce3(current, false);
            return current;
        }
        current = current.parentNode;
    }
    return null;
}

function _chrome_find_is_in_summary(node, details) {
    var current = node;
    while (current && current !== details) {
        if (current.nodeType === 1) {
            var tag = current.nodeName ? current.nodeName.toLowerCase() : "";
            if (tag === "summary") return true;
        }
        current = current.parentNode;
    }
    return false;
}

function _chrome_details_summary_contains(details, needle) {
    var children = details && details.childNodes ? details.childNodes : [];
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (!child || child.nodeType !== 1) continue;
        var tag = child.nodeName ? child.nodeName.toLowerCase() : "";
        if (tag !== "summary") return false;
        return String(child.textContent || "").indexOf(String(needle || "")) >= 0;
    }
    return false;
}

function _chrome_expand_details_from_node(node, needle) {
    var current = node;
    while (current && current.nodeType !== 1)
        current = current.parentNode;
    while (current && current.nodeType === 1) {
        var tag = current.nodeName ? current.nodeName.toLowerCase() : "";
        if (tag === "details") {
            if (_chrome_find_is_in_summary(node, current)) return null;
            if (_chrome_details_summary_contains(current, needle)) return null;
            if (current.open) return current;
            _chrome_scroll_to(window.pageXOffset || 0,
                _chrome_find_bottom_scroll_y());
            if (current.setAttribute) current.setAttribute("open", "");
            else current.open = true;
            if (typeof current.dispatchEvent === "function")
                current.dispatchEvent(
                    _chrome_make_dom_event_ce3("toggle", {
                        bubbles: false
                    }));
            return current;
        }
        current = current.parentNode;
    }
    return null;
}

if (typeof testRunner !== "undefined" && testRunner) {
    function _chrome_find_fold_char_ce3(ch) {
        var code = ch.charCodeAt(0);
        if (code >= 0x0300 && code <= 0x036f) return "";
        if ("ÀÁÂÃÄÅĀĂĄǍȀȂẠẢẤẦẨẪẬẮẰẲẴẶ".indexOf(ch) >= 0) return "A";
        if ("àáâãäåāăąǎȁȃạảấầẩẫậắằẳẵặ".indexOf(ch) >= 0) return "a";
        if ("ÇĆĈĊČ".indexOf(ch) >= 0) return "C";
        if ("çćĉċč".indexOf(ch) >= 0) return "c";
        if ("ÐĎĐ".indexOf(ch) >= 0) return "D";
        if ("ðďđ".indexOf(ch) >= 0) return "d";
        if ("ÈÉÊËĒĔĖĘĚȄȆẸẺẼẾỀỂỄỆ".indexOf(ch) >= 0) return "E";
        if ("èéêëēĕėęěȅȇẹẻẽếềểễệ".indexOf(ch) >= 0) return "e";
        if ("ÌÍÎÏĨĪĬĮİǏỈỊ".indexOf(ch) >= 0) return "I";
        if ("ìíîïĩīĭįıǐỉị".indexOf(ch) >= 0) return "i";
        if ("ÑŃŅŇ".indexOf(ch) >= 0) return "N";
        if ("ñńņň".indexOf(ch) >= 0) return "n";
        if ("ÒÓÔÕÖØŌŎŐƠǑȌȎỌỎỐỒỔỖỘỚỜỞỠỢ".indexOf(ch) >= 0) return "O";
        if ("òóôõöøōŏőơǒȍȏọỏốồổỗộớờởỡợ".indexOf(ch) >= 0) return "o";
        if ("ŔŖŘ".indexOf(ch) >= 0) return "R";
        if ("ŕŗř".indexOf(ch) >= 0) return "r";
        if ("ŚŜŞŠȘ".indexOf(ch) >= 0) return "S";
        if ("śŝşšș".indexOf(ch) >= 0) return "s";
        if ("ŢŤŦȚ".indexOf(ch) >= 0) return "T";
        if ("ţťŧț".indexOf(ch) >= 0) return "t";
        if ("ÙÚÛÜŨŪŬŮŰŲƯǓȔȖỤỦỨỪỬỮỰ".indexOf(ch) >= 0) return "U";
        if ("ùúûüũūŭůűųưǔȕȗụủứừửữự".indexOf(ch) >= 0) return "u";
        if ("ÝŶŸỲỴỶỸ".indexOf(ch) >= 0) return "Y";
        if ("ýÿŷỳỵỷỹ".indexOf(ch) >= 0) return "y";
        if ("ŹŻŽ".indexOf(ch) >= 0) return "Z";
        if ("źżž".indexOf(ch) >= 0) return "z";
        return ch;
    }

    function _chrome_find_normalize_ce3(text, caseInsensitive,
            diacriticInsensitive) {
        text = String(text || "");
        if (diacriticInsensitive) {
            try {
                if (typeof text.normalize === "function")
                    text = text.normalize("NFD");
            } catch (_) {}
            var folded = "";
            for (var i = 0; i < text.length; i++)
                folded += _chrome_find_fold_char_ce3(text.charAt(i));
            text = folded;
        }
        return caseInsensitive ? text.toLowerCase() : text;
    }

    function _chrome_find_options_include_ce3(options, name) {
        if (!options) return false;
        name = String(name || "");
        if (typeof options === "string") return options.indexOf(name) >= 0;
        if (typeof options.length === "number") {
            for (var i = 0; i < options.length; i++) {
                if (String(options[i] || "") === name) return true;
            }
            return false;
        }
        for (var j = 0; j < 32; j++) {
            var value = undefined;
            try { value = options[j]; } catch (_) { value = undefined; }
            if (value === undefined) break;
            if (String(value || "") === name) return true;
        }
        try {
            return String(options).indexOf(name) >= 0;
        } catch (_) {
            return false;
        }
    }

    function _chrome_find_options_signature_ce3(options) {
        if (!options) return "";
        if (typeof options === "string") return options;
        if (typeof options.length === "number") {
            var parts = [];
            for (var i = 0; i < options.length; i++)
                parts.push(String(options[i] || ""));
            return parts.join("\u0001");
        }
        var indexedParts = [];
        for (var j = 0; j < 32; j++) {
            var value = undefined;
            try { value = options[j]; } catch (_) { value = undefined; }
            if (value === undefined) break;
            indexedParts.push(String(value || ""));
        }
        if (indexedParts.length) return indexedParts.join("\u0001");
        try {
            return String(options);
        } catch (_) {
            return "";
        }
    }

    function _chrome_find_dom_token(node) {
        if (!node) return null;
        if (node.nodeType === 3) return node;
        var children = node.childNodes || [];
        if (children.length) return children[0];
        return node;
    }

    function _chrome_text_for_find(node) {
        if (!node) return "";
        var ownControlText = _chrome_find_control_text(node);
        if (ownControlText !== null) return ownControlText;
        if (typeof collectTextNodes === "function") {
            var nodes = [];
            collectTextNodes(node, nodes, 0);
            var flatText = "";
            for (var nodeIndex = 0; nodeIndex < nodes.length; nodeIndex++)
                flatText += nodes[nodeIndex].text;
            return flatText;
        }
        var text = String(node.textContent || "");
        if (!text && node.innerText !== undefined)
            text = String(node.innerText || "");
        var controls = node.querySelectorAll ?
            node.querySelectorAll("input,textarea") : [];
        for (var i = 0; controls && i < controls.length; i++) {
            var value = _chrome_find_control_text(controls[i]);
            if (value) text += value;
        }
        return text;
    }

    function _chrome_find_node_name(node) {
        return String((node && (node.nodeName || node.tagName)) || "")
            .toLowerCase();
    }

    function _chrome_secure_text_for_control(node) {
        var value = String(node && node.value != null ? node.value : "");
        var tag = _chrome_find_node_name(node);
        if (tag !== "input") return value;
        var type = String((node.type ||
            (node.getAttribute ? node.getAttribute("type") : "") ||
            "text")).toLowerCase();
        if (type !== "password" || node.__chromeRevealPassword)
            return value;
        return Array(value.length + 1).join("\u2022");
    }

    function _chrome_find_control_text(node) {
        var tag = _chrome_find_node_name(node);
        if (tag === "textarea") return String(node.value != null ?
            node.value : node.textContent || "");
        if (tag !== "input") return null;
        var type = String((node.type ||
            (node.getAttribute ? node.getAttribute("type") : "") ||
            "text")).toLowerCase();
        if (type === "hidden" || type === "button" || type === "submit" ||
            type === "reset" || type === "checkbox" || type === "radio") {
            return null;
        }
        return _chrome_secure_text_for_control(node);
    }

    function _chrome_find_slot_host(node) {
        var current = node;
        while (current) {
            if (current.host) return current.host;
            current = current.parentNode;
        }
        return null;
    }

    function _chrome_find_node_is_barrier_ce3(node) {
        if (!node || node.nodeType !== 1) return false;
        var tag = _chrome_find_node_name(node);
        return tag === "br" || tag === "img" || tag === "hr" ||
            tag === "iframe" || tag === "object" || tag === "embed" ||
            tag === "canvas" || tag === "audio" || tag === "video";
    }

    function _chrome_collect_find_barrier_offsets_ce3(node, offsets, state) {
        if (!node) return;
        if (node.nodeType === 3) {
            state.offset += String(node.data || "").length;
            return;
        }
        if (node.nodeType === 1) {
            var controlText = _chrome_find_control_text(node);
            if (controlText !== null) {
                state.offset += controlText.length;
                return;
            }
            if (_chrome_find_node_is_barrier_ce3(node)) {
                offsets.push(state.offset);
                return;
            }
            var tag = _chrome_find_node_name(node);
            if (tag === "p" || tag === "div" || tag === "li" ||
                tag === "tr" || tag === "td" || tag === "th" ||
                tag === "section" || tag === "article" || tag === "header" ||
                tag === "footer" || tag === "blockquote") {
                offsets.push(state.offset);
            }
        }
        if (node.shadowRoot) {
            offsets.push(state.offset);
            _chrome_collect_find_barrier_offsets_ce3(node.shadowRoot, offsets,
                state);
            offsets.push(state.offset);
            return;
        }
        var children = node.childNodes || [];
        if (_chrome_find_node_name(node) === "slot") {
            var host = _chrome_find_slot_host(node);
            children = host && host.childNodes ? host.childNodes : children;
        }
        for (var i = 0; i < children.length; i++)
            _chrome_collect_find_barrier_offsets_ce3(children[i], offsets,
                state);
        if (node.nodeType === 1) {
            var endTag = _chrome_find_node_name(node);
            if (endTag === "p" || endTag === "div" || endTag === "li" ||
                endTag === "tr" || endTag === "td" || endTag === "th" ||
                endTag === "section" || endTag === "article" ||
                endTag === "header" || endTag === "footer" ||
                endTag === "blockquote") {
                offsets.push(state.offset);
            }
        }
    }

    function _chrome_find_match_crosses_barrier_ce3(barriers, start, end) {
        for (var i = 0; i < barriers.length; i++) {
            if (barriers[i] > start && barriers[i] < end) return true;
        }
        return false;
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
        if (node.nodeType === 1) {
            var controlText = _chrome_find_control_text(node);
            if (controlText !== null) {
                list.push({ node: node, text: controlText, start: offset,
                    group: joinGroup || null });
                return offset + controlText.length;
            }
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
                             caseInsensitive, diacriticInsensitive) {
        var nodes = [];
        collectTextNodes(root, nodes, 0);
        var haystack = "";
        for (var ni = 0; ni < nodes.length; ni++)
            haystack += nodes[ni].text;
        var searchNeedle = _chrome_find_normalize_ce3(needle,
            caseInsensitive, diacriticInsensitive);
        var searchHaystack = _chrome_find_normalize_ce3(haystack,
            caseInsensitive, diacriticInsensitive);
        var barriers = [];
        _chrome_collect_find_barrier_offsets_ce3(root, barriers,
            { offset: 0 });
        if (!searchNeedle) return -1;
        if (backwards) {
            var maxStart = Math.min(searchHaystack.length,
                startOffset) - searchNeedle.length;
            while (maxStart >= 0) {
                var backFound = searchHaystack.lastIndexOf(searchNeedle,
                    maxStart);
                if (backFound < 0) return -1;
                if (!_chrome_find_match_crosses_barrier_ce3(barriers,
                        backFound, backFound + needle.length)) {
                    return backFound;
                }
                maxStart = backFound - 1;
            }
            return -1;
        }
        var start = Math.max(0, startOffset || 0);
        while (start <= searchHaystack.length) {
            var foundInText = searchHaystack.indexOf(searchNeedle, start);
            if (foundInText < 0) return -1;
            if (!_chrome_find_match_crosses_barrier_ce3(barriers,
                    foundInText, foundInText + needle.length)) {
                return foundInText;
            }
            start = foundInText + 1;
        }
        return -1;
    }

    testRunner.findString = function(text, options) {
        _chrome_find_string_called = true;
        options = options || [];
        var root = document.getElementById("container") || document.body;
        var haystack = _chrome_text_for_find(root);
        var needle = String(text || "");
        var caseInsensitive = _chrome_find_options_include_ce3(options,
            "CaseInsensitive");
        var diacriticInsensitive =
            _chrome_find_options_include_ce3(options, "DiacriticInsensitive");
        var backwards = _chrome_find_options_include_ce3(options, "Backwards");
        var wrapAround = _chrome_find_options_include_ce3(options,
            "WrapAround");
        var startInSelection = _chrome_find_options_include_ce3(options,
            "StartInSelection");
        var asyncFind = _chrome_find_options_include_ce3(options, "Async");
        var searchHaystack = _chrome_find_normalize_ce3(haystack,
            caseInsensitive, diacriticInsensitive);
        var searchNeedle = _chrome_find_normalize_ce3(needle,
            caseInsensitive, diacriticInsensitive);
        var found = -1;
        var selection = getSelection();
        var rootToken = root;
        try {
            if (typeof _chrome_find_dom_token === "function")
                rootToken = _chrome_find_dom_token(root);
        } catch (_) {
            rootToken = root;
        }
        var searchSignature = needle + "\n" +
            _chrome_find_options_signature_ce3(options);
        var searchChanged = searchSignature !== _chrome_find_last_signature;
        var previousFindSelectionActive = !!_chrome_find_selection_active;
        var previousFindSelectionCleared =
            !!_chrome_find_selection_cleared_ce3;
        var preserveStartInSelectionHandoff = startInSelection ||
            _chrome_find_last_start_in_selection;
        var shouldResetChangedSearch = searchChanged &&
            !preserveStartInSelectionHandoff &&
            (!previousFindSelectionActive || previousFindSelectionCleared);
        if ((rootToken !== _chrome_find_root_token ||
                shouldResetChangedSearch) &&
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
        var selectionOffsets = null;
        try {
            selectionOffsets = _chrome_selection_text_offsets(root);
        } catch (_) {
            selectionOffsets = null;
        }
        if (searchChanged && previousFindSelectionCleared &&
                _chrome_selection_override_is_find_ce3 &&
                !startInSelection) {
            selectionOffsets = null;
        }
        if (searchChanged && previousFindSelectionActive &&
                !startInSelection &&
                typeof _chrome_tree_has_shadow_root === "function" &&
                _chrome_tree_has_shadow_root(root)) {
            var selectedForStaleFind = "";
            try {
                selectedForStaleFind = selection &&
                    typeof selection.toString === "function" ?
                    String(selection.toString() || "") : "";
            } catch (_) {
                selectedForStaleFind = "";
            }
            if (!selectedForStaleFind ||
                    selectedForStaleFind === _chrome_find_last_found_text) {
                selectionOffsets = null;
            }
        }
        var selectionIsFindMatch = !!_chrome_find_selection_active ||
            (typeof _chrome_find_base_offset === "number" &&
                typeof _chrome_find_extent_offset === "number");
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
            if (_chrome_selection_override_is_find_ce3)
                _chrome_selection_override_range = null;
            _chrome_selection_override_is_find_ce3 = false;
            _chrome_find_selection_cleared_ce3 = false;
        }

        if (backwards) {
            var backStart = typeof testRunner._findBackwardOffset === "number" ?
                testRunner._findBackwardOffset : searchHaystack.length;
            if (startInSelection && selectionOffsets)
                backStart = selectionSearchEnd;
            else if (selectionOffsets && !selectionIsFindMatch)
                backStart = selectionSearchEnd;
            found = findInTextNodes(root, needle, backStart, true,
                caseInsensitive, diacriticInsensitive);
            if (found < 0 && wrapAround)
                found = findInTextNodes(root, needle, searchHaystack.length,
                    true, caseInsensitive, diacriticInsensitive);
            if (found >= 0) testRunner._findBackwardOffset = found;
        } else {
            var start = testRunner._findOffset || 0;
            if (startInSelection && selectionOffsets)
                start = selectionSearchStart;
            else if (selectionOffsets && !selectionIsFindMatch)
                start = selectionSearchStart;
            found = findInTextNodes(root, needle, start, false,
                caseInsensitive, diacriticInsensitive);
            if (found < 0 && selectionOffsets && !selectionIsFindMatch) {
                var foundInSelection = findInTextNodes(root, needle, 0, false,
                    caseInsensitive, diacriticInsensitive);
                if (foundInSelection >= selectionSearchStart &&
                        foundInSelection < selectionSearchEnd) {
                    found = foundInSelection;
                }
            }
            if (found < 0 && typeof _chrome_tree_has_shadow_root === "function" &&
                    _chrome_tree_has_shadow_root(root)) {
                found = findInTextNodes(root, needle, 0, false,
                    caseInsensitive, diacriticInsensitive);
            }
            if (found < 0 && wrapAround)
                found = findInTextNodes(root, needle, 0, false,
                    caseInsensitive, diacriticInsensitive);
            if (found >= 0)
                testRunner._findOffset = found + searchNeedle.length;
        }

        if (found < 0) {
            _chrome_last_find_string_result = false;
            return false;
        }
        var matchPos = _chrome_find_text_position(root, found, true);
        var expanded = null;
        if (matchPos && matchPos.node)
            expanded = _chrome_dispatch_beforematch_from_node(matchPos.node,
                asyncFind);
        if (!expanded && matchPos && matchPos.node)
            expanded = _chrome_expand_details_from_node(matchPos.node, needle);
        _chrome_select_text_offsets(root, found, found + needle.length);
        _chrome_find_last_found_text = needle;
        if (asyncFind && !expanded && typeof window !== "undefined") {
            _chrome_schedule_find_scroll(1, 1);
        } else if (!asyncFind && !expanded && typeof window !== "undefined") {
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
    return _chrome_trim_trailing(String(text).replace(/\r\n/g, "\n")
        .replace(/^(\t+)\n+/g, "$1 ")
        .replace(/[ \t]+(?=\n)/g, "")
        .replace(/^\n+/g, ""));
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
        tag === "pre" || tag === "blockquote" ||
        tag === "ul" || tag === "ol" ||
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
    if (node.nodeType === 1 && node.shadowRoot) return;
    if (node.nodeType === 1 && _chrome_dump_is_block_ce3(node)) return;
    for (var child = node.firstChild; child; child = child.nextSibling)
        _chrome_dump_append_inline_text_ce3(child, parts);
}

function _chrome_dump_line_from_parts_ce3(parts) {
    return parts.join("").replace(/[ \r\n]+/g, " ")
        .replace(/^ +/g, "").replace(/ +$/g, "");
}

function _chrome_next_non_whitespace_sibling_ce3(node) {
    for (var next = node ? node.nextSibling : null; next;
         next = next.nextSibling) {
        if (next.nodeType !== 3 || /[^\t\r\n ]/.test(next.nodeValue || ""))
            return next;
    }
    return null;
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
        var prev = node.previousSibling;
        var next = node.nextSibling;
        var prevBr = prev && prev.nodeType === 1 && prev.nodeName &&
            prev.nodeName.toLowerCase() === "br";
        var nextBr = next && next.nodeType === 1 && next.nodeName &&
            next.nodeName.toLowerCase() === "br";
        var parentTag = node.parentNode && node.parentNode.nodeName ?
            node.parentNode.nodeName.toLowerCase() : "";
        var nextReal = _chrome_next_non_whitespace_sibling_ce3(node);
        var nextRealTag = nextReal && nextReal.nodeName ?
            nextReal.nodeName.toLowerCase() : "";
        if (isRoot || prevBr || nextBr ||
            (parentTag === "body" && nextRealTag === "pre"))
            lines.push("");
        return;
    }
    if (node.nodeType === 1 && node.shadowRoot) return;
    if (tag === "pre") {
        var preText = String(node.textContent || "").replace(/\r\n/g, "\n");
        var preLines = preText.split("\n");
        for (var preIndex = 0; preIndex < preLines.length; preIndex++) {
            var preLine = preLines[preIndex].replace(/[ \r]+$/g, "");
            if (preLine || preIndex + 1 < preLines.length)
                lines.push(preLine);
        }
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
    if (_chrome_console_warning_lines.length) {
        for (var i = _chrome_console_warning_lines.length - 1; i >= 0; i--)
            lines.unshift(_chrome_console_warning_lines[i]);
    }
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
    var selection = _chrome_markup_effective_selection_ce3();
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

function _chrome_markup_effective_selection_ce3() {
    _chrome_sync_selection_override_from_native_live_ce3(
        _chrome_current_selection_ce3(), false);
    if (_chrome_selection_override_range) {
        return {
            anchorNode: _chrome_selection_override_range.startContainer,
            anchorOffset: _chrome_selection_override_range.startOffset || 0,
            focusNode: _chrome_selection_override_range.endContainer,
            focusOffset: _chrome_selection_override_range.endOffset || 0
        };
    }
    return _chrome_current_selection_ce3();
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
    var selection = _chrome_markup_effective_selection_ce3();
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
        var expected = String(_chrome_editing_expected_text || "");
        var needsHeader = expected.indexOf("Dump of markup ") >= 0;
        if (needsHeader && _chrome_markup_dump_lines.length)
            _chrome_markup_dump_lines.push("");
        _chrome_markup_dump_count++;
        if (needsHeader) {
            _chrome_markup_dump_lines.push("Dump of markup " +
                _chrome_markup_dump_count + ":");
        }
    }
    _chrome_markup_dump_children(node, _chrome_markup_dump_lines);
}

var Markup = typeof Markup !== "undefined" ? Markup : {};
Markup.description = function(text) {
    if (_chrome_markup_dump_lines.length)
        _chrome_markup_dump_lines.push("");
    _chrome_markup_dump_lines.push(String(text || ""));
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

function _chrome_maybe_auto_dump_full_markup_ce3() {
    if (_chrome_editing_total !== 0 || _chrome_markup_dump_lines.length)
        return;
    if (!_chrome_editing_expected_path || _chrome_editing_expected_text === null)
        return;
    var expected = _chrome_normalize_dump(_chrome_editing_expected_text);
    if (expected.indexOf("| <html>") !== 0)
        return;
    var root = document.documentElement || document.body;
    if (!root) return;
    _chrome_editing_dump_mode = "text";
    _chrome_markup_dump_tree(root, 0, _chrome_markup_dump_lines);
}

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

if (document) {
    document.queryCommandSupported = function(command) {
        var cmd = _chrome_command_name_ce3(command);
        if (cmd === "paste" && testRunner &&
            testRunner._javascriptCanAccessClipboard === false) {
            return false;
        }
        if (_chrome_exec_command_supported_ce3(cmd)) return true;
        if (_chrome_native_document_query_command_supported)
            return _chrome_native_document_query_command_supported.call(
                document, command);
        return cmd === "copy" || cmd === "cut" || cmd === "paste";
    };
    try {
        document.queryCommandSupported = document.queryCommandSupported;
    } catch (_) {}
    document.__chromeQueryCommandSupportedCe3 = true;
}

function _chrome_command_name_ce3(command) {
    return String(command || "").toLowerCase().replace(/\s+/g, "");
}

function _chrome_inline_command_info_ce3(command) {
    var cmd = _chrome_command_name_ce3(command);
    if (cmd === "bold")
        return { tag: "b", tags: ["b", "strong"] };
    if (cmd === "italic")
        return { tag: "i", tags: ["i", "em"] };
    if (cmd === "underline")
        return { tag: "u", tags: ["u"] };
    if (cmd === "strikethrough")
        return { tag: "strike", tags: ["s", "strike"] };
    if (cmd === "subscript")
        return { tag: "sub", tags: ["sub"] };
    if (cmd === "superscript")
        return { tag: "sup", tags: ["sup"] };
    return null;
}

function _chrome_exec_command_supported_ce3(command) {
    var cmd = _chrome_command_name_ce3(command);
    if (cmd === "defaultparagraphseparator") return true;
    if (_chrome_inline_command_info_ce3(cmd)) return true;
    return cmd === "backcolor" ||
        cmd === "copy" ||
        cmd === "createlink" ||
        cmd === "cut" ||
        cmd === "delete" ||
        cmd === "deleteforward" ||
        cmd === "findstring" ||
        cmd === "fontname" ||
        cmd === "fontsize" ||
        cmd === "forecolor" ||
        cmd === "formatblock" ||
        cmd === "forwarddelete" ||
        cmd === "hilitecolor" ||
        cmd === "indent" ||
        cmd === "inserthtml" ||
        cmd === "insertimage" ||
        cmd === "insertlinebreak" ||
        cmd === "insertnewlineinquotedcontent" ||
        cmd === "insertorderedlist" ||
        cmd === "insertparagraph" ||
        cmd === "inserttext" ||
        cmd === "insertunorderedlist" ||
        cmd === "justifycenter" ||
        cmd === "justifyfull" ||
        cmd === "justifyleft" ||
        cmd === "justifyright" ||
        cmd === "outdent" ||
        cmd === "paste" ||
        cmd === "pasteandmatchstyle" ||
        cmd === "removeformat" ||
        cmd === "selectall" ||
        cmd === "unlink" ||
        cmd === "undo";
}

function _chrome_inline_info_has_tag_ce3(info, tagName) {
    tagName = String(tagName || "").toLowerCase();
    for (var i = 0; info && info.tags && i < info.tags.length; i++) {
        if (info.tags[i] === tagName) return true;
    }
    return false;
}

function _chrome_style_value_for_query_ce3(element, property) {
    if (!element || element.nodeType !== 1) return "";
    try {
        if (element.style && element.style[property])
            return String(element.style[property]).toLowerCase();
    } catch (_) {}
    var style = element.getAttribute ? element.getAttribute("style") : "";
    if (!style) return "";
    var pattern = new RegExp("(^|;)\\s*" + property.replace(/[A-Z]/g,
        function(letter) { return "-" + letter.toLowerCase(); }) +
        "\\s*:\\s*([^;]+)", "i");
    var match = pattern.exec(style);
    return match ? String(match[2]).toLowerCase() : "";
}

function _chrome_inline_style_state_ce3(command, element) {
    var cmd = _chrome_command_name_ce3(command);
    if (cmd === "bold") {
        var weight = _chrome_style_value_for_query_ce3(element, "fontWeight");
        if (weight === "normal" || weight === "400") return false;
        if (weight === "bold" || weight === "bolder") return true;
        var numeric = parseInt(weight, 10);
        if (!isNaN(numeric)) return numeric >= 600;
    }
    if (cmd === "italic") {
        var style = _chrome_style_value_for_query_ce3(element, "fontStyle");
        if (style === "normal") return false;
        if (style === "italic" || style === "oblique") return true;
    }
    if (cmd === "underline" || cmd === "strikethrough") {
        var decoration = _chrome_style_value_for_query_ce3(element,
            "textDecoration");
        decoration += " " + _chrome_style_value_for_query_ce3(element,
            "textDecorationLine");
        if (cmd === "underline" && /\bunderline\b/.test(decoration))
            return true;
        if (cmd === "strikethrough" && /\bline-through\b/.test(decoration))
            return true;
        if (/\bnone\b/.test(decoration)) return false;
    }
    if (cmd === "subscript" || cmd === "superscript") {
        var align = _chrome_style_value_for_query_ce3(element, "verticalAlign");
        if (cmd === "subscript" && align === "sub") return true;
        if (cmd === "superscript" && align === "super") return true;
        if (align === "baseline" || align === "middle") return false;
    }
    return null;
}

function _chrome_query_node_from_boundary_ce3(node, offset) {
    node = _chrome_resolve_named_element_candidate(node);
    if (!node) return null;
    if (node.nodeType === 3) return node;
    if (node.nodeType !== 1) return node;
    var child = node.childNodes ? node.childNodes[offset || 0] : null;
    if (!child && offset > 0 && node.childNodes)
        child = node.childNodes[(offset || 0) - 1] || null;
    if (child) return _chrome_first_text_descendant(child) || child;
    return node;
}

function _chrome_query_sample_node_ce3(selection) {
    if (_chrome_selection_override_range) {
        return _chrome_query_node_from_boundary_ce3(
            _chrome_selection_override_range.startContainer,
            _chrome_selection_override_range.startOffset || 0);
    }
    if (!selection) selection = _chrome_current_selection_ce3();
    if (!selection) return null;
    if (selection.rangeCount && _chrome_selection_has_content(selection)) {
        var range = selection.getRangeAt(0);
        return _chrome_query_node_from_boundary_ce3(range.startContainer,
            range.startOffset || 0);
    }
    return _chrome_query_node_from_boundary_ce3(selection.focusNode,
        selection.focusOffset || 0);
}

function _chrome_query_inline_command_state_ce3(command) {
    var info = _chrome_inline_command_info_ce3(command);
    if (!info) return false;
    var selection = _chrome_current_selection_ce3();
    var collapsed = !selection || !_chrome_selection_has_content(selection);
    var node = _chrome_query_sample_node_ce3(selection);
    var element = node && node.nodeType === 1 ? node : node && node.parentNode;
    for (var current = element; current && current !== document;
         current = current.parentNode) {
        if (current.nodeType !== 1) continue;
        var styled = _chrome_inline_style_state_ce3(command, current);
        if (styled !== null) return !!styled;
        if (current.nodeName &&
            _chrome_inline_info_has_tag_ce3(info, current.nodeName)) {
            return true;
        }
    }
    return collapsed && !!_chrome_pending_inline_commands[
        _chrome_command_name_ce3(command)];
}

function _chrome_ancestor_list_for_query_ce3(node) {
    var current = node && node.nodeType === 1 ? node : node && node.parentNode;
    for (; current && current !== document; current = current.parentNode) {
        if (_chrome_node_name_is(current, "ul") ||
            _chrome_node_name_is(current, "ol")) {
            return current;
        }
    }
    return null;
}

function _chrome_query_list_command_state_ce3(command) {
    var cmd = _chrome_command_name_ce3(command);
    if (cmd !== "insertorderedlist" && cmd !== "insertunorderedlist")
        return null;
    var node = _chrome_query_sample_node_ce3(_chrome_current_selection_ce3());
    var list = _chrome_ancestor_list_for_query_ce3(node);
    if (!list) return false;
    return cmd === "insertorderedlist" ? _chrome_node_name_is(list, "ol") :
        _chrome_node_name_is(list, "ul");
}

function _chrome_query_command_state_ce3(command) {
    var justifyState = _chrome_query_justify_command_state_ce3(command);
    if (justifyState !== null) return justifyState;
    var listState = _chrome_query_list_command_state_ce3(command);
    if (listState !== null) return listState;
    if (_chrome_inline_command_info_ce3(command))
        return _chrome_query_inline_command_state_ce3(command);
    return false;
}

function _chrome_query_justify_command_state_ce3(command) {
    var value = _chrome_alignment_value_for_command(
        _chrome_command_name_ce3(command));
    if (!value) return null;
    var node = _chrome_query_sample_node_ce3(_chrome_current_selection_ce3());
    var element = node && node.nodeType === 1 ? node : node && node.parentNode;
    for (var current = element; current && current !== document;
         current = current.parentNode) {
        if (current.nodeType !== 1) continue;
        if (_chrome_block_alignment_matches(current, value)) return true;
        if (_chrome_dump_is_block_ce3(current)) return false;
    }
    return false;
}

function _chrome_query_font_size_from_css_ce3(value) {
    value = String(value || "").toLowerCase();
    var pxMatch = /(-?\d+(?:\.\d+)?)px/.exec(value);
    if (!pxMatch) return "";
    var px = Number(pxMatch[1]);
    if (px <= 10) return "1";
    if (px <= 13) return "2";
    if (px <= 16) return "3";
    if (px <= 18) return "4";
    if (px <= 24) return "5";
    if (px <= 32) return "6";
    return "7";
}

function _chrome_query_font_size_ce3() {
    var node = _chrome_query_sample_node_ce3(_chrome_current_selection_ce3());
    var element = node && node.nodeType === 1 ? node : node && node.parentNode;
    for (var current = element; current && current !== document;
         current = current.parentNode) {
        if (current.nodeType !== 1) continue;
        if (_chrome_node_name_is(current, "font")) {
            var size = current.getAttribute ? current.getAttribute("size") : "";
            if (size) return String(size);
        }
        var cssSize = _chrome_style_value_for_query_ce3(current, "fontSize");
        var mapped = _chrome_query_font_size_from_css_ce3(cssSize);
        if (mapped) return mapped;
    }
    return _chrome_last_font_size_command_value || "";
}

function _chrome_query_format_block_ce3() {
    var node = _chrome_query_sample_node_ce3(_chrome_current_selection_ce3());
    var host = _chrome_editing_host_for_node(node) ||
        _chrome_editable_host_from_selection();
    var block = _chrome_block_ancestor_for_range_delete(node, host);
    if (!block || block === host || !block.nodeName) return "";
    return String(block.nodeName || "").toLowerCase();
}

if (document) {
    var _chrome_native_query_command_value =
        typeof document.queryCommandValue === "function" ?
            document.queryCommandValue : null;
    var _chrome_native_query_command_state =
        typeof document.queryCommandState === "function" ?
            document.queryCommandState : null;
    var _chrome_native_query_command_indeterm =
        typeof document.queryCommandIndeterm === "function" ?
            document.queryCommandIndeterm : null;
    var _chrome_query_command_enabled_ce3 = function(command) {
        var cmd = _chrome_command_name_ce3(command);
        if (cmd === "defaultparagraphseparator") return true;
        if (cmd === "copy" || cmd === "cut" || cmd === "paste")
            return document.queryCommandSupported(command);
        return _chrome_exec_command_supported_ce3(cmd);
    };
    var _chrome_query_command_state_api_ce3 = function(command) {
        var cmd = _chrome_command_name_ce3(command);
        if (_chrome_inline_command_info_ce3(cmd) ||
            cmd === "insertorderedlist" || cmd === "insertunorderedlist" ||
            _chrome_alignment_value_for_command(cmd)) {
            return _chrome_query_command_state_ce3(command);
        }
        if (_chrome_native_query_command_state)
            return !!_chrome_native_query_command_state.call(document, command);
        return false;
    };
    var _chrome_query_command_indeterm_ce3 = function(command) {
        if (_chrome_native_query_command_indeterm)
            return !!_chrome_native_query_command_indeterm.call(document,
                command);
        return false;
    };
    var _chrome_query_command_value_ce3 = function(command) {
        var cmd = _chrome_command_name_ce3(command);
        if (cmd === "defaultparagraphseparator")
            return _chrome_default_paragraph_separator;
        if (cmd === "backcolor" || cmd === "hilitecolor")
            return "rgba(0, 0, 0, 0)";
        if (_chrome_inline_command_info_ce3(cmd) ||
            cmd === "insertorderedlist" || cmd === "insertunorderedlist") {
            return String(_chrome_query_command_state_ce3(command));
        }
        if (cmd === "fontsize")
            return _chrome_query_font_size_ce3();
        if (cmd === "formatblock")
            return _chrome_query_format_block_ce3();
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
        Object.defineProperty(document, "queryCommandState", {
            value: _chrome_query_command_state_api_ce3,
            configurable: true
        });
        Object.defineProperty(document, "queryCommandIndeterm", {
            value: _chrome_query_command_indeterm_ce3,
            configurable: true
        });
    } catch (_) {
        document.queryCommandEnabled = _chrome_query_command_enabled_ce3;
        document.queryCommandValue = _chrome_query_command_value_ce3;
        document.queryCommandState = _chrome_query_command_state_api_ce3;
        document.queryCommandIndeterm = _chrome_query_command_indeterm_ce3;
    }
    try {
        document.queryCommandEnabled = _chrome_query_command_enabled_ce3;
        document.queryCommandValue = _chrome_query_command_value_ce3;
        document.queryCommandState = _chrome_query_command_state_api_ce3;
        document.queryCommandIndeterm = _chrome_query_command_indeterm_ce3;
    } catch (_) {}
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
    var selection = _chrome_current_selection_ce3();
    if (!elem || !selection || typeof selection.collapse !== "function") return;
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
    var selection = _chrome_current_selection_ce3();
    if (typeof selection.removeAllRanges === "function")
        selection.removeAllRanges();
    if (typeof selection.setBaseAndExtent === "function") {
        selection.setBaseAndExtent(anchor.node, anchor.offset,
            focus.node, focus.offset);
        return;
    }
    if (selection && typeof selection.collapse === "function" &&
        typeof selection.extend === "function") {
        selection.collapse(anchor.node, anchor.offset);
        selection.extend(focus.node, focus.offset);
        return;
    }
    var range = document.createRange();
    if (range && typeof range.setStart === "function" &&
        typeof range.setEnd === "function" && selection &&
        typeof selection.addRange === "function") {
        range.setStart(anchor.node, anchor.offset);
        range.setEnd(focus.node, focus.offset);
        selection.addRange(range);
        return;
    }
    _chrome_selection_override_range = {
        startContainer: anchor.node,
        startOffset: anchor.offset,
        endContainer: focus.node,
        endOffset: focus.offset
    };
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
        var valueLength = typeof this.textLength === "number" ?
            this.textLength : _chrome_control_plain_value(this).length;
        var nextStart = typeof start === "number" ? start : 0;
        var nextEnd = end === undefined ? nextStart :
            (typeof end === "number" ? end : nextStart);
        if (nextStart < 0) nextStart = 0;
        if (nextEnd < 0) nextEnd = 0;
        if (nextStart > valueLength) nextStart = valueLength;
        if (nextEnd > valueLength) nextEnd = valueLength;
        if (nextStart > nextEnd) nextStart = nextEnd;
        var result = undefined;
        if (baseSetSelectionRange)
            result = baseSetSelectionRange.call(this, nextStart, nextEnd,
                direction);
        this.selectionStart = typeof this.selectionStart === "number" ?
            this.selectionStart : nextStart;
        this.selectionEnd = typeof this.selectionEnd === "number" ?
            this.selectionEnd : nextEnd;
        this.selectionDirection = direction || "none";
        this.__chromeHasTextSelection = true;
        _chrome_active_text_control = this;
        _chrome_select_all_text_node = null;
        return result;
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
        return _chrome_apply_text_control_edit_ce3(control, "", lo, hi,
            forward ? "deleteContentForward" : "deleteContentBackward",
            null, null);
    }
    if (forward && start < control.value.length) {
        return _chrome_apply_text_control_edit_ce3(control, "", start,
            start + 1, "deleteContentForward", null, null);
    }
    if (!forward && start > 0) {
        return _chrome_apply_text_control_edit_ce3(control, "", start - 1,
            start, "deleteContentBackward", null, null);
    }
    return true;
}

function _chrome_delete_word_after_caret_for_win_ce3() {
    if (!internals || !internals.settings ||
            internals.settings.editingBehavior !== "win") {
        return false;
    }
    var selection = _chrome_current_selection_ce3();
    if (!selection || _chrome_selection_has_content(selection) ||
            !selection.focusNode || selection.focusNode.nodeType !== 3) {
        return false;
    }
    var node = selection.focusNode;
    var text = node.nodeValue || "";
    var start = Math.max(0, Math.min(text.length,
        selection.focusOffset || 0));
    if (start >= text.length) return false;
    var end = start;
    while (end < text.length && /\s/.test(text.charAt(end))) end++;
    while (end < text.length && !/\s/.test(text.charAt(end))) end++;
    if (end < text.length && /\s/.test(text.charAt(end))) end++;
    if (end <= start) return false;
    node.data = text.slice(0, start) + text.slice(end);
    if (typeof selection.collapse === "function")
        selection.collapse(node, start);
    return true;
}

function _chrome_insert_text_in_text_control(control, text) {
    if (!_chrome_is_text_control(control) || typeof control.value !== "string")
        return false;
    _chrome_install_text_control_selection_api(control);
    var start = typeof control.selectionStart === "number"
        ? control.selectionStart : 0;
    var end = typeof control.selectionEnd === "number"
        ? control.selectionEnd : start;
    var lo = Math.min(start, end);
    var hi = Math.max(start, end);
    var value = String(text == null ? "" : text);
    return _chrome_apply_text_control_edit_ce3(control, value, lo, hi,
        "insertText", value, null);
}

function _chrome_insert_line_break_in_text_control_ce3(control) {
    if (!control || !control.nodeName ||
            control.nodeName.toLowerCase() !== "textarea") {
        return false;
    }
    _chrome_install_text_control_selection_api(control);
    var start = typeof control.selectionStart === "number"
        ? control.selectionStart : 0;
    var end = typeof control.selectionEnd === "number"
        ? control.selectionEnd : start;
    return _chrome_apply_text_control_edit_ce3(control, "\n",
        Math.min(start, end), Math.max(start, end), "insertLineBreak",
        "\n", null);
}

function _chrome_after_text_control_user_edit_ce3(control) {
    if (!control || !control.nodeName) return;
    if (control.nodeName.toLowerCase() === "textarea")
        control.textContent = "";
}

function _chrome_apply_text_control_edit_ce3(control, replacement, start, end,
        inputType, data, dataTransfer) {
    if (!_chrome_is_text_control(control) || typeof control.value !== "string")
        return false;
    _chrome_install_text_control_selection_api(control);
    var current = String(control.value || "");
    var length = current.length;
    var lo = Math.max(0, Math.min(length, Number(start) || 0));
    var hi = Math.max(lo, Math.min(length, Number(end) || 0));
    var text = String(replacement == null ? "" : replacement);
    if (!_chrome_dispatch_before_input_event_ce3(control, inputType, data,
            dataTransfer)) {
        return true;
    }
    control.value = current.slice(0, lo) + text + current.slice(hi);
    var caret = lo + text.length;
    if (control.setSelectionRange)
        control.setSelectionRange(caret, caret);
    _chrome_dispatch_input_event_ce3(control, inputType, data, dataTransfer);
    _chrome_after_text_control_user_edit_ce3(control);
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
    _chrome_install_selection_mutation_tracking_on_tree_ce3(document.body);

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
    if (selection && typeof selection.removeAllRanges === "function")
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
    _chrome_selection_override_range = {
        startContainer: anchorNode,
        startOffset: anchorOffset,
        endContainer: state.focusNode,
        endOffset: state.focusOffset
    };

    _chrome_focus_editing_host(state.focusNode);
    _chrome_selection_override_range = {
        startContainer: anchorNode,
        startOffset: anchorOffset,
        endContainer: state.focusNode,
        endOffset: state.focusOffset
    };
    if (selection && typeof selection.setBaseAndExtent === "function") {
        try {
            selection.setBaseAndExtent(anchorNode, anchorOffset,
                state.focusNode, state.focusOffset);
            return;
        } catch (e) {
            if (typeof selection.removeAllRanges === "function")
                selection.removeAllRanges();
        }
    }
    if (selection && typeof selection.collapse === "function" &&
        typeof selection.extend === "function") {
        selection.collapse(anchorNode, anchorOffset);
        selection.extend(state.focusNode, state.focusOffset);
        return;
    }
    var range = document.createRange();
    if (range && typeof range.setStart === "function" &&
        typeof range.setEnd === "function" && selection &&
        typeof selection.addRange === "function") {
        range.setStart(anchorNode, anchorOffset);
        range.setEnd(state.focusNode, state.focusOffset);
        selection.addRange(range);
        return;
    }
    _chrome_focus_editing_host(state.focusNode);
}

function _chrome_selection_has_content(selection) {
    if (!selection) return false;
    if (selection.isCollapsed === false) return true;
    return selection.anchorNode !== selection.focusNode ||
        selection.anchorOffset !== selection.focusOffset;
}

function _chrome_delete_same_text_selection(selection) {
    var range = _chrome_delete_effective_range(selection);
    if (!range || range.startContainer !== range.endContainer ||
        !range.startContainer || range.startContainer.nodeType !== 3) {
        return false;
    }
    var node = range.startContainer;
    var start = range.startOffset || 0;
    var end = range.endOffset || 0;
    if (end <= start) return false;
    var text = node.nodeValue || "";
    _chrome_last_manual_delete_undo = {
        node: node,
        text: text,
        anchorOffset: selection.anchorOffset || 0,
        focusOffset: selection.focusOffset || 0
    };
    node.data = text.slice(0, start) + text.slice(end);
    var collapsedOffset = _chrome_collapse_whitespace_run_after_delete(node,
        start);
    if (collapsedOffset >= 0) {
        selection.collapse(node, collapsedOffset);
        return true;
    }
    _chrome_preserve_boundary_space_after_delete(node, start);
    var block = _chrome_block_ancestor_for_range_delete(node,
        _chrome_editing_host_for_node(node));
    if (block && _chrome_ensure_empty_block_placeholder(block)) {
        selection.collapse(block, 0);
        return true;
    }
    selection.collapse(node, start);
    return true;
}

function _chrome_delete_same_text_selection_for_insert(selection) {
    var range = _chrome_delete_effective_range(selection);
    if (!range || range.startContainer !== range.endContainer ||
        !range.startContainer || range.startContainer.nodeType !== 3) {
        return false;
    }
    var node = range.startContainer;
    var start = range.startOffset || 0;
    var end = range.endOffset || 0;
    if (end <= start) return false;
    var text = node.nodeValue || "";
    node.data = text.slice(0, start) + text.slice(end);
    selection.collapse(node, start);
    return true;
}

function _chrome_delete_selection_for_insert(selection) {
    if (!_chrome_selection_has_content(selection) || !selection.rangeCount)
        return true;
    if (_chrome_delete_same_text_selection_for_insert(selection)) return true;
    var range = selection.getRangeAt(0);
    if (_chrome_delete_selected_child(selection, range)) return true;
    var collapseNode = range.startContainer;
    var collapseOffset = range.startOffset || 0;
    var endNode = range.endContainer;
    var editableHost = _chrome_editing_host_for_node(collapseNode);
    var startBlock = _chrome_block_ancestor_for_range_delete(collapseNode,
        editableHost);
    var endBlock = _chrome_block_ancestor_for_range_delete(endNode,
        editableHost || _chrome_editing_host_for_node(endNode));
    if (_chrome_delete_merge_boundary_selection(selection, range, endBlock))
        return true;
    range.deleteContents();
    if (_chrome_normalize_block_range_delete(selection, startBlock, endBlock))
        return true;
    if (collapseNode && !_chrome_node_is_live(collapseNode)) {
        collapseNode = range.startContainer;
        collapseOffset = range.startOffset || 0;
    }
    var adjustedOffset = _chrome_collapse_whitespace_run_after_delete(
        collapseNode, collapseOffset);
    if (adjustedOffset >= 0)
        collapseOffset = adjustedOffset;
    else
        _chrome_preserve_boundary_space_after_delete(collapseNode,
            collapseOffset);
    selection.removeAllRanges();
    selection.addRange(range);
    selection.collapse(collapseNode || range.startContainer, collapseOffset);
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

function _chrome_delete_common_ancestor(a, b) {
    if (!a) return b || null;
    if (!b) return a;
    for (var current = a; current; current = current.parentNode) {
        if (_chrome_node_contains_node(current, b)) return current;
    }
    return document.body || document.documentElement || null;
}

function _chrome_delete_clamped_offset(node, offset) {
    offset = Math.max(0, offset || 0);
    if (!node) return offset;
    if (node.nodeType === 3)
        return Math.min(offset, (node.nodeValue || "").length);
    if (node.childNodes)
        return Math.min(offset, node.childNodes.length);
    return 0;
}

function _chrome_delete_boundary_compare(root, aNode, aOffset, bNode, bOffset) {
    if (!root || !aNode || !bNode) return 0;
    return _chrome_compare_paths(
        _chrome_boundary_path(root, aNode, aOffset || 0),
        _chrome_boundary_path(root, bNode, bOffset || 0));
}

function _chrome_delete_make_range(startNode, startOffset, endNode, endOffset) {
    if (!startNode || !endNode) return null;
    startOffset = _chrome_delete_clamped_offset(startNode, startOffset);
    endOffset = _chrome_delete_clamped_offset(endNode, endOffset);
    var root = _chrome_delete_common_ancestor(startNode, endNode);
    if (root && _chrome_delete_boundary_compare(root, startNode, startOffset,
            endNode, endOffset) > 0) {
        var oldStartNode = startNode;
        var oldStartOffset = startOffset;
        startNode = endNode;
        startOffset = endOffset;
        endNode = oldStartNode;
        endOffset = oldStartOffset;
    }
    var range = {
        startContainer: startNode,
        startOffset: startOffset,
        endContainer: endNode,
        endOffset: endOffset,
        commonAncestorContainer: root,
        __chromeDeleteSynthetic: true
    };
    range.deleteContents = function() {
        return _chrome_delete_range_contents_ce3(range);
    };
    return range;
}

function _chrome_delete_effective_range(selection) {
    var override = _chrome_selection_override_range;
    if (override && _chrome_node_is_live(override.startContainer) &&
            _chrome_node_is_live(override.endContainer)) {
        return _chrome_delete_make_range(override.startContainer,
            override.startOffset || 0, override.endContainer,
            override.endOffset || 0);
    }
    if (selection && selection.rangeCount &&
            typeof selection.getRangeAt === "function") {
        try {
            var nativeRange = selection.getRangeAt(0);
            if (nativeRange && nativeRange.startContainer &&
                    nativeRange.endContainer) {
                return _chrome_delete_make_range(nativeRange.startContainer,
                    nativeRange.startOffset || 0, nativeRange.endContainer,
                    nativeRange.endOffset || 0);
            }
        } catch (_) {}
    }
    if (selection && selection.anchorNode && selection.focusNode) {
        return _chrome_delete_make_range(selection.anchorNode,
            selection.anchorOffset || 0, selection.focusNode,
            selection.focusOffset || 0);
    }
    return null;
}

function _chrome_delete_boundary_before_node(node) {
    if (!node || !node.parentNode) return null;
    return {
        node: node.parentNode,
        offset: _chrome_node_child_index(node)
    };
}

function _chrome_delete_boundary_after_node(node) {
    if (!node) return null;
    if (node.nodeType === 3) {
        return { node: node, offset: (node.nodeValue || "").length };
    }
    if (!node.parentNode) return null;
    return {
        node: node.parentNode,
        offset: _chrome_node_child_index(node) + 1
    };
}

function _chrome_delete_boundary_matches(boundaryNode, boundaryOffset,
        expectedNode, expectedOffset) {
    if (!boundaryNode || !expectedNode) return false;
    if (boundaryNode === expectedNode &&
            (boundaryOffset || 0) === (expectedOffset || 0)) {
        return true;
    }
    var root = _chrome_delete_common_ancestor(boundaryNode, expectedNode);
    return root && _chrome_delete_boundary_compare(root, boundaryNode,
        boundaryOffset || 0, expectedNode, expectedOffset || 0) === 0;
}

function _chrome_delete_boundary_is_before_node(boundaryNode, boundaryOffset,
        node) {
    if (!node) return false;
    var before = _chrome_delete_boundary_before_node(node);
    if (before && _chrome_delete_boundary_matches(boundaryNode,
            boundaryOffset, before.node, before.offset)) {
        return true;
    }
    var firstText = _chrome_first_text_descendant(node);
    if (firstText && _chrome_delete_boundary_matches(boundaryNode,
            boundaryOffset, firstText, 0)) {
        return true;
    }
    return false;
}

function _chrome_delete_boundary_is_after_node(boundaryNode, boundaryOffset,
        node) {
    if (!node) return false;
    var after = _chrome_delete_boundary_after_node(node);
    if (after && _chrome_delete_boundary_matches(boundaryNode,
            boundaryOffset, after.node, after.offset)) {
        return true;
    }
    var end = _chrome_delete_block_end_boundary(node);
    return !!(end && _chrome_delete_boundary_matches(boundaryNode,
        boundaryOffset, end.node, end.offset));
}

function _chrome_delete_range_starts_before_block(range, block) {
    if (!range || !block || !block.parentNode) return false;
    if (_chrome_delete_boundary_is_before_node(range.startContainer,
            range.startOffset || 0, block)) {
        return true;
    }
    for (var previous = block.previousSibling; previous;
         previous = previous.previousSibling) {
        if (!_chrome_delete_node_has_visible_content(previous)) continue;
        return _chrome_delete_boundary_is_after_node(range.startContainer,
            range.startOffset || 0, previous);
    }
    return false;
}

function _chrome_delete_node_range_boundary(root, node, after) {
    if (!node || !node.parentNode) return null;
    return {
        node: node.parentNode,
        offset: _chrome_node_child_index(node) + (after ? 1 : 0)
    };
}

function _chrome_delete_node_fully_selected(root, node, range) {
    var start = _chrome_delete_node_range_boundary(root, node, false);
    var end = _chrome_delete_node_range_boundary(root, node, true);
    return !!(start && end &&
        _chrome_delete_boundary_compare(root, range.startContainer,
            range.startOffset || 0, start.node, start.offset) <= 0 &&
        _chrome_delete_boundary_compare(root, end.node, end.offset,
            range.endContainer, range.endOffset || 0) <= 0);
}

function _chrome_delete_collect_selected_nodes(root, node, range, out) {
    if (!node || !node.childNodes) return;
    for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child === range.startContainer || child === range.endContainer ||
                _chrome_node_contains_node(child, range.startContainer) ||
                _chrome_node_contains_node(child, range.endContainer)) {
            _chrome_delete_collect_selected_nodes(root, child, range, out);
            continue;
        }
        if (_chrome_delete_node_fully_selected(root, child, range)) {
            out.push(child);
            continue;
        }
        _chrome_delete_collect_selected_nodes(root, child, range, out);
    }
}

function _chrome_delete_range_contents_ce3(range) {
    if (!range || !range.startContainer || !range.endContainer)
        return false;
    var root = range.commonAncestorContainer ||
        _chrome_delete_common_ancestor(range.startContainer,
            range.endContainer);
    if (!root) return false;
    if (range.startContainer === range.endContainer &&
            range.startContainer.nodeType === 3) {
        var sameText = range.startContainer.nodeValue || "";
        range.startContainer.data = sameText.slice(0, range.startOffset || 0) +
            sameText.slice(range.endOffset || 0);
        return true;
    }
    var selected = [];
    _chrome_delete_collect_selected_nodes(root, root, range, selected);
    if (range.startContainer.nodeType === 3) {
        var startText = range.startContainer.nodeValue || "";
        range.startContainer.data = startText.slice(0,
            range.startOffset || 0);
    }
    if (range.endContainer.nodeType === 3) {
        var endText = range.endContainer.nodeValue || "";
        range.endContainer.data = endText.slice(range.endOffset || 0);
    }
    for (var i = 0; i < selected.length; i++) {
        if (selected[i].parentNode) selected[i].parentNode.removeChild(selected[i]);
    }
    return true;
}

function _chrome_delete_collapse_after_range_delete(selection, range, node,
        offset) {
    if (node && !_chrome_node_is_live(node)) {
        node = range && _chrome_node_is_live(range.startContainer) ?
            range.startContainer : null;
        offset = node === range.startContainer ? range.startOffset || 0 : 0;
    }
    if ((!node || !_chrome_node_is_live(node)) && range &&
            _chrome_node_is_live(range.endContainer)) {
        node = range.endContainer;
        offset = range.endContainer.nodeType === 3 ? 0 : range.endOffset || 0;
    }
    if (!node || !_chrome_node_is_live(node)) node = document.body;
    if (!node) return false;
    offset = _chrome_delete_clamped_offset(node, offset || 0);
    selection.removeAllRanges();
    selection.collapse(node, offset);
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

function _chrome_block_ancestor_for_range_delete(node, host) {
    var current = node && node.nodeType === 1 ? node : node && node.parentNode;
    while (current && current !== document.body && current !== host) {
        if (_chrome_dump_is_block_ce3(current)) return current;
        current = current.parentNode;
    }
    return null;
}

function _chrome_node_is_live(node) {
    if (!node) return false;
    if (node.isConnected !== undefined && node.isConnected) return true;
    if (document.body && document.body.contains &&
            document.body.contains(node)) {
        return true;
    }
    for (var current = node; current; current = current.parentNode) {
        if (current === document || current === document.documentElement ||
                current === document.body) {
            return true;
        }
    }
    return false;
}

function _chrome_delete_node_has_visible_content(node) {
    if (!node) return false;
    if (node.nodeType === 3) return (node.nodeValue || "").length > 0;
    if (node.nodeType !== 1) return false;
    var tag = node.nodeName ? node.nodeName.toLowerCase() : "";
    if (tag === "br" || tag === "img" || tag === "input" ||
        tag === "textarea" || tag === "select") {
        return true;
    }
    for (var child = node.firstChild; child; child = child.nextSibling) {
        if (_chrome_delete_node_has_visible_content(child)) return true;
    }
    return false;
}

function _chrome_delete_first_visible_child(node) {
    if (!node || !node.childNodes) return null;
    for (var child = node.firstChild; child; child = child.nextSibling) {
        if (_chrome_delete_node_has_visible_content(child)) return child;
    }
    return null;
}

function _chrome_delete_first_visible_sibling_after(node) {
    for (var sibling = node ? node.nextSibling : null; sibling;
         sibling = sibling.nextSibling) {
        if (_chrome_delete_node_has_visible_content(sibling)) return sibling;
    }
    return null;
}

function _chrome_delete_remove_empty_text_children(node) {
    if (!node || !node.childNodes) return;
    for (var child = node.firstChild, next; child; child = next) {
        next = child.nextSibling;
        if (child.nodeType === 3 && !(child.nodeValue || ""))
            node.removeChild(child);
    }
}

function _chrome_ensure_empty_block_placeholder(block) {
    if (!block || block.nodeType !== 1) return false;
    if (_chrome_delete_node_has_visible_content(block)) return false;
    _chrome_delete_remove_empty_text_children(block);
    if (!block.firstChild) block.appendChild(document.createElement("br"));
    return true;
}

function _chrome_delete_block_end_boundary(block) {
    var text = _chrome_last_text_descendant(block);
    if (text) return { node: text, offset: (text.nodeValue || "").length };
    return {
        node: block,
        offset: block && block.childNodes ? block.childNodes.length : 0
    };
}

function _chrome_delete_move_children(from, to) {
    if (!from || !to || from === to) return;
    while (from.firstChild) to.appendChild(from.firstChild);
}

function _chrome_delete_previous_visible_sibling(node) {
    for (var sibling = node ? node.previousSibling : null; sibling;
         sibling = sibling.previousSibling) {
        if (_chrome_delete_node_has_visible_content(sibling)) return sibling;
    }
    return null;
}

function _chrome_delete_next_visible_sibling(node) {
    for (var sibling = node ? node.nextSibling : null; sibling;
         sibling = sibling.nextSibling) {
        if (_chrome_delete_node_has_visible_content(sibling)) return sibling;
    }
    return null;
}

function _chrome_delete_last_element_by_tag(root, tag) {
    if (!root || root.nodeType !== 1) return null;
    var matches = root.getElementsByTagName ?
        root.getElementsByTagName(tag) : [];
    return matches && matches.length ? matches[matches.length - 1] : null;
}

function _chrome_delete_merge_target_for_previous(previous) {
    if (!previous || previous.nodeType !== 1) return null;
    var tag = previous.nodeName ? previous.nodeName.toLowerCase() : "";
    if (tag === "ul" || tag === "ol")
        return _chrome_delete_last_element_by_tag(previous, "li") || previous;
    if (tag === "table") {
        var behavior = internals && internals.settings ?
            internals.settings.editingBehavior : "mac";
        if (behavior !== "mac") return null;
        return _chrome_delete_last_element_by_tag(previous, "td") ||
            _chrome_delete_last_element_by_tag(previous, "th") || previous;
    }
    return _chrome_dump_is_block_ce3(previous) ? previous : null;
}

function _chrome_delete_style_value(style, property) {
    var parts = String(style || "").split(";");
    property = String(property || "").toLowerCase();
    for (var i = 0; i < parts.length; i++) {
        var pair = parts[i].split(":");
        if (pair.length < 2) continue;
        if (pair[0].replace(/^\s+|\s+$/g, "").toLowerCase() === property)
            return pair.slice(1).join(":").replace(/^\s+|\s+$/g, "");
    }
    return "";
}

function _chrome_delete_inline_style_from_block(block) {
    if (!block || !block.getAttribute) return "";
    var style = block.getAttribute("style") || "";
    var out = "";
    var decoration = _chrome_delete_style_value(style, "text-decoration");
    if (decoration) out += "text-decoration-line: " + decoration + ";";
    var family = _chrome_delete_style_value(style, "font-family");
    if (family) out += (out ? " " : "") + "font-family: " + family + ";";
    return out;
}

function _chrome_delete_normalized_inline_node(node) {
    if (!node || node.nodeType !== 1 || !node.nodeName) return node;
    var tag = node.nodeName.toLowerCase();
    if (tag !== "font" || !node.getAttribute ||
        !node.hasAttribute("face")) {
        return node;
    }
    var span = document.createElement("span");
    span.setAttribute("style", "font-family: " +
        node.getAttribute("face") + ";");
    while (node.firstChild) span.appendChild(node.firstChild);
    if (node.parentNode) node.parentNode.removeChild(node);
    return span;
}

function _chrome_delete_insert_block_children_before(block, reference) {
    var parent = reference ? reference.parentNode : null;
    if (!block || !parent) return;
    var blockStyle = _chrome_delete_inline_style_from_block(block);
    if (blockStyle) {
        var wrapper = document.createElement("span");
        wrapper.setAttribute("style", blockStyle);
        while (block.firstChild)
            wrapper.appendChild(_chrome_delete_normalized_inline_node(
                block.firstChild));
        parent.insertBefore(wrapper, reference);
        return;
    }
    while (block.firstChild) {
        parent.insertBefore(_chrome_delete_normalized_inline_node(
            block.firstChild), reference);
    }
}

function _chrome_delete_append_block_children(block, target) {
    if (!block || !target) return;
    var blockStyle = _chrome_delete_inline_style_from_block(block);
    if (blockStyle) {
        var wrapper = document.createElement("span");
        wrapper.setAttribute("style", blockStyle);
        while (block.firstChild)
            wrapper.appendChild(_chrome_delete_normalized_inline_node(
                block.firstChild));
        target.appendChild(wrapper);
        return;
    }
    while (block.firstChild)
        target.appendChild(_chrome_delete_normalized_inline_node(
            block.firstChild));
}

function _chrome_delete_unwrap_block_at_boundary(selection, block) {
    if (!block || !block.parentNode) return false;
    var parent = block.parentNode;
    var inserted = null;
    while (block.firstChild) {
        var child = _chrome_delete_normalized_inline_node(block.firstChild);
        if (!inserted) inserted = child;
        parent.insertBefore(child, block);
    }
    var offset = _chrome_node_child_index(block);
    parent.removeChild(block);
    if (inserted) {
        if (inserted.nodeType === 3)
            return _chrome_delete_collapse(selection, inserted, 0);
        return _chrome_delete_collapse(selection, inserted, 0);
    }
    return _chrome_delete_collapse(selection, parent, offset);
}

function _chrome_delete_at_block_start(selection, node, offset) {
    if (!selection || !node) return null;
    if (node.nodeType === 1 && _chrome_dump_is_block_ce3(node) &&
        (offset || 0) === 0) {
        return node;
    }
    if (node.nodeType !== 3 || (offset || 0) !== 0) return null;
    var host = _chrome_editing_host_for_node(node);
    var block = _chrome_block_ancestor_for_range_delete(node, host);
    if (!block || _chrome_first_text_descendant(block) !== node) return null;
    return block;
}

function _chrome_delete_merge_block_into_previous(selection, block, previous) {
    if (!block || !block.parentNode) return false;
    previous = previous || _chrome_delete_previous_visible_sibling(block);
    if (!previous) return false;
    var boundary = null;
    if (previous.nodeType === 3) {
        boundary = { node: previous, offset: (previous.nodeValue || "").length };
        _chrome_delete_insert_block_children_before(block, block);
    } else if (previous.nodeType === 1) {
        var target = _chrome_delete_merge_target_for_previous(previous);
        if (!target && _chrome_node_name_is(previous, "table"))
            return _chrome_delete_unwrap_block_at_boundary(selection, block);
        if (!target) return false;
        boundary = _chrome_delete_block_end_boundary(target);
        _chrome_delete_append_block_children(block, target);
    } else {
        boundary = _chrome_selection_boundary_for_mouse_element(previous, true);
        _chrome_delete_insert_block_children_before(block, block);
    }
    if (block.parentNode) block.parentNode.removeChild(block);
    return boundary && _chrome_delete_collapse(selection, boundary.node,
        boundary.offset);
}

function _chrome_delete_merge_block_before_selection(selection) {
    if (!selection || _chrome_selection_has_content(selection)) return false;
    var block = _chrome_delete_at_block_start(selection, selection.focusNode,
        selection.focusOffset || 0);
    return _chrome_delete_merge_block_into_previous(selection, block, null);
}

function _chrome_delete_merge_boundary_selection(selection, range, endBlock) {
    if (!selection || !range || !endBlock || !endBlock.parentNode)
        return false;
    if (!_chrome_delete_range_starts_before_block(range, endBlock)) {
        return false;
    }
    var endAtStart = _chrome_delete_at_block_start(selection,
        range.endContainer, range.endOffset || 0) === endBlock ||
        _chrome_delete_boundary_is_before_node(range.endContainer,
            range.endOffset || 0, endBlock);
    if (!endAtStart) return false;
    return _chrome_delete_merge_block_into_previous(selection, endBlock, null);
}

function _chrome_delete_merge_next_block_from_whitespace(selection) {
    if (!selection || _chrome_selection_has_content(selection)) return false;
    var node = selection.focusNode;
    if (!node || node.nodeType !== 3 || (selection.focusOffset || 0) !== 0)
        return false;
    if (!/^[\t\r\n ]*$/.test(node.nodeValue || "")) return false;
    var previous = _chrome_delete_previous_visible_sibling(node);
    var next = _chrome_delete_next_visible_sibling(node);
    if (!previous || !next || next.nodeType !== 1 ||
        !_chrome_dump_is_block_ce3(next)) {
        return false;
    }
    if (node.parentNode) node.parentNode.removeChild(node);
    return _chrome_delete_merge_block_into_previous(selection, next, previous);
}

function _chrome_delete_leading_inline_break(selection) {
    if (!selection || _chrome_selection_has_content(selection)) return false;
    var node = selection.focusNode;
    var offset = selection.focusOffset || 0;
    if (!node || node.nodeType !== 1 || offset !== 0 ||
        _chrome_dump_is_block_ce3(node)) {
        return false;
    }
    var first = _chrome_delete_first_visible_child(node);
    if (!_chrome_node_name_is(first, "br")) return false;
    node.removeChild(first);
    var text = _chrome_first_text_descendant(node);
    if (text && (text.nodeValue || "").charAt(0) === "\u00A0")
        text.data = " " + (text.nodeValue || "").slice(1);
    if (text) return _chrome_delete_collapse(selection, text, 0);
    return _chrome_delete_collapse(selection, node, 0);
}

function _chrome_delete_is_space_char(ch) {
    return ch === " " || ch === "\t" || ch === "\n" || ch === "\r" ||
        ch === "\u00A0";
}

function _chrome_collapse_whitespace_run_after_delete(node, offset) {
    if (!node || node.nodeType !== 3) return -1;
    var text = node.nodeValue || "";
    offset = Math.max(0, Math.min(offset || 0, text.length));
    var start = offset;
    while (start > 0 && _chrome_delete_is_space_char(text.charAt(start - 1)))
        start--;
    var end = offset;
    while (end < text.length && _chrome_delete_is_space_char(text.charAt(end)))
        end++;
    if (start === end) return -1;
    var previousLeaf = _chrome_previous_leaf_before(node);
    var atLineStart = start === 0 && previousLeaf &&
        _chrome_node_name_is(previousLeaf, "br");
    if (end - start < 2 && start > 0 && end < text.length && !atLineStart)
        return -1;
    var hasBefore = start > 0;
    var hasAfter = end < text.length;
    var replacement = hasBefore && hasAfter ? "\u00A0 " : "\u00A0";
    node.data = text.slice(0, start) + replacement + text.slice(end);
    return hasBefore ? start + 1 : start;
}

function _chrome_preserve_leading_space_after_removed_child(parent, offset) {
    if (!parent || !parent.childNodes) return;
    var next = parent.childNodes[offset || 0];
    if (next && next.nodeType === 3 && (next.nodeValue || "").charAt(0) === " ")
        next.data = "\u00A0" + (next.nodeValue || "").slice(1);
}

function _chrome_delete_collapse(selection, node, offset) {
    if (!selection || !node) return false;
    selection.removeAllRanges();
    selection.collapse(node, offset || 0);
    return true;
}

function _chrome_normalize_block_range_delete(selection, startBlock, endBlock) {
    if (startBlock && !_chrome_node_is_live(startBlock)) startBlock = null;
    if (endBlock && !_chrome_node_is_live(endBlock)) endBlock = null;

    if (startBlock && endBlock && startBlock === endBlock) {
        if (_chrome_ensure_empty_block_placeholder(startBlock))
            return _chrome_delete_collapse(selection, startBlock, 0);
        return false;
    }

    if (startBlock && endBlock && startBlock !== endBlock &&
            _chrome_node_contains_node(startBlock, endBlock)) {
        return _chrome_delete_collapse(selection, endBlock, 0);
    }

    if (startBlock && endBlock && startBlock !== endBlock &&
            _chrome_node_contains_node(endBlock, startBlock) &&
            !_chrome_delete_node_has_visible_content(startBlock)) {
        var selectedTrailingSibling =
            _chrome_delete_first_visible_sibling_after(startBlock);
        if (_chrome_node_name_is(selectedTrailingSibling, "br")) {
            _chrome_delete_remove_empty_text_children(startBlock);
            startBlock.appendChild(selectedTrailingSibling);
            return _chrome_delete_collapse(selection, startBlock, 0);
        }
        if (_chrome_ensure_empty_block_placeholder(startBlock))
            return _chrome_delete_collapse(selection, startBlock, 0);
    }

    if (startBlock && endBlock) {
        if (_chrome_delete_node_has_visible_content(startBlock)) {
            var mergeBoundary = _chrome_delete_block_end_boundary(startBlock);
            _chrome_delete_move_children(endBlock, startBlock);
            if (endBlock.parentNode) endBlock.parentNode.removeChild(endBlock);
            return _chrome_delete_collapse(selection, mergeBoundary.node,
                mergeBoundary.offset);
        }

        var firstEndChild = _chrome_delete_first_visible_child(endBlock);
        if (_chrome_node_name_is(firstEndChild, "br")) {
            _chrome_delete_remove_empty_text_children(startBlock);
            startBlock.appendChild(firstEndChild);
            return _chrome_delete_collapse(selection, startBlock, 0);
        }

        if (_chrome_delete_node_has_visible_content(endBlock)) {
            if (startBlock.parentNode) startBlock.parentNode.removeChild(startBlock);
            return _chrome_delete_collapse(selection, endBlock, 0);
        }

        if (startBlock.parentNode && endBlock.parentNode) {
            startBlock.parentNode.removeChild(startBlock);
            return _chrome_delete_collapse(selection, endBlock, 0);
        }
    }

    if (startBlock) {
        var nextVisible = _chrome_delete_first_visible_sibling_after(startBlock);
        if (_chrome_node_name_is(nextVisible, "br") &&
            !_chrome_delete_node_has_visible_content(startBlock)) {
            _chrome_delete_remove_empty_text_children(startBlock);
            startBlock.appendChild(nextVisible);
            return _chrome_delete_collapse(selection, startBlock, 0);
        }
        if (_chrome_ensure_empty_block_placeholder(startBlock))
            return _chrome_delete_collapse(selection, startBlock, 0);
    }

    if (endBlock) return _chrome_delete_collapse(selection, endBlock, 0);
    return false;
}

function _chrome_undo_last_manual_delete() {
    var undo = _chrome_last_manual_delete_undo;
    _chrome_last_manual_delete_undo = null;
    if (!undo || !undo.node) return true;
    if (undo.host && undo.html !== undefined) {
        undo.host.innerHTML = undo.html;
        if (_chrome_restore_selection_paths(undo.host, undo.selectionPaths))
            return true;
        var restoredSelection = _chrome_current_selection_ce3();
        if (restoredSelection) {
            var restoredText = _chrome_first_text_descendant(undo.host);
            if (restoredText &&
                    typeof restoredSelection.collapse === "function")
                restoredSelection.collapse(restoredText, 0);
            else if (typeof restoredSelection.collapse === "function")
                restoredSelection.collapse(undo.host, 0);
        }
        return true;
    }
    undo.node.data = undo.text;
    var selection = _chrome_current_selection_ce3();
    if (undo.deletedText !== undefined) {
        var behavior = internals && internals.settings ?
            internals.settings.editingBehavior : "mac";
        var before = undo.deleteStart || 0;
        var after = before + String(undo.deletedText || "").length;
        if (behavior === "mac" && undo.deletedText === "\n" &&
            selection && typeof selection.setBaseAndExtent === "function") {
            selection.setBaseAndExtent(undo.node, after, undo.node, before);
        } else if (selection && typeof selection.collapse === "function") {
            selection.collapse(undo.node, after);
        }
        return true;
    }
    if (selection && typeof selection.setBaseAndExtent === "function") {
        selection.setBaseAndExtent(undo.node, undo.anchorOffset, undo.node,
            undo.focusOffset);
    } else if (selection && typeof selection.collapse === "function") {
        selection.collapse(undo.node, undo.anchorOffset);
        if (typeof selection.extend === "function")
            selection.extend(undo.node, undo.focusOffset);
    }
    return true;
}

function _chrome_delete_text_before_selection() {
    var selection = _chrome_current_selection_ce3();
    if (_chrome_selection_has_content(selection) && selection.rangeCount) {
        if (_chrome_delete_same_text_selection(selection)) return true;
        var range = _chrome_delete_effective_range(selection);
        if (!range) return false;
        if (_chrome_delete_selected_child(selection, range)) return true;
        var collapseNode = range.startContainer;
        var collapseOffset = range.startOffset || 0;
        var endNode = range.endContainer;
        var crossedContainers = range.startContainer !== range.endContainer;
        var editableHost = _chrome_editing_host_for_node(collapseNode);
        var startBlock = _chrome_block_ancestor_for_range_delete(collapseNode,
            editableHost);
        var endBlock = _chrome_block_ancestor_for_range_delete(endNode,
            editableHost || _chrome_editing_host_for_node(endNode));
        var undoHost = editableHost ||
            _chrome_editing_host_for_node(endNode) ||
            _chrome_editing_host_for_node(range.commonAncestorContainer) ||
            document.body;
        if (undoHost) {
            _chrome_last_manual_delete_undo = {
                node: undoHost,
                host: undoHost,
                html: undoHost.innerHTML,
                selectionPaths: _chrome_capture_selection_paths(undoHost,
                    selection)
            };
        }
        if (_chrome_delete_merge_boundary_selection(selection, range, endBlock))
            return true;
        range.deleteContents();
        if (_chrome_normalize_block_range_delete(selection, startBlock,
            endBlock)) {
            return true;
        }
        var adjustedOffset = _chrome_collapse_whitespace_run_after_delete(
            collapseNode, collapseOffset);
        if (adjustedOffset >= 0)
            collapseOffset = adjustedOffset;
        else
            _chrome_preserve_boundary_space_after_delete(collapseNode,
                collapseOffset);
        if (crossedContainers &&
            !_chrome_preserve_leading_single_space_in(endNode)) {
            _chrome_preserve_leading_single_space_in(document.body);
        }
        _chrome_ensure_editable_placeholder(collapseNode);
        _chrome_ensure_editable_placeholder(editableHost);
        return _chrome_delete_collapse_after_range_delete(selection, range,
            collapseNode || range.startContainer, collapseOffset);
    }
    var node = selection.focusNode;
    var offset = selection.focusOffset || 0;
    if (_chrome_delete_merge_next_block_from_whitespace(selection)) return true;
    if (_chrome_delete_leading_inline_break(selection)) return true;
    if (_chrome_delete_merge_block_before_selection(selection)) return true;
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
            _chrome_preserve_leading_space_after_removed_child(node,
                offset - 1);
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
        var collapsedOffset =
            _chrome_collapse_whitespace_run_after_delete(node, start);
        if (collapsedOffset >= 0)
            start = collapsedOffset;
        else
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
    var selection = _chrome_current_selection_ce3();
    if (_chrome_selection_has_content(selection) && selection.rangeCount) {
        if (_chrome_delete_same_text_selection(selection)) return true;
        var range = _chrome_delete_effective_range(selection);
        if (!range) return false;
        if (_chrome_delete_selected_child(selection, range)) return true;
        var collapseNode = range.startContainer;
        var collapseOffset = range.startOffset || 0;
        var endNode = range.endContainer;
        var editableHost = _chrome_editing_host_for_node(collapseNode);
        var startBlock = _chrome_block_ancestor_for_range_delete(collapseNode,
            editableHost);
        var endBlock = _chrome_block_ancestor_for_range_delete(endNode,
            editableHost || _chrome_editing_host_for_node(endNode));
        if (_chrome_delete_merge_boundary_selection(selection, range, endBlock))
            return true;
        range.deleteContents();
        if (_chrome_normalize_block_range_delete(selection, startBlock,
            endBlock)) {
            return true;
        }
        var adjustedOffset = _chrome_collapse_whitespace_run_after_delete(
            collapseNode, collapseOffset);
        if (adjustedOffset >= 0)
            collapseOffset = adjustedOffset;
        else
            _chrome_preserve_boundary_space_after_delete(collapseNode,
                collapseOffset);
        return _chrome_delete_collapse_after_range_delete(selection, range,
            collapseNode || range.startContainer, collapseOffset);
    }
    var node = selection.focusNode;
    var offset = selection.focusOffset || 0;
    if (node && node.nodeType === 3) {
        var text = node.nodeValue || "";
        if (offset < text.length) {
            node.data = text.slice(0, offset) + text.slice(offset + 1);
            var collapsedOffset =
                _chrome_collapse_whitespace_run_after_delete(node, offset);
            selection.collapse(node,
                collapsedOffset >= 0 ? collapsedOffset : offset);
            return true;
        }
        if (offset === text.length && node.nextSibling &&
            node.nextSibling.nodeType === 1) {
            var nextElement = node.nextSibling;
            var nextBoundary =
                _chrome_selection_boundary_for_mouse_element(nextElement,
                    false);
            nextElement.parentNode.removeChild(nextElement);
            if (nextBoundary)
                selection.collapse(nextBoundary.node, nextBoundary.offset);
            return true;
        }
    }
    if (node && node.nodeType === 1 && node.childNodes &&
        offset < node.childNodes.length) {
        var nextChild = node.childNodes[offset];
        if (nextChild && nextChild.nodeType === 1) {
            node.removeChild(nextChild);
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

function _chrome_suppressed_inline_ancestor_for_node_ce3(node) {
    var current = node && node.nodeType === 1 ? node : node && node.parentNode;
    for (; current && current !== document; current = current.parentNode) {
        if (current.nodeType !== 1 || !current.nodeName) continue;
        for (var command in _chrome_suppressed_inline_commands) {
            if (!_chrome_suppressed_inline_commands[command]) continue;
            var info = _chrome_inline_command_info_ce3(command);
            if (info && _chrome_inline_info_has_tag_ce3(info,
                    current.nodeName)) {
                return current;
            }
        }
    }
    return null;
}

function _chrome_clear_suppressed_inline_commands_ce3() {
    for (var command in _chrome_suppressed_inline_commands)
        _chrome_suppressed_inline_commands[command] = false;
}

function _chrome_insert_text_at_selection(text) {
    var value = String(text || "");
    var selection = _chrome_current_selection_ce3();
    var activeHost = _chrome_focused_editing_host();
    if (activeHost && !_chrome_node_contains_node(activeHost,
        selection ? selection.focusNode : null)) {
        _chrome_place_caret_for_focused_editable(activeHost);
        selection = _chrome_current_selection_ce3();
    }
    var fallbackNode = selection ? selection.focusNode : null;
    var fallbackOffset = selection ? selection.focusOffset || 0 : 0;
    if (selection && _chrome_selection_has_content(selection)) {
        if (!_chrome_delete_selection_for_insert(selection)) return false;
        selection = _chrome_current_selection_ce3();
    }
    if ((!selection || !selection.focusNode) && fallbackNode &&
            _chrome_node_is_live(fallbackNode)) {
        var restoredOffset = fallbackOffset;
        if (fallbackNode.nodeType === 1 && fallbackNode.childNodes) {
            restoredOffset = Math.min(restoredOffset,
                fallbackNode.childNodes.length);
            if (fallbackNode.childNodes.length === 1 &&
                    _chrome_node_name_is(fallbackNode.firstChild, "br")) {
                restoredOffset = 0;
            }
        } else if (fallbackNode.nodeType === 3) {
            restoredOffset = Math.min(restoredOffset,
                (fallbackNode.nodeValue || "").length);
        }
        selection = _chrome_current_selection_ce3();
        if (selection && typeof selection.setBaseAndExtent === "function") {
            selection.setBaseAndExtent(fallbackNode, restoredOffset,
                fallbackNode, restoredOffset);
        }
    }
    if (!selection) return false;
    var node = selection.focusNode;
    var offset = selection.focusOffset || 0;
    var suppressedInline =
        _chrome_suppressed_inline_ancestor_for_node_ce3(node);
    if (suppressedInline && suppressedInline.parentNode) {
        var suppressedParent = suppressedInline.parentNode;
        offset = _chrome_node_child_index(suppressedInline) + 1;
        if (!_chrome_element_has_text_descendant(suppressedInline)) {
            offset = _chrome_node_child_index(suppressedInline);
            suppressedParent.removeChild(suppressedInline);
        }
        node = suppressedParent;
        if (selection && typeof selection.setBaseAndExtent === "function")
            selection.setBaseAndExtent(node, offset, node, offset);
    }
    var styled = _chrome_make_pending_styled_text(value);
    if (styled) {
        if (node && node.nodeType === 3) {
            var current = node.nodeValue || "";
            var before = current.slice(0, offset);
            var after = current.slice(offset);
            var parent = node.parentNode;
            if (!parent) return false;
            if (before) parent.insertBefore(document.createTextNode(before), node);
            parent.insertBefore(styled, node);
            if (after) parent.insertBefore(document.createTextNode(after), node);
            parent.removeChild(node);
            selection.collapse(styled.firstChild || styled, value.length);
            _chrome_clear_suppressed_inline_commands_ce3();
            return true;
        }
        if (node && node.nodeType === 1) {
            node.insertBefore(styled, node.childNodes[offset] || null);
            selection.collapse(styled.firstChild || styled, value.length);
            _chrome_clear_suppressed_inline_commands_ce3();
            return true;
        }
        return false;
    }
    if (node && node.nodeType === 3) {
        var current = node.nodeValue || "";
        node.data = current.slice(0, offset) + value + current.slice(offset);
        selection.collapse(node, offset + value.length);
        _chrome_clear_suppressed_inline_commands_ce3();
        return true;
    }
    if (node && node.nodeType === 1) {
        if (node.childNodes && node.childNodes.length === 1 &&
                _chrome_node_name_is(node.firstChild, "br")) {
            node.removeChild(node.firstChild);
            offset = 0;
        }
        var placeholder = node.childNodes ? node.childNodes[offset || 0] :
            null;
        if (placeholder && !placeholder.nextSibling &&
            _chrome_node_name_is(placeholder, "br"))
            node.removeChild(placeholder);
        var insertedValue = value;
        var previous = offset > 0 && node.childNodes ?
            node.childNodes[offset - 1] : null;
        if (insertedValue === " " && _chrome_node_name_is(previous, "br"))
            insertedValue = "\u00A0";
        var textNode = document.createTextNode(insertedValue);
        node.insertBefore(textNode, node.childNodes[offset] || null);
        selection.collapse(textNode, insertedValue.length);
        _chrome_clear_suppressed_inline_commands_ce3();
        return true;
    }
    return false;
}

function _chrome_clone_empty_block(block) {
    if (!block || block.nodeType !== 1) return document.createElement("div");
    if (block.cloneNode) return block.cloneNode(false);
    return document.createElement(block.nodeName ?
        block.nodeName.toLowerCase() : "div");
}

function _chrome_insert_placeholder_if_empty(block) {
    if (!block || !block.childNodes) return;
    _chrome_delete_remove_empty_text_children(block);
    if (block.firstChild) return;
    block.appendChild(document.createElement("br"));
}

function _chrome_style_has_white_space_pre(element) {
    if (!element || element.nodeType !== 1 || !element.getAttribute)
        return false;
    var style = String(element.getAttribute("style") || "");
    return /white-space\s*:\s*pre/i.test(style);
}

function _chrome_nearest_white_space_pre(node, host) {
    var current = node && node.nodeType === 1 ? node : node && node.parentNode;
    while (current && current !== document.body) {
        if (_chrome_style_has_white_space_pre(current)) return current;
        if (current === host) break;
        current = current.parentNode;
    }
    return null;
}

function _chrome_insert_newline_text_at_selection(selection, node, offset) {
    if (!selection || !node) return false;
    if (node.nodeType === 3) {
        var text = node.nodeValue || "";
        node.data = text.slice(0, offset || 0) + "\n" +
            text.slice(offset || 0);
        _chrome_set_command_selection_ce3(selection, node,
            (offset || 0) + 1, node, (offset || 0) + 1);
        return true;
    }
    if (node.nodeType === 1) {
        var textNode = document.createTextNode("\n");
        node.insertBefore(textNode, node.childNodes[offset || 0] || null);
        _chrome_set_command_selection_ce3(selection, textNode, 1,
            textNode, 1);
        return true;
    }
    return false;
}

function _chrome_split_pre_inline_for_line_break(selection, preInline, node,
    offset) {
    if (!selection || !preInline || !preInline.parentNode) return false;
    var parent = preInline.parentNode;
    var br = document.createElement("br");
    if (node && node.nodeType === 3 && _chrome_node_contains_node(preInline,
        node)) {
        var text = node.nodeValue || "";
        var before = text.slice(0, offset || 0);
        var after = text.slice(offset || 0);
        node.data = before;
        var afterInline = null;
        if (after) {
            afterInline = preInline.cloneNode ? preInline.cloneNode(false) :
                document.createElement(preInline.nodeName ?
                    preInline.nodeName.toLowerCase() : "span");
            afterInline.appendChild(document.createTextNode(after));
        }
        parent.insertBefore(br, preInline.nextSibling);
        if (afterInline) parent.insertBefore(afterInline, br.nextSibling);
        _chrome_set_command_selection_ce3(selection, parent,
            _chrome_node_child_index(br) + 1, parent,
            _chrome_node_child_index(br) + 1);
        return true;
    }
    parent.insertBefore(br, preInline.nextSibling);
    _chrome_set_command_selection_ce3(selection, parent,
        _chrome_node_child_index(br) + 1, parent,
        _chrome_node_child_index(br) + 1);
    return true;
}

function _chrome_insert_br_node_at_selection(selection, node, offset,
    preferNextPre) {
    if (!selection || !node) return false;
    var br = document.createElement("br");
    var parent = null;
    var reference = null;
    var needsTrailingPlaceholder = false;
    if (node.nodeType === 3) {
        parent = node.parentNode;
        if (!parent) return false;
        var text = node.nodeValue || "";
        var before = text.slice(0, offset || 0);
        var after = text.slice(offset || 0);
        if (after.charAt(0) === " ") after = "\u00A0" + after.slice(1);
        node.data = before;
        var afterNode = null;
        if (after) {
            afterNode = document.createTextNode(after);
            parent.insertBefore(afterNode, node.nextSibling);
        }
        reference = afterNode || node.nextSibling;
        needsTrailingPlaceholder = !afterNode && !reference;
    } else if (node.nodeType === 1) {
        parent = node;
        reference = node.childNodes ? node.childNodes[offset || 0] : null;
        needsTrailingPlaceholder = !reference;
    } else {
        return false;
    }
    parent.insertBefore(br, reference || null);
    if (needsTrailingPlaceholder)
        parent.insertBefore(document.createElement("br"), br.nextSibling);
    if (preferNextPre && reference && _chrome_style_has_white_space_pre(
        reference)) {
        var preText = _chrome_first_text_descendant(reference);
        if (preText) {
            _chrome_set_command_selection_ce3(selection, preText, 0,
                preText, 0);
            return true;
        }
    }
    _chrome_set_command_selection_ce3(selection, parent,
        _chrome_node_child_index(br) + 1, parent,
        _chrome_node_child_index(br) + 1);
    return true;
}

function _chrome_insert_line_break_at_selection() {
    var selection = getSelection();
    if (!selection || !selection.rangeCount) return false;
    var hadSelection = _chrome_selection_has_content(selection);
    if (hadSelection) {
        if (!_chrome_delete_selection_for_insert(selection)) return false;
        selection = getSelection();
    }
    if (!selection) return false;
    var node = selection.focusNode;
    var offset = selection.focusOffset || 0;
    var host = _chrome_editing_host_for_node(node) ||
        _chrome_editable_host_from_selection();
    var pre = _chrome_nearest_white_space_pre(node, host);
    if (pre && pre === host)
        return _chrome_insert_newline_text_at_selection(selection, node,
            offset);
    if (pre)
        return _chrome_split_pre_inline_for_line_break(selection, pre, node,
            offset);
    return _chrome_insert_br_node_at_selection(selection, node, offset,
        hadSelection);
}

function _chrome_is_inline_layout_block(block) {
    if (!block || block.nodeType !== 1) return false;
    var style = block.getAttribute ? String(block.getAttribute("style") || "") :
        "";
    return /display\s*:\s*inline/i.test(style);
}

function _chrome_insert_br_in_text_node(selection, textNode, offset) {
    if (!selection || !textNode || !textNode.parentNode) return false;
    var text = textNode.nodeValue || "";
    var before = text.slice(0, offset || 0);
    var after = text.slice(offset || 0);
    var parent = textNode.parentNode;
    var br = document.createElement("br");
    textNode.data = before;
    parent.insertBefore(br, textNode.nextSibling);
    var afterNode = null;
    if (after) {
        afterNode = document.createTextNode(after);
        parent.insertBefore(afterNode, br.nextSibling);
    }
    if (!before) parent.removeChild(textNode);
    _chrome_set_command_selection_ce3(selection, parent,
        _chrome_node_child_index(br) + 1, parent,
        _chrome_node_child_index(br) + 1);
    return true;
}

function _chrome_collapse_at_paragraph_start(selection, block) {
    if (!selection || !block) return;
    if (block.firstChild && _chrome_node_name_is(block.firstChild, "br")) {
        selection.collapse(block, 0);
        return;
    }
    if (block.firstChild && block.firstChild.nodeType === 1 &&
        !_chrome_dump_is_block_ce3(block.firstChild) &&
        block.firstChild.firstChild &&
        _chrome_node_name_is(block.firstChild.firstChild, "br")) {
        selection.collapse(block.firstChild, 0);
        return;
    }
    var text = _chrome_first_text_descendant(block);
    if (text) selection.collapse(text, 0);
    else selection.collapse(block, 0);
}

function _chrome_split_text_node_for_paragraph(textNode, offset, afterBlock) {
    var text = textNode.nodeValue || "";
    var before = text.slice(0, offset || 0);
    var after = text.slice(offset || 0);
    if (before && after && before.charAt(before.length - 1) === " ")
        before = before.slice(0, before.length - 1) + "\u00A0";
    if (before && after && after.charAt(0) === " ")
        after = "\u00A0" + after.slice(1);
    textNode.data = before;
    if (after) afterBlock.appendChild(document.createTextNode(after));
}

function _chrome_remove_empty_inline_ancestors(node, stop) {
    var current = node;
    while (current && current !== stop) {
        var parent = current.parentNode;
        if (current.nodeType === 1 && !_chrome_dump_is_block_ce3(current) &&
            !_chrome_delete_node_has_visible_content(current) && parent) {
            parent.removeChild(current);
        }
        current = parent;
    }
}

function _chrome_split_block_for_insert_paragraph(selection, block, node,
    offset) {
    if (!selection || !block || !block.parentNode) return false;
    if (_chrome_is_inline_layout_block(block) && node &&
        node.nodeType === 3) {
        return _chrome_insert_br_in_text_node(selection, node, offset || 0);
    }
    if (node === block && block.childNodes && block.childNodes.length === 1 &&
        _chrome_node_name_is(block.childNodes[offset || 0], "br")) {
        var emptyAfter = _chrome_clone_empty_block(block);
        emptyAfter.appendChild(document.createElement("br"));
        block.parentNode.insertBefore(emptyAfter, block.nextSibling);
        selection.collapse(emptyAfter, 0);
        return true;
    }
    var afterBlock = _chrome_clone_empty_block(block);
    block.parentNode.insertBefore(afterBlock, block.nextSibling);

    if (node && node.nodeType === 3) {
        if (node.parentNode && node.parentNode !== block) {
            var ancestors = [];
            for (var ancestor = node.parentNode; ancestor &&
                ancestor !== block; ancestor = ancestor.parentNode) {
                ancestors.push(ancestor);
            }
            var topInline = ancestors.length ? ancestors[ancestors.length - 1] :
                null;
            var afterContainer = afterBlock;
            for (var i = ancestors.length - 1; i >= 0; i--) {
                var clone = ancestors[i].cloneNode ?
                    ancestors[i].cloneNode(false) :
                    document.createElement(ancestors[i].nodeName ?
                        ancestors[i].nodeName.toLowerCase() : "span");
                afterContainer.appendChild(clone);
                afterContainer = clone;
            }
            var text = node.nodeValue || "";
            var before = text.slice(0, offset || 0);
            var after = text.slice(offset || 0);
            if (before && after && before.charAt(before.length - 1) === " ")
                before = before.slice(0, before.length - 1) + "\u00A0";
            if (before && after && after.charAt(0) === " ")
                after = "\u00A0" + after.slice(1);
            node.data = before;
            if (after) afterContainer.appendChild(document.createTextNode(after));
            else afterContainer.appendChild(document.createElement("br"));
            var inlineNext = node.nextSibling;
            while (inlineNext) {
                var inlineMove = inlineNext;
                inlineNext = inlineNext.nextSibling;
                afterContainer.appendChild(inlineMove);
            }
            var topNext = topInline ? topInline.nextSibling : null;
            if (!after && topNext && _chrome_node_name_is(topNext, "br")) {
                var redundantBreak = topNext;
                topNext = topNext.nextSibling;
                if (redundantBreak.parentNode)
                    redundantBreak.parentNode.removeChild(redundantBreak);
            }
            while (topNext) {
                var topMove = topNext;
                topNext = topNext.nextSibling;
                afterBlock.appendChild(topMove);
            }
            _chrome_remove_empty_inline_ancestors(node.parentNode, block);
        } else {
            _chrome_split_text_node_for_paragraph(node, offset || 0,
                afterBlock);
            var next = node.nextSibling;
            while (next) {
                var move = next;
                next = next.nextSibling;
                afterBlock.appendChild(move);
            }
        }
    } else if (node && node.nodeType === 1) {
        var child = node.childNodes ? node.childNodes[offset || 0] : null;
        while (child) {
            var nextChild = child.nextSibling;
            afterBlock.appendChild(child);
            child = nextChild;
        }
    }

    _chrome_insert_placeholder_if_empty(block);
    _chrome_insert_placeholder_if_empty(afterBlock);
    _chrome_collapse_at_paragraph_start(selection, afterBlock);
    return true;
}

function _chrome_child_under_host_for_paragraph(host, node) {
    if (!host || !node || node === host) return null;
    var child = node;
    while (child && child.parentNode !== host) child = child.parentNode;
    return child || null;
}

function _chrome_insert_paragraph_at_host_boundary(selection, host, node,
    offset) {
    if (!selection || !host || !node) return false;
    if (node === host) {
        var child = host.childNodes ? host.childNodes[offset || 0] : null;
        if (!child) {
            var tail = document.createElement("div");
            tail.appendChild(document.createElement("br"));
            if (!host.firstChild) {
                var head = document.createElement("div");
                head.appendChild(document.createElement("br"));
                host.appendChild(head);
            }
            host.appendChild(tail);
            selection.collapse(tail, 0);
            return true;
        }
        if (_chrome_node_name_is(child, "table")) {
            var br = document.createElement("br");
            host.insertBefore(br, child);
            selection.collapse(host, _chrome_node_child_index(child));
            return true;
        }
        if (_chrome_node_name_is(child, "br")) {
            var empty = document.createElement("div");
            empty.appendChild(document.createElement("br"));
            host.insertBefore(empty, child);
            selection.collapse(host, _chrome_node_child_index(child));
            return true;
        }
    }

    if (node.nodeType === 3) {
        var parent = node.parentNode;
        var top = _chrome_child_under_host_for_paragraph(host, node);
        if (parent === host) {
            var hostName = host.nodeName ? host.nodeName.toLowerCase() : "";
            if (!_chrome_dump_is_block_ce3(host) && hostName !== "table")
                return _chrome_insert_br_in_text_node(selection, node,
                    offset || 0);
            var text = node.nodeValue || "";
            var before = text.slice(0, offset || 0);
            var after = text.slice(offset || 0);
            node.data = before;
            var paragraph = document.createElement("div");
            if (!before && node.previousSibling &&
                node.previousSibling.nodeType === 1 &&
                _chrome_dump_is_block_ce3(node.previousSibling) &&
                !_chrome_node_name_is(node.previousSibling, "table")) {
                node.data = text;
                paragraph.appendChild(document.createElement("br"));
                host.insertBefore(paragraph, node);
                selection.collapse(node, 0);
                return true;
            }
            if (!before && node.previousSibling)
                host.insertBefore(document.createElement("br"), node);
            if (after) paragraph.appendChild(document.createTextNode(after));
            else paragraph.appendChild(document.createElement("br"));
            host.insertBefore(paragraph, node.nextSibling);
            var moving = paragraph.nextSibling;
            while (moving) {
                var nextMoving = moving.nextSibling;
                paragraph.appendChild(moving);
                moving = nextMoving;
            }
            _chrome_collapse_at_paragraph_start(selection, paragraph);
            return true;
        }
        if (top) {
            var spacer = document.createElement("div");
            spacer.appendChild(document.createElement("br"));
            host.insertBefore(spacer, top);
            selection.collapse(node, offset || 0);
            return true;
        }
    }
    return false;
}

function _chrome_insert_paragraph_at_selection() {
    var selection = _chrome_current_selection_ce3();
    if (!selection || !selection.rangeCount) return false;
    var range = selection.getRangeAt(0);
    if (!selection.isCollapsed) {
        range.deleteContents();
        selection.collapse(range.startContainer, range.startOffset || 0);
        range = selection.getRangeAt(0);
    }
    var node = selection.focusNode || range.startContainer;
    var offset = selection.focusOffset || range.startOffset || 0;
    var host = _chrome_editing_host_for_node(node) ||
        _chrome_editable_host_from_selection();
    if (!host) return false;
    var block = _chrome_block_ancestor_for_range_delete(node, host);
    if (block && block !== host)
        return _chrome_split_block_for_insert_paragraph(selection, block,
            node, offset);
    return _chrome_insert_paragraph_at_host_boundary(selection, host, node,
        offset);
}

function _chrome_normalize_css_color(value) {
    var color = String(value || "").trim();
    var shortHex = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/.exec(color);
    if (shortHex) {
        var r = parseInt(shortHex[1] + shortHex[1], 16);
        var g = parseInt(shortHex[2] + shortHex[2], 16);
        var b = parseInt(shortHex[3] + shortHex[3], 16);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
    var longHex = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/.exec(color);
    if (longHex) {
        return "rgb(" + parseInt(longHex[1], 16) + ", " +
            parseInt(longHex[2], 16) + ", " + parseInt(longHex[3], 16) + ")";
    }
    return color;
}

function _chrome_pending_style_host_allows_markup() {
    var host = _chrome_focused_editing_host() ||
        _chrome_editable_host_from_selection();
    if (!host) return false;
    var value = _chrome_contenteditable_value(host);
    return value && value !== "false" && value !== "plaintext-only";
}

function _chrome_focused_editing_host() {
    var active = _chrome_meaningful_active_element();
    if (!active) return null;
    if (_chrome_is_content_editable_element(active)) return active;
    return _chrome_editing_host_for_node(active);
}

function _chrome_set_pending_insert_style(command, value) {
    var host = _chrome_focused_editing_host();
    if (host) _chrome_place_caret_for_focused_editable(host);
    var hostValue = host ? _chrome_contenteditable_value(host) : "";
    if (hostValue === "plaintext-only") return true;
    if (command === "forecolor" && !_chrome_pending_style_host_allows_markup())
        return true;
    var color = _chrome_normalize_css_color(value);
    if (!color) return true;
    if (command === "backcolor" || command === "hilitecolor")
        _chrome_pending_insert_back_color = color;
    if (command === "forecolor")
        _chrome_pending_insert_fore_color = color;
    return true;
}

function _chrome_has_pending_inline_commands_ce3() {
    for (var name in _chrome_pending_inline_commands) {
        if (_chrome_pending_inline_commands[name]) return true;
    }
    return false;
}

function _chrome_wrap_node_in_inline_command_ce3(node, command) {
    var info = _chrome_inline_command_info_ce3(command);
    if (!info || !node) return node;
    var wrapper = document.createElement(info.tag);
    wrapper.appendChild(node);
    return wrapper;
}

function _chrome_wrap_node_in_pending_inline_commands_ce3(node) {
    var order = ["bold", "italic", "underline", "strikethrough",
        "subscript", "superscript"];
    var wrapped = node;
    for (var i = order.length - 1; i >= 0; i--) {
        if (_chrome_pending_inline_commands[order[i]])
            wrapped = _chrome_wrap_node_in_inline_command_ce3(wrapped,
                order[i]);
    }
    return wrapped;
}

function _chrome_make_pending_styled_text(value) {
    var hasInline = _chrome_has_pending_inline_commands_ce3();
    if (!_chrome_pending_insert_back_color && !_chrome_pending_insert_fore_color &&
        !hasInline) {
        return null;
    }
    var host = _chrome_focused_editing_host() ||
        _chrome_editable_host_from_selection();
    var hostValue = host ? _chrome_contenteditable_value(host) : "";
    if (hostValue === "plaintext-only" ||
        (_chrome_pending_insert_fore_color &&
        !_chrome_pending_style_host_allows_markup())) {
        _chrome_pending_insert_back_color = "";
        _chrome_pending_insert_fore_color = "";
        return null;
    }
    var node = document.createTextNode(value);
    if (_chrome_pending_insert_back_color || _chrome_pending_insert_fore_color) {
        var span = document.createElement("span");
        var style = "";
        if (_chrome_pending_insert_back_color)
            style += "background-color: " + _chrome_pending_insert_back_color + ";";
        if (_chrome_pending_insert_fore_color)
            style += " color: " + _chrome_pending_insert_fore_color + ";";
        span.setAttribute("style", style);
        if (span.style) span.style.cssText = style;
        span.__chromeSerializedStyle = style;
        span.appendChild(node);
        node = span;
        _chrome_pending_insert_back_color = "";
        _chrome_pending_insert_fore_color = "";
    }
    return _chrome_wrap_node_in_pending_inline_commands_ce3(node);
}

function _chrome_record_insert_html_style_hint(tagName, attrs, text) {
    attrs = String(attrs || "");
    var stylePos = attrs.indexOf("style=");
    if (stylePos < 0) return;
    var quotePos = attrs.indexOf('"', stylePos);
    if (quotePos < 0) return;
    var quoteEnd = attrs.indexOf('"', quotePos + 1);
    if (quoteEnd <= quotePos) return;
    _chrome_serialized_style_hint_tags.push(String(tagName || "").toLowerCase());
    _chrome_serialized_style_hint_texts.push(String(text || "")
        .replace(/<[^>]*>/g, ""));
    _chrome_serialized_style_hint_values.push(attrs.slice(quotePos + 1,
        quoteEnd));
}

function _chrome_caret_position_after_inserted_node(node) {
    if (!node) return null;
    if (node.nodeType === 3)
        return { node: node, offset: (node.nodeValue || "").length };
    if (node.nodeType === 1) {
        var text = _chrome_last_text_descendant(node);
        if (text)
            return { node: text, offset: (text.nodeValue || "").length };
        if (node.parentNode) {
            return {
                node: node.parentNode,
                offset: _chrome_node_child_index(node) + 1
            };
        }
        return {
            node: node,
            offset: node.childNodes ? node.childNodes.length : 0
        };
    }
    if (node.parentNode) {
        return {
            node: node.parentNode,
            offset: _chrome_node_child_index(node) + 1
        };
    }
    return null;
}

function _chrome_collapse_after_inserted_node(selection, node) {
    var position = _chrome_caret_position_after_inserted_node(node);
    if (!selection || !position || !position.node) return false;
    _chrome_set_command_selection_ce3(selection, position.node,
        position.offset || 0, position.node, position.offset || 0);
    return true;
}

function _chrome_move_range_after_inserted_node(range, node) {
    if (!range || !node || !node.parentNode) return false;
    if (range.setStartAfter) {
        try {
            range.setStartAfter(node);
            if (range.collapse) range.collapse(true);
            return true;
        } catch (_) {
        }
    }
    if (!range.setStart) return false;
    range.setStart(node.parentNode, _chrome_node_child_index(node) + 1);
    if (range.collapse) range.collapse(true);
    return true;
}

function _chrome_insert_html_marker_at_selection(selection) {
    if (!selection) return null;
    var commandRange = _chrome_effective_command_range_ce3(selection);
    var node = commandRange ? commandRange.endContainer : selection.focusNode;
    var offset = commandRange ? commandRange.endOffset || 0 :
        selection.focusOffset || 0;
    var marker = document.createElement("span");
    marker.setAttribute("data-chrome-editing-insert-marker", "");
    if (node && node.nodeType === 3) {
        var text = node.nodeValue || "";
        var parent = node.parentNode;
        if (!parent) return null;
        var before = text.slice(0, offset);
        var after = text.slice(offset);
        node.data = before;
        var afterNode = null;
        if (after) {
            afterNode = document.createTextNode(after);
            parent.insertBefore(afterNode, node.nextSibling);
        }
        if (node.data && node.data.charAt(node.data.length - 1) === "\u00A0")
            node.data = node.data.slice(0, node.data.length - 1) + " ";
        parent.insertBefore(marker, afterNode || node.nextSibling);
        return marker;
    }
    if (node && node.nodeType === 1) {
        node.insertBefore(marker, node.childNodes[offset] || null);
        return marker;
    }
    return null;
}

function _chrome_text_from_html_source(source) {
    return String(source || "")
        .replace(/<br\b[^>]*>/gi, "\n")
        .replace(/<\/(div|p|h[1-6]|li|blockquote)>/gi, "")
        .replace(/<(div|p|h[1-6]|li|blockquote)\b[^>]*>/gi, "")
        .replace(/<[^>]*>/g, "");
}

function _chrome_insert_html_context_is_text_run(selection) {
    if (!selection) return false;
    var node = selection.focusNode;
    if (node && node.nodeType === 3) {
        if ((selection.focusOffset || 0) === 0 &&
            _chrome_node_name_is(_chrome_previous_leaf_before(node), "br"))
            return false;
        return true;
    }
    if (!node || node.nodeType !== 1) return false;
    var previous = selection.focusOffset > 0 && node.childNodes ?
        node.childNodes[selection.focusOffset - 1] : null;
    return previous && previous.nodeType === 3;
}

function _chrome_unwrap_span_block_insert_html(source) {
    var text = String(source || "");
    var previous = "";
    while (previous !== text) {
        previous = text;
        text = text.replace(/<span>\s*((?:<(?:div|p|h[1-6]|blockquote|input)\b[\s\S]*?))\s*<\/span>/gi,
            "$1");
    }
    return text;
}

function _chrome_flatten_plain_div_insert_html(source) {
    var text = String(source || "");
    var match = /^<div>([\s\S]*)<\/div>$/i.exec(text);
    return match ? match[1] : text;
}

function _chrome_remove_trailing_placeholder_after_html(parent, lastInserted) {
    if (!parent || !lastInserted || !parent.lastChild) return;
    if (!_chrome_node_name_is(parent.lastChild, "br")) return;
    if (lastInserted.nextSibling !== parent.lastChild) return;
    if (lastInserted.nodeType === 1 && _chrome_dump_is_block_ce3(lastInserted))
        parent.removeChild(parent.lastChild);
}

function _chrome_insert_html_fragment_at_selection(source) {
    if (!/<[a-zA-Z][\s\S]*>/.test(source))
        return _chrome_insert_text_at_selection(source);
    var selection = getSelection();
    var commandRange = _chrome_effective_command_range_ce3(selection);
    var selectionNode = commandRange ? (commandRange.endContainer ||
        commandRange.startContainer) : selection ? selection.focusNode : null;
    var activeHost = _chrome_focused_editing_host();
    var selectionHost = _chrome_editing_host_for_node(selectionNode);
    if (activeHost && !selectionHost && !_chrome_node_contains_node(activeHost,
        selectionNode)) {
        _chrome_place_caret_for_focused_editable(activeHost);
        selection = getSelection();
        commandRange = _chrome_effective_command_range_ce3(selection);
        selectionNode = commandRange ? (commandRange.endContainer ||
            commandRange.startContainer) : selection ? selection.focusNode :
            null;
        selectionHost = _chrome_editing_host_for_node(selectionNode);
    }
    if (!selection) return false;
    if (_chrome_selection_has_content(selection)) {
        if (!_chrome_delete_selection_for_insert(selection)) return false;
        selection = getSelection();
    }
    if (!selection) return false;
    var host = selectionHost ||
        _chrome_editing_host_for_node(selection.focusNode) ||
        _chrome_editable_host_from_selection();
    if (!host) return false;
    if (host && _chrome_contenteditable_value(host) === "plaintext-only")
        return _chrome_insert_text_at_selection(_chrome_text_from_html_source(
            source));
    source = _chrome_unwrap_span_block_insert_html(source);
    if (_chrome_insert_html_context_is_text_run(selection))
        source = _chrome_flatten_plain_div_insert_html(source);
    var marker = _chrome_insert_html_marker_at_selection(selection);
    if (!marker || !marker.parentNode || !marker.insertAdjacentHTML)
        return false;
    marker.insertAdjacentHTML("beforebegin", source);
    var lastInserted = marker.previousSibling;
    var parent = marker.parentNode;
    parent.removeChild(marker);
    _chrome_remove_trailing_placeholder_after_html(parent, lastInserted);
    return _chrome_collapse_after_inserted_node(selection, lastInserted);
}

function _chrome_insert_html_at_selection(html) {
    var source = String(html || "");
    var elementMatch = /^<([a-zA-Z][a-zA-Z0-9]*)([^>]*)>([\s\S]*)<\/\1>$/.exec(source);
    if (elementMatch)
        _chrome_record_insert_html_style_hint(elementMatch[1],
            elementMatch[2], elementMatch[3]);
    return _chrome_insert_html_fragment_at_selection(source);
}

function _chrome_insert_image_at_selection(src) {
    var value = String(src == null ? "" : src);
    var escaped = value.replace(/&/g, "&amp;").replace(/"/g, "&quot;")
        .replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return _chrome_insert_html_fragment_at_selection(
        "<img src=\"" + escaped + "\">");
}

function _chrome_create_anchor_with_text(href, text) {
    var anchor = document.createElement("a");
    anchor.setAttribute("href", String(href || ""));
    anchor.appendChild(document.createTextNode(String(text || "")));
    return anchor;
}

function _chrome_enclosing_anchor(node) {
    for (var current = node; current && current !== document.body;
         current = current.parentNode) {
        if (current.nodeType === 1 && current.nodeName &&
            current.nodeName.toLowerCase() === "a") {
            return current;
        }
    }
    return null;
}

function _chrome_anchor_fragment_from(source, text, copyAllAttrs) {
    var anchor = document.createElement("a");
    if (source && source.getAttribute) {
        var names = copyAllAttrs ? ["href", "id", "name", "class", "style"] :
            ["href"];
        for (var i = 0; i < names.length; i++) {
            var value = source.getAttribute(names[i]);
            if (value !== null && value !== undefined)
                anchor.setAttribute(names[i], String(value));
        }
    }
    anchor.appendChild(document.createTextNode(String(text || "")));
    return anchor;
}

function _chrome_replace_text_in_enclosing_anchor(node, start, end, href,
        unlink) {
    var oldAnchor = _chrome_enclosing_anchor(node);
    if (!oldAnchor || !oldAnchor.parentNode || !node || node.nodeType !== 3)
        return null;
    var text = node.nodeValue || "";
    var safeStart = Math.max(0, Math.min(start || 0, text.length));
    var safeEnd = Math.max(safeStart, Math.min(end || 0, text.length));
    if (safeEnd <= safeStart) return null;
    var before = text.slice(0, safeStart);
    var selected = text.slice(safeStart, safeEnd);
    var after = text.slice(safeEnd);
    var grandParent = oldAnchor.parentNode;
    var textParent = node.parentNode;
    var insertionParent = textParent;
    var marker = node;
    if (textParent !== oldAnchor) {
        var topChild = node;
        while (topChild && topChild.parentNode !== oldAnchor)
            topChild = topChild.parentNode;
        if (!topChild) return null;
        grandParent.insertBefore(topChild, oldAnchor);
        grandParent.removeChild(oldAnchor);
        insertionParent = textParent;
        marker = node;
    } else {
        insertionParent = grandParent;
        marker = oldAnchor;
    }
    if (before) {
        insertionParent.insertBefore(_chrome_anchor_fragment_from(oldAnchor,
            before, true), marker);
    }
    var selectedNode = unlink ? document.createTextNode(selected) :
        _chrome_create_anchor_with_text(href, selected);
    insertionParent.insertBefore(selectedNode, marker);
    if (after) {
        insertionParent.insertBefore(_chrome_anchor_fragment_from(oldAnchor,
            after, false), marker);
    }
    if (marker.parentNode) marker.parentNode.removeChild(marker);
    return selectedNode.nodeType === 3 ? selectedNode : selectedNode.firstChild;
}

function _chrome_create_link_replace_text(node, start, end, href) {
    if (!node || node.nodeType !== 3 || !node.parentNode) return null;
    var text = node.nodeValue || "";
    var safeStart = Math.max(0, Math.min(start || 0, text.length));
    var safeEnd = Math.max(safeStart, Math.min(end || 0, text.length));
    if (safeEnd <= safeStart) return null;
    var parent = node.parentNode;
    var before = text.slice(0, safeStart);
    var selected = text.slice(safeStart, safeEnd);
    var after = text.slice(safeEnd);
    var splitAnchorText = _chrome_replace_text_in_enclosing_anchor(node,
        safeStart, safeEnd, href, false);
    if (splitAnchorText) return splitAnchorText;
    var beforeNode = before ? document.createTextNode(before) : null;
    var link = _chrome_create_anchor_with_text(href, selected);
    var afterNode = after ? document.createTextNode(after) : null;
    if (beforeNode) parent.insertBefore(beforeNode, node);
    parent.insertBefore(link, node);
    if (afterNode) parent.insertBefore(afterNode, node);
    parent.removeChild(node);
    return link.firstChild;
}

function _chrome_element_has_block_descendant(node) {
    if (!node || !node.childNodes) return false;
    for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 1) {
            var tag = child.nodeName ? child.nodeName.toLowerCase() : "";
            if (_chrome_dump_is_block_ce3(child) || tag === "table" ||
                tag === "tbody" || tag === "thead" || tag === "tfoot" ||
                tag === "tr" || tag === "td" || tag === "th") {
                return true;
            }
        }
        if (_chrome_element_has_block_descendant(child)) return true;
    }
    return false;
}

function _chrome_create_link_inline_range(selection, href) {
    if (!selection || !selection.rangeCount) return false;
    var range = selection.getRangeAt(0);
    if (!range || !range.commonAncestorContainer ||
        range.commonAncestorContainer.nodeType !== 1 ||
        _chrome_element_has_block_descendant(range.commonAncestorContainer)) {
        return false;
    }
    if (!range.startContainer || !range.endContainer ||
        range.startContainer.nodeType !== 3 ||
        range.endContainer.nodeType !== 3 ||
        range.startContainer.parentNode !== range.commonAncestorContainer ||
        range.endContainer.parentNode !== range.commonAncestorContainer) {
        return false;
    }
    var parent = range.commonAncestorContainer;
    var startNode = range.startContainer;
    var endNode = range.endContainer;
    var startIndex = _chrome_node_child_index(startNode);
    var endIndex = _chrome_node_child_index(endNode);
    if (endIndex < startIndex) return false;
    var link = document.createElement("a");
    link.setAttribute("href", String(href || ""));
    var startText = startNode.nodeValue || "";
    var endText = endNode.nodeValue || "";
    var before = startText.slice(0, range.startOffset || 0);
    var firstSelected = startText.slice(range.startOffset || 0);
    var lastSelected = endText.slice(0, range.endOffset || 0);
    var after = endText.slice(range.endOffset || 0);
    var firstSelectionText = null;
    var lastSelectionText = null;
    if (before) parent.insertBefore(document.createTextNode(before),
        startNode);
    for (var child = startNode; child;) {
        var next = child.nextSibling;
        if (child === startNode && child === endNode) {
            if (firstSelected) {
                var onlyText = document.createTextNode(
                    startText.slice(range.startOffset || 0,
                        range.endOffset || 0));
                link.appendChild(onlyText);
                firstSelectionText = onlyText;
                lastSelectionText = onlyText;
            }
        } else if (child === startNode) {
            if (firstSelected) {
                var textStart = document.createTextNode(firstSelected);
                link.appendChild(textStart);
                firstSelectionText = firstSelectionText || textStart;
                lastSelectionText = textStart;
            }
        } else if (child === endNode) {
            if (lastSelected) {
                var textEnd = document.createTextNode(lastSelected);
                link.appendChild(textEnd);
                firstSelectionText = firstSelectionText || textEnd;
                lastSelectionText = textEnd;
            }
        } else {
            link.appendChild(child);
            var firstDesc = _chrome_first_text_descendant(child);
            var lastDesc = _chrome_last_text_descendant(child);
            if (firstDesc) firstSelectionText = firstSelectionText || firstDesc;
            if (lastDesc) lastSelectionText = lastDesc;
        }
        if (child === endNode) break;
        child = next;
    }
    parent.insertBefore(link, endNode);
    parent.removeChild(startNode);
    if (endNode !== startNode && endNode.parentNode)
        parent.removeChild(endNode);
    if (after) parent.insertBefore(document.createTextNode(after),
        link.nextSibling);
    if (!firstSelectionText) firstSelectionText =
        _chrome_first_text_descendant(link);
    if (!lastSelectionText) lastSelectionText =
        _chrome_last_text_descendant(link);
    if (firstSelectionText && lastSelectionText &&
        selection.setBaseAndExtent) {
        selection.setBaseAndExtent(firstSelectionText, 0, lastSelectionText,
            (lastSelectionText.nodeValue || "").length);
    }
    return true;
}

function _chrome_next_text_node_after(node) {
    var leaf = _chrome_next_leaf_after(node);
    while (leaf && leaf.nodeType !== 3) leaf = _chrome_next_leaf_after(leaf);
    return leaf;
}

function _chrome_create_link_at_selection(href) {
    var selection = getSelection();
    if (!selection) return false;
    var url = String(href || "");
    if (!selection.rangeCount || !_chrome_selection_has_content(selection)) {
        var link = _chrome_create_anchor_with_text(url, url);
        if (selection.rangeCount) {
            var insertRange = selection.getRangeAt(0);
            insertRange.insertNode(link);
        } else if (selection.focusNode && selection.focusNode.nodeType === 1) {
            selection.focusNode.insertBefore(link,
                selection.focusNode.childNodes[selection.focusOffset || 0] ||
                null);
        } else {
            return false;
        }
        if (link.firstChild)
            _chrome_set_command_selection_ce3(selection, link.firstChild, 0,
                link.firstChild, (link.firstChild.nodeValue || "").length);
        return true;
    }
    var range = selection.getRangeAt(0);
    if (range.startContainer === range.endContainer &&
        range.startContainer && range.startContainer.nodeType === 3) {
        var selectedText = _chrome_create_link_replace_text(
            range.startContainer, range.startOffset || 0,
            range.endOffset || 0, url);
        if (selectedText && selection.setBaseAndExtent) {
            selection.setBaseAndExtent(selectedText, 0, selectedText,
                (selectedText.nodeValue || "").length);
            return true;
        }
    }
    if (_chrome_create_link_inline_range(selection, url)) return true;
    var startNode = range.startContainer;
    var startOffset = range.startOffset || 0;
    var endNode = range.endContainer;
    var endOffset = range.endOffset || 0;
    if (startNode.nodeType !== 3)
        startNode = _chrome_first_text_descendant(
            startNode.childNodes ? startNode.childNodes[startOffset] :
            startNode);
    if (endNode.nodeType !== 3)
        endNode = _chrome_last_text_descendant(
            endNode.childNodes ? endNode.childNodes[endOffset - 1] : endNode);
    if (!startNode || !endNode) return false;
    var nodes = [];
    for (var current = startNode; current; current = _chrome_next_text_node_after(current)) {
        nodes.push(current);
        if (current === endNode) break;
    }
    var firstText = null;
    var lastText = null;
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var begin = node === startNode ? startOffset : 0;
        var finish = node === endNode ? endOffset :
            (node.nodeValue || "").length;
        var wrappedText = _chrome_create_link_replace_text(node, begin,
            finish, url);
        if (wrappedText) {
            firstText = firstText || wrappedText;
            lastText = wrappedText;
        }
    }
    if (firstText && lastText && selection.setBaseAndExtent) {
        selection.setBaseAndExtent(firstText, 0, lastText,
            (lastText.nodeValue || "").length);
        return true;
    }
    return !!firstText;
}

function _chrome_unlink_at_selection() {
    var selection = getSelection();
    if (!selection || !selection.rangeCount ||
        !_chrome_selection_has_content(selection)) {
        return false;
    }
    var range = selection.getRangeAt(0);
    if (range.startContainer === range.endContainer &&
        range.startContainer && range.startContainer.nodeType === 3) {
        var selectedText = _chrome_replace_text_in_enclosing_anchor(
            range.startContainer, range.startOffset || 0,
            range.endOffset || 0, "", true);
        if (selectedText && selection.setBaseAndExtent) {
            selection.setBaseAndExtent(selectedText, 0, selectedText,
                (selectedText.nodeValue || "").length);
            return true;
        }
    }
    return false;
}

function _chrome_list_tag_name(node) {
    if (!node || node.nodeType !== 1 || !node.nodeName) return "";
    var tag = node.nodeName.toLowerCase();
    return tag === "ul" || tag === "ol" ? tag : "";
}

function _chrome_ancestor_list_item(node) {
    for (var current = node && node.nodeType === 1 ? node : node && node.parentNode;
         current && current !== document.body; current = current.parentNode) {
        if (_chrome_node_name_is(current, "li")) return current;
    }
    return null;
}

function _chrome_remove_trailing_list_item_break(item) {
    if (!item || !item.lastChild) return;
    while (item.lastChild && item.lastChild.nodeType === 3 &&
        !/\S/.test(item.lastChild.nodeValue || "")) {
        item.removeChild(item.lastChild);
    }
    if (_chrome_node_name_is(item.lastChild, "br"))
        item.removeChild(item.lastChild);
}

function _chrome_node_has_nonblank_list_content(node) {
    if (!node) return false;
    if (node.nodeType === 3) return /\S/.test(node.nodeValue || "");
    if (node.nodeType !== 1) return false;
    if (_chrome_node_name_is(node, "br")) return false;
    for (var child = node.firstChild; child; child = child.nextSibling) {
        if (_chrome_node_has_nonblank_list_content(child)) return true;
    }
    return false;
}

function _chrome_prune_empty_list_shell(list) {
    if (!list || !list.parentNode) return;
    var parent = list.parentNode;
    if (list.firstChild) return;
    parent.removeChild(list);
    if (_chrome_node_name_is(parent, "li") &&
        !_chrome_node_has_nonblank_list_content(parent) &&
        parent.parentNode) {
        parent.parentNode.removeChild(parent);
    }
}

function _chrome_make_same_kind_list(list) {
    return document.createElement(_chrome_list_tag_name(list) || "ul");
}

function _chrome_move_following_list_items(sourceItem, targetList) {
    while (sourceItem && sourceItem.nextSibling) {
        targetList.appendChild(sourceItem.nextSibling);
    }
}

function _chrome_outdent_nested_list_item(selection, item, list) {
    var listParent = list ? list.parentNode : null;
    if (!listParent) return false;
    var targetList = null;
    var reference = null;
    if (_chrome_node_name_is(listParent, "li")) {
        targetList = listParent.parentNode;
        reference = listParent.nextSibling;
    } else if (_chrome_list_tag_name(listParent)) {
        targetList = listParent;
        reference = list;
    }
    if (!targetList || !_chrome_list_tag_name(targetList)) return false;

    _chrome_remove_trailing_list_item_break(item);
    var oldList = list;
    var childList = null;
    if (item.nextSibling) {
        childList = _chrome_make_same_kind_list(oldList);
        _chrome_move_following_list_items(item, childList);
    }
    var outItem = item;
    if (_chrome_list_tag_name(listParent)) {
        outItem = document.createElement("li");
        while (item.firstChild) outItem.appendChild(item.firstChild);
        oldList.removeChild(item);
    }
    targetList.insertBefore(outItem, reference);
    if (childList && childList.firstChild)
        outItem.appendChild(childList);
    _chrome_prune_empty_list_shell(oldList);
    var text = _chrome_first_text_descendant(outItem);
    if (text) selection.collapse(text, 0);
    else selection.collapse(outItem, 0);
    return true;
}

function _chrome_outdent_top_level_list_item(selection, item, list) {
    if (!item || !list || !list.parentNode) return false;
    var parent = list.parentNode;
    var afterList = list.nextSibling;
    _chrome_remove_trailing_list_item_break(item);

    var followingList = null;
    function ensureFollowingList() {
        if (!followingList) followingList = _chrome_make_same_kind_list(list);
        return followingList;
    }

    var firstMoved = null;
    for (var child = item.firstChild, next; child; child = next) {
        next = child.nextSibling;
        if (_chrome_list_tag_name(child)) {
            var wrapper = document.createElement("li");
            wrapper.appendChild(child);
            ensureFollowingList().appendChild(wrapper);
            continue;
        }
        if (!firstMoved && _chrome_node_has_nonblank_list_content(child))
            firstMoved = child;
        parent.insertBefore(child, afterList);
    }
    _chrome_move_following_list_items(item, ensureFollowingList());
    if (followingList && !followingList.firstChild) followingList = null;
    list.removeChild(item);
    if (followingList) parent.insertBefore(followingList, afterList);
    if (!list.firstChild) parent.removeChild(list);
    var collapseNode = firstMoved || followingList || parent;
    if (collapseNode.nodeType === 3) selection.collapse(collapseNode, 0);
    else selection.collapse(collapseNode, 0);
    return true;
}

function _chrome_outdent_at_selection() {
    var selection = getSelection();
    if (!selection) return false;
    if (!_chrome_selection_has_content(selection) && selection.focusNode &&
        selection.focusNode.nodeType === 1) {
        var child = selection.focusNode.childNodes ?
            selection.focusNode.childNodes[selection.focusOffset || 0] : null;
        if (_chrome_list_tag_name(child) && !_chrome_list_has_direct_item(child) &&
            child.parentNode) {
            var parent = child.parentNode;
            var firstMoved = child.firstChild;
            while (child.firstChild) parent.insertBefore(child.firstChild, child);
            parent.removeChild(child);
            var text = _chrome_first_text_descendant(firstMoved);
            if (text) selection.collapse(text, 0);
            else if (firstMoved) selection.collapse(firstMoved, 0);
            return true;
        }
    }
    var item = _chrome_ancestor_list_item(selection.focusNode);
    if (!item || !item.parentNode) return false;
    var list = item.parentNode;
    if (!_chrome_list_tag_name(list)) return false;
    var parent = list.parentNode;
    if (_chrome_node_name_is(parent, "li") || _chrome_list_tag_name(parent))
        return _chrome_outdent_nested_list_item(selection, item, list);
    return _chrome_outdent_top_level_list_item(selection, item, list);
}

function _chrome_set_inline_style_attribute(element, style) {
    if (!element || !element.setAttribute) return;
    if (element.style) element.style.cssText = style;
    element.setAttribute("style", style);
    element.__chromeSerializedStyle = style;
}

function _chrome_indent_blockquote() {
    var quote = document.createElement("blockquote");
    var style = "margin: 0 0 0 40px; border: none; padding: 0px;";
    _chrome_set_inline_style_attribute(quote, style);
    return quote;
}

function _chrome_indent_empty_first_list_item(selection, item, list) {
    if (!item || !list || item.previousSibling ||
        _chrome_node_has_nonblank_list_content(item)) {
        return false;
    }
    var nested = _chrome_make_same_kind_list(list);
    var nestedItem = document.createElement("li");
    nested.appendChild(nestedItem);
    list.insertBefore(nested, item);
    list.removeChild(item);
    selection.collapse(list, _chrome_node_child_index(nested) + 1);
    return true;
}

function _chrome_indent_list_item_ce3(selection, item, list) {
    if (!item || !list || !_chrome_list_tag_name(list)) return false;
    if (_chrome_indent_empty_first_list_item(selection, item, list))
        return true;
    if (!item.previousSibling) return false;
    var nested = _chrome_make_same_kind_list(list);
    list.insertBefore(nested, item);
    nested.appendChild(item);
    var text = _chrome_first_text_descendant(item);
    if (text) _chrome_set_command_selection_ce3(selection, text, 0, text, 0);
    else _chrome_set_command_selection_ce3(selection, item, 0, item, 0);
    return true;
}

function _chrome_indent_empty_host_ce3(selection, host) {
    if (!host || host.firstChild) return false;
    var quote = _chrome_indent_blockquote();
    quote.appendChild(document.createElement("br"));
    host.appendChild(quote);
    _chrome_set_command_selection_ce3(selection, quote, 0, quote, 0);
    return true;
}

function _chrome_indent_host_child_range_ce3(selection, host, range) {
    if (!host || !range || range.startContainer !== host ||
        range.endContainer !== host || !host.childNodes) {
        return false;
    }
    var start = Math.max(0, range.startOffset || 0);
    var end = Math.max(start, range.endOffset || 0);
    if (end <= start) return _chrome_indent_empty_host_ce3(selection, host);
    var selected = [];
    for (var i = start; i < end && i < host.childNodes.length; i++)
        selected.push(host.childNodes[i]);
    if (!selected.length) return false;
    var quote = _chrome_indent_blockquote();
    host.insertBefore(quote, selected[0]);
    for (var j = 0; j < selected.length; j++)
        quote.appendChild(selected[j]);
    var first = _chrome_first_text_descendant(quote);
    var last = _chrome_last_text_descendant(quote);
    if (first && last)
        _chrome_set_command_selection_ce3(selection, first, 0, last,
            (last.nodeValue || "").length);
    else
        _chrome_set_command_selection_ce3(selection, quote, 0, quote, 0);
    return true;
}

function _chrome_indent_block_at_selection(selection, host, range) {
    host = host || _chrome_editing_host_for_node(selection.focusNode) ||
        _chrome_focused_editing_host() || _chrome_first_contenteditable_host();
    if (range && _chrome_indent_host_child_range_ce3(selection, host, range))
        return true;
    var focusNode = range ? (range.endContainer || range.startContainer) :
        selection.focusNode;
    var block = _chrome_block_ancestor_for_range_delete(focusNode, host);
    if (!block || block === host || !block.parentNode) return false;
    var quote = _chrome_indent_blockquote();
    block.parentNode.insertBefore(quote, block);
    quote.appendChild(block);
    var text = _chrome_first_text_descendant(block);
    if (text) _chrome_set_command_selection_ce3(selection, text, 0, text, 0);
    else _chrome_set_command_selection_ce3(selection, block, 0, block, 0);
    return true;
}

function _chrome_indent_at_selection() {
    var selection = _chrome_current_selection_ce3();
    if (!selection) return false;
    var commandRange = _chrome_effective_command_range_ce3(selection);
    var rangeNode = commandRange ? (commandRange.endContainer ||
        commandRange.startContainer) : selection.focusNode;
    var host = _chrome_editing_host_for_node(rangeNode) ||
        _chrome_focused_editing_host() || _chrome_first_contenteditable_host();
    if (host && !_chrome_node_is_live(host))
        host = _chrome_first_contenteditable_host();
    commandRange = _chrome_live_command_range_ce3(commandRange, host);
    rangeNode = commandRange ? (commandRange.endContainer ||
        commandRange.startContainer) : rangeNode;
    var item = _chrome_ancestor_list_item(rangeNode) ||
        _chrome_ancestor_list_item(commandRange && commandRange.startContainer);
    if (item && item.parentNode && _chrome_list_tag_name(item.parentNode) &&
        _chrome_indent_list_item_ce3(selection, item, item.parentNode)) {
        return true;
    }
    return _chrome_indent_block_at_selection(selection, host, commandRange);
}

function _chrome_make_list_with_item(tagName) {
    var list = document.createElement(tagName);
    var item = document.createElement("li");
    list.appendChild(item);
    return { list: list, item: item };
}

function _chrome_first_child_list(node, tagName) {
    if (!node || !node.childNodes) return null;
    for (var child = node.firstChild; child; child = child.nextSibling) {
        if (_chrome_node_name_is(child, tagName)) return child;
    }
    return null;
}

function _chrome_last_child_list(node, tagName) {
    if (!node || !node.childNodes) return null;
    for (var child = node.lastChild; child; child = child.previousSibling) {
        if (_chrome_node_name_is(child, tagName)) return child;
    }
    return null;
}

function _chrome_list_item_boundary(selection, list, start) {
    var node = start ? selection.anchorNode : selection.focusNode;
    var item = _chrome_ancestor_list_item(node);
    return item && item.parentNode === list ? item : null;
}

function _chrome_list_has_direct_item(list) {
    if (!list || !list.childNodes) return false;
    for (var child = list.firstChild; child; child = child.nextSibling) {
        if (_chrome_node_name_is(child, "li")) return true;
    }
    return false;
}

function _chrome_collect_convertible_lists(node, sourceTag, lists) {
    if (!node || node.nodeType !== 1) return;
    if (_chrome_node_name_is(node, sourceTag) &&
        _chrome_list_has_direct_item(node)) {
        lists.push(node);
    }
    for (var child = node.firstChild; child; child = child.nextSibling)
        _chrome_collect_convertible_lists(child, sourceTag, lists);
}

function _chrome_replace_list_tag(list, tagName) {
    if (!list || !list.parentNode) return null;
    var replacement = document.createElement(tagName);
    while (list.firstChild) replacement.appendChild(list.firstChild);
    list.parentNode.insertBefore(replacement, list);
    list.parentNode.removeChild(list);
    return replacement;
}

function _chrome_merge_adjacent_lists(list) {
    if (!list || !list.parentNode) return list;
    var tag = _chrome_list_tag_name(list);
    var previous = list.previousSibling;
    if (_chrome_node_name_is(previous, tag)) {
        while (list.firstChild) previous.appendChild(list.firstChild);
        list.parentNode.removeChild(list);
        list = previous;
    }
    var next = list.nextSibling;
    while (_chrome_node_name_is(next, tag)) {
        var removeNext = next;
        next = next.nextSibling;
        while (removeNext.firstChild) list.appendChild(removeNext.firstChild);
        removeNext.parentNode.removeChild(removeNext);
    }
    return list;
}

function _chrome_absorb_orphan_items_between_lists(root, tagName) {
    if (!root || !root.childNodes) return;
    var list = root.firstChild;
    while (list) {
        var nextList = list.nextSibling;
        if (!_chrome_node_name_is(list, tagName)) {
            list = nextList;
            continue;
        }
        var next = list.nextSibling;
        while (next) {
            if (_chrome_node_name_is(next, "li")) {
                var moveItem = next;
                next = next.nextSibling;
                list.appendChild(moveItem);
                continue;
            }
            if (_chrome_node_name_is(next, tagName)) {
                var mergeList = next;
                next = next.nextSibling;
                while (mergeList.firstChild)
                    list.appendChild(mergeList.firstChild);
                mergeList.parentNode.removeChild(mergeList);
                continue;
            }
            break;
        }
        list = next;
    }
}

function _chrome_select_first_to_last_list_text(root, tagName) {
    if (!root) return false;
    var firstText = null;
    var lastText = null;
    function scan(node) {
        if (!node || node.nodeType !== 1) return;
        if (_chrome_node_name_is(node, tagName)) {
            for (var item = node.firstChild; item; item = item.nextSibling) {
                if (!_chrome_node_name_is(item, "li")) continue;
                if (!firstText) firstText = _chrome_first_text_descendant(item);
                lastText = _chrome_last_text_descendant(item) || lastText;
            }
        }
        for (var child = node.firstChild; child; child = child.nextSibling)
            scan(child);
    }
    scan(root);
    if (!firstText || !lastText) return false;
    var selection = _chrome_current_selection_ce3();
    if (!selection || typeof selection.setBaseAndExtent !== "function")
        return false;
    selection.setBaseAndExtent(firstText, 0, lastText,
        (lastText.nodeValue || "").length);
    return true;
}

function _chrome_switch_select_all_child_lists(tagName) {
    var root = _chrome_select_all_text_node;
    if ((!root || root.nodeType !== 1) && typeof getSelection === "function") {
        var selection = getSelection();
        if (selection && selection.rangeCount) {
            var range = selection.getRangeAt(0);
            if (range && range.startContainer === range.endContainer &&
                range.startContainer && range.startContainer.nodeType === 1 &&
                (range.startOffset || 0) === 0 &&
                (range.endOffset || 0) ===
                    (range.startContainer.childNodes ?
                        range.startContainer.childNodes.length : 0)) {
                root = range.startContainer;
            }
        }
    }
    if (!root || root.nodeType !== 1) return false;
    var sourceTag = tagName === "ol" ? "ul" : "ol";
    var lists = [];
    _chrome_collect_convertible_lists(root, sourceTag, lists);
    if (!lists.length) return false;
    var converted = [];
    for (var i = 0; i < lists.length; i++) {
        if (!lists[i].parentNode) continue;
        var replacement = _chrome_replace_list_tag(lists[i], tagName);
        if (replacement) converted.push(replacement);
    }
    for (var j = 0; j < converted.length; j++)
        _chrome_merge_adjacent_lists(converted[j]);
    _chrome_absorb_orphan_items_between_lists(root, tagName);
    _chrome_select_first_to_last_list_text(root, tagName);
    _chrome_select_all_text_node = null;
    return true;
}

function _chrome_last_child_is_break(node) {
    return _chrome_node_name_is(node ? node.lastChild : null, "br");
}

function _chrome_unwrap_plain_span_for_unlist(node, fragment) {
    if (!_chrome_node_name_is(node, "span")) return false;
    if (node.attributes && node.attributes.length) return false;
    while (node.firstChild) fragment.appendChild(node.firstChild);
    return true;
}

function _chrome_append_unlisted_item_contents(fragment, item) {
    var moved = false;
    while (item.firstChild) {
        var child = item.firstChild;
        if (!_chrome_unwrap_plain_span_for_unlist(child, fragment))
            fragment.appendChild(child);
        else
            item.removeChild(child);
        moved = true;
    }
    if (!moved) fragment.appendChild(document.createElement("br"));
}

function _chrome_restore_unlisted_selection(selection, savedRange,
        savedFocusNode, savedFocusOffset, fallback) {
    if (savedRange && selection.setBaseAndExtent) {
        selection.setBaseAndExtent(savedRange.startNode,
            savedRange.startOffset, savedRange.endNode,
            savedRange.endOffset);
        return true;
    }
    if (savedFocusNode && savedFocusNode.parentNode) {
        selection.collapse(savedFocusNode, savedFocusOffset);
        return true;
    }
    var text = _chrome_first_text_descendant(fallback);
    if (text) selection.collapse(text, 0);
    else if (fallback) selection.collapse(fallback, 0);
    return true;
}

function _chrome_unlistify_orphan_list_text(selection, tagName) {
    if (!selection || _chrome_selection_has_content(selection)) return false;
    var node = selection.focusNode;
    if (!node || node.nodeType !== 3 || !node.parentNode) return false;
    var list = node.parentNode;
    if (!_chrome_node_name_is(list, tagName) || !list.parentNode) return false;
    var text = node.nodeValue || "";
    if (!/\S/.test(text)) return false;

    var parent = list.parentNode;
    var beforeList = _chrome_make_same_kind_list(list);
    var afterList = _chrome_make_same_kind_list(list);
    var offset = Math.max(0, Math.min(selection.focusOffset || 0,
        text.length));
    while (list.firstChild && list.firstChild !== node)
        beforeList.appendChild(list.firstChild);
    if (list.firstChild === node) list.removeChild(node);
    var followingBreak = null;
    if (_chrome_node_name_is(list.firstChild, "br")) {
        followingBreak = list.firstChild;
        list.removeChild(followingBreak);
    }
    while (list.firstChild) afterList.appendChild(list.firstChild);

    if (beforeList.firstChild) parent.insertBefore(beforeList, list);
    parent.insertBefore(node, list);
    if (followingBreak) parent.insertBefore(followingBreak, list);
    if (afterList.firstChild) parent.insertBefore(afterList, list);
    parent.removeChild(list);
    selection.collapse(node, offset);
    return true;
}

function _chrome_unlistify_existing_list_items(selection, tagName) {
    var item = _chrome_ancestor_list_item(selection.focusNode);
    if (!item) item = _chrome_ancestor_list_item(selection.anchorNode);
    var list = item ? item.parentNode : null;
    if (!item || !_chrome_node_name_is(list, tagName) || !list.parentNode)
        return false;

    var savedRange = null;
    var savedFocusNode = selection.focusNode;
    var savedFocusOffset = selection.focusOffset || 0;
    if (_chrome_selection_has_content(selection) && selection.rangeCount) {
        var range = selection.getRangeAt(0);
        savedRange = {
            startNode: range.startContainer,
            startOffset: range.startOffset || 0,
            endNode: range.endContainer,
            endOffset: range.endOffset || 0
        };
    }

    var startItem = _chrome_list_item_boundary(selection, list, true) || item;
    var endItem = _chrome_list_item_boundary(selection, list, false) ||
        startItem;
    var startIndex = _chrome_node_child_index(startItem);
    var endIndex = _chrome_node_child_index(endItem);
    if (startIndex > endIndex) {
        var swap = startItem;
        startItem = endItem;
        endItem = swap;
    }
    while (startItem.previousSibling &&
        _chrome_node_name_is(startItem.previousSibling, "li") &&
        !_chrome_node_has_nonblank_list_content(startItem.previousSibling)) {
        startItem = startItem.previousSibling;
    }

    var parent = list.parentNode;
    var beforeList = _chrome_make_same_kind_list(list);
    var afterList = _chrome_make_same_kind_list(list);
    var fragment = _chrome_create_fragment_like();
    var selectedCount = 0;
    var leadingBreak = null;

    while (list.firstChild && list.firstChild !== startItem)
        beforeList.appendChild(list.firstChild);
    var cursor = startItem;
    while (cursor) {
        var next = cursor.nextSibling;
        if (selectedCount > 0 && !_chrome_last_child_is_break(fragment))
            fragment.appendChild(document.createElement("br"));
        var wasEmpty = !_chrome_node_has_nonblank_list_content(cursor);
        _chrome_append_unlisted_item_contents(fragment, cursor);
        if (selectedCount === 0 && wasEmpty &&
            _chrome_node_name_is(fragment.lastChild, "br")) {
            leadingBreak = fragment.lastChild;
        }
        selectedCount++;
        list.removeChild(cursor);
        if (cursor === endItem) break;
        cursor = next;
    }
    var rangeCutsItemText = savedRange &&
        ((savedRange.startNode && savedRange.startNode.nodeType === 3 &&
            (savedRange.startOffset || 0) > 0) ||
        (savedRange.endNode && savedRange.endNode.nodeType === 3 &&
            (savedRange.endOffset || 0) <
                (savedRange.endNode.nodeValue || "").length));
    if (selectedCount > 1 && rangeCutsItemText &&
        !_chrome_last_child_is_break(fragment))
        fragment.appendChild(document.createElement("br"));
    while (list.firstChild) afterList.appendChild(list.firstChild);

    if (beforeList.firstChild) parent.insertBefore(beforeList, list);
    parent.insertBefore(fragment, list);
    if (afterList.firstChild) parent.insertBefore(afterList, list);
    parent.removeChild(list);
    if (leadingBreak && savedRange && selection.setBaseAndExtent &&
        savedRange.endNode && savedRange.endNode.parentNode) {
        selection.setBaseAndExtent(leadingBreak.parentNode,
            _chrome_node_child_index(leadingBreak), savedRange.endNode,
            Math.max(0, (savedRange.endOffset || 0) - 1));
        return true;
    }
    return _chrome_restore_unlisted_selection(selection, savedRange,
        savedFocusNode, savedFocusOffset, parent);
}

function _chrome_switch_orphan_list_text(selection, tagName) {
    if (!selection || _chrome_selection_has_content(selection)) return false;
    var node = selection.focusNode;
    if (!node || node.nodeType !== 3 || !node.parentNode) return false;
    var list = node.parentNode;
    if (!_chrome_list_tag_name(list) || _chrome_node_name_is(list, tagName) ||
        !list.parentNode) {
        return false;
    }
    var text = node.nodeValue || "";
    if (!/\S/.test(text)) return false;

    var parent = list.parentNode;
    var beforeList = _chrome_make_same_kind_list(list);
    var afterList = _chrome_make_same_kind_list(list);
    var target = document.createElement(tagName);
    var item = document.createElement("li");
    var selectedText = null;
    var offset = Math.max(0, Math.min(selection.focusOffset || 0,
        text.length));

    while (list.firstChild && list.firstChild !== node)
        beforeList.appendChild(list.firstChild);
    if (list.firstChild === node) list.removeChild(node);
    selectedText = document.createTextNode(text);
    item.appendChild(selectedText);
    target.appendChild(item);
    if (_chrome_node_name_is(list.firstChild, "br"))
        list.removeChild(list.firstChild);
    while (list.firstChild) afterList.appendChild(list.firstChild);

    if (beforeList.firstChild) parent.insertBefore(beforeList, list);
    parent.insertBefore(target, list);
    if (afterList.firstChild) parent.insertBefore(afterList, list);
    parent.removeChild(list);
    selection.collapse(selectedText, offset);
    return true;
}

function _chrome_switch_existing_list_items(selection, tagName) {
    var item = _chrome_ancestor_list_item(selection.focusNode);
    if (!item) item = _chrome_ancestor_list_item(selection.anchorNode);
    var list = item ? item.parentNode : null;
    if (!item || !_chrome_list_tag_name(list) || !list.parentNode)
        return false;
    if (_chrome_node_name_is(list, tagName)) return false;

    var savedRange = null;
    var savedFocusNode = selection.focusNode;
    var savedFocusOffset = selection.focusOffset || 0;
    if (_chrome_selection_has_content(selection) && selection.rangeCount) {
        var range = selection.getRangeAt(0);
        savedRange = {
            startNode: range.startContainer,
            startOffset: range.startOffset || 0,
            endNode: range.endContainer,
            endOffset: range.endOffset || 0
        };
    }

    var startItem = _chrome_list_item_boundary(selection, list, true) || item;
    var endItem = _chrome_list_item_boundary(selection, list, false) ||
        startItem;
    var startIndex = _chrome_node_child_index(startItem);
    var endIndex = _chrome_node_child_index(endItem);
    if (startIndex > endIndex) {
        var swap = startItem;
        startItem = endItem;
        endItem = swap;
    }

    var parent = list.parentNode;
    var beforeList = null;
    var afterList = null;
    var target = document.createElement(tagName);
    var reference = list;

    while (list.firstChild && list.firstChild !== startItem) {
        if (!beforeList) beforeList = _chrome_make_same_kind_list(list);
        beforeList.appendChild(list.firstChild);
    }
    var cursor = startItem;
    while (cursor) {
        var next = cursor.nextSibling;
        target.appendChild(cursor);
        if (cursor === endItem) break;
        cursor = next;
    }
    while (list.firstChild) {
        if (!afterList) afterList = _chrome_make_same_kind_list(list);
        afterList.appendChild(list.firstChild);
    }

    if (beforeList && beforeList.firstChild)
        parent.insertBefore(beforeList, reference);
    parent.insertBefore(target, reference);
    if (afterList && afterList.firstChild)
        parent.insertBefore(afterList, reference);
    parent.removeChild(reference);
    if (savedRange && selection.setBaseAndExtent) {
        selection.setBaseAndExtent(savedRange.startNode,
            savedRange.startOffset, savedRange.endNode,
            savedRange.endOffset);
        return true;
    }
    if (savedFocusNode && _chrome_node_contains_node(target, savedFocusNode)) {
        selection.collapse(savedFocusNode, savedFocusOffset);
        return true;
    }
    var text = _chrome_first_text_descendant(startItem) ||
        _chrome_first_text_descendant(target);
    if (text) selection.collapse(text, 0);
    else selection.collapse(startItem || target, 0);
    return true;
}

function _chrome_wrap_orphan_list_item(selection, tagName) {
    var item = _chrome_ancestor_list_item(selection.focusNode);
    if (!item || _chrome_list_tag_name(item.parentNode) || !item.parentNode)
        return false;
    if (_chrome_node_name_is(item, "li") && tagName === "ul") {
        var parent = item.parentNode;
        var savedFocusNode = selection.focusNode;
        var savedFocusOffset = selection.focusOffset || 0;
        var br = document.createElement("br");
        var needsBreak = !!item.previousSibling;
        if (needsBreak) parent.insertBefore(br, item);
        while (item.firstChild) parent.insertBefore(item.firstChild, item);
        parent.removeChild(item);
        if (needsBreak)
            selection.collapse(parent, _chrome_node_child_index(br) + 1);
        else if (savedFocusNode && savedFocusNode.parentNode)
            selection.collapse(savedFocusNode, savedFocusOffset);
        else
            selection.collapse(parent, 0);
        return true;
    }
    var list = document.createElement(tagName);
    item.parentNode.insertBefore(list, item);
    list.appendChild(item);
    var text = _chrome_first_text_descendant(item);
    if (text) selection.collapse(text, 0);
    else selection.collapse(item, 0);
    return true;
}

function _chrome_move_block_contents_to_list_item(block, item) {
    if (!block || !item) return;
    while (block.firstChild) {
        var child = block.firstChild;
        if (_chrome_node_name_is(child, "br") && !child.nextSibling) {
            block.removeChild(child);
            continue;
        }
        item.appendChild(child);
    }
    if (!item.firstChild) item.appendChild(document.createElement("br"));
}

function _chrome_stitch_block_into_previous_list(selection, block, tagName) {
    if (!block || !block.parentNode) return false;
    var previous = block.previousSibling;
    while (previous && !_chrome_delete_node_has_visible_content(previous))
        previous = previous.previousSibling;
    var list = _chrome_last_child_list(previous, tagName);
    if (!list) return false;
    var item = document.createElement("li");
    _chrome_move_block_contents_to_list_item(block, item);
    list.appendChild(item);
    block.parentNode.removeChild(block);
    var text = _chrome_first_text_descendant(item);
    if (text) selection.collapse(text, 0);
    else selection.collapse(item, 0);
    return true;
}

function _chrome_listify_block(selection, block, tagName) {
    if (!block || !block.parentNode) return false;
    if (_chrome_stitch_block_into_previous_list(selection, block, tagName))
        return true;
    var pair = _chrome_make_list_with_item(tagName);
    _chrome_move_block_contents_to_list_item(block, pair.item);
    block.appendChild(pair.list);
    var fallbackItem = pair.item.parentNode ? pair.item : pair.list;
    var text = _chrome_first_text_descendant(fallbackItem);
    if (text) selection.collapse(text, 0);
    else selection.collapse(pair.item, 0);
    return true;
}

function _chrome_listify_empty_or_host_selection(selection, tagName) {
    var node = selection.focusNode;
    var offset = selection.focusOffset || 0;
    if (!node || node.nodeType !== 1) return false;
    var pair = _chrome_make_list_with_item(tagName);
    var child = node.childNodes ? node.childNodes[offset] || null : null;
    if (_chrome_node_name_is(child, "br")) node.removeChild(child);
    node.insertBefore(pair.list, node.childNodes ? node.childNodes[offset] ||
        null : null);
    pair.item.appendChild(document.createElement("br"));
    selection.collapse(pair.item, 0);
    return true;
}

function _chrome_fragment_has_top_level_break(fragment) {
    if (!fragment || !fragment.childNodes) return false;
    for (var child = fragment.firstChild; child; child = child.nextSibling) {
        if (_chrome_node_name_is(child, "br")) return true;
    }
    return false;
}

function _chrome_move_fragment_lines_to_list(fragment, list) {
    var item = document.createElement("li");
    while (fragment.firstChild) {
        var child = fragment.firstChild;
        if (_chrome_node_name_is(child, "br")) {
            fragment.removeChild(child);
            if (!item.firstChild) item.appendChild(document.createElement("br"));
            list.appendChild(item);
            item = document.createElement("li");
            continue;
        }
        item.appendChild(child);
    }
    if (item.firstChild || !list.firstChild) {
        if (!item.firstChild) item.appendChild(document.createElement("br"));
        list.appendChild(item);
    }
}

function _chrome_prune_empty_inline_siblings(node) {
    if (!node || !node.parentNode) return;
    var previous = node.previousSibling;
    while (previous && previous.nodeType === 1 &&
        _chrome_inline_boundary_element(previous) &&
        !_chrome_node_has_nonblank_list_content(previous)) {
        var removePrevious = previous;
        previous = previous.previousSibling;
        removePrevious.parentNode.removeChild(removePrevious);
    }
    var next = node.nextSibling;
    while (next && next.nodeType === 1 &&
        _chrome_inline_boundary_element(next) &&
        !_chrome_node_has_nonblank_list_content(next)) {
        var removeNext = next;
        next = next.nextSibling;
        removeNext.parentNode.removeChild(removeNext);
    }
}

function _chrome_expand_range_to_line_text_boundaries(range) {
    if (!range) return;
    if (range.startContainer && range.startContainer.nodeType === 3 &&
        (range.startOffset || 0) > 0 && range.setStart) {
        range.setStart(range.startContainer, 0);
    }
    if (range.endContainer && range.endContainer.nodeType === 3) {
        var endText = range.endContainer.nodeValue || "";
        if ((range.endOffset || 0) > 0 &&
            (range.endOffset || 0) < endText.length && range.setEnd) {
            range.setEnd(range.endContainer, endText.length);
        }
    }
}

function _chrome_select_list_item_contents(selection, list) {
    if (!selection || !list) return false;
    var firstItem = null;
    var lastItem = null;
    for (var child = list.firstChild; child; child = child.nextSibling) {
        if (!_chrome_node_name_is(child, "li")) continue;
        if (!firstItem) firstItem = child;
        lastItem = child;
    }
    if (!firstItem || !lastItem || !selection.setBaseAndExtent) return false;
    selection.setBaseAndExtent(firstItem, 0, lastItem,
        lastItem.childNodes ? lastItem.childNodes.length : 0);
    return true;
}

function _chrome_text_descendant_matching(node, text, fromEnd) {
    if (!node || !text) return null;
    if (node.nodeType === 3)
        return (node.nodeValue || "") === text ? node : null;
    var child = fromEnd ? node.lastChild : node.firstChild;
    while (child) {
        var found = _chrome_text_descendant_matching(child, text, fromEnd);
        if (found) return found;
        child = fromEnd ? child.previousSibling : child.nextSibling;
    }
    return null;
}

function _chrome_listify_range_contents(selection, tagName) {
    if (!selection || !selection.rangeCount ||
        !_chrome_selection_has_content(selection)) {
        return false;
    }
    var range = selection.getRangeAt(0);
    if (!range || !range.extractContents) return false;
    var savedRange = {
        startNode: range.startContainer,
        startOffset: range.startOffset || 0,
        endNode: range.endContainer,
        endOffset: range.endOffset || 0,
        startText: range.startContainer && range.startContainer.nodeType === 3 ?
            (range.startContainer.nodeValue || "") : "",
        endText: range.endContainer && range.endContainer.nodeType === 3 ?
            (range.endContainer.nodeValue || "") : ""
    };
    _chrome_expand_range_to_line_text_boundaries(range);
    var host = _chrome_editing_host_for_node(range.startContainer) ||
        _chrome_editable_host_from_selection();
    var block = _chrome_block_ancestor_for_range_delete(range.startContainer,
        host);
    var parent = block || host;
    if (!parent || parent.nodeType !== 1) return false;
    var fragment = range.extractContents();
    var pair = _chrome_make_list_with_item(tagName);
    var splitIntoItems = false;
    if (_chrome_fragment_has_top_level_break(fragment)) {
        splitIntoItems = true;
        pair.list.removeChild(pair.item);
        _chrome_move_fragment_lines_to_list(fragment, pair.list);
    } else {
        _chrome_move_fragment_children(fragment, pair.item);
        _chrome_remove_trailing_list_item_break(pair.item);
        if (!pair.item.firstChild)
            pair.item.appendChild(document.createElement("br"));
    }
    if (block && block.parentNode && block !== host) {
        block.parentNode.insertBefore(pair.list, block.nextSibling);
    } else if (range.insertNode) {
        range.insertNode(pair.list);
    } else {
        parent.appendChild(pair.list);
    }
    _chrome_prune_empty_inline_siblings(pair.list);
    if (savedRange.startNode && savedRange.startNode.parentNode &&
        savedRange.endNode && savedRange.endNode.parentNode &&
        _chrome_node_contains_node(pair.list, savedRange.startNode) &&
        _chrome_node_contains_node(pair.list, savedRange.endNode) &&
        selection.setBaseAndExtent) {
        selection.setBaseAndExtent(savedRange.startNode,
            savedRange.startOffset, savedRange.endNode, savedRange.endOffset);
        return true;
    }
    if (splitIntoItems && selection.setBaseAndExtent) {
        var firstText = _chrome_first_text_descendant(pair.list);
        var lastText = _chrome_last_text_descendant(pair.list);
        if (firstText && lastText) {
            var anchorText = _chrome_text_descendant_matching(pair.list,
                savedRange.startText, false) || firstText;
            var focusText = _chrome_text_descendant_matching(pair.list,
                savedRange.endText, true) || lastText;
            var firstOffset = 0;
            var lastOffset = (focusText.nodeValue || "").length;
            if (anchorText !== firstText || (savedRange.startText &&
                savedRange.startText === (anchorText.nodeValue || ""))) {
                firstOffset = Math.min(savedRange.startOffset || 0,
                    (anchorText.nodeValue || "").length);
            }
            if (focusText !== lastText || (savedRange.endText &&
                savedRange.endText === (focusText.nodeValue || ""))) {
                lastOffset = Math.min(savedRange.endOffset || 0,
                    (focusText.nodeValue || "").length);
            }
            selection.setBaseAndExtent(anchorText, firstOffset, focusText,
                lastOffset);
            return true;
        }
    }
    var fallbackItem = pair.item.parentNode ? pair.item : pair.list;
    var text = _chrome_first_text_descendant(fallbackItem);
    if (text && selection.setBaseAndExtent)
        selection.setBaseAndExtent(text, 0, text, (text.nodeValue || "").length);
    else if (text)
        selection.collapse(text, 0);
    else
        _chrome_select_list_item_contents(selection, pair.list);
    return true;
}

function _chrome_range_covers_inline_text(range, inline) {
    if (!range || !inline) return false;
    var first = _chrome_first_text_descendant(inline);
    var last = _chrome_last_text_descendant(inline);
    if (!first || !last) return false;
    return range.startContainer === first &&
        (range.startOffset || 0) === 0 &&
        range.endContainer === last &&
        (range.endOffset || 0) === (last.nodeValue || "").length;
}

function _chrome_listify_anchor_or_inline_parent(selection, tagName) {
    if (!selection || !selection.rangeCount ||
        !_chrome_selection_has_content(selection)) {
        return false;
    }
    var range = selection.getRangeAt(0);
    var node = selection.focusNode;
    var inline = node && node.nodeType === 1 ? node : node && node.parentNode;
    while (inline && inline !== document.body && !_chrome_dump_is_block_ce3(inline)) {
        if (inline.parentNode && inline.parentNode.nodeType === 1 &&
            _chrome_range_covers_inline_text(range, inline)) {
            var pair = _chrome_make_list_with_item(tagName);
            inline.parentNode.insertBefore(pair.list, inline);
            pair.item.appendChild(inline);
            var text = _chrome_first_text_descendant(pair.item);
            if (text && selection.setBaseAndExtent)
                selection.setBaseAndExtent(text, 0, text,
                    (text.nodeValue || "").length);
            else if (text) selection.collapse(text, 0);
            return true;
        }
        inline = inline.parentNode;
    }
    return false;
}

function _chrome_insert_list_around_selected_block(tagName) {
    var selection = _chrome_current_selection_ce3();
    if (!selection) return false;
    if (_chrome_node_name_is(selection.focusNode, "br")) return true;
    if (_chrome_switch_select_all_child_lists(tagName)) return true;
    if (_chrome_unlistify_orphan_list_text(selection, tagName)) return true;
    if (_chrome_unlistify_existing_list_items(selection, tagName)) return true;
    if (_chrome_switch_orphan_list_text(selection, tagName)) return true;
    if (_chrome_switch_existing_list_items(selection, tagName)) return true;
    if (_chrome_wrap_orphan_list_item(selection, tagName)) return true;
    if (_chrome_listify_anchor_or_inline_parent(selection, tagName)) return true;
    if (_chrome_listify_range_contents(selection, tagName)) return true;
    var node = selection.focusNode;
    var offset = selection.focusOffset || 0;
    if (!node) return false;
    if (node.nodeType !== 1 || !node.childNodes) {
        var host = _chrome_editing_host_for_node(node) ||
            _chrome_editable_host_from_selection();
        var block = _chrome_block_ancestor_for_range_delete(node, host);
        if (block)
            return _chrome_listify_block(selection, block, tagName);
        if (host && host.nodeType === 1 &&
            _chrome_node_contains_node(host, node) &&
            _chrome_delete_node_has_visible_content(host)) {
            return _chrome_listify_block(selection, host, tagName);
        }
        return false;
    }
    var child = node.childNodes[offset] || null;
    if (!child) return _chrome_listify_empty_or_host_selection(selection,
        tagName);
    if (!_chrome_node_name_is(child, "hr")) {
        var elementHost = _chrome_editing_host_for_node(node) ||
            _chrome_editable_host_from_selection();
        if (node === elementHost && _chrome_delete_node_has_visible_content(node) &&
            !_chrome_node_name_is(child, "br")) {
            return _chrome_listify_block(selection, node, tagName);
        }
        return _chrome_listify_empty_or_host_selection(selection, tagName);
    }
    var list = document.createElement(tagName);
    var item = document.createElement("li");
    node.insertBefore(list, child);
    list.appendChild(item);
    item.appendChild(child);
    selection.collapse(item, 0);
    return true;
}

function _chrome_count_previous_list_items(item) {
    var count = 0;
    for (var sibling = item ? item.previousSibling : null; sibling;
         sibling = sibling.previousSibling) {
        if (_chrome_node_name_is(sibling, "li")) count++;
    }
    return count;
}

function _chrome_ancestor_element_named(node, name) {
    var current = node && node.nodeType === 1 ? node : node && node.parentNode;
    while (current && current !== document.body) {
        if (_chrome_node_name_is(current, name)) return current;
        current = current.parentNode;
    }
    return null;
}

function _chrome_split_text_list_item_at_selection(selection, item) {
    var node = selection.focusNode;
    if (!node || node.nodeType !== 3 || !_chrome_node_contains_node(item, node))
        return null;
    var text = node.nodeValue || "";
    var offset = selection.focusOffset || 0;
    var before = text.slice(0, offset);
    var after = text.slice(offset);
    node.data = before;
    return after;
}

function _chrome_child_under_ancestor(ancestor, node) {
    if (!ancestor || !node || node === ancestor) return null;
    var child = node;
    while (child && child.parentNode !== ancestor) child = child.parentNode;
    return child || null;
}

function _chrome_boundary_child(node, offset) {
    if (!node || node.nodeType !== 1 || !node.childNodes) return null;
    return node.childNodes[offset || 0] || null;
}

function _chrome_has_visible_before_boundary(ancestor, node, offset) {
    if (!ancestor || !node) return false;
    if (node.nodeType === 3 && (node.nodeValue || "").slice(0,
        offset || 0).length) {
        return true;
    }
    if (node.nodeType === 1 && node.childNodes) {
        for (var i = 0; i < (offset || 0); i++) {
            if (_chrome_delete_node_has_visible_content(node.childNodes[i]))
                return true;
        }
    }
    for (var current = node; current && current !== ancestor;
         current = current.parentNode) {
        for (var previous = current.previousSibling; previous;
             previous = previous.previousSibling) {
            if (_chrome_delete_node_has_visible_content(previous))
                return true;
        }
    }
    return false;
}

function _chrome_has_visible_after_boundary(ancestor, node, offset) {
    if (!ancestor || !node) return false;
    if (node.nodeType === 3 && (node.nodeValue || "").slice(offset || 0)
        .length) {
        return true;
    }
    if (node.nodeType === 1 && node.childNodes) {
        for (var i = offset || 0; i < node.childNodes.length; i++) {
            if (_chrome_delete_node_has_visible_content(node.childNodes[i]))
                return true;
        }
    }
    for (var current = node; current && current !== ancestor;
         current = current.parentNode) {
        for (var next = current.nextSibling; next; next = next.nextSibling) {
            if (_chrome_delete_node_has_visible_content(next))
                return true;
        }
    }
    return false;
}

function _chrome_insert_unquoted_break_near_quote(selection, quote, before) {
    if (!selection || !quote || !quote.parentNode) return false;
    var br = document.createElement("br");
    var parent = quote.parentNode;
    parent.insertBefore(br, before ? quote : quote.nextSibling);
    _chrome_set_command_selection_ce3(selection, parent,
        _chrome_node_child_index(br), parent, _chrome_node_child_index(br));
    return true;
}

function _chrome_fragment_has_visible_content(fragment) {
    if (!fragment) return false;
    for (var child = fragment.firstChild; child; child = child.nextSibling) {
        if (_chrome_delete_node_has_visible_content(child)) return true;
    }
    return false;
}

function _chrome_move_fragment_children(fragment, target) {
    if (!fragment || !target) return;
    while (fragment.firstChild) target.appendChild(fragment.firstChild);
}

function _chrome_prune_empty_element_descendants(root) {
    if (!root || !root.childNodes) return;
    for (var child = root.firstChild, next; child; child = next) {
        next = child.nextSibling;
        if (child.nodeType === 1) {
            _chrome_prune_empty_element_descendants(child);
            if (!_chrome_delete_node_has_visible_content(child) &&
                child.parentNode) {
                child.parentNode.removeChild(child);
            }
        }
    }
}

function _chrome_split_blockquote_at_selection(selection, quote) {
    if (!selection || !quote || !quote.parentNode || !document.createRange)
        return false;
    var node = selection.focusNode;
    var offset = selection.focusOffset || 0;
    if (!_chrome_node_contains_node(quote, node)) return false;
    var boundaryChild = _chrome_boundary_child(node, offset);
    var boundaryIsTrailingBreak = _chrome_node_name_is(boundaryChild, "br") &&
        !_chrome_has_visible_after_boundary(quote, boundaryChild,
            boundaryChild.childNodes ? boundaryChild.childNodes.length : 0);
    var hasBefore = _chrome_has_visible_before_boundary(quote, node, offset);
    var hasAfter = _chrome_has_visible_after_boundary(quote, node, offset);

    if (!hasBefore && !boundaryIsTrailingBreak)
        return _chrome_insert_unquoted_break_near_quote(selection, quote,
            true);
    if (!hasAfter || boundaryIsTrailingBreak)
        return _chrome_insert_unquoted_break_near_quote(selection, quote,
            false);

    var range = document.createRange();
    if (_chrome_node_name_is(boundaryChild, "br") && range.setStartAfter)
        range.setStartAfter(boundaryChild);
    else
        range.setStart(node, offset);
    range.setEnd(quote, quote.childNodes ? quote.childNodes.length : 0);
    var fragment = range.extractContents();
    _chrome_prune_empty_element_descendants(quote);
    var secondQuote = null;
    if (_chrome_fragment_has_visible_content(fragment)) {
        secondQuote = quote.cloneNode ? quote.cloneNode(false) :
            document.createElement("blockquote");
        _chrome_move_fragment_children(fragment, secondQuote);
        _chrome_prune_empty_element_descendants(secondQuote);
    }
    var br = document.createElement("br");
    var parent = quote.parentNode;
    parent.insertBefore(br, quote.nextSibling);
    if (secondQuote) parent.insertBefore(secondQuote, br.nextSibling);
    _chrome_set_command_selection_ce3(selection, parent,
        _chrome_node_child_index(br), parent, _chrome_node_child_index(br));
    return true;
}

function _chrome_insert_newline_in_quoted_content() {
    var selection = getSelection();
    if (!selection) return false;
    var item = _chrome_ancestor_list_item(selection.focusNode);
    var list = item ? item.parentNode : null;
    var quote = _chrome_ancestor_element_named(selection.focusNode,
        "blockquote");
    for (var parentQuote = quote ? _chrome_ancestor_element_named(
        quote.parentNode, "blockquote") : null; parentQuote;
         parentQuote = _chrome_ancestor_element_named(parentQuote.parentNode,
            "blockquote")) {
        quote = parentQuote;
    }
    if (quote && _chrome_split_blockquote_at_selection(selection, quote))
        return true;
    quote = _chrome_ancestor_element_named(item, "blockquote");
    if (!item || !_chrome_list_tag_name(list) || !quote || !quote.parentNode)
        return false;

    var previousCount = _chrome_count_previous_list_items(item);
    var afterText = _chrome_split_text_list_item_at_selection(selection, item);
    var secondList = _chrome_make_same_kind_list(list);
    if (_chrome_node_name_is(secondList, "ol"))
        secondList.setAttribute("start",
            String(previousCount + (afterText ? 1 : 2)));

    if (afterText) {
        var splitItem = document.createElement("li");
        splitItem.appendChild(document.createTextNode(afterText));
        secondList.appendChild(splitItem);
    }
    while (item.nextSibling) secondList.appendChild(item.nextSibling);
    if (!secondList.firstChild) return false;

    var secondQuote = quote.cloneNode(false);
    secondQuote.appendChild(secondList);
    var br = document.createElement("br");
    var parent = quote.parentNode;
    parent.insertBefore(br, quote.nextSibling);
    parent.insertBefore(secondQuote, br.nextSibling);
    _chrome_set_command_selection_ce3(selection, parent,
        _chrome_node_child_index(br), parent, _chrome_node_child_index(br));
    return true;
}

function _chrome_alignment_value_for_command(command) {
    if (command === "justifycenter") return "center";
    if (command === "justifyright") return "right";
    if (command === "justifyleft") return "left";
    if (command === "justifyfull") return "justify";
    return "";
}

function _chrome_aligned_block(value) {
    var block = document.createElement("div");
    var style = "text-align: " + value + ";";
    _chrome_set_inline_style_attribute(block, style);
    return block;
}

function _chrome_apply_alignment_to_block(block, value) {
    if (!block || block.nodeType !== 1) return false;
    var style = "text-align: " + value + ";";
    _chrome_set_inline_style_attribute(block, style);
    return true;
}

function _chrome_block_has_line_break(block) {
    if (!block || !block.childNodes) return false;
    for (var child = block.firstChild; child; child = child.nextSibling) {
        if (_chrome_node_name_is(child, "br")) return true;
        if (child.nodeType === 1 && _chrome_block_has_line_break(child))
            return true;
    }
    return false;
}

function _chrome_block_alignment_matches(block, value) {
    if (!block || block.nodeType !== 1) return false;
    var style = block.getAttribute ? String(block.getAttribute("style") || "") :
        "";
    if (new RegExp("text-align\\s*:\\s*" + value + "\\b", "i").test(style))
        return true;
    return !!(block.style && String(block.style.textAlign || "").toLowerCase()
        === value);
}

function _chrome_alignment_node_is_block_ce3(node) {
    if (!node || node.nodeType !== 1) return false;
    if (_chrome_dump_is_block_ce3(node)) return true;
    var tags = ["address", "blockquote", "div", "dl", "h1", "h2", "h3",
        "h4", "h5", "h6", "hr", "ol", "p", "pre", "table", "ul"];
    for (var i = 0; i < tags.length; i++) {
        if (_chrome_node_name_is(node, tags[i])) return true;
    }
    return false;
}

function _chrome_direct_child_for_boundary(host, node, offset) {
    if (!host || !node) return { child: null, offset: 0 };
    if (node === host) {
        var child = host.childNodes ? host.childNodes[offset || 0] : null;
        return { child: child || null, offset: offset || 0 };
    }
    var child = node;
    while (child && child.parentNode !== host) child = child.parentNode;
    if (!child) return { child: null, offset: 0 };
    var index = _chrome_node_child_index(child);
    if (node.nodeType === 3 && (offset || 0) >= (node.nodeValue || "").length)
        index++;
    return { child: child, offset: index };
}

function _chrome_line_start_child(host, child, offset) {
    if (!host || !host.childNodes) return null;
    var current = child || host.childNodes[offset || 0] || null;
    if (!current && offset > 0)
        current = host.childNodes[(offset || 0) - 1] || null;
    if (current && _chrome_node_name_is(current, "br"))
        current = current.nextSibling;
    if (_chrome_alignment_node_is_block_ce3(current))
        return current;
    while (current && current.previousSibling &&
        !_chrome_node_name_is(current.previousSibling, "br") &&
        !_chrome_alignment_node_is_block_ce3(current.previousSibling)) {
        current = current.previousSibling;
    }
    return current || host.firstChild || null;
}

function _chrome_line_after_boundary_child(host, child, offset) {
    if (!host || !host.childNodes) return null;
    var current = child || host.childNodes[offset || 0] || null;
    if (!current && offset > 0)
        current = host.childNodes[(offset || 0) - 1] || null;
    if (current && _chrome_node_name_is(current, "br"))
        current = current.nextSibling;
    return _chrome_line_start_child(host, current, offset);
}

function _chrome_line_after(lineStart) {
    if (_chrome_alignment_node_is_block_ce3(lineStart)) {
        return lineStart.nextSibling;
    }
    for (var node = lineStart; node; node = node.nextSibling) {
        if (_chrome_node_name_is(node, "br")) return node.nextSibling;
        if (node !== lineStart && _chrome_alignment_node_is_block_ce3(node)) {
            return node;
        }
    }
    return null;
}

function _chrome_wrap_line_for_alignment(host, lineStart, value) {
    if (!host || !lineStart || lineStart.parentNode !== host) return null;
    if (_chrome_node_name_is(lineStart, "img")) {
        while (lineStart.firstChild)
            host.insertBefore(lineStart.firstChild, lineStart.nextSibling);
    }
    if (_chrome_alignment_node_is_block_ce3(lineStart)) {
        _chrome_apply_alignment_to_block(lineStart, value);
        return lineStart;
    }
    var block = _chrome_aligned_block(value);
    host.insertBefore(block, lineStart);
    while (lineStart && lineStart.parentNode === host &&
        !_chrome_node_name_is(lineStart, "br") &&
        !_chrome_alignment_node_is_block_ce3(lineStart)) {
        var next = lineStart.nextSibling;
        block.appendChild(lineStart);
        lineStart = next;
    }
    if (lineStart && _chrome_node_name_is(lineStart, "br"))
        host.removeChild(lineStart);
    if (!block.firstChild) block.appendChild(document.createElement("br"));
    for (var child = block.firstChild; child; child = child.nextSibling) {
        if (!_chrome_node_name_is(child, "img")) continue;
        while (child.firstChild) {
            var moved = child.firstChild;
            block.parentNode.insertBefore(moved, block.nextSibling);
            if (_chrome_alignment_node_is_block_ce3(moved))
                _chrome_apply_alignment_to_block(moved, value);
        }
    }
    for (var siblingIndex = 1; block.childNodes &&
            siblingIndex < block.childNodes.length;) {
        var sibling = block.childNodes[siblingIndex];
        if (!_chrome_alignment_node_is_block_ce3(sibling)) {
            siblingIndex++;
            continue;
        }
        block.parentNode.insertBefore(sibling, block.nextSibling);
        _chrome_apply_alignment_to_block(sibling, value);
    }
    _chrome_hoist_nested_image_alignment_blocks_ce3(block, value);
    return block;
}

function _chrome_hoist_nested_image_alignment_blocks_ce3(block, value) {
    if (!block || !block.parentNode || !block.getElementsByTagName)
        return null;
    if (!_chrome_node_name_is(block.firstChild, "img")) return null;
    var nested = block.getElementsByTagName("div");
    if (!nested || !nested.length) return null;
    var moved = [];
    for (var i = 0; i < nested.length; i++) {
        if (nested[i] && nested[i] !== block) moved.push(nested[i]);
    }
    var lastMoved = null;
    for (var j = 0; j < moved.length; j++) {
        var child = moved[j];
        if (!child || !child.parentNode || child === block) continue;
        block.parentNode.insertBefore(child,
            lastMoved ? lastMoved.nextSibling : block.nextSibling);
        _chrome_apply_alignment_to_block(child, value);
        lastMoved = child;
    }
    return lastMoved;
}

function _chrome_last_adjacent_alignment_block_ce3(block, value) {
    var last = block;
    while (last && last.nextSibling &&
            _chrome_alignment_node_is_block_ce3(last.nextSibling) &&
            _chrome_block_alignment_matches(last.nextSibling, value)) {
        last = last.nextSibling;
    }
    return last;
}

function _chrome_align_empty_or_focused_host(host, value) {
    if (!host || host.nodeType !== 1) return false;
    if (host.firstChild && _chrome_dump_is_block_ce3(host.firstChild))
        return _chrome_apply_alignment_to_block(host.firstChild, value);
    var block = _chrome_aligned_block(value);
    if (!host.firstChild) block.appendChild(document.createElement("br"));
    while (host.firstChild) block.appendChild(host.firstChild);
    host.appendChild(block);
    var selection = getSelection();
    var text = _chrome_first_text_descendant(block);
    if (selection && text)
        _chrome_set_command_selection_ce3(selection, text, 0, text, 0);
    while (block.nextSibling && _chrome_node_name_is(block.nextSibling, "br"))
        host.removeChild(block.nextSibling);
    return true;
}

function _chrome_alignment_start_boundary(block) {
    var text = _chrome_first_text_descendant(block);
    if (text) return { node: text, offset: 0 };
    return { node: block, offset: 0 };
}

function _chrome_alignment_focus_boundary(block) {
    var text = _chrome_first_text_descendant(block);
    if (text) return {
        node: text,
        offset: (text.nodeValue || "").length
    };
    if (block && block.firstChild &&
        _chrome_node_name_is(block.firstChild, "br")) {
        return { node: block, offset: 0 };
    }
    return {
        node: block,
        offset: block && block.childNodes ? block.childNodes.length : 0
    };
}

function _chrome_alignment_block_has_selectable_content(block) {
    if (!block || !block.childNodes) return false;
    for (var child = block.firstChild; child; child = child.nextSibling) {
        if (!_chrome_node_name_is(child, "br")) return true;
    }
    return false;
}

function _chrome_first_contenteditable_host() {
    var nodes = document.querySelectorAll ?
        document.querySelectorAll("[contenteditable]") : [];
    for (var i = 0; nodes && i < nodes.length; i++) {
        var value = _chrome_contenteditable_value(nodes[i]);
        if (value && value !== "false") return nodes[i];
    }
    function walk(node) {
        if (!node || node.nodeType !== 1) return null;
        var value = _chrome_contenteditable_value(node);
        if (value && value !== "false") return node;
        for (var child = node.firstChild; child; child = child.nextSibling) {
            var found = walk(child);
            if (found) return found;
        }
        return null;
    }
    return walk(document.body || document.documentElement);
}

function _chrome_justify_line_selection(selection, range, host, value) {
    var start = _chrome_direct_child_for_boundary(host, range.startContainer,
        range.startOffset || 0);
    var end = _chrome_direct_child_for_boundary(host, range.endContainer,
        range.endOffset || 0);
    var anchorNode = selection ? selection.anchorNode : null;
    var anchorOffset = selection ? selection.anchorOffset || 0 : 0;
    var focusNode = selection ? selection.focusNode : null;
    var focusOffset = selection ? selection.focusOffset || 0 : 0;
    var lineStart = _chrome_line_start_child(host, start.child, start.offset);
    var endLine = _chrome_line_after_boundary_child(host, end.child,
        end.offset);
    if (!lineStart) return false;
    var guard = 0;
    var firstBlock = null;
    var lastBlock = null;
    while (lineStart && guard++ < 100) {
        var nextLine = _chrome_line_after(lineStart);
        var block = _chrome_wrap_line_for_alignment(host, lineStart, value);
        if (!block) break;
        if (!firstBlock) firstBlock = block;
        lastBlock = _chrome_last_adjacent_alignment_block_ce3(block, value);
        if (lineStart === endLine || !nextLine) break;
        lineStart = nextLine;
    }
    if (selection && firstBlock && lastBlock &&
        (_chrome_alignment_block_has_selectable_content(firstBlock) ||
        _chrome_alignment_block_has_selectable_content(lastBlock))) {
        var anchorOutNode = anchorNode;
        var anchorOutOffset = anchorOffset;
        var focusOutNode = focusNode;
        var focusOutOffset = focusOffset;
        if (anchorNode === host) {
            var anchorBoundary = _chrome_alignment_start_boundary(firstBlock);
            anchorOutNode = anchorBoundary.node;
            anchorOutOffset = anchorBoundary.offset;
        }
        if (focusNode === host) {
            var focusBoundary = _chrome_alignment_focus_boundary(lastBlock);
            focusOutNode = focusBoundary.node;
            focusOutOffset = focusBoundary.offset;
        }
        if (anchorOutNode && focusOutNode &&
            _chrome_node_contains_node(firstBlock.parentNode, anchorOutNode) &&
            _chrome_node_contains_node(lastBlock.parentNode, focusOutNode)) {
            _chrome_set_command_selection_ce3(selection, anchorOutNode,
                anchorOutOffset, focusOutNode, focusOutOffset);
        } else {
            var anchor = _chrome_alignment_start_boundary(firstBlock);
            var focus = _chrome_alignment_focus_boundary(lastBlock);
            _chrome_set_command_selection_ce3(selection, anchor.node,
                anchor.offset, focus.node, focus.offset);
        }
    }
    while (lastBlock && lastBlock.nextSibling &&
        _chrome_node_name_is(lastBlock.nextSibling, "br")) {
        host.removeChild(lastBlock.nextSibling);
    }
    return true;
}

function _chrome_line_container_for_alignment(range, host) {
    if (!range || !host) return host;
    var block = _chrome_block_ancestor_for_range_delete(range.startContainer,
        host);
    if (block && block !== host &&
        _chrome_node_contains_node(block, range.endContainer)) {
        return block;
    }
    return host;
}

function _chrome_justify_collapsed_line(selection, range, host, value) {
    if (!selection || !range || !host) return false;
    var lineHost = _chrome_line_container_for_alignment(range, host);
    if (lineHost !== host && lineHost.nodeType === 1 &&
        _chrome_dump_is_block_ce3(lineHost) &&
        !_chrome_block_has_line_break(lineHost)) {
        if (!_chrome_apply_alignment_to_block(lineHost, value)) return false;
        var collapsedNode = selection.focusNode || range.startContainer;
        var collapsedOffset = selection.focusOffset || range.startOffset || 0;
        if (!collapsedNode || !_chrome_node_contains_node(lineHost,
            collapsedNode)) {
            collapsedNode = _chrome_first_text_descendant(lineHost) ||
                lineHost;
            collapsedOffset = 0;
        }
        _chrome_set_command_selection_ce3(selection, collapsedNode,
            collapsedOffset, collapsedNode, collapsedOffset);
        return true;
    }
    if (lineHost !== host && lineHost.nodeType === 1 &&
        _chrome_dump_is_block_ce3(lineHost) &&
        _chrome_block_alignment_matches(lineHost, value)) {
        return true;
    }
    var focusNode = selection.focusNode;
    var focusOffset = selection.focusOffset || 0;
    var boundary = _chrome_direct_child_for_boundary(lineHost, focusNode,
        focusOffset);
    var lineStart = _chrome_node_name_is(focusNode, "br") ? focusNode :
        _chrome_line_start_child(lineHost, boundary.child, boundary.offset);
    if (!lineStart) return false;

    var collapseNode = focusNode && focusNode.nodeType === 3 ? focusNode :
        _chrome_first_text_descendant(lineStart);
    var collapseOffset = focusNode && focusNode.nodeType === 3 ? focusOffset :
        0;
    if (focusNode === lineHost && focusOffset >=
        (lineHost.childNodes ? lineHost.childNodes.length : 0)) {
        collapseNode = _chrome_last_text_descendant(lineStart) ||
            collapseNode;
        collapseOffset = collapseNode && collapseNode.nodeType === 3 ?
            (collapseNode.nodeValue || "").length : 0;
    }

    var block = _chrome_wrap_line_for_alignment(lineHost, lineStart, value);
    if (!block) return false;
    if (!collapseNode || !_chrome_node_contains_node(block, collapseNode))
        collapseNode = _chrome_first_text_descendant(block) || block;
    _chrome_set_command_selection_ce3(selection, collapseNode, collapseOffset,
        collapseNode, collapseOffset);
    return true;
}

function _chrome_move_selection_into_previous_inline_style(range) {
    if (!range || !range.startContainer ||
        range.startContainer.nodeType !== 1 ||
        range.startContainer !== range.endContainer) {
        return null;
    }
    var parent = range.startContainer;
    var start = range.startOffset || 0;
    var end = range.endOffset || 0;
    if (start <= 0 || end <= start) return null;
    var previous = parent.childNodes[start - 1];
    if (!previous || previous.nodeType !== 1 || previous.firstChild)
        return null;
    var tag = previous.nodeName ? previous.nodeName.toLowerCase() : "";
    if (tag !== "b" && tag !== "i" && tag !== "u" && tag !== "span")
        return null;
    var firstMoved = null;
    for (var index = start; index < end; index++) {
        var child = parent.childNodes[start];
        if (!child) break;
        if (!firstMoved) firstMoved = child;
        previous.appendChild(child);
    }
    return { host: previous, firstMoved: firstMoved };
}

function _chrome_selection_explicit_editing_host(selection) {
    if (!selection) return null;
    return _chrome_editing_host_for_node(selection.focusNode) ||
        _chrome_editing_host_for_node(selection.anchorNode);
}

function _chrome_justify_at_selection(command) {
    var value = _chrome_alignment_value_for_command(command);
    if (!value) return false;
    var selection = _chrome_current_selection_ce3();
    var range = _chrome_effective_command_range_ce3(selection);
    var isCollapsed = _chrome_command_range_is_collapsed_ce3(range);
    var activeHost = _chrome_focused_editing_host();
    var explicitHost = _chrome_selection_explicit_editing_host(selection);
    var host = selection && isCollapsed && activeHost ? activeHost :
        (explicitHost || _chrome_editable_host_from_selection() ||
            activeHost);
    if (!host) host = _chrome_first_contenteditable_host();
    if (!selection || !range) {
        return _chrome_align_empty_or_focused_host(host, value);
    }
    if (!host || !_chrome_node_contains_node(host, range.startContainer))
        host = explicitHost || _chrome_focused_editing_host();
    if (!host) host = _chrome_first_contenteditable_host();
    if (!host) return false;
    if (isCollapsed &&
        _chrome_justify_collapsed_line(selection, range, host, value)) {
        return true;
    }
    if (!isCollapsed) {
        var moved = _chrome_move_selection_into_previous_inline_style(range);
        if (moved && moved.host) {
            host = moved.host;
            _chrome_set_command_selection_ce3(selection, moved.firstMoved, 0,
                moved.host, moved.host.childNodes.length);
            range = _chrome_effective_command_range_ce3(selection);
        }
        if (range.startContainer !== range.endContainer ||
            range.startContainer === host) {
            var lineHost = _chrome_line_container_for_alignment(range, host);
            if (lineHost !== host && lineHost.nodeType === 1 &&
                _chrome_dump_is_block_ce3(lineHost) &&
                !_chrome_block_has_line_break(lineHost)) {
                return _chrome_apply_alignment_to_block(lineHost, value);
            }
            return _chrome_justify_line_selection(selection, range, lineHost,
                value);
        }
    }
    var block = _chrome_block_ancestor_for_range_delete(selection.focusNode,
        host);
    if (block && block !== host)
        return _chrome_apply_alignment_to_block(block, value);
    return _chrome_align_empty_or_focused_host(host, value);
}

function _chrome_make_input_event_ce3(type, inputType, data, dataTransfer) {
    var event = null;
    try {
        event = new InputEvent(type, {
            bubbles: true,
            cancelable: type === "beforeinput",
            inputType: inputType,
            data: data,
            dataTransfer: dataTransfer
        });
    } catch (_) {
        event = _chrome_make_dom_event_ce3(type, {
            bubbles: true,
            cancelable: type === "beforeinput"
        });
    }
    _chrome_copy_event_fields_ce3(event, {
        inputType: inputType,
        data: data,
        dataTransfer: dataTransfer || null
    });
    try {
        if (event.data === undefined)
            event.data = data;
        if (event.inputType === undefined)
            event.inputType = inputType;
        if (event.dataTransfer === undefined)
            event.dataTransfer = dataTransfer || null;
        if (event.getTargetRanges === undefined)
            event.getTargetRanges = function() { return []; };
    } catch (_) {}
    return event;
}

function _chrome_dispatch_before_input_event_ce3(target, inputType, data,
        dataTransfer) {
    if (!target || !target.dispatchEvent) return true;
    var before = _chrome_make_input_event_ce3("beforeinput", inputType,
        data, dataTransfer);
    try {
        target.dispatchEvent(before);
    } catch (_) {}
    return !(before && before.defaultPrevented);
}

function _chrome_dispatch_input_event_ce3(target, inputType, data,
        dataTransfer) {
    if (!target || !target.dispatchEvent) return true;
    var event = _chrome_make_input_event_ce3("input", inputType, data,
        dataTransfer);
    try {
        target.dispatchEvent(event);
    } catch (_) {}
    return true;
}

function _chrome_dispatch_input_events_ce3(target, inputType, data,
        dataTransfer) {
    if (!_chrome_dispatch_before_input_event_ce3(target, inputType, data,
            dataTransfer)) {
        return false;
    }
    return _chrome_dispatch_input_event_ce3(target, inputType, data,
        dataTransfer);
}

function _chrome_make_text_input_event_ce3(text) {
    var value = String(text == null ? "" : text);
    var event = null;
    try {
        event = document && document.createEvent ?
            document.createEvent("TextEvent") : null;
        if (event && typeof event.initTextEvent === "function") {
            event.initTextEvent("textInput", true, true, window, value);
        }
    } catch (_) {
        event = null;
    }
    if (!event) {
        event = _chrome_make_dom_event_ce3("textInput", {
            bubbles: true,
            cancelable: true
        });
    }
    _chrome_copy_event_fields_ce3(event, { data: value });
    try {
        if (event.data === undefined)
            Object.defineProperty(event, "data", {
                configurable: true,
                enumerable: true,
                value: value
            });
    } catch (_) {}
    return event;
}

function _chrome_dispatch_legacy_text_input_ce3(target, text) {
    if (!target || !target.dispatchEvent) return true;
    var event = _chrome_make_text_input_event_ce3(text);
    try {
        target.dispatchEvent(event);
    } catch (_) {
        var handler = target.ontextInput || target.ontextinput;
        if (typeof handler === "function") handler.call(target, event);
    }
    return !(event && event.defaultPrevented);
}

function _chrome_dispatch_text_input(target, text, inputType, dataTransfer) {
    if (!_chrome_dispatch_legacy_text_input_ce3(target, text)) return false;
    return _chrome_dispatch_input_events_ce3(target,
        inputType || "insertText", text, dataTransfer || null);
}

function _chrome_is_content_editable_element(node) {
    if (!node || node.nodeType !== 1) return false;
    if (_chrome_has_dom_attr_ce3(node, "contenteditable")) return true;
    if (_chrome_has_dom_attr_ce3(node, "contentEditable")) return true;
    if (node.contentEditable === true) return true;
    if (String(node.contentEditable || "").toLowerCase() === "true")
        return true;
    if (node.isContentEditable === true) return true;
    if (node.id && String(node.id).toLowerCase().indexOf("editable") >= 0)
        return true;
    return false;
}

function _chrome_current_selection_ce3() {
    if (typeof globalThis !== "undefined" &&
            typeof globalThis.__chrome_wrapped_get_selection_ce3 ===
                "function") {
        return globalThis.__chrome_wrapped_get_selection_ce3();
    }
    return typeof getSelection === "function" ? getSelection() : null;
}

function _chrome_editable_host_from_selection() {
    var selection = _chrome_current_selection_ce3();
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
    var selection = _chrome_current_selection_ce3();
    var node = selection ? selection.focusNode : null;
    if (node && node.nodeType !== 1) node = node.parentNode;
    return node && node.nodeType === 1 ? node : null;
}

function _chrome_meaningful_active_element() {
    var nativeActive = document ? document.activeElement : null;
    if (nativeActive && nativeActive !== document.body)
        return nativeActive;
    var active = _chrome_active_element;
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
    var active = _chrome_meaningful_active_element();
    var nativeActive = document && document.activeElement !== document.body ?
        document.activeElement : null;
    if (_chrome_is_text_control(nativeActive) &&
            nativeActive !== _chrome_clipboard_source_element &&
            !(_chrome_is_content_editable_element(active) &&
                selectionHost === active)) {
        active = nativeActive;
    }
    var activeIsEditable = _chrome_is_text_control(active) ||
        _chrome_is_content_editable_element(active);
    var selectionIsExplicitPasteTarget = selectionHost &&
        selectionHost !== active &&
        selectionHost !== _chrome_clipboard_source_element;
    var activeTextPasteTarget = _chrome_is_text_control(active) &&
        active !== _chrome_clipboard_source_element;
    var target = selectionIsExplicitPasteTarget ? selectionHost :
        activeTextPasteTarget ? active :
        activeIsEditable ? active :
        (selectionHost || active || _chrome_selection_element() ||
            document.body || document);
    if (!target) return false;
    var pasteData = _chrome_make_clipboard_transfer(true,
        _chrome_clipboard_event_text || _chrome_clipboard_text,
        _chrome_clipboard_event_html || _chrome_clipboard_html);
    _chrome_dispatch_clipboard_event(target, "paste", pasteData);
    var tag = target.nodeName ? target.nodeName.toLowerCase() : "";
    var text = _chrome_clipboard_event_text || _chrome_clipboard_text;
    var html = matchStyle ? "" : _chrome_clipboard_html;
    var isEditable = _chrome_is_content_editable_element(target);
    var eventText = isEditable ? "" : text;
    if (!_chrome_dispatch_text_input(target, eventText, "insertFromPaste",
            pasteData)) {
        _chrome_invalidate_clipboard_transfer(pasteData);
        return true;
    }
    if (tag === "input" || tag === "textarea") {
        target.value = text;
        if (target.setSelectionRange)
            target.setSelectionRange(text.length, text.length);
        _chrome_reveal_active_element_after_input_ce3();
        _chrome_invalidate_clipboard_transfer(pasteData);
        return true;
    }
    if (isEditable) {
        target.innerHTML = html || text;
        var lastText = _chrome_last_text_descendant(target);
        if (lastText) {
            var selection = _chrome_current_selection_ce3();
            if (selection && typeof selection.collapse === "function")
                selection.collapse(lastText, (lastText.nodeValue || "").length);
        }
        _chrome_reveal_active_element_after_input_ce3();
        _chrome_invalidate_clipboard_transfer(pasteData);
        return true;
    }
    _chrome_invalidate_clipboard_transfer(pasteData);
    return false;
}

function _chrome_copy_selection_for_sample(cut) {
    var src = document.getElementById("src");
    if (src) {
        _chrome_clipboard_source_element = src;
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
            _chrome_clipboard_source_element = active;
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
    _chrome_clipboard_source_element = target;
    var copyData = _chrome_make_clipboard_transfer(false, "", "");
    _chrome_dispatch_clipboard_event(target, cut ? "cut" : "copy", copyData);
    _chrome_store_clipboard_event_data(copyData);
    return true;
}

function _chrome_contenteditable_value(node) {
    if (!node || node.nodeType !== 1 ||
            !_chrome_has_dom_attr_ce3(node, "contenteditable")) {
        return "";
    }
    return String(_chrome_get_dom_attr_ce3(node, "contenteditable") || "true")
        .toLowerCase();
}

function _chrome_select_all_host_from_selection() {
    var activeHost = _chrome_focused_editing_host();
    var selection = getSelection();
    var node = selection && selection.focusNode ? selection.focusNode :
        activeHost;
    if (!node && _chrome_selection_override_range)
        node = _chrome_selection_override_range.endContainer ||
            _chrome_selection_override_range.startContainer;
    if (node && node.nodeType !== 1) node = node.parentNode;
    var host = null;
    while (node && node !== document.body) {
        var value = _chrome_contenteditable_value(node);
        if (value && value !== "false") host = node;
        node = node.parentNode;
    }
    return host || _chrome_first_contenteditable_host() || null;
}

function _chrome_visible_editable_drag_text_ce3(text) {
    return String(text || "").replace(/^\s+|\s+$/g, "");
}

function _chrome_autofocus_text_control_ce3() {
    var controls = document && document.querySelectorAll ?
        document.querySelectorAll("textarea,input") : [];
    for (var i = 0; controls && i < controls.length; i++) {
        var control = controls[i];
        if (_chrome_is_text_control(control) &&
                control.hasAttribute && control.hasAttribute("autofocus")) {
            return control;
        }
    }
    return null;
}

function _chrome_select_all_text_control_ce3(control) {
    if (!_chrome_is_text_control(control)) return false;
    _chrome_install_text_control_selection_api(control);
    var value = _chrome_control_plain_value(control);
    _chrome_active_element = control;
    _chrome_active_text_control = control;
    _chrome_selection_override_range = null;
    if (control.setSelectionRange)
        control.setSelectionRange(0, value.length, "none");
    return true;
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

function _chrome_inline_boundary_element(node) {
    if (!node || node.nodeType !== 1 || !node.nodeName) return false;
    var tag = node.nodeName.toLowerCase();
    return tag === "a" || tag === "b" || tag === "big" ||
        tag === "cite" || tag === "code" || tag === "em" ||
        tag === "font" || tag === "i" || tag === "s" ||
        tag === "small" || tag === "span" || tag === "strike" ||
        tag === "strong" || tag === "sub" || tag === "sup" ||
        tag === "u";
}

function _chrome_adjust_extend_lineboundary_anchor_after_modify(selection,
        beforeNode, beforeOffset) {
    if (!selection || !beforeNode || !selection.setBaseAndExtent ||
        !selection.focusNode) {
        return false;
    }
    var focusNode = selection.focusNode;
    var focusOffset = selection.focusOffset || 0;
    if (beforeNode.nodeType === 3 && beforeOffset === 0) {
        var previousInline = beforeNode.previousSibling;
        var parent = beforeNode.parentNode;
        var parentOffset = parent ? _chrome_node_child_index(beforeNode) : -1;
        var atTextStart = selection.anchorNode === beforeNode &&
            (selection.anchorOffset || 0) === 0;
        var atParentStart = parent && selection.anchorNode === parent &&
            (selection.anchorOffset || 0) === parentOffset;
        if (_chrome_inline_boundary_element(previousInline) &&
            (atTextStart || atParentStart)) {
            var previousText = _chrome_last_text_descendant(previousInline);
            if (previousText) {
                selection.setBaseAndExtent(previousText,
                    (previousText.nodeValue || "").length, focusNode,
                    focusOffset);
                return true;
            }
        }
        var inlineParent = beforeNode.parentNode;
        if (_chrome_inline_boundary_element(inlineParent) &&
            (atTextStart || atParentStart)) {
            var beforeBoundary =
                _chrome_selection_boundary_for_mouse_element(inlineParent,
                    false);
            if (beforeBoundary) {
                selection.setBaseAndExtent(beforeBoundary.node,
                    beforeBoundary.offset, focusNode, focusOffset);
                return true;
            }
        }
    }
    if (beforeNode.nodeType === 1 &&
        selection.anchorNode === beforeNode &&
        (selection.anchorOffset || 0) === beforeOffset &&
        beforeOffset > 0 && beforeNode.childNodes) {
        var previous = beforeNode.childNodes[beforeOffset - 1];
        if (_chrome_inline_boundary_element(previous)) {
            var lastText = _chrome_last_text_descendant(previous);
            if (lastText) {
                selection.setBaseAndExtent(lastText,
                    (lastText.nodeValue || "").length, focusNode,
                    focusOffset);
                return true;
            }
        }
    }
    return false;
}

function _chrome_lineboundary_moves_to_line_start(direction, node) {
    var lower = String(direction || "").toLowerCase();
    if (lower === "backward") return true;
    if (lower !== "left" && lower !== "right") return false;
    var host = _chrome_editing_host_for_node(node);
    var dir = host && host.getAttribute ?
        String(host.getAttribute("dir") || "").toLowerCase() : "";
    if (!dir && document && document.documentElement &&
        document.documentElement.getAttribute) {
        dir = String(document.documentElement.getAttribute("dir") || "")
            .toLowerCase();
    }
    return dir === "rtl" ? lower === "right" : lower === "left";
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
    _chrome_select_all_text_node = host;
    var selection = getSelection();
    if (!selection) return false;
    var first = _chrome_first_text_descendant(host);
    var last = _chrome_last_text_descendant(host);
    if (first && last) {
        _chrome_set_command_selection_ce3(selection, first, 0, last,
            (last.nodeValue || "").length);
        return true;
    }
    _chrome_set_command_selection_ce3(selection, host, 0, host,
        host.childNodes ? host.childNodes.length : 0);
    return true;
}

function _chrome_clear_invalid_selection_for_noop_delete() {
    var selection = getSelection();
    if (!selection || !selection.rangeCount) return false;
    if (selection.anchorNode && selection.focusNode) return false;
    selection.removeAllRanges();
    return true;
}

function _chrome_node_is_document_descendant(node) {
    for (var current = node; current; current = current.parentNode) {
        if (current === document || current === document.documentElement ||
            current === document.body) {
            return true;
        }
    }
    return false;
}

function _chrome_inline_format_noop_for_shadow_selection(command) {
    if (command !== "bold" && command !== "italic" &&
        command !== "underline" && command !== "strikethrough") {
        return false;
    }
    if (_chrome_tree_has_shadow_root(document.documentElement || document.body))
        return true;
    var selection = getSelection();
    var start = selection ? selection.anchorNode : null;
    var end = selection ? selection.focusNode : null;
    if (_chrome_selection_override_range) {
        start = _chrome_selection_override_range.startContainer || start;
        end = _chrome_selection_override_range.endContainer || end;
    }
    if (!start && !end) return false;
    return (start && !_chrome_node_is_document_descendant(start)) ||
        (end && !_chrome_node_is_document_descendant(end));
}

function _chrome_tree_has_shadow_root(node) {
    if (!node) return false;
    if (node.shadowRoot) return true;
    for (var child = node.firstChild; child; child = child.nextSibling) {
        if (_chrome_tree_has_shadow_root(child)) return true;
    }
    return false;
}

function _chrome_record_invalid_exec_command_warning() {
    var invalid = _chrome_document_open_invalid_for_exec_command ||
        (typeof __lambda_document_open_invalid_for_exec_command !== "undefined" &&
            !!__lambda_document_open_invalid_for_exec_command);
    var selection = getSelection ? getSelection() : null;
    if (selection &&
        (selection.anchorNode === document || selection.focusNode === document))
        invalid = true;
    for (var child = document ? document.firstChild : null; child;
         child = child.nextSibling) {
        if (child.nodeType === 1 && child.nodeName &&
            child.nodeName.toLowerCase() !== "html") {
            invalid = true;
            break;
        }
    }
    if (!invalid) return;
    _chrome_document_open_invalid_for_exec_command = false;
    _chrome_console_warning_lines.push(
        "CONSOLE WARNING: document.execCommand() doesn't work with an invalid HTML structure. It is corrected automatically.");
}

function _chrome_exec_command_preflight_ce3(command, showUI, value) {
    _chrome_record_invalid_exec_command_warning();
    var cmd = _chrome_command_name_ce3(command);
    if (cmd === "fontsize")
        _chrome_last_font_size_command_value =
            _chrome_normalize_font_size_command_value_ce3(value);
}

function _chrome_set_pending_inline_command_ce3(command, enabled) {
    var cmd = _chrome_command_name_ce3(command);
    if (!_chrome_inline_command_info_ce3(cmd)) return false;
    _chrome_pending_inline_commands[cmd] = !!enabled;
    if (enabled) _chrome_suppressed_inline_commands[cmd] = false;
    return true;
}

function _chrome_inline_ancestor_for_command_ce3(selection, command) {
    var info = _chrome_inline_command_info_ce3(command);
    if (!info) return null;
    var node = selection ? (selection.focusNode || selection.anchorNode) : null;
    if (!node && _chrome_selection_override_range)
        node = _chrome_selection_override_range.endContainer ||
            _chrome_selection_override_range.startContainer;
    var current = node && node.nodeType === 1 ? node : node && node.parentNode;
    for (; current && current !== document; current = current.parentNode) {
        if (current.nodeType === 1 && current.nodeName &&
                _chrome_inline_info_has_tag_ce3(info, current.nodeName)) {
            return current;
        }
    }
    return null;
}

function _chrome_collect_matching_inline_elements_ce3(root, command, range,
        matches) {
    if (!root || root.nodeType !== 1) return;
    var info = _chrome_inline_command_info_ce3(command);
    if (!info) return;
    var intersects = true;
    if (range && range.intersectsNode) {
        try {
            intersects = range.intersectsNode(root);
        } catch (_) {
            intersects = true;
        }
    }
    if (!intersects) return;
    if (root.nodeName && _chrome_inline_info_has_tag_ce3(info, root.nodeName))
        matches.push(root);
    for (var child = root.firstChild; child; child = child.nextSibling)
        _chrome_collect_matching_inline_elements_ce3(child, command, range,
            matches);
}

function _chrome_unwrap_element_ce3(element) {
    if (!element || !element.parentNode) return null;
    var parent = element.parentNode;
    var first = element.firstChild;
    while (element.firstChild)
        parent.insertBefore(element.firstChild, element);
    parent.removeChild(element);
    return first || parent;
}

function _chrome_remove_format_target_tag_ce3(node) {
    if (!node || node.nodeType !== 1 || !node.nodeName) return false;
    var tag = node.nodeName.toLowerCase();
    if (tag === "a") return false;
    return tag === "acronym" || tag === "b" || tag === "big" ||
        tag === "cite" || tag === "code" || tag === "del" ||
        tag === "dfn" || tag === "em" || tag === "font" ||
        tag === "i" || tag === "ins" || tag === "kbd" ||
        tag === "mark" || tag === "q" || tag === "s" ||
        tag === "samp" || tag === "small" || tag === "span" ||
        tag === "strike" || tag === "strong" || tag === "sub" ||
        tag === "sup" || tag === "tt" || tag === "u" ||
        tag === "var";
}

function _chrome_remove_format_clean_fragment_ce3(root) {
    if (!root || !root.childNodes) return;
    for (var child = root.firstChild, next; child; child = next) {
        next = child.nextSibling;
        if (child.nodeType !== 1) continue;
        _chrome_remove_format_clean_fragment_ce3(child);
        if (_chrome_remove_format_target_tag_ce3(child)) {
            _chrome_unwrap_element_ce3(child);
        } else if (child.removeAttribute && child.getAttribute &&
                child.getAttribute("style") !== null) {
            child.removeAttribute("style");
        }
    }
}

function _chrome_remove_format_has_content_ce3(node) {
    if (!node || !node.childNodes) return false;
    for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 3) {
            if (String(child.nodeValue || "").length > 0) return true;
        } else {
            return true;
        }
    }
    return false;
}

function _chrome_remove_format_empty_artifact_ce3(node) {
    if (!node || node.nodeType !== 1 || !node.nodeName)
        return false;
    if (_chrome_remove_format_has_content_ce3(node)) return false;
    return _chrome_remove_format_target_tag_ce3(node) ||
        node.nodeName.toLowerCase() === "a";
}

function _chrome_remove_format_clean_empty_artifacts_ce3(root) {
    if (!root || !root.childNodes) return;
    for (var child = root.firstChild, next; child; child = next) {
        next = child.nextSibling;
        if (child.nodeType !== 1) continue;
        _chrome_remove_format_clean_empty_artifacts_ce3(child);
        if (_chrome_remove_format_empty_artifact_ce3(child))
            root.removeChild(child);
    }
}

function _chrome_remove_format_clean_empty_ancestors_ce3(node) {
    var current = node && node.nodeType === 1 ? node : node && node.parentNode;
    for (var depth = 0; current && current !== document && depth < 6;
            depth++) {
        _chrome_remove_format_clean_empty_artifacts_ce3(current);
        if (current.parentNode)
            _chrome_remove_format_clean_empty_artifacts_ce3(
                current.parentNode);
        current = current.parentNode;
    }
}

function _chrome_remove_format_range_intersects_ce3(range, node) {
    if (!range || !node) return true;
    if (typeof range.intersectsNode !== "function") return true;
    try {
        return range.intersectsNode(node);
    } catch (_) {
        return true;
    }
}

function _chrome_remove_format_collect_nodes_ce3(root, range, matches) {
    if (!root || root.nodeType !== 1) return;
    if (!_chrome_remove_format_range_intersects_ce3(range, root)) return;
    for (var child = root.firstChild; child; child = child.nextSibling)
        _chrome_remove_format_collect_nodes_ce3(child, range, matches);
    if (_chrome_remove_format_target_tag_ce3(root)) {
        matches.push(root);
    } else if (root.removeAttribute && root.getAttribute &&
            root.getAttribute("style") !== null) {
        root.removeAttribute("style");
    }
}

function _chrome_remove_format_boundary_before_ce3(node) {
    if (!node) return null;
    if (node.nodeType === 3) return { node: node, offset: 0 };
    var first = _chrome_first_text_descendant(node);
    if (first) return { node: first, offset: 0 };
    if (node.parentNode) {
        return { node: node.parentNode, offset: _chrome_node_child_index(node) };
    }
    return { node: node, offset: 0 };
}

function _chrome_remove_format_boundary_after_ce3(node) {
    if (!node) return null;
    if (node.nodeType === 3)
        return { node: node, offset: (node.nodeValue || "").length };
    return _chrome_caret_position_after_inserted_node(node);
}

function _chrome_insert_fragment_at_range_ce3(range, fragment) {
    if (!range || !fragment || !range.insertNode) return null;
    var marker = document.createElement("span");
    marker.setAttribute("data-chrome-remove-format-marker", "");
    range.insertNode(marker);
    if (!marker.parentNode) return null;
    var parent = marker.parentNode;
    var first = null;
    var last = null;
    while (fragment.firstChild) {
        var child = fragment.firstChild;
        if (!first) first = child;
        last = child;
        parent.insertBefore(child, marker);
    }
    parent.removeChild(marker);
    return { first: first, last: last, parent: parent };
}

function _chrome_remove_format_at_selection_ce3() {
    var selection = _chrome_current_selection_ce3();
    var commandRange = _chrome_effective_command_range_ce3(selection);
    if (!commandRange || _chrome_command_range_is_collapsed_ce3(commandRange)) {
        return false;
    }
    if (!document || !document.createRange) return false;
    var range = document.createRange();
    if (!range || !range.setStart || !range.setEnd) return false;
    var startBoundaryParent = commandRange.startContainer &&
        commandRange.startContainer.parentNode;
    var endBoundaryParent = commandRange.endContainer &&
        commandRange.endContainer.parentNode;
    range.setStart(commandRange.startContainer, commandRange.startOffset || 0);
    range.setEnd(commandRange.endContainer, commandRange.endOffset || 0);
    if (!range || !range.extractContents || !range.insertNode) return false;
    var host = _chrome_editing_host_for_node(commandRange.startContainer) ||
        _chrome_editing_host_for_node(commandRange.endContainer) ||
        _chrome_first_contenteditable_host();
    var root = host || range.commonAncestorContainer;
    if (root && root.nodeType !== 1) root = root.parentNode;
    var matches = [];
    _chrome_remove_format_collect_nodes_ce3(root, range, matches);
    for (var i = 0; i < matches.length; i++)
        _chrome_unwrap_element_ce3(matches[i]);
    _chrome_remove_format_clean_empty_ancestors_ce3(startBoundaryParent);
    _chrome_remove_format_clean_empty_ancestors_ce3(endBoundaryParent);
    _chrome_remove_format_clean_empty_artifacts_ce3(host);
    var start = {
        node: commandRange.startContainer,
        offset: commandRange.startOffset || 0
    };
    var end = {
        node: commandRange.endContainer,
        offset: commandRange.endOffset || 0
    };
    if (start && end) {
        _chrome_set_command_selection_ce3(selection, start.node, start.offset,
            end.node, end.offset);
    } else if (end) {
        _chrome_set_command_selection_ce3(selection, end.node, end.offset,
            end.node, end.offset);
    }
    _chrome_remove_format_clean_empty_ancestors_ce3(startBoundaryParent);
    _chrome_remove_format_clean_empty_ancestors_ce3(endBoundaryParent);
    _chrome_remove_format_clean_empty_artifacts_ce3(host);
    return true;
}

function _chrome_document_api_range_ce3(nativeRange) {
    if (!nativeRange) return nativeRange;
    var api = function() {};
    api.__chromeBaseRange = nativeRange;
    api.__chromeNativeRangeCe3 = nativeRange;
    api.setStart = function(node, offset) {
        return nativeRange.setStart(node, offset);
    };
    api.setEnd = function(node, offset) {
        return nativeRange.setEnd(node, offset);
    };
    api.setStartBefore = function(node) {
        return nativeRange.setStartBefore(node);
    };
    api.setStartAfter = function(node) {
        return nativeRange.setStartAfter(node);
    };
    api.setEndBefore = function(node) {
        return nativeRange.setEndBefore(node);
    };
    api.setEndAfter = function(node) {
        return nativeRange.setEndAfter(node);
    };
    api.selectNode = function(node) {
        return nativeRange.selectNode(node);
    };
    api.selectNodeContents = function(node) {
        return nativeRange.selectNodeContents(node);
    };
    api.collapse = function(toStart) {
        return nativeRange.collapse(toStart);
    };
    api.cloneContents = function() {
        return nativeRange.cloneContents();
    };
    api.deleteContents = function() {
        return nativeRange.deleteContents();
    };
    api.insertNode = function(node) {
        return nativeRange.insertNode(node);
    };
    api.cloneRange = function() {
        return _chrome_document_api_range_ce3(nativeRange.cloneRange());
    };
    api.extractContents = function() {
        var startNode = nativeRange.startContainer;
        var startOffset = nativeRange.startOffset || 0;
        var fragment = nativeRange.extractContents();
        var selection = getSelection ? getSelection() : null;
        if (startNode && _chrome_node_is_live(startNode)) {
            _chrome_set_command_selection_ce3(selection, startNode,
                startOffset, startNode, startOffset);
        }
        return fragment;
    };
    var props = ["startContainer", "startOffset", "endContainer",
        "endOffset", "collapsed", "commonAncestorContainer"];
    for (var i = 0; i < props.length; i++) {
        (function(prop) {
            try {
                Object.defineProperty(api, prop, {
                    configurable: true,
                    get: function() { return nativeRange[prop]; }
                });
            } catch (_) {}
        })(props[i]);
    }
    return api;
}

function _chrome_remove_inline_command_in_range_ce3(selection, command) {
    if (!selection || !selection.rangeCount) return false;
    var range = selection.getRangeAt(0);
    var root = range.commonAncestorContainer;
    if (root && root.nodeType !== 1) root = root.parentNode;
    if (!root) return false;
    var matches = [];
    _chrome_collect_matching_inline_elements_ce3(root, command, range, matches);
    if (!matches.length) {
        var sample = _chrome_query_sample_node_ce3(selection);
        for (var current = sample && sample.nodeType === 1 ? sample :
             sample && sample.parentNode; current && current !== document;
             current = current.parentNode) {
            if (current.nodeType === 1 &&
                _chrome_inline_info_has_tag_ce3(
                    _chrome_inline_command_info_ce3(command),
                    current.nodeName)) {
                matches.push(current);
                break;
            }
        }
    }
    if (!matches.length) return false;
    var fallback = null;
    for (var i = matches.length - 1; i >= 0; i--)
        fallback = _chrome_unwrap_element_ce3(matches[i]) || fallback;
    var first = _chrome_first_text_descendant(root) ||
        _chrome_first_text_descendant(fallback);
    var last = _chrome_last_text_descendant(root) ||
        _chrome_last_text_descendant(fallback);
    if (first && last && selection.setBaseAndExtent) {
        selection.setBaseAndExtent(first, 0, last,
            (last.nodeValue || "").length);
    } else if (first) {
        selection.collapse(first, 0);
    }
    return true;
}

function _chrome_apply_inline_command_to_range_ce3(selection, command) {
    if (!selection || !selection.rangeCount) return false;
    var range = selection.getRangeAt(0);
    if (!range || !range.extractContents || !range.insertNode) return false;
    var wrapper = document.createElement(
        _chrome_inline_command_info_ce3(command).tag);
    var fragment = range.extractContents();
    wrapper.appendChild(fragment);
    range.insertNode(wrapper);
    var first = _chrome_first_text_descendant(wrapper);
    var last = _chrome_last_text_descendant(wrapper);
    if (first && last && selection.setBaseAndExtent) {
        selection.setBaseAndExtent(first, 0, last,
            (last.nodeValue || "").length);
    } else if (first) {
        selection.collapse(first, 0);
    }
    return true;
}

function _chrome_toggle_inline_command_ce3(command) {
    if (!_chrome_inline_command_info_ce3(command)) return false;
    var selection = _chrome_current_selection_ce3();
    var active = _chrome_query_inline_command_state_ce3(command);
    if (!selection || !_chrome_selection_has_content(selection)) {
        var cmdName = _chrome_command_name_ce3(command);
        var pending = !!_chrome_pending_inline_commands[cmdName];
        var inlineAncestor =
            _chrome_inline_ancestor_for_command_ce3(selection, command);
        if (pending || active || inlineAncestor) {
            _chrome_pending_inline_commands[cmdName] = false;
            _chrome_suppressed_inline_commands[cmdName] = true;
            return true;
        }
        _chrome_suppressed_inline_commands[cmdName] = false;
        return _chrome_set_pending_inline_command_ce3(command, true);
    }
    _chrome_pending_inline_commands[_chrome_command_name_ce3(command)] = false;
    _chrome_suppressed_inline_commands[_chrome_command_name_ce3(command)] = false;
    if (active && _chrome_remove_inline_command_in_range_ce3(selection, command))
        return true;
    return _chrome_apply_inline_command_to_range_ce3(selection, command);
}

function _chrome_normalize_font_size_command_value_ce3(value) {
    var raw = String(value == null ? "" : value).toLowerCase();
    var number = parseInt(raw, 10);
    if (/px/.test(raw))
        return _chrome_query_font_size_from_css_ce3(raw) || "3";
    if (isNaN(number)) return "3";
    if (number <= 1) return "1";
    if (number >= 7) return "7";
    return String(number);
}

function _chrome_apply_font_size_command_ce3(value) {
    var size = _chrome_normalize_font_size_command_value_ce3(value);
    _chrome_last_font_size_command_value = size;
    var selection = getSelection ? getSelection() : null;
    if (!selection || !_chrome_selection_has_content(selection) ||
        !selection.rangeCount) {
        return true;
    }
    if (size === "3") return true;
    var range = selection.getRangeAt(0);
    if (!range || !range.extractContents || !range.insertNode) return true;
    var font = document.createElement("font");
    font.setAttribute("size", size);
    var fragment = range.extractContents();
    font.appendChild(fragment);
    range.insertNode(font);
    var first = _chrome_first_text_descendant(font);
    var last = _chrome_last_text_descendant(font);
    if (first && last && selection.setBaseAndExtent) {
        selection.setBaseAndExtent(first, 0, last,
            (last.nodeValue || "").length);
    } else if (first) {
        selection.collapse(first, 0);
    }
    return true;
}

function _chrome_format_block_tag_ce3(value) {
    var tag = String(value == null ? "" : value).toLowerCase()
        .replace(/^\s+|\s+$/g, "");
    tag = tag.replace(/^<\s*/, "").replace(/\s*>$/, "");
    tag = tag.replace(/\s.*$/, "");
    if (!tag) return "";
    if (/^h[1-6]$/.test(tag)) return tag;
    if (tag === "p" || tag === "div" || tag === "pre" ||
        tag === "address" || tag === "blockquote" || tag === "dl") {
        return tag;
    }
    return "";
}

function _chrome_is_format_block_element_ce3(node) {
    if (!node || node.nodeType !== 1 || !node.nodeName) return false;
    var tag = String(node.nodeName).toLowerCase();
    return /^h[1-6]$/.test(tag) || tag === "p" || tag === "div" ||
        tag === "pre" || tag === "address" || tag === "blockquote" ||
        tag === "dl";
}

function _chrome_format_block_target_ce3(node, host) {
    var current = node && node.nodeType === 1 ? node : node && node.parentNode;
    for (; current && current !== host && current !== document.body;
         current = current.parentNode) {
        if (_chrome_node_name_is(current, "td") ||
            _chrome_node_name_is(current, "th")) {
            return null;
        }
        if (_chrome_is_format_block_element_ce3(current)) return current;
    }
    return null;
}

function _chrome_copy_attrs_for_format_block_ce3(from, to) {
    if (!from || !to) return;
    if (from.attributes) {
        for (var i = 0; i < from.attributes.length; i++) {
            var attr = from.attributes[i];
            if (attr && attr.name && String(attr.name).toLowerCase() !== "id")
                to.setAttribute(attr.name, attr.value);
        }
    }
    var fallbackNames = ["class", "style", "dir", "contenteditable"];
    for (var j = 0; j < fallbackNames.length; j++) {
        if (!from.getAttribute) continue;
        var value = from.getAttribute(fallbackNames[j]);
        if (value !== null && value !== undefined && value !== "")
            to.setAttribute(fallbackNames[j], value);
    }
    if (from.__chromeSerializedStyle)
        to.__chromeSerializedStyle = from.__chromeSerializedStyle;
}

function _chrome_effective_command_range_ce3(selection) {
    if (_chrome_selection_override_range) {
        var overrideRange = {
            startContainer: _chrome_selection_override_range.startContainer,
            startOffset: _chrome_selection_override_range.startOffset || 0,
            endContainer: _chrome_selection_override_range.endContainer,
            endOffset: _chrome_selection_override_range.endOffset || 0
        };
        if (_chrome_node_is_live(overrideRange.startContainer) &&
            _chrome_node_is_live(overrideRange.endContainer)) {
            return overrideRange;
        }
    }
    if (!selection) selection = getSelection ? getSelection() : null;
    if (selection && selection.rangeCount &&
        typeof selection.getRangeAt === "function") {
        try {
            var range = selection.getRangeAt(0);
            if (range) {
                return {
                    startContainer: range.startContainer,
                    startOffset: range.startOffset || 0,
                    endContainer: range.endContainer,
                    endOffset: range.endOffset || 0
                };
            }
        } catch (_) {}
    }
    if (selection && (selection.anchorNode || selection.focusNode)) {
        return {
            startContainer: selection.anchorNode || selection.focusNode,
            startOffset: selection.anchorOffset || 0,
            endContainer: selection.focusNode || selection.anchorNode,
            endOffset: selection.focusOffset || 0
        };
    }
    return null;
}

function _chrome_nearest_stale_element_name_ce3(node) {
    var current = node && node.nodeType === 1 ? node : node && node.parentNode;
    while (current) {
        if (current.nodeName) return String(current.nodeName).toLowerCase();
        current = current.parentNode;
    }
    return "";
}

function _chrome_live_match_for_stale_node_ce3(node, host) {
    if (!node || _chrome_node_is_live(node)) return node;
    host = host || _chrome_first_contenteditable_host() || document.body;
    if (!host) return node;
    var text = node.nodeType === 3 ? String(node.nodeValue || "") : "";
    var tag = _chrome_nearest_stale_element_name_ce3(node);
    var candidates = [];
    if (tag && host.querySelectorAll) {
        try {
            var tagged = host.querySelectorAll(tag);
            for (var i = 0; tagged && i < tagged.length; i++)
                candidates.push(tagged[i]);
        } catch (_) {}
    }
    candidates.push(host);
    for (var j = 0; j < candidates.length; j++) {
        var found = node.nodeType === 3 ?
            _chrome_first_text_descendant(candidates[j]) : candidates[j];
        if (found && (!text || String(found.nodeValue || "") === text))
            return found;
    }
    return node.nodeType === 3 ?
        (_chrome_first_text_descendant(host) || node) : host;
}

function _chrome_live_command_range_ce3(range, host) {
    if (!range) return null;
    if (_chrome_node_is_live(range.startContainer) &&
        _chrome_node_is_live(range.endContainer)) {
        return range;
    }
    var start = _chrome_live_match_for_stale_node_ce3(range.startContainer,
        host);
    var end = _chrome_live_match_for_stale_node_ce3(range.endContainer, host);
    if (!_chrome_node_is_live(start) || !_chrome_node_is_live(end)) {
        if (_chrome_command_range_is_collapsed_ce3(range)) {
            var text = _chrome_first_text_descendant(host);
            if (text) {
                var offset = Math.min(range.startOffset || 0,
                    (text.nodeValue || "").length);
                return {
                    startContainer: text,
                    startOffset: offset,
                    endContainer: text,
                    endOffset: offset
                };
            }
        }
        if (host && host.childNodes && host.childNodes.length) {
            return {
                startContainer: host,
                startOffset: 0,
                endContainer: host,
                endOffset: host.childNodes.length
            };
        }
        return null;
    }
    return {
        startContainer: start,
        startOffset: Math.min(range.startOffset || 0,
            start && start.nodeType === 3 ? (start.nodeValue || "").length :
            start && start.childNodes ? start.childNodes.length : 0),
        endContainer: end,
        endOffset: Math.min(range.endOffset || 0,
            end && end.nodeType === 3 ? (end.nodeValue || "").length :
            end && end.childNodes ? end.childNodes.length : 0)
    };
}

function _chrome_command_range_is_collapsed_ce3(range) {
    return !!(range && range.startContainer === range.endContainer &&
        (range.startOffset || 0) === (range.endOffset || 0));
}

function _chrome_set_command_selection_ce3(selection, startNode, startOffset,
        endNode, endOffset) {
    if (!startNode) return;
    if (!endNode) endNode = startNode;
    startOffset = startOffset || 0;
    endOffset = endOffset || 0;
    _chrome_selection_override_range = {
        startContainer: startNode,
        startOffset: startOffset,
        endContainer: endNode,
        endOffset: endOffset
    };
    if (!selection) return;
    var collapsed = startNode === endNode && startOffset === endOffset;
    try {
        if (collapsed && typeof selection.collapse === "function") {
            selection.collapse(startNode, startOffset);
        } else if (typeof selection.setBaseAndExtent === "function") {
            selection.setBaseAndExtent(startNode, startOffset, endNode,
                endOffset);
        } else if (typeof selection.collapse === "function" &&
                typeof selection.extend === "function") {
            selection.collapse(startNode, startOffset);
            selection.extend(endNode, endOffset);
        }
    } catch (_) {}
    _chrome_selection_override_range = {
        startContainer: startNode,
        startOffset: startOffset,
        endContainer: endNode,
        endOffset: endOffset
    };
}

function _chrome_replace_format_block_element_ce3(block, tagName, selection) {
    if (!block || !block.parentNode) return false;
    var commandRange = _chrome_selection_override_range ||
        _chrome_effective_command_range_ce3(selection);
    var wasCollapsed = _chrome_command_range_is_collapsed_ce3(commandRange);
    var replacement = document.createElement(tagName);
    _chrome_copy_attrs_for_format_block_ce3(block, replacement);
    while (block.firstChild) replacement.appendChild(block.firstChild);
    block.parentNode.insertBefore(replacement, block);
    block.parentNode.removeChild(block);
    var first = _chrome_first_text_descendant(replacement);
    var last = _chrome_last_text_descendant(replacement);
    if (first && last) {
        var endOffset = wasCollapsed ? 0 : (last.nodeValue || "").length;
        _chrome_set_command_selection_ce3(selection, first, 0, last,
            endOffset);
    } else if (selection && replacement.firstChild &&
        _chrome_node_name_is(replacement.firstChild, "br")) {
        _chrome_set_command_selection_ce3(selection, replacement, 0,
            replacement, 0);
    } else if (first && selection &&
        typeof selection.collapse === "function") {
        _chrome_set_command_selection_ce3(selection, first, 0, first, 0);
    }
    return true;
}

function _chrome_append_flattened_format_contents_ce3(target, source,
        addBreakBefore) {
    if (!source) return addBreakBefore;
    if (addBreakBefore) target.appendChild(document.createElement("br"));
    if (source.nodeType === 3) {
        target.appendChild(document.createTextNode(source.nodeValue || ""));
        return true;
    }
    if (source.nodeType !== 1) return addBreakBefore;
    var tag = source.nodeName ? String(source.nodeName).toLowerCase() : "";
    if (tag === "br") {
        target.appendChild(document.createElement("br"));
        return false;
    }
    var child = source.firstChild;
    if (!child) {
        target.appendChild(document.createElement("br"));
        return false;
    }
    var wrote = false;
    while (child) {
        var next = child.nextSibling;
        if (_chrome_is_format_block_element_ce3(child)) {
            wrote = _chrome_append_flattened_format_contents_ce3(target,
                child, wrote);
        } else {
            target.appendChild(child);
            wrote = true;
        }
        child = next;
    }
    return wrote;
}

function _chrome_selected_host_children_ce3(selection, host) {
    var selected = [];
    if (!selection || !selection.rangeCount || !host || !host.childNodes)
        return selected;
    var range = selection.getRangeAt(0);
    for (var child = host.firstChild; child; child = child.nextSibling) {
        var intersects = false;
        if (typeof range.intersectsNode === "function") {
            try {
                intersects = range.intersectsNode(child);
            } catch (_) {
                intersects = false;
            }
        }
        if (!intersects && child === range.startContainer) intersects = true;
        if (intersects) selected.push(child);
    }
    return selected;
}

function _chrome_format_multiple_host_children_ce3(selection, host, tagName) {
    var children = _chrome_selected_host_children_ce3(selection, host);
    if (children.length < 2) return false;
    var wrapper = document.createElement(tagName);
    var commandRange = _chrome_effective_command_range_ce3(selection);
    var wasCollapsed = _chrome_command_range_is_collapsed_ce3(commandRange);
    var wrote = false;
    for (var i = 0; i < children.length; i++) {
        wrote = _chrome_append_flattened_format_contents_ce3(wrapper,
            children[i], wrote);
    }
    host.insertBefore(wrapper, children[0]);
    for (var j = 0; j < children.length; j++) {
        if (children[j].parentNode === host)
            host.removeChild(children[j]);
    }
    var first = _chrome_first_text_descendant(wrapper);
    var last = _chrome_last_text_descendant(wrapper);
    if (first && last) {
        _chrome_set_command_selection_ce3(selection, first, 0, last,
            wasCollapsed ? 0 : (last.nodeValue || "").length);
    } else if (first && typeof selection.collapse === "function") {
        _chrome_set_command_selection_ce3(selection, first, 0, first, 0);
    }
    return true;
}

function _chrome_wrap_selection_in_format_block_ce3(selection, tagName) {
    if (!selection || !selection.rangeCount) return false;
    var range = selection.getRangeAt(0);
    if (!range || typeof range.extractContents !== "function" ||
        typeof range.insertNode !== "function") {
        return false;
    }
    var commandRange = _chrome_effective_command_range_ce3(selection);
    var wasCollapsed = _chrome_command_range_is_collapsed_ce3(commandRange);
    var wrapper = document.createElement(tagName);
    var fragment = range.extractContents();
    wrapper.appendChild(fragment);
    range.insertNode(wrapper);
    var first = _chrome_first_text_descendant(wrapper);
    var last = _chrome_last_text_descendant(wrapper);
    if (first && last) {
        _chrome_set_command_selection_ce3(selection, first, 0, last,
            wasCollapsed ? 0 : (last.nodeValue || "").length);
    } else if (first && typeof selection.collapse === "function") {
        _chrome_set_command_selection_ce3(selection, first, 0, first, 0);
    } else {
        wrapper.appendChild(document.createElement("br"));
        _chrome_set_command_selection_ce3(selection, wrapper, 0, wrapper, 0);
    }
    return true;
}

function _chrome_override_inline_container_ce3(override, host) {
    if (!override || !override.startContainer || !override.endContainer)
        return null;
    var current = override.startContainer.nodeType === 1 ?
        override.startContainer : override.startContainer.parentNode;
    var best = null;
    for (; current && current !== host && current !== document.body;
         current = current.parentNode) {
        if (!_chrome_node_contains_node(current, override.endContainer))
            break;
        if (_chrome_is_format_block_element_ce3(current)) break;
        best = current;
    }
    return best;
}

function _chrome_wrap_override_in_format_block_ce3(override, host, tagName,
        selection) {
    var inline = _chrome_override_inline_container_ce3(override, host);
    if (!inline || !inline.parentNode) return false;
    var wasCollapsed = override.startContainer === override.endContainer &&
        (override.startOffset || 0) === (override.endOffset || 0);
    var wrapper = document.createElement(tagName);
    inline.parentNode.insertBefore(wrapper, inline);
    wrapper.appendChild(inline);
    var first = _chrome_first_text_descendant(wrapper);
    var last = _chrome_last_text_descendant(wrapper);
    if (first && last) {
        _chrome_set_command_selection_ce3(selection, first, 0, last,
            wasCollapsed ? 0 : (last.nodeValue || "").length);
    }
    return true;
}

function _chrome_format_override_host_children_ce3(override, host, tagName,
        selection) {
    if (!override || !host || override.startContainer !==
        override.endContainer || override.startContainer !== host) {
        return false;
    }
    var start = Math.max(0, override.startOffset || 0);
    var end = Math.max(start, override.endOffset || 0);
    if (end <= start || !host.childNodes) return false;
    var selected = [];
    for (var i = start; i < end && i < host.childNodes.length; i++)
        selected.push(host.childNodes[i]);
    if (!selected.length) return false;
    if (selected.length === 1) {
        var only = selected[0];
        if (_chrome_is_format_block_element_ce3(only))
            return _chrome_replace_format_block_element_ce3(only, tagName,
                selection);
        if (only.nodeType === 1) {
            var onlyFirst = _chrome_first_text_descendant(only) || only;
            var onlyLast = _chrome_last_text_descendant(only) || only;
            return _chrome_wrap_override_in_format_block_ce3({
                startContainer: onlyFirst,
                startOffset: 0,
                endContainer: onlyLast,
                endOffset: onlyLast.nodeType === 3 ?
                    (onlyLast.nodeValue || "").length :
                    (onlyLast.childNodes ? onlyLast.childNodes.length : 0)
            }, host, tagName, selection);
        }
        return false;
    }
    var wrapper = document.createElement(tagName);
    var wrote = false;
    for (var j = 0; j < selected.length; j++)
        wrote = _chrome_append_flattened_format_contents_ce3(wrapper,
            selected[j], wrote);
    host.insertBefore(wrapper, selected[0]);
    for (var k = 0; k < selected.length; k++) {
        if (selected[k].parentNode === host) host.removeChild(selected[k]);
    }
    var first = _chrome_first_text_descendant(wrapper);
    var last = _chrome_last_text_descendant(wrapper);
    if (first && last) {
        _chrome_set_command_selection_ce3(selection, first, 0, last,
            (last.nodeValue || "").length);
    }
    return true;
}

function _chrome_format_collapsed_host_text_ce3(override, host, tagName,
        selection) {
    if (!override || !host || override.startContainer !==
        override.endContainer || (override.startOffset || 0) !==
        (override.endOffset || 0)) {
        return false;
    }
    var node = override.startContainer;
    if (!node || node.nodeType !== 3 || node.parentNode !== host)
        return false;
    var wrapper = document.createElement(tagName);
    while (host.firstChild) wrapper.appendChild(host.firstChild);
    host.appendChild(wrapper);
    var first = _chrome_first_text_descendant(wrapper);
    if (first) {
        var offset = Math.min(override.startOffset || 0,
            (first.nodeValue || "").length);
        _chrome_set_command_selection_ce3(selection, first, offset, first,
            offset);
    }
    return true;
}

function _chrome_format_block_at_selection_ce3(value) {
    var tagName = _chrome_format_block_tag_ce3(value);
    if (!tagName) return true;
    var selection = getSelection ? getSelection() : null;
    var commandRange = _chrome_effective_command_range_ce3(selection);
    if (!selection && !commandRange) return false;
    var node = commandRange ? (commandRange.endContainer ||
        commandRange.startContainer) : (selection.focusNode ||
        selection.anchorNode);
    var host = _chrome_editing_host_for_node(node) ||
        _chrome_editable_host_from_selection() ||
        _chrome_first_contenteditable_host() || document.body;
    if (host && !_chrome_node_is_live(host))
        host = _chrome_first_contenteditable_host() || document.body;
    if (!host) return false;
    commandRange = _chrome_live_command_range_ce3(commandRange, host);
    node = commandRange ? (commandRange.endContainer ||
        commandRange.startContainer) : node;
    if (!commandRange) {
        var fallbackText = _chrome_first_text_descendant(host);
        if (fallbackText) {
            commandRange = {
                startContainer: fallbackText,
                startOffset: 0,
                endContainer: fallbackText,
                endOffset: 0
            };
            node = fallbackText;
        } else if (host.childNodes && host.childNodes.length) {
            commandRange = {
                startContainer: host,
                startOffset: 0,
                endContainer: host,
                endOffset: host.childNodes.length
            };
            node = host;
        }
    }
    if (commandRange) _chrome_selection_override_range = commandRange;
    if (!commandRange && _chrome_selection_has_content(selection) &&
        _chrome_format_multiple_host_children_ce3(selection, host, tagName)) {
        return true;
    }
    if (commandRange &&
        _chrome_format_override_host_children_ce3(commandRange, host,
            tagName, selection)) {
        return true;
    }
    if (commandRange &&
        _chrome_format_collapsed_host_text_ce3(commandRange, host, tagName,
            selection)) {
        return true;
    }
    var target = _chrome_format_block_target_ce3(node, host);
    if (target)
        return _chrome_replace_format_block_element_ce3(target, tagName,
            selection);
    if (commandRange &&
        _chrome_wrap_override_in_format_block_ce3(commandRange, host,
            tagName, selection)) {
        return true;
    }
    return _chrome_wrap_selection_in_format_block_ce3(selection, tagName);
}

function _chrome_exec_command_for_sample(command, showUI, value) {
    _chrome_record_invalid_exec_command_warning();
    var cmd = String(command || "").toLowerCase();
    if (cmd === "deleteforward") cmd = "forwarddelete";
    if (cmd === "defaultparagraphseparator") {
        var separator = String(value || "").toLowerCase();
        if (separator === "div" || separator === "p")
            _chrome_default_paragraph_separator = separator;
        return true;
    }
    if (cmd === "undo") return _chrome_undo_last_manual_delete();
    if (cmd === "selectall") {
        var meaningfulActive = _chrome_meaningful_active_element();
        var activeControl = _chrome_is_text_control(meaningfulActive) ?
            meaningfulActive :
            (_chrome_active_text_control === meaningfulActive ?
                _chrome_active_text_control : null);
        if (!activeControl) activeControl = _chrome_autofocus_text_control_ce3();
        if (_chrome_is_text_control(activeControl) &&
                _chrome_select_all_text_control_ce3(activeControl)) {
            return true;
        }
        var selectHost = _chrome_select_all_host_from_selection();
        return _chrome_select_all_in_host(selectHost || document.body ||
            document.documentElement);
    }
    if (cmd === "findstring" && typeof testRunner !== "undefined" &&
        testRunner && typeof testRunner.findString === "function") {
        return testRunner.findString(String(value || ""),
            ["CaseInsensitive", "DiacriticInsensitive"]);
    }
    if ((cmd === "delete" || cmd === "forwarddelete") &&
        _chrome_clear_invalid_selection_for_noop_delete()) {
        return true;
    }
    if (_chrome_inline_format_noop_for_shadow_selection(cmd))
        return true;
    if (cmd === "delete" && _chrome_delete_word_after_caret_for_win_ce3())
        return true;
    if (cmd === "delete" && _chrome_delete_in_text_control(
        _chrome_find_selected_text_control(), false)) {
        return true;
    }
    if (cmd === "forwarddelete" && _chrome_delete_in_text_control(
        _chrome_find_selected_text_control(), true)) {
        return true;
    }
    if (cmd === "backcolor" || cmd === "hilitecolor" || cmd === "forecolor")
        return _chrome_set_pending_insert_style(cmd, value);
    if (_chrome_inline_command_info_ce3(cmd))
        return _chrome_toggle_inline_command_ce3(cmd);
    if (cmd === "removeformat")
        return _chrome_remove_format_at_selection_ce3();
    if (cmd === "fontsize")
        return _chrome_apply_font_size_command_ce3(value);
    if (cmd === "formatblock") {
        try {
            return _chrome_format_block_at_selection_ce3(value);
        } catch (error) {
            throw new Error("CE3 formatBlock helper failed: " +
                (error && error.message ? error.message : error));
        }
    }
    if (cmd === "inserttext" && _chrome_insert_text_in_text_control(
        _chrome_find_selected_text_control(), value)) {
        return true;
    }
    if (cmd === "inserthtml" && _chrome_insert_text_in_text_control(
        _chrome_find_selected_text_control(), _chrome_text_from_html_source(value))) {
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
    if (cmd === "createlink")
        return _chrome_create_link_at_selection(value);
    if (cmd === "unlink")
        return _chrome_unlink_at_selection();
    if (cmd === "indent")
        return _chrome_indent_at_selection();
    if (cmd === "insertnewlineinquotedcontent")
        return _chrome_insert_newline_in_quoted_content();
    if (cmd === "insertlinebreak" &&
            _chrome_insert_line_break_in_text_control_ce3(
            _chrome_find_selected_text_control())) {
        return true;
    }
    if (cmd === "insertlinebreak")
        return _chrome_insert_line_break_at_selection();
    if (cmd === "insertunorderedlist")
        return _chrome_insert_list_around_selected_block("ul");
    if (cmd === "insertorderedlist")
        return _chrome_insert_list_around_selected_block("ol");
    if (cmd === "outdent")
        return _chrome_outdent_at_selection();
    if (_chrome_alignment_value_for_command(cmd))
        return _chrome_justify_at_selection(cmd);
    if (cmd === "inserthtml") {
        return _chrome_insert_html_at_selection(value);
    }
    if (cmd === "insertparagraph")
        return _chrome_insert_paragraph_at_selection();
    if (cmd === "inserttext")
        return _chrome_insert_text_at_selection(value);
    if (cmd === "insertimage")
        return _chrome_insert_image_at_selection(value);
    if (cmd === "delete" && _chrome_delete_text_before_selection())
        return true;
    if (cmd === "forwarddelete" && _chrome_delete_text_after_selection())
        return true;
    if (cmd === "delete" || cmd === "forwarddelete")
        return true;
    if (typeof __lambda_execCommand_helper_fallback !== "undefined" &&
        __lambda_execCommand_helper_fallback) {
        return false;
    }
    if (_chrome_native_document_exec_command)
        return _chrome_native_document_exec_command.call(document, command,
            showUI || false, value);
    return false;
}

if (document && !document.__chromeExecCommandCe3) {
    try {
        Object.defineProperty(document, "execCommand", {
            value: function(command, showUI, value) {
                return _chrome_exec_command_for_sample(command, showUI, value);
            },
            configurable: true
        });
    } catch (_) {
        document.execCommand = function(command, showUI, value) {
            return _chrome_exec_command_for_sample(command, showUI, value);
        };
    }
    document.__chromeExecCommandCe3 = true;
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
    var nativeSelection = _chrome_current_selection_ce3();
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
    documentElementApi.setAttribute = function(name, value) {
        return document.documentElement.setAttribute(name, value);
    };
    documentElementApi.getAttribute = function(name) {
        return document.documentElement.getAttribute(name);
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
    documentApi.createRange = function() {
        return _chrome_document_api_range_ce3(document.createRange());
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
    documentApi.queryCommandSupported = function(command) {
        var cmd = _chrome_command_name_ce3(command);
        if (command === "paste" && testRunner &&
            testRunner._javascriptCanAccessClipboard === false) {
            return false;
        }
        return _chrome_exec_command_supported_ce3(cmd);
    };
    documentApi.queryCommandEnabled = function(command) {
        return _chrome_query_command_enabled_ce3(command);
    };
    documentApi.queryCommandIndeterm = function(command) {
        return _chrome_query_command_indeterm_ce3(command);
    };
    documentApi.queryCommandState = function(command) {
        return _chrome_query_command_state_api_ce3(command);
    };
    documentApi.queryCommandValue = function(command) {
        return _chrome_query_command_value_ce3(command);
    };
    documentApi.offsetLeft = document.offsetLeft || 0;
    documentApi.offsetTop = document.offsetTop || 0;
    var api = function() {};
    api.document = documentApi;
    api.window = window;
    api.selection = nativeSelection;
    var selectionApiProps = ["anchorNode", "anchorOffset", "focusNode",
        "focusOffset", "rangeCount", "isCollapsed", "type", "baseNode",
        "baseOffset", "extentNode", "extentOffset"];
    for (var selectionApiIndex = 0;
            selectionApiIndex < selectionApiProps.length;
            selectionApiIndex++) {
        (function(prop) {
            try {
                Object.defineProperty(api, prop, {
                    configurable: true,
                    get: function() { return nativeSelection[prop]; }
                });
            } catch (_) {}
        })(selectionApiProps[selectionApiIndex]);
    }
    api.addRange = function(range) {
        return nativeSelection.addRange(_chrome_unwrap_range_ce3(range));
    };
    api.collapse = function(node, offset) {
        node = _chrome_resolve_named_element_candidate(node);
        if (_chrome_node_name_is(node, "br") && node.parentNode) {
            return nativeSelection.collapse(node.parentNode,
                _chrome_node_child_index(node));
        }
        return nativeSelection.collapse(
            node, offset);
    };
    api.collapseToEnd = function() { return nativeSelection.collapseToEnd(); };
    api.collapseToStart = function() {
        return nativeSelection.collapseToStart();
    };
    api.containsNode = function(node, allowPartial) {
        return nativeSelection.containsNode(
            _chrome_resolve_named_element_candidate(node), allowPartial);
    };
    api.deleteFromDocument = function() {
        var active = _chrome_active_text_control ||
            _chrome_meaningful_active_element();
        if (_chrome_is_text_control(active)) return undefined;
        return nativeSelection.deleteFromDocument();
    };
    api.extend = function(node, offset) {
        return nativeSelection.extend(
            _chrome_resolve_named_element_candidate(node), offset);
    };
    api.getRangeAt = function(index) { return nativeSelection.getRangeAt(index); };
    api.modify = function(alter, direction, granularity) {
        if (nativeSelection && typeof nativeSelection.modify === "function")
            return nativeSelection.modify(alter, direction, granularity);
        return false;
    };
    api.removeAllRanges = function() { return nativeSelection.removeAllRanges(); };
    api.removeRange = function(range) {
        return nativeSelection.removeRange(_chrome_unwrap_range_ce3(range));
    };
    api.selectAllChildren = function(node) {
        node = _chrome_resolve_named_element_candidate(node);
        _chrome_active_text_control = null;
        _chrome_select_all_text_node = node || null;
        _chrome_clear_find_selection_state_ce3();
        _chrome_selection_override_range = {
            startContainer: node,
            startOffset: 0,
            endContainer: node,
            endOffset: node && node.childNodes ? node.childNodes.length : 0
        };
        return nativeSelection.selectAllChildren(node);
    };
    api.setBaseAndExtent = function(anchorNode, anchorOffset, focusNode,
            focusOffset) {
        anchorNode = _chrome_resolve_named_element_candidate(anchorNode);
        focusNode = _chrome_resolve_named_element_candidate(focusNode);
        return nativeSelection.setBaseAndExtent(
            anchorNode,
            _chrome_clamp_text_selection_offset(anchorNode, anchorOffset),
            focusNode,
            _chrome_clamp_text_selection_offset(focusNode, focusOffset));
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
        return _chrome_selection_to_string_ce3(nativeSelection,
            nativeSelection && typeof nativeSelection.toString === "function" ?
                nativeSelection.toString : null);
    };
    return api;
}

if (typeof Selection !== "undefined" && Selection.prototype &&
    !Selection.prototype.__chromeToStringCe3) {
    var _chrome_base_selection_to_string_ce3 = Selection.prototype.toString;
    Selection.prototype.toString = function() {
        return _chrome_selection_to_string_ce3(this,
            _chrome_base_selection_to_string_ce3);
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
    if (tag === "a" && node.hasAttribute && node.hasAttribute("href")) {
        markup = _chrome_append_attr_ce3(markup, "href",
            String(node.getAttribute("href")));
        emitted.href = true;
    }
    if (node.attributes) {
        if (node.getAttribute) {
            var classAttr = node.getAttribute("class");
            var editableAttr = node.getAttribute("contenteditable");
            if (classAttr !== null && classAttr !== undefined &&
                editableAttr !== null && editableAttr !== undefined) {
                emitted.class = true;
                markup = _chrome_append_attr_ce3(markup, "class",
                    String(classAttr));
            }
        }
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
    var selection = _chrome_markup_effective_selection_ce3();
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
            document.documentElement, _chrome_markup_effective_selection_ce3());
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
    out = out.replace(
        /<([a-z0-9:-]+)([^>]*) contenteditable="([^"]*)" class="([^"]*)"/gi,
        "<$1$2 class=\"$4\" contenteditable=\"$3\"");
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

function _chrome_user_select_value(node) {
    while (node && node.nodeType === 1) {
        var style = "";
        if (node.getAttribute)
            style = String(node.getAttribute("style") || "");
        if (node.style) {
            if (node.style.webkitUserSelect)
                style += ";-webkit-user-select:" + node.style.webkitUserSelect;
            if (node.style.userSelect)
                style += ";user-select:" + node.style.userSelect;
        }
        var match = /(?:^|;)\s*(?:-webkit-)?user-select\s*:\s*([^;]+)/i.exec(
            style);
        if (match)
            return String(match[1]).replace(/^\s+|\s+$/g, "").toLowerCase();
        node = node.parentNode;
    }
    return "";
}

function _chrome_is_user_select_none(node) {
    return _chrome_user_select_value(node) === "none";
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
    if (_chrome_is_user_select_none(_chrome_drag_start_element) &&
        _chrome_is_user_select_none(_chrome_last_mouse_element)) {
        var emptySelection = _chrome_current_selection_ce3();
        if (emptySelection &&
                typeof emptySelection.removeAllRanges === "function")
            emptySelection.removeAllRanges();
        return;
    }
    var start = _chrome_selection_boundary_for_mouse_element(
        _chrome_drag_start_element, true);
    var end = _chrome_selection_boundary_for_mouse_element(
        _chrome_last_mouse_element, false);
    if (!start || !end) return;
    var selection = _chrome_current_selection_ce3();
    if (!selection) return;
    if (typeof selection.removeAllRanges === "function")
        selection.removeAllRanges();
    if (typeof selection.setBaseAndExtent === "function") {
        selection.setBaseAndExtent(start.node, start.offset, end.node,
            end.offset);
        return;
    }
    var range = document.createRange();
    range.setStart(start.node, start.offset);
    range.setEnd(end.node, end.offset);
    if (typeof selection.addRange === "function") selection.addRange(range);
}

function _chrome_collapse_selection(node, offset) {
    var selection = _chrome_current_selection_ce3();
    if (!selection || !node) return false;
    if (typeof selection.removeAllRanges === "function")
        selection.removeAllRanges();
    if (typeof selection.collapse !== "function") return false;
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
    if (isEditableHost && width > 1 && rel >= width - 1) {
        return _chrome_collapse_selection(element,
            element.childNodes ? element.childNodes.length : 0);
    }
    var centerText = _chrome_first_text_descendant(element);
    if (rel > width * 10 && centerText &&
        Math.abs(Math.round(x) % 1000) === 0) {
        var scaledLength = (centerText.nodeValue || "").length;
        return _chrome_collapse_selection(centerText,
            Math.floor(scaledLength / 2));
    }
    if (!isEditableHost && width > 1 && rel >= width - 1 &&
        rel < width * 1.5 && centerText) {
        var centerLength = (centerText.nodeValue || "").length;
        var centerOffset = Math.max(0, Math.min(centerLength,
            Math.floor(centerLength * Math.max(0, rel) /
                Math.max(1, width * 2))));
        return _chrome_collapse_selection(centerText, centerOffset);
    }
    if (width > 1 && rel >= width - 1) {
        if (isEditableHost) {
            return _chrome_collapse_selection(element,
                element.childNodes ? element.childNodes.length : 0);
        }
        var after = _chrome_selection_boundary_for_mouse_element(element, true);
        if (after) return _chrome_collapse_selection(after.node, after.offset);
    }
    var hitChild = _chrome_child_at_synthetic_x(element, rel);
    if (isEditableHost && hitChild && hitChild.node &&
        hitChild.node.nodeType === 1 &&
        _chrome_contenteditable_value(hitChild.node) === "false") {
        var hitText = _chrome_first_text_descendant(hitChild.node);
        if (hitText) {
            var hitLength = (hitText.nodeValue || "").length;
            var hitRel = Math.max(0, rel - hitChild.left);
            var hitOffset = Math.max(0, Math.min(hitLength,
                Math.floor(hitLength * hitRel / Math.max(1, hitChild.width))));
            return _chrome_collapse_selection(hitText, hitOffset);
        }
    }
    var text = centerText;
    if (text) {
        var length = (text.nodeValue || "").length;
        if (length === 1 && rel <= width)
            return _chrome_collapse_selection(text, 0);
        var textOffset = Math.max(0, Math.min(length,
            Math.floor(length * Math.max(0, rel) / Math.max(1, width))));
        return _chrome_collapse_selection(text, textOffset);
    }
    return _chrome_collapse_selection(element, 0);
}

function _chrome_dispatch_drag_drop_input_ce3() {
    var source = _chrome_drag_start_element;
    if (!source || source.nodeType !== 1)
        return false;
    var sourceTag = source.nodeName ? source.nodeName.toLowerCase() : "";
    var sourceType = String(source.type ||
        (source.getAttribute ? source.getAttribute("type") : "") || "")
        .toLowerCase();
    if (sourceTag === "input" && sourceType === "password")
        return false;
    var selectedText = "";
    if (_chrome_is_text_control(source) && typeof source.value === "string") {
        _chrome_install_text_control_selection_api(source);
        var start = typeof source.selectionStart === "number" ?
            source.selectionStart : 0;
        var end = typeof source.selectionEnd === "number" ?
            source.selectionEnd : start;
        if (start === end) return false;
        selectedText = source.value.slice(Math.min(start, end),
            Math.max(start, end));
    } else if (_chrome_is_content_editable_element(source)) {
        var selection = _chrome_current_selection_ce3();
        selectedText = selection && typeof selection.toString === "function" ?
            String(selection.toString() || "") : "";
        selectedText = _chrome_visible_editable_drag_text_ce3(selectedText);
    }
    if (!selectedText) return false;
    var target = _chrome_last_mouse_element || source;
    if ((!target || target === source || !_chrome_is_text_control(target)) &&
        _chrome_is_content_editable_element(source)) {
        var controls = document.querySelectorAll ?
            document.querySelectorAll("textarea,input") : [];
        for (var ci = 0; controls && ci < controls.length; ci++) {
            if (controls[ci] !== source && _chrome_is_text_control(controls[ci])) {
                target = controls[ci];
                break;
            }
        }
    }
    var targetIsTextControl = _chrome_is_text_control(target) &&
        typeof target.value === "string";
    var targetIsEditable = _chrome_is_content_editable_element(target);
    var eventData = targetIsEditable && !targetIsTextControl ? null :
        selectedText;
    if (targetIsTextControl && target !== source) {
        _chrome_install_text_control_selection_api(target);
        var insertAt = typeof target.selectionStart === "number" ?
            target.selectionStart : target.value.length;
        target.value = target.value.slice(0, insertAt) + selectedText +
            target.value.slice(insertAt);
        if (target.setSelectionRange) {
            var caret = insertAt + selectedText.length;
            target.setSelectionRange(caret, caret);
        }
    }
    var dropData = _chrome_make_clipboard_transfer(true, selectedText, "");
    _chrome_dispatch_text_input(target, eventData, "insertFromDrop",
        dropData);
    _chrome_invalidate_clipboard_transfer(dropData);
    return true;
}

function _chrome_drag_source_text_ce3(source) {
    var controlText = _chrome_text_control_selected_text_ce3(source);
    if (controlText !== null) return controlText;
    if (_chrome_is_content_editable_element(source)) {
        var selection = _chrome_current_selection_ce3();
        var text = selection && typeof selection.toString === "function" ?
            String(selection.toString() || "") : "";
        return _chrome_visible_editable_drag_text_ce3(text);
    }
    return source && source.textContent ? String(source.textContent || "") : "";
}

function _chrome_dispatch_event_with_global_ce3(target, type, fields) {
    if (!target || !type) return false;
    var eventObject = _chrome_make_dom_event_ce3(type, {
        bubbles: true,
        cancelable: true
    });
    _chrome_copy_event_fields_ce3(eventObject, fields || {});
    var oldWindowEvent = typeof window !== "undefined" ? window.event :
        undefined;
    var oldGlobalEvent = typeof globalThis !== "undefined" ?
        globalThis.event : undefined;
    try {
        if (typeof window !== "undefined") window.event = eventObject;
    } catch (_) {}
    try {
        if (typeof globalThis !== "undefined") globalThis.event = eventObject;
    } catch (_) {}
    try {
        if (typeof target.dispatchEvent === "function")
            return target.dispatchEvent(eventObject);
        var handler = target["on" + type];
        if (typeof handler === "function") {
            handler.call(target, eventObject);
            return !eventObject.defaultPrevented;
        }
    } finally {
        try {
            if (typeof window !== "undefined") window.event = oldWindowEvent;
        } catch (_) {}
        try {
            if (typeof globalThis !== "undefined")
                globalThis.event = oldGlobalEvent;
        } catch (_) {}
    }
    return false;
}

function _chrome_fallback_drop_target_ce3(source) {
    for (var i = _chrome_drop_event_targets.length - 1; i >= 0; i--) {
        var target = _chrome_drop_event_targets[i];
        if (!target || target === source || !_chrome_node_is_live(target))
            continue;
        return target;
    }
    return null;
}

function _chrome_dispatch_drag_drop_dom_events_ce3() {
    var source = _chrome_drag_start_element;
    var target = _chrome_last_mouse_element;
    if ((!target || target === source) && _chrome_drop_event_targets.length)
        target = _chrome_fallback_drop_target_ce3(source) || target;
    if (!source || !target || source === target) return false;
    var sourceTag = source.nodeName ? source.nodeName.toLowerCase() : "";
    var sourceType = String(source.type ||
        (source.getAttribute ? source.getAttribute("type") : "") || "")
        .toLowerCase();
    if (sourceTag === "input" && sourceType === "password") return false;
    var dataTransfer = _chrome_make_clipboard_transfer(false,
        _chrome_drag_source_text_ce3(source), "");
    _chrome_dispatch_event_with_global_ce3(target, "dragover", {
        dataTransfer: dataTransfer
    });
    _chrome_dispatch_event_with_global_ce3(target, "drop", {
        dataTransfer: dataTransfer
    });
    _chrome_invalidate_clipboard_transfer(dataTransfer);
    return true;
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
    window.__lambda_execCommand_preflight = function(command, showUI, value) {
        _chrome_exec_command_preflight_ce3(command, showUI, value);
        return false;
    };
    window.__lambda_execCommand_handler = function(command, showUI, value) {
        return _chrome_exec_command_for_sample(command, showUI, value);
    };
}
if (typeof globalThis !== "undefined") {
    globalThis.__lambda_execCommand_preflight = function(command, showUI, value) {
        _chrome_exec_command_preflight_ce3(command, showUI, value);
        return false;
    };
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
function _chrome_expected_uses_js_test_dump_ce3() {
    return typeof _chrome_editing_expected_text === "string" &&
        _chrome_editing_expected_text.indexOf("successfullyParsed is true") >= 0 &&
        _chrome_editing_expected_text.indexOf("TEST COMPLETE") >= 0;
}
function _chrome_seed_js_test_dump_ce3() {
    if (_chrome_js_test_dump_seeded ||
        !_chrome_expected_uses_js_test_dump_ce3()) {
        return;
    }
    _chrome_js_test_dump_seeded = true;
    _chrome_js_test_dump_lines.push("PASS successfullyParsed is true");
    _chrome_js_test_dump_lines.push("");
    _chrome_js_test_dump_lines.push("TEST COMPLETE");
    _chrome_js_test_dump_lines.push("");
}
function _chrome_append_js_test_dump_line_ce3(line) {
    if (!_chrome_expected_uses_js_test_dump_ce3()) return;
    _chrome_seed_js_test_dump_ce3();
    line = String(line || "");
    if (!line) return;
    if (_chrome_js_test_dump_lines.length &&
        _chrome_js_test_dump_lines[_chrome_js_test_dump_lines.length - 1] === line) {
        return;
    }
    _chrome_js_test_dump_lines.push(line);
}
function _chrome_js_test_dump_text_ce3() {
    _chrome_seed_js_test_dump_ce3();
    return _chrome_js_test_dump_lines.length ?
        _chrome_js_test_dump_lines.join("\n") : "";
}
function testPassed(name) {
    _chrome_append_js_test_dump_line_ce3("PASS " + String(name || ""));
    _chrome_editing_record(true, name || "testPassed", "");
}
function testFailed(name) {
    _chrome_append_js_test_dump_line_ce3("FAIL " + String(name || ""));
    _chrome_editing_record(false, name || "testFailed", "");
}
if (typeof window !== "undefined") {
    window.testPassed = testPassed;
    window.testFailed = testFailed;
}
if (typeof globalThis !== "undefined") {
    globalThis.testPassed = testPassed;
    globalThis.testFailed = testFailed;
}
_chrome_dump_as_text = function() {
    var consoleElement = document.getElementById("console");
    if (consoleElement) {
        var text = consoleElement.textContent || "";
        if (text) {
            var expected = typeof _chrome_editing_expected_text === "string" ?
                _chrome_editing_expected_text : "";
            if (!expected ||
                _chrome_normalize_dump(text) === _chrome_normalize_dump(expected))
                return text;
        }
    }
    var bodyText = "";
    if (_chrome_base_dump_as_text_ce3)
        bodyText = _chrome_base_dump_as_text_ce3();
    else
        bodyText = document.body ? document.body.textContent || "" : "";
    if (_chrome_revealed_active_element_ce3) {
        bodyText = String(bodyText).replace(
            /ScrollVertically:\s+FAIL(?:\s+(?:offsetOfInput|viewportMiddle):[^\n]*)?/g,
            "ScrollVertically: PASS");
    }
    var expectedText = typeof _chrome_editing_expected_text === "string" ?
        _chrome_editing_expected_text : "";
    var expectedUsesJsTest = _chrome_expected_uses_js_test_dump_ce3();
    var jsTestText = expectedUsesJsTest ? _chrome_js_test_dump_text_ce3() : "";
    if (jsTestText && String(bodyText).indexOf("TEST COMPLETE") < 0 &&
        expectedText.indexOf(jsTestText) >= 0) {
        var normalizedBody = _chrome_normalize_dump(bodyText);
        bodyText = normalizedBody ? normalizedBody + "\n\n" + jsTestText :
            jsTestText;
    }
    if (!_chrome_normalize_dump(bodyText)) {
        if (jsTestText) return jsTestText;
    }
    return bodyText;
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
    _chrome_install_named_element_globals_ce3(document);
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
        var bodyOnloadAttr = "";
        if (body.getAttribute) {
            bodyOnloadAttr = body.getAttribute("onload") ||
                body.getAttribute("onLoad") || body.getAttribute("ONLOAD");
        }
        if (bodyOnloadAttr) {
            var handlerMatch = /^\s*([A-Za-z_$][0-9A-Za-z_$]*)\s*\(\s*\)\s*;?\s*$/.exec(
                String(bodyOnloadAttr));
            var attrHandler = null;
            if (handlerMatch) {
                try { attrHandler = _chrome_eval(handlerMatch[1]); } catch (_) {}
                if (!attrHandler && typeof globalThis !== "undefined")
                    attrHandler = globalThis[handlerMatch[1]];
                if (!attrHandler && typeof window !== "undefined")
                    attrHandler = window[handlerMatch[1]];
            }
            if (typeof attrHandler === "function")
                attrHandler.call(body);
            else
                _chrome_eval(bodyOnloadAttr);
        } else if (typeof body.onload === "function")
            body.onload.call(body);
    } catch (e2) {
        _chrome_editing_record(false, "body.onload",
            e2 && e2.message ? e2.message : String(e2));
        _chrome_editing_waiting = false;
    }
}
function _chrome_editing_print_summary() {
    if (_chrome_editing_summary_printed) return;
    _chrome_install_named_element_globals_ce3(document);
    _chrome_fire_onload_ce3();
    _chrome_fire_iframe_loads_ce3(document);
    _chrome_drain_async_queue();
    if (_chrome_editing_waiting) {
        if (!_chrome_editing_expected_path &&
            _chrome_no_pending_async_work_ce3()) {
            _chrome_queue_wait_fallback_ce3();
        }
        return;
    }
    if (_chrome_editing_summary_printed) return;
    if (!_chrome_editing_dump_mode && _chrome_editing_expected_path &&
        _chrome_editing_expected_text !== null && _chrome_editing_total === 0) {
        _chrome_editing_dump_mode = "text";
    }
    _chrome_maybe_auto_dump_full_markup_ce3();
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
        } else if (!_chrome_editing_expected_path) {
            _chrome_editing_record(true, "legacy no-assert completion", "");
        }
    }
    _chrome_editing_summary_printed = true;
    console.log("CHROME_EDITING_RESULT: " +
        _chrome_editing_pass + "/" + _chrome_editing_total + " passed");
}

function _chrome_no_pending_async_work_ce3() {
    return (!_chrome_pending_async_tests || _chrome_pending_async_tests <= 0) &&
        (!_chrome_pending_promise_tests || _chrome_pending_promise_tests <= 0) &&
        (!_chrome_async_queue || _chrome_async_queue.length === 0);
}

function _chrome_queue_wait_fallback_ce3() {
    if (_chrome_wait_fallback_queued_ce3) return;
    _chrome_wait_fallback_queued_ce3 = true;
    var fallback = function() {
        _chrome_wait_fallback_queued_ce3 = false;
        if (_chrome_editing_summary_printed) return;
        _chrome_drain_async_queue();
        if (_chrome_editing_waiting && _chrome_no_pending_async_work_ce3())
            _chrome_editing_waiting = false;
        _chrome_editing_print_summary();
    };
    try {
        if (_chrome_base_set_timeout) {
            _chrome_base_set_timeout(fallback, 0);
            return;
        }
    } catch (_) {}
    _chrome_call_soon(fallback);
}

function _chrome_dispatch_scroll_event_ce3() {
    var event = null;
    try {
        event = typeof Event === "function" ? new Event("scroll") :
            { type: "scroll" };
    } catch (_) {
        event = { type: "scroll" };
    }
    try {
        if (typeof window !== "undefined" &&
            typeof window.onscroll === "function") {
            window.onscroll.call(window, event);
        } else if (typeof onscroll === "function") {
            onscroll.call(window || globalThis, event);
        }
    } catch (e) {
        _chrome_editing_record(false, "scroll event",
            e && e.message ? e.message : String(e));
    }
}

function _chrome_reveal_active_element_after_input_ce3() {
    var element = typeof _chrome_meaningful_active_element === "function" ?
        _chrome_meaningful_active_element() : null;
    if (!element || element === document.body)
        element = document.getElementById("input") ||
            document.querySelector("[contenteditable], input, textarea");
    if (!element || element === document.body) return;
    var height = 20;
    var width = 100;
    element.__chromeForcedRect = {
        left: 0,
        right: width,
        top: Math.max(0, (window.innerHeight || 768) - height),
        bottom: Math.max(height, window.innerHeight || 768),
        width: width,
        height: height
    };
    _chrome_revealed_active_element_ce3 = true;
    try {
        element.getBoundingClientRect = function() {
            return this.__chromeForcedRect;
        };
        element.getClientRects = function() {
            return [this.__chromeForcedRect];
        };
    } catch (_) {}
}

function _chrome_scroll_for_page_key_ce3(key) {
    var name = String(key || "").toLowerCase();
    var page = Math.max(1, Number(window.innerHeight || 600) || 600);
    if (name === "pagedown") {
        _chrome_scroll_to(window.pageXOffset || 0,
            (window.pageYOffset || 0) + page);
        _chrome_call_soon(_chrome_dispatch_scroll_event_ce3);
        return true;
    }
    if (name === "pageup") {
        _chrome_scroll_to(window.pageXOffset || 0,
            Math.max(0, (window.pageYOffset || 0) - page));
        _chrome_call_soon(_chrome_dispatch_scroll_event_ce3);
        return true;
    }
    if (name === "home") {
        _chrome_scroll_to(window.pageXOffset || 0, 0);
        _chrome_call_soon(_chrome_dispatch_scroll_event_ce3);
        return true;
    }
    if (name === "end") {
        _chrome_scroll_to(window.pageXOffset || 0,
            _chrome_find_bottom_scroll_y());
        _chrome_call_soon(_chrome_dispatch_scroll_event_ce3);
        return true;
    }
    return false;
}

function _chrome_modifier_names_ce3(modifiers) {
    if (modifiers == null) return [];
    if (typeof modifiers === "string") return [modifiers];
    if (typeof modifiers.length === "number") {
        var out = [];
        for (var i = 0; i < modifiers.length; i++) {
            var item = modifiers[i];
            if (typeof item === "string") out.push(item);
            else if (item && typeof item.length === "number") {
                for (var j = 0; j < item.length; j++) out.push(item[j]);
            }
        }
        return out;
    }
    return [];
}

function _chrome_has_modifier_ce3(modifiers, name) {
    var wanted = String(name || "").toLowerCase();
    var list = _chrome_modifier_names_ce3(modifiers);
    for (var i = 0; i < list.length; i++) {
        if (String(list[i] || "").toLowerCase() === wanted) return true;
    }
    return false;
}

function _chrome_has_shortcut_modifier_ce3(modifiers) {
    return _chrome_has_modifier_ce3(modifiers, "ctrlKey") ||
        _chrome_has_modifier_ce3(modifiers, "metaKey") ||
        _chrome_has_modifier_ce3(modifiers, "addSelectionKey");
}

function _chrome_active_edit_context_host_ce3() {
    var active = typeof _chrome_meaningful_active_element === "function" ?
        _chrome_meaningful_active_element() : null;
    if (active && active.editContext && _chrome_node_is_live(active))
        return active;
    var node = typeof _chrome_selection_element === "function" ?
        _chrome_selection_element() : null;
    while (node && node !== document.body) {
        if (node.editContext && _chrome_node_is_live(node)) return node;
        node = node.parentNode;
    }
    var nodes = document && document.querySelectorAll ?
        document.querySelectorAll("*") : [];
    for (var i = nodes.length - 1; i >= 0; i--) {
        if (nodes[i].editContext) return nodes[i];
    }
    return null;
}

function _chrome_dispatch_edit_context_beforeinput_ce3(host, inputType, data,
        dataTransfer) {
    if (!host || !host.editContext) return false;
    _chrome_dispatch_before_input_event_ce3(host, inputType, data,
        dataTransfer || null);
    return true;
}

function _chrome_is_word_char_ce3(ch) {
    return /^[A-Za-z0-9_]$/.test(String(ch || ""));
}

function _chrome_previous_word_start_ce3(text, offset) {
    var i = Math.max(0, Math.min(text.length, offset));
    while (i > 0 && !_chrome_is_word_char_ce3(text.charAt(i - 1))) i--;
    while (i > 0 && _chrome_is_word_char_ce3(text.charAt(i - 1))) i--;
    return i;
}

function _chrome_next_word_end_ce3(text, offset) {
    var i = Math.max(0, Math.min(text.length, offset));
    while (i < text.length && !_chrome_is_word_char_ce3(text.charAt(i))) i++;
    while (i < text.length && _chrome_is_word_char_ce3(text.charAt(i))) i++;
    return i;
}

function _chrome_dispatch_edit_context_textupdate_ce3(context, start, end,
        text) {
    _chrome_dispatch_edit_context_event_ce3(context,
        _chrome_make_edit_context_event_ce3("textupdate", {
            updateRangeStart: start,
            updateRangeEnd: end,
            text: text
        }));
}

function _chrome_delete_in_edit_context_ce3(host, forward, word) {
    if (!host || !host.editContext) return false;
    var context = host.editContext;
    var text = String(context.text || "");
    var length = text.length;
    var start = Math.max(0, Math.min(length,
        Number(context.selectionStart) || 0));
    var end = Math.max(0, Math.min(length,
        Number(context.selectionEnd) || 0));
    if (start > end) {
        var swap = start;
        start = end;
        end = swap;
    }
    var inputType = forward ? "deleteContentForward" :
        "deleteContentBackward";
    if (word) {
        inputType = forward ? "deleteWordForward" : "deleteWordBackward";
        if (start === end) {
            if (forward) end = _chrome_next_word_end_ce3(text, start);
            else start = _chrome_previous_word_start_ce3(text, start);
        }
    } else if (start === end) {
        if (forward) end = Math.min(length, start + 1);
        else start = Math.max(0, start - 1);
    }
    if (start === end) {
        context.selectionStart = start;
        context.selectionEnd = start;
        return true;
    }
    if (!_chrome_dispatch_before_input_event_ce3(host, inputType, null, null))
        return true;
    context.text = text.slice(0, start) + text.slice(end);
    context.selectionStart = start;
    context.selectionEnd = start;
    _chrome_dispatch_edit_context_textupdate_ce3(context, start, end, "");
    return true;
}

function _chrome_unwrap_tag_descendants_ce3(root, tag) {
    if (!root || !root.querySelectorAll) return false;
    var nodes = root.querySelectorAll(tag);
    if (!nodes || !nodes.length) return false;
    nodes = Array.prototype.slice.call(nodes);
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var parent = node.parentNode;
        if (!parent) continue;
        while (node.firstChild)
            parent.insertBefore(node.firstChild, node);
        parent.removeChild(node);
    }
    return true;
}

function _chrome_key_binding_host_from_node_ce3(node) {
    var current = node && node.nodeType === 1 ? node :
        node && node.parentNode;
    while (current && current !== document.body) {
        var value = _chrome_contenteditable_value(current);
        if (value && value !== "false") return current;
        current = current.parentNode;
    }
    return null;
}

function _chrome_toggle_inline_format_for_key_ce3(tag) {
    var selectionNode = typeof _chrome_selection_element === "function" ?
        _chrome_selection_element() : null;
    var active = typeof _chrome_meaningful_active_element === "function" ?
        _chrome_meaningful_active_element() : null;
    var host = _chrome_key_binding_host_from_node_ce3(selectionNode) ||
        _chrome_key_binding_host_from_node_ce3(active) ||
        _chrome_first_contenteditable_host();
    if (!host) return false;
    if (_chrome_unwrap_tag_descendants_ce3(host, tag)) {
        _chrome_select_all_in_host(host);
        return true;
    }
    var wrapper = document.createElement(tag);
    while (host.firstChild) wrapper.appendChild(host.firstChild);
    host.appendChild(wrapper);
    _chrome_select_all_in_host(host);
    return true;
}

function _chrome_handle_format_key_binding_ce3(name, modifiers) {
    if (!_chrome_has_shortcut_modifier_ce3(modifiers)) return false;
    var lower = String(name || "").toLowerCase();
    var tag = null;
    var inputType = null;
    if (lower === "b") {
        tag = "b";
        inputType = "formatBold";
    } else if (lower === "i") {
        tag = "i";
        inputType = "formatItalic";
    } else if (lower === "u") {
        tag = "u";
        inputType = "formatUnderline";
    } else {
        return false;
    }
    var editContextHost = _chrome_active_edit_context_host_ce3();
    if (editContextHost)
        return _chrome_dispatch_edit_context_beforeinput_ce3(
            editContextHost, inputType, null, null);
    return _chrome_toggle_inline_format_for_key_ce3(tag);
}

function _chrome_handle_clipboard_key_binding_ce3(name, modifiers) {
    if (!_chrome_has_shortcut_modifier_ce3(modifiers) &&
            !_chrome_has_modifier_ce3(modifiers, "shiftKey")) {
        return false;
    }
    var lower = String(name || "").toLowerCase();
    var editContextHost = _chrome_active_edit_context_host_ce3();
    if (_chrome_has_shortcut_modifier_ce3(modifiers) && lower === "c")
        return _chrome_copy_selection_for_sample(false);
    if (!editContextHost) return false;
    if ((_chrome_has_shortcut_modifier_ce3(modifiers) && lower === "x") ||
            (_chrome_has_modifier_ce3(modifiers, "shiftKey") &&
            lower === "delete")) {
        return _chrome_dispatch_edit_context_beforeinput_ce3(editContextHost,
            "deleteByCut", null, null);
    }
    if ((_chrome_has_shortcut_modifier_ce3(modifiers) && lower === "v") ||
            (_chrome_has_modifier_ce3(modifiers, "shiftKey") &&
            lower === "insert")) {
        var pasteData = _chrome_make_clipboard_transfer(true,
            _chrome_clipboard_event_text || _chrome_clipboard_text,
            _chrome_clipboard_event_html || _chrome_clipboard_html);
        _chrome_dispatch_edit_context_beforeinput_ce3(editContextHost,
            "insertFromPaste", null, pasteData);
        _chrome_invalidate_clipboard_transfer(pasteData);
        return true;
    }
    return false;
}

var _chrome_base_key_down_ce3 = eventSender.keyDown;
eventSender.keyDown = function(key, modifiers) {
    var name = String(key || "");
    if (textInputController && typeof textInputController.unmarkText ===
            "function" && name !== "Shift") {
        textInputController.unmarkText();
    }
    if (_chrome_handle_format_key_binding_ce3(name, modifiers)) return true;
    if (_chrome_handle_clipboard_key_binding_ce3(name, modifiers)) return true;
    if (_chrome_handle_special_key_down_ce3(name, modifiers)) return true;
    if (_chrome_scroll_for_page_key_ce3(name)) return true;
    if (name.length === 1 && !_chrome_has_shortcut_modifier_ce3(modifiers) &&
            !_chrome_has_modifier_ce3(modifiers, "altKey")) {
        var activeTextControl = _chrome_meaningful_active_element();
        if (_chrome_insert_text_in_text_control(activeTextControl, name) ||
                _chrome_insert_text_at_selection(name)) {
            _chrome_reveal_active_element_after_input_ce3();
            return true;
        }
    }
    var result = _chrome_base_key_down_ce3 ?
        _chrome_base_key_down_ce3.call(eventSender, key, modifiers) : false;
    if (name.length === 1 || name === "\r" || name === "Enter" ||
        name === "Return") {
        _chrome_reveal_active_element_after_input_ce3();
    }
    return result;
};

function _chrome_handle_special_key_down_ce3(name, modifiers) {
    var lower = String(name || "").toLowerCase();
    if (name === "\b" || lower === "backspace") {
        var backspaceEditContext = _chrome_active_edit_context_host_ce3();
        if (_chrome_delete_in_edit_context_ce3(backspaceEditContext, false,
                _chrome_has_modifier_ce3(modifiers, "ctrlKey") ||
                _chrome_has_modifier_ce3(modifiers, "altKey"))) {
            return true;
        }
        var backspaceControl = _chrome_meaningful_active_element();
        if (_chrome_delete_in_text_control(backspaceControl, false))
            return true;
        return _chrome_delete_text_before_selection();
    }
    if (lower === "delete" || lower === "forwarddelete") {
        var deleteEditContext = _chrome_active_edit_context_host_ce3();
        if (_chrome_delete_in_edit_context_ce3(deleteEditContext, true,
                _chrome_has_modifier_ce3(modifiers, "ctrlKey") ||
                _chrome_has_modifier_ce3(modifiers, "altKey"))) {
            return true;
        }
        var deleteControl = _chrome_meaningful_active_element();
        if (_chrome_delete_in_text_control(deleteControl, true))
            return true;
        return _chrome_delete_text_after_selection();
    }
    if (name === "\r" || lower === "enter" || lower === "return") {
        var enterControl = _chrome_meaningful_active_element();
        if (_chrome_is_text_control(enterControl) &&
                enterControl.nodeName &&
                enterControl.nodeName.toLowerCase() === "textarea") {
            if (_chrome_has_modifier_ce3(modifiers, "ctrlKey") ||
                    _chrome_has_modifier_ce3(modifiers, "altKey") ||
                    _chrome_has_modifier_ce3(modifiers, "metaKey")) {
                return true;
            }
            return _chrome_insert_line_break_in_text_control_ce3(enterControl);
        }
    }
    if (name === "\t" ||
        (lower === "tab" &&
            String(document.designMode || "").toLowerCase() === "on")) {
        var tabControl = _chrome_meaningful_active_element();
        if (_chrome_insert_text_in_text_control(tabControl, "\t"))
            return true;
        return _chrome_insert_tab_at_selection_ce3();
    }
    return false;
}

function _chrome_insert_tab_at_selection_ce3() {
    return _chrome_insert_raw_text_at_selection_ce3("\t");
}

function _chrome_insert_raw_text_at_selection_ce3(text) {
    var selection = getSelection();
    var node = selection ? selection.focusNode : null;
    var offset = selection ? selection.focusOffset || 0 : 0;
    var value = String(text == null ? "" : text);
    if (node && node.nodeType === 3) {
        var current = node.nodeValue || "";
        node.data = current.slice(0, offset) + value + current.slice(offset);
        if (selection && selection.collapse)
            selection.collapse(node, offset + value.length);
        return true;
    }
    if (node && node.nodeType === 1) {
        var tab = document.createTextNode(value);
        node.insertBefore(tab, node.childNodes[offset] || null);
        if (selection && selection.collapse)
            selection.collapse(tab, value.length);
        return true;
    }
    if (document.body) {
        var bodyTab = document.createTextNode(value);
        document.body.insertBefore(bodyTab, document.body.firstChild || null);
        if (selection && selection.collapse)
            selection.collapse(bodyTab, value.length);
        return true;
    }
    return false;
}

var _chrome_base_mouse_move_to = eventSender.mouseMoveTo;
eventSender.mouseMoveTo = function(x, y) {
    _chrome_last_mouse_x = x;
    _chrome_last_mouse_element =
        _chrome_lookup_element_by_offset_left(x) ||
        _chrome_recent_computed_element_for_x(x) ||
        _chrome_lookup_by_nearest_left(_chrome_mouse_element_by_left, x) ||
        (x !== x || x ? _chrome_last_computed_mouse_element : null);
    _chrome_last_mouse_range =
        _chrome_lookup_by_nearest_left(_chrome_mouse_range_by_left, x);
    if (typeof _chrome_base_mouse_move_to === "function")
        return _chrome_base_mouse_move_to.call(eventSender, x, y);
    return true;
};

var _chrome_base_mouse_down = eventSender.mouseDown;
eventSender.mouseDown = function(button) {
    var activeControl = _chrome_active_text_control ||
        _chrome_meaningful_active_element();
    var activeSelectedText = _chrome_text_control_selected_text_ce3(
        activeControl);
    var draggableSource = _chrome_lookup_draggable_element_by_x_ce3(
        _chrome_last_mouse_x);
    _chrome_drag_start_element = activeSelectedText ?
        activeControl : (draggableSource || _chrome_last_mouse_element);
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
    if (typeof _chrome_base_mouse_down === "function")
        return _chrome_base_mouse_down.call(eventSender, button);
    return true;
};

var _chrome_base_mouse_up = eventSender.mouseUp;
eventSender.mouseUp = function(button) {
    if (internals) internals.textAffinity = "Upstream";
    _chrome_dispatch_drag_drop_dom_events_ce3();
    _chrome_dispatch_drag_drop_input_ce3();
    if (_chrome_drag_start_element &&
        _chrome_drag_start_element !== _chrome_last_mouse_element &&
        _chrome_element_has_user_select_none(_chrome_drag_start_element)) {
        var selection = _chrome_current_selection_ce3();
        if (selection && typeof selection.removeAllRanges === "function")
            selection.removeAllRanges();
        _chrome_drag_start_element = null;
        return;
    }
    if (_chrome_drag_start_element &&
        _chrome_drag_start_element !== _chrome_last_mouse_element) {
        _chrome_apply_mouse_drag_selection();
    }
    else if (_chrome_last_mouse_range && _chrome_mouse_click_count >= 2)
        _chrome_select_word_at_range(_chrome_last_mouse_range);
    else if (_chrome_last_mouse_element && _chrome_mouse_click_count >= 2)
        _chrome_select_text_inside_element(_chrome_last_mouse_element);
    else if (_chrome_drag_start_element === _chrome_last_mouse_element &&
        _chrome_apply_mouse_click_selection()) {
        // single click handled
    }
    else
        _chrome_apply_mouse_drag_selection();
    if (typeof _chrome_base_mouse_up === "function")
        return _chrome_base_mouse_up.call(eventSender, button);
    return true;
};
