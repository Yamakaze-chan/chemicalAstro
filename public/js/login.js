window.togglePassword = function () {
  const input = document.getElementById("password");
  if (input) {
    input.type = input.type === "password" ? "text" : "password";
  }
};
