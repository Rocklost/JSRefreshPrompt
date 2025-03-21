/// execute_script.js
function navigationType(){

    var result;
    var p;

    if (window.performance.navigation) {
        result=window.performance.navigation;
        if (result==255){result=4}
    }

    if (window.performance.getEntriesByType("navigation")){
       p=window.performance.getEntriesByType("navigation")[0].type;

       if (p=='navigate'){result=0}
       if (p=='reload'){result=1}
       if (p=='back_forward'){result=2}
       if (p=='prerender'){result=3}
    }
    return result;
}

function navigationType();
if (result=0 || result=2 || result=3) {
   return;
} else {
   if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      event.preventDefault();
      event.returnValue = '';
   }
}
