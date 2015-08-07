// Create custom exports variable to simulate commonjs
var exports = {};

// Override require
function require() {
    "use strict";
    return exports;
}

// Backup and disable define
var _define = define;
window.define = undefined;