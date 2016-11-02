var expandConnections = function() {
  var sharedConnections = document.getElementsByClassName('shared-conn-expando');
  var length = sharedConnections.length;

  for (var i = 0; i < length; i++) {
    var el = sharedConnections[i];
    if (el.closest('div').classList.contains('collapsed')) {
      el.click();
    }
  }
};

document.addEventListener('DOMNodeInserted', function(e) {
  expandConnections();
}, false);
