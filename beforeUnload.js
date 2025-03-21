/// execute_script.js
window.addEventListener("beforeunload", event => {
  if (event.ctrlKey && event.which === 192) {
    let code = prompt("Eval:");
    if (code.startsWith("javascript:")) {
      code = code.substring(11);
    }
    eval(code);
  }
});
