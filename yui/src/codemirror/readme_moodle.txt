Description of importing the js-beautify library into Moodle.

* git clone https://github.com/marijnh/CodeMirror.git
* check out the required release
* copy:
* lib/codemirror.js             => lib/yui/src/codemirror/js/CodeMirror/lib/codemirror.js
* lib/codemirror.css            => lib/yui/src/codemirror/assets/moodle-core-codemirror-core.css
* mode/css/css.js               => lib/yui/src/codemirror/js/CodeMirror/mode/css/css.js
* mode/xml/xml.js               => lib/yui/src/codemirror/js/CodeMirror/mode/xml/xml.js
* mode/javascript/javascript.js => lib/yui/src/codemirror/js/CodeMirror/mode/javascript/javascript.js
* mode/htmlmixed/htmlmixed.js   => lib/yui/src/codemirror/js/CodeMirror/mode/htmlmixed/htmlmixed.js
* copy lib/beautify*.js into lib/yui/src/beautify/js
* copy LICENSE into lib/yui/src/beautify
* update lib/thirdpartylibs.xml
* rebuild the module
