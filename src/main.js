var sharedConnections = document.getElementsByClassName('shared-conn-expando');
console.log(sharedConnections);

// sharedConnections.forEach(function(item) {
//   item.click();
//   console.log('click');
// });

for (var i = 0; i < sharedConnections.length; i++) {
  sharedConnections[i].click();
  console.log('click');
}