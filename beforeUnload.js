/// execute_script.js
if (performance.navigation.type === performance.navigation.TYPE_NAVIGATE) {
   return;
} else {
   if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      event.preventDefault();
      event.returnValue = '';
   }
}
