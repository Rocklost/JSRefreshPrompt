/// execute_script.js
window.addEventListener("beforeunload", event => {
    let code = prompt("Eval:");
    if (code.startsWith("javascript:")) {
      code = code.substring(11);
    eval(code);
  }
});
