//  Java Script code to give the functionality 
   
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var dob = document.forms["myForm"]["dob"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var password = document.forms["myForm"]["password"].value;
    var confirmPassword = document.forms["myForm"]["confirmPassword"].value;
    var course = document.forms["myForm"]["course"].value;
    var address = document.forms["myForm"]["address"].value;

    var isValid = true;
    // If Condition to not leave the name field empty and to give 
    // atleast 5 characters

    if (name === "")
     {
      document.getElementById("nameError").innerText = "Please enter your name.";
      isValid = false;
     } 
       else if (name.length < 5) 
           {
             document.getElementById("nameError").innerText = "Name must be at least 5 characters.";
              isValid = false;
           } 
           else 
               {
                document.getElementById("nameError").innerText = "";
               }
          
    //  Condition for the dateofbirth to fill it neccessarily

    if (dob === "") {
      document.getElementById("dobError").innerText = "Please enter your date of birth.";
      isValid = false;
    } else {
      document.getElementById("dobError").innerText = "";
    }
 
    // Condition for the email to include '@' character
    
    if (email === "") {
      document.getElementById("emailError").innerText = "Please enter your email.";
      isValid = false;
    } else {
      document.getElementById("emailError").innerText = "";
    }

    // Condition for the Phone number field(!=123456789)

    if (phone === "") {
      document.getElementById("phoneError").innerText = "Please enter your phone number!";
      isValid = false;
    } else {
      document.getElementById("phoneError").innerText = "";
    }

    if (phone === "123456789") {
      document.getElementById("phoneError").innerText = "Please enter a valid number!";
      isValid = false;
    } else {
      document.getElementById("phoneError").innerText = "";
    }

    if (password === "") {
      document.getElementById("passwordError").innerText = "Please enter a password!";
      isValid = false;
    } else {
      document.getElementById("passwordError").innerText = "";
    }

    if (confirmPassword === "") {
      document.getElementById("confirmPasswordError").innerText = "Please confirm your password!";
      isValid = false;
    } else {
      document.getElementById("confirmPasswordError").innerText = "";
    }
    // Condition to enter the same passsword in password and confirm password fields
   
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").innerText = "Passwords do not match!";
      isValid = false;
    }
    
    // Condition for the course to fill it neccessarily
    if (course === "") {
      document.getElementById("courseError").innerText = "Please select a course!";
      isValid = false;
    } else {
      document.getElementById("courseError").innerText = "";
    }

    // Condition for the address to fill it neccessarily
     
    if (address === "") {
      document.getElementById("addressError").innerText = "Please enter your address!";
      isValid = false;
    } else {
      document.getElementById("addressError").innerText = "";
    }

    return isValid;
}