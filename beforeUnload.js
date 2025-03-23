/// execute_script.js
window.addEventListener('beforeunload', function (event) {
  if (performance.navigation.type === 1) {
    event.preventDefault();
    event.returnValue = '';
  }
});
