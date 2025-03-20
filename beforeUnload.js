/// execute_script.js
window.addEventListener("beforeunload", (event) => {
	event.preventDefault();
	event.returnValue = '';
  }
});