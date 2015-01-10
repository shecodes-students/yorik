document.body.innerHTML = '<pre><canvas id="tty" class="screen" width="640" height="384"></canvas></pre>';

var Jor1k = require("jor1k/js/master/system");
var MackeTerm = require("jor1k/js/plugins/terminal-macke");

jor1kgui = new Jor1k({term: new MackeTerm("tty")});


