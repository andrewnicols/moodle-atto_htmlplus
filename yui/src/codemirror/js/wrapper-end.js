// Actually define CodeMirror in our namespace.
Y.namespace('M.atto_htmlplus').CodeMirror = window.CodeMirror;

// Restore the original CodeMirror in case one existed.
window.CodeMirror = _codeMirror;

// Restore define
window.define = _define;

