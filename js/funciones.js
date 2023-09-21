
function acceso() {
  let clave = document.formclave.clave.value;
  if (clave == "0x1f502") {
    localStorage.setItem("clave", "OK");
    window.location.href = "planeacion.html";
  }else{
    document.getElementById("alert-clave").style.display = 'block';
  }
}



// Get the input field
var input = document.getElementById("myInput");


// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    acceso();
  }
});
