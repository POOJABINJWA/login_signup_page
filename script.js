      event.preventDefault();
  
      document.getElementById("signupButton").addEventListener("click", function() {
        // Hide the signup button
        this.style.display = "none";
    
        // Display the login page
        document.getElementById("loginPage").style.display = "block";
    });
    
    script.js

