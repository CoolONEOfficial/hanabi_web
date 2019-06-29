import Vue from 'vue'
import VueCodeMirror from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/clike/clike.js';
// import 'codemirror/addon/hint/anyword-hint.js';
// import 'codemirror/addon/hint/css-hint.js';
// import 'codemirror/addon/hint/html-hint.js';
// import 'codemirror/addon/hint/javascript-hint.js';
// import 'codemirror/addon/hint/show-hint.css';
// import 'codemirror/addon/hint/show-hint.js';
// import 'codemirror/addon/hint/sql-hint.js';
// import 'codemirror/addon/hint/xml-hint.js';
import 'codemirror/theme/base16-dark.css';

Vue.use(VueCodeMirror,{});
