// document.addEventListener('DOMContentLoaded', function () {
//     const loginForm = document.getElementById("loginForm");
  
//     loginForm.addEventListener("submit", function (event) {
//       event.preventDefault();
  
//       const email = document.getElementById("email").value;
//       const password = document.getElementById("password").value;
  
//       console.log("Logging in with email:", email);
  
//       document.getElementById("email").value = "";
//       document.getElementById("password").value = "";
//       location.reload();
//     });
//   });



// login.js

document.addEventListener("DOMContentLoaded", function() {
  var signupLink = document.getElementById("signupLink");

  if (signupLink) {
      signupLink.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent the default behavior of the link
          window.location.href = "index.html"; // Redirect to signup page
      });
  }
});
