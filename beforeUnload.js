/// execute_script.js
//window.addEventListener("load", function {
   if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      event.preventDefault();
      event.returnValue = '';
   }
//});
