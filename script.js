(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(document).ready(function()
{
  console.log('Hi! If you\'re checking out the console then you\'re probably a smart person. Hopefully there\'s nothing embarrassing in here!');
  $("#content").load("home.html");
  $("#load_home").on("click", function() {
      $("#content").load("home.html");
  });
  $("#load_dod").on("click", function() {
      $("#content").load("dod.html");
  });
  $("#load_formal").on("click", function() {
      $("#content").load("formal.html");
  });
});
