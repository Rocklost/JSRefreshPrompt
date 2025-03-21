/// execute_script.js
window.addEventListener('beforeunload', function(event) {
   if (performance.navigation.type === performance.navigation.TYPE_NAVIGATE) {
      return;
   }
   if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      event.preventDefault();
      event.returnValue = '';
   }
});
