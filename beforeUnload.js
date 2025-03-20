/// execute_script.js
alert("working");
window.addEventListener("beforeunload", (event) => {
	event.preventDefault();
	event.returnValue = '';
  }
});
