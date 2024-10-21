
function validateForm() {
    const firstName = document.getElementById("Firstname").value;
    const lastName = document.getElementById("Lastname").value;
    const email = document.getElementById("email").value;

    if (firstName === "" || lastName === "" || email === "") {
        alert("Please fill in all fields.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}





   





// let  = document.forms["myForm"]["fname"].value;
    // if (form == "") 
    //   alert("Name must be filled out");
    //   return false